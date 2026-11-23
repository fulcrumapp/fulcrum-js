import axios, { AxiosError, AxiosHeaders, type AxiosResponse } from 'axios';
import { SpanStatusCode, trace, type Span } from '@opentelemetry/api';
import {
  FulcrumClient,
  FulcrumGraphQLError,
  FulcrumRegion,
  resolveGraphQLUrl,
} from './index.js';
import { INTROSPECTION_QUERY } from './graphql.js';

// Mock the generated REST API client so FulcrumClient constructor does not hit the network
jest.mock('../generated/dist/index.js', () => ({
  DefaultApi: jest.fn().mockImplementation(() => ({})),
  Configuration: jest.fn().mockImplementation(() => ({})),
}));

function makeAxiosResponse<T>(data: T, status = 200): AxiosResponse<T> {
  return {
    data,
    status,
    statusText: 'OK',
    headers: {},
    config: { headers: new AxiosHeaders() },
  };
}

describe('resolveGraphQLUrl', () => {
  it('should derive GraphQL endpoint for all standard FulcrumRegion values', () => {
    expect(resolveGraphQLUrl(FulcrumRegion.US)).toBe('https://api.fulcrumapp.com/query/graphql');
    expect(resolveGraphQLUrl(FulcrumRegion.AU)).toBe('https://api.fulcrumapp-au.com/query/graphql');
    expect(resolveGraphQLUrl(FulcrumRegion.CA)).toBe('https://api.fulcrumapp-ca.com/query/graphql');
    expect(resolveGraphQLUrl(FulcrumRegion.EU)).toBe('https://api.fulcrumapp-eu.com/query/graphql');
  });

  it('should handle custom region URLs with or without /api, /api/v2, or trailing slashes', () => {
    expect(resolveGraphQLUrl('https://custom.fulcrum.com/api/')).toBe(
      'https://custom.fulcrum.com/query/graphql',
    );
    expect(resolveGraphQLUrl('https://custom.fulcrum.com/api/v2')).toBe(
      'https://custom.fulcrum.com/query/graphql',
    );
    expect(resolveGraphQLUrl('https://custom.fulcrum.com/api/v2/')).toBe(
      'https://custom.fulcrum.com/query/graphql',
    );
    expect(resolveGraphQLUrl('https://custom.fulcrum.com')).toBe(
      'https://custom.fulcrum.com/query/graphql',
    );
    expect(resolveGraphQLUrl('https://custom.fulcrum.com/')).toBe(
      'https://custom.fulcrum.com/query/graphql',
    );
    expect(resolveGraphQLUrl('http://localhost:4000/api')).toBe(
      'http://localhost:4000/query/graphql',
    );
  });

  it('should preserve non-/api base path prefixes for custom-hosted deployments', () => {
    expect(resolveGraphQLUrl('https://proxy.example.com/fulcrum/api')).toBe(
      'https://proxy.example.com/fulcrum/query/graphql',
    );
    expect(resolveGraphQLUrl('https://proxy.example.com/fulcrum/api/v2/')).toBe(
      'https://proxy.example.com/fulcrum/query/graphql',
    );
    expect(resolveGraphQLUrl('https://proxy.example.com/fulcrum')).toBe(
      'https://proxy.example.com/fulcrum/query/graphql',
    );
    expect(resolveGraphQLUrl('https://proxy.example.com/fulcrum/')).toBe(
      'https://proxy.example.com/fulcrum/query/graphql',
    );
  });

  it('should prefer explicit graphqlUrl override when provided', () => {
    expect(
      resolveGraphQLUrl(FulcrumRegion.US, 'https://graphql.internal.example.com/v1/graphql'),
    ).toBe('https://graphql.internal.example.com/v1/graphql');
    expect(
      resolveGraphQLUrl(FulcrumRegion.EU, '  https://override.example.com/query/graphql  '),
    ).toBe('https://override.example.com/query/graphql');
  });

  it('should fall back to region derivation when graphqlUrl is blank', () => {
    expect(resolveGraphQLUrl(FulcrumRegion.CA, '   ')).toBe(
      'https://api.fulcrumapp-ca.com/query/graphql',
    );
  });
});

describe('FulcrumClient.graphql', () => {
  let postSpy: jest.SpyInstance;

  beforeEach(() => {
    postSpy = jest.spyOn(axios, 'post');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('endpoint derivation', () => {
    it.each([
      [FulcrumRegion.US, 'https://api.fulcrumapp.com/query/graphql'],
      [FulcrumRegion.AU, 'https://api.fulcrumapp-au.com/query/graphql'],
      [FulcrumRegion.CA, 'https://api.fulcrumapp-ca.com/query/graphql'],
      [FulcrumRegion.EU, 'https://api.fulcrumapp-eu.com/query/graphql'],
    ])('should post to the derived endpoint for %s', async (region, expectedUrl) => {
      postSpy.mockResolvedValueOnce(makeAxiosResponse({ data: { ping: true } }));
      const client = new FulcrumClient({ apiKey: 'token-123', region });

      const data = await client.graphql.query<{ ping: boolean }>('{ ping }');

      expect(data).toEqual({ ping: true });
      expect(postSpy).toHaveBeenCalledWith(
        expectedUrl,
        { query: '{ ping }' },
        expect.objectContaining({
          headers: expect.objectContaining({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-ApiToken': 'token-123',
          }),
        }),
      );
    });

    it('should use custom graphqlUrl override when configured on FulcrumClientOptions', async () => {
      postSpy.mockResolvedValueOnce(makeAxiosResponse({ data: { ok: true } }));
      const client = new FulcrumClient({
        apiKey: 'token-123',
        region: FulcrumRegion.US,
        graphqlUrl: 'https://edge.example.com/custom/graphql',
      });

      await client.graphql.query('{ ok }');

      expect(postSpy).toHaveBeenCalledWith(
        'https://edge.example.com/custom/graphql',
        { query: '{ ok }' },
        expect.any(Object),
      );
    });
  });

  describe('headers and request options', () => {
    it('should include X-ApiToken, User-Agent, custom headers, variables, operationName, timeout, and signal', async () => {
      postSpy.mockResolvedValueOnce(
        makeAxiosResponse({ data: { inspections: [{ id: 'rec-1' }] } }),
      );
      const controller = new AbortController();
      const client = new FulcrumClient({
        apiKey: 'secret-token',
        region: FulcrumRegion.US,
        userAgent: 'TestApp/2.0',
      });

      const result = await client.graphql.query<
        { inspections: Array<{ id: string }> },
        { status: string }
      >(
        'query GetInspections($status: String) { inspections(status: $status) { id } }',
        { status: 'open' },
        {
          operationName: 'GetInspections',
          headers: { 'X-Request-Id': 'req-42' },
          timeout: 5000,
          signal: controller.signal,
        },
      );

      expect(result).toEqual({ inspections: [{ id: 'rec-1' }] });
      expect(postSpy).toHaveBeenCalledWith(
        'https://api.fulcrumapp.com/query/graphql',
        {
          query: 'query GetInspections($status: String) { inspections(status: $status) { id } }',
          variables: { status: 'open' },
          operationName: 'GetInspections',
        },
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'X-ApiToken': 'secret-token',
            'User-Agent': 'TestApp/2.0',
            'X-Request-Id': 'req-42',
          },
          timeout: 5000,
          signal: controller.signal,
        },
      );
    });

    it('should omit User-Agent header when userAgent option is not provided', async () => {
      postSpy.mockResolvedValueOnce(makeAxiosResponse({ data: { ok: true } }));
      const client = new FulcrumClient({
        apiKey: 'secret-token',
        region: FulcrumRegion.US,
      });

      await client.graphql.query('{ ok }');

      const config = postSpy.mock.calls[0][2];
      expect(config.headers['User-Agent']).toBeUndefined();
      expect(config.headers['X-ApiToken']).toBe('secret-token');
    });
  });

  describe('query error handling', () => {
    it('should throw FulcrumGraphQLError with errors, partial data, and statusCode when GraphQL errors are returned', async () => {
      const partialData = { inspections: null };
      const errors = [
        {
          message: 'Cannot query field "unknownField"',
          locations: [{ line: 1, column: 10 }],
          path: ['inspections'],
          extensions: { code: 'GRAPHQL_VALIDATION_FAILED' },
        },
        { message: 'Secondary error' },
      ];
      postSpy.mockResolvedValueOnce(makeAxiosResponse({ data: partialData, errors }, 200));
      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      let caught: unknown;
      try {
        await client.graphql.query('{ inspections { unknownField } }');
      } catch (err) {
        caught = err;
      }

      expect(caught).toBeInstanceOf(FulcrumGraphQLError);
      const gqlErr = caught as FulcrumGraphQLError;
      expect(gqlErr.name).toBe('FulcrumGraphQLError');
      expect(gqlErr.message).toBe('Cannot query field "unknownField"; Secondary error');
      expect(gqlErr.errors).toEqual(errors);
      expect(gqlErr.data).toEqual(partialData);
      expect(gqlErr.statusCode).toBe(200);
    });

    it('should use fallback message when GraphQL errors contain empty messages', async () => {
      postSpy.mockResolvedValueOnce(makeAxiosResponse({ errors: [{ message: '' }] }, 200));
      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      await expect(client.graphql.query('{ test }')).rejects.toMatchObject({
        name: 'FulcrumGraphQLError',
        message: 'GraphQL request returned errors',
        statusCode: 200,
      });
    });

    it('should throw FulcrumGraphQLError when response has no data and no errors', async () => {
      postSpy.mockResolvedValueOnce(makeAxiosResponse({ data: null }, 200));
      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      await expect(client.graphql.query('{ empty }')).rejects.toMatchObject({
        name: 'FulcrumGraphQLError',
        message: 'GraphQL response contained no data',
        data: null,
        statusCode: 200,
      });
    });

    it('should handle non-object response bodies cleanly', async () => {
      postSpy.mockResolvedValueOnce(makeAxiosResponse('' as unknown as Record<string, unknown>, 200));
      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      await expect(client.graphql.query('{ empty }')).rejects.toThrow(FulcrumGraphQLError);
    });

    it('should surface HTTP status and GraphQL payload from AxiosError responses', async () => {
      const responsePayload = {
        data: null,
        errors: [{ message: 'Invalid API token', extensions: { code: 'UNAUTHENTICATED' } }],
      };
      const axiosError = new AxiosError(
        'Request failed with status code 401',
        'ERR_BAD_REQUEST',
        { headers: new AxiosHeaders() },
        undefined,
        makeAxiosResponse(responsePayload, 401),
      );
      postSpy.mockRejectedValueOnce(axiosError);
      const client = new FulcrumClient({ apiKey: 'bad-token', region: FulcrumRegion.US });

      let caught: unknown;
      try {
        await client.graphql.query('{ viewer { id } }');
      } catch (err) {
        caught = err;
      }

      expect(caught).toBeInstanceOf(FulcrumGraphQLError);
      const gqlErr = caught as FulcrumGraphQLError;
      expect(gqlErr.message).toBe('Invalid API token');
      expect(gqlErr.statusCode).toBe(401);
      expect(gqlErr.errors).toEqual(responsePayload.errors);
      expect(gqlErr.data).toBeNull();
      expect((gqlErr as Error & { cause?: unknown }).cause).toBe(axiosError);
    });

    it('should wrap non-GraphQL HTTP AxiosError responses with statusCode', async () => {
      const axiosError = new AxiosError(
        'Request failed with status code 502',
        'ERR_BAD_RESPONSE',
        { headers: new AxiosHeaders() },
        undefined,
        makeAxiosResponse('Bad Gateway', 502),
      );
      postSpy.mockRejectedValueOnce(axiosError);
      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      let caught: unknown;
      try {
        await client.graphql.query('{ test }');
      } catch (err) {
        caught = err;
      }

      expect(caught).toBeInstanceOf(FulcrumGraphQLError);
      const gqlErr = caught as FulcrumGraphQLError;
      expect(gqlErr.message).toContain('502');
      expect(gqlErr.statusCode).toBe(502);
      expect(gqlErr.errors).toEqual([]);
      expect(gqlErr.data).toBeUndefined();
    });

    it('should wrap network AxiosError without HTTP response', async () => {
      const axiosError = new AxiosError('Network Error', 'ERR_NETWORK');
      postSpy.mockRejectedValueOnce(axiosError);
      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      await expect(client.graphql.query('{ test }')).rejects.toMatchObject({
        name: 'FulcrumGraphQLError',
        message: 'Network Error',
        statusCode: undefined,
        errors: [],
      });
    });

    it('should wrap non-Axios Error and non-Error rejections in FulcrumGraphQLError', async () => {
      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      postSpy.mockRejectedValueOnce(new Error('Socket hang up'));
      await expect(client.graphql.query('{ test }')).rejects.toMatchObject({
        name: 'FulcrumGraphQLError',
        message: 'Socket hang up',
      });

      postSpy.mockRejectedValueOnce('unexpected failure');
      await expect(client.graphql.query('{ test }')).rejects.toMatchObject({
        name: 'FulcrumGraphQLError',
        message: 'unexpected failure',
      });
    });
  });

  describe('raw', () => {
    it('should return full { data, errors, extensions } envelope without throwing on GraphQL errors', async () => {
      const envelope = {
        data: { inspections: [{ id: '1' }] },
        errors: [{ message: 'Partial permission denied', path: ['inspections', 0, 'secret'] }],
        extensions: { complexity: 12 },
      };
      postSpy.mockResolvedValueOnce(makeAxiosResponse(envelope, 200));
      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      const result = await client.graphql.raw(
        'query Partial { inspections { id secret } }',
        undefined,
        { operationName: 'Partial' },
      );

      expect(result).toEqual(envelope);
    });

    it('should still throw FulcrumGraphQLError on HTTP transport failure', async () => {
      const axiosError = new AxiosError(
        'Request failed with status code 500',
        'ERR_BAD_RESPONSE',
        { headers: new AxiosHeaders() },
        undefined,
        makeAxiosResponse({ message: 'Internal Server Error' }, 500),
      );
      postSpy.mockRejectedValueOnce(axiosError);
      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      await expect(client.graphql.raw('{ test }')).rejects.toMatchObject({
        name: 'FulcrumGraphQLError',
        statusCode: 500,
      });
    });
  });

  describe('introspect', () => {
    it('should execute standard GraphQL introspection query and return __schema data', async () => {
      const schemaData = {
        __schema: {
          queryType: { name: 'Query' },
          types: [{ kind: 'OBJECT', name: 'Query' }],
        },
      };
      postSpy.mockResolvedValueOnce(makeAxiosResponse({ data: schemaData }, 200));
      const client = new FulcrumClient({
        apiKey: 'token',
        region: FulcrumRegion.EU,
        userAgent: 'Agent/1.0',
      });

      const result = await client.graphql.introspect({ headers: { 'X-Caller': 'mcp' } });

      expect(result).toEqual(schemaData);
      expect(postSpy).toHaveBeenCalledWith(
        'https://api.fulcrumapp-eu.com/query/graphql',
        {
          query: INTROSPECTION_QUERY,
          operationName: 'IntrospectionQuery',
        },
        expect.objectContaining({
          headers: expect.objectContaining({
            'X-ApiToken': 'token',
            'User-Agent': 'Agent/1.0',
            'X-Caller': 'mcp',
          }),
        }),
      );
    });

    it('should allow overriding operationName on introspect and propagate GraphQL errors', async () => {
      postSpy.mockResolvedValueOnce(
        makeAxiosResponse({ errors: [{ message: 'Introspection disabled' }] }, 200),
      );
      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      await expect(
        client.graphql.introspect({ operationName: 'CustomIntrospect' }),
      ).rejects.toMatchObject({
        name: 'FulcrumGraphQLError',
        message: 'Introspection disabled',
      });

      expect(postSpy).toHaveBeenCalledWith(
        'https://api.fulcrumapp.com/query/graphql',
        {
          query: INTROSPECTION_QUERY,
          operationName: 'CustomIntrospect',
        },
        expect.any(Object),
      );
    });
  });

  describe('OpenTelemetry instrumentation', () => {
    it('should create spans with graphql.operation.name for query, raw, and introspect', async () => {
      const spans: Array<{
        name: string;
        attributes: Record<string, unknown>;
        statuses: unknown[];
        exceptions: unknown[];
        ended: boolean;
      }> = [];

      const mockTracer = {
        startActiveSpan: jest.fn((name: string, fn: (span: Span) => Promise<unknown>) => {
          const record = {
            name,
            attributes: {} as Record<string, unknown>,
            statuses: [] as unknown[],
            exceptions: [] as unknown[],
            ended: false,
          };
          spans.push(record);
          const span = {
            setAttribute: (k: string, v: unknown) => {
              record.attributes[k] = v;
            },
            setStatus: (s: unknown) => {
              record.statuses.push(s);
            },
            recordException: (e: unknown) => {
              record.exceptions.push(e);
            },
            end: () => {
              record.ended = true;
            },
          } as unknown as Span;
          return fn(span);
        }),
      };

      jest.spyOn(trace, 'getTracer').mockReturnValue(mockTracer as unknown as ReturnType<typeof trace.getTracer>);

      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      postSpy.mockResolvedValueOnce(makeAxiosResponse({ data: { a: 1 } }));
      await client.graphql.query('{ a }', undefined, { operationName: 'FetchA' });

      postSpy.mockResolvedValueOnce(makeAxiosResponse({ data: { b: 2 } }));
      await client.graphql.raw('{ b }');

      postSpy.mockResolvedValueOnce(makeAxiosResponse({ data: { __schema: {} } }));
      await client.graphql.introspect();

      postSpy.mockResolvedValueOnce(makeAxiosResponse({ errors: [{ message: 'Boom' }] }));
      await expect(
        client.graphql.query('{ fail }', undefined, { operationName: 'FailOp' }),
      ).rejects.toThrow(FulcrumGraphQLError);

      expect(spans).toHaveLength(4);

      expect(spans[0].name).toBe('GraphQL.query');
      expect(spans[0].attributes).toEqual({ 'graphql.operation.name': 'FetchA' });
      expect(spans[0].statuses).toEqual([{ code: SpanStatusCode.OK }]);
      expect(spans[0].ended).toBe(true);

      expect(spans[1].name).toBe('GraphQL.raw');
      expect(spans[1].attributes).toEqual({});
      expect(spans[1].statuses).toEqual([{ code: SpanStatusCode.OK }]);
      expect(spans[1].ended).toBe(true);

      expect(spans[2].name).toBe('GraphQL.introspect');
      expect(spans[2].attributes).toEqual({ 'graphql.operation.name': 'IntrospectionQuery' });
      expect(spans[2].statuses).toEqual([{ code: SpanStatusCode.OK }]);
      expect(spans[2].ended).toBe(true);

      expect(spans[3].name).toBe('GraphQL.query');
      expect(spans[3].attributes).toEqual({ 'graphql.operation.name': 'FailOp' });
      expect(spans[3].statuses).toEqual([{ code: SpanStatusCode.ERROR, message: 'Boom' }]);
      expect(spans[3].exceptions).toHaveLength(1);
      expect(spans[3].ended).toBe(true);
    });
  });
});
