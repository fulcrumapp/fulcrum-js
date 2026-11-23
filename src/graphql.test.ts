import { SpanStatusCode, trace, type Span } from '@opentelemetry/api';
import {
  buildSchema,
  getIntrospectionQuery,
  graphqlSync,
  parse,
  validate,
  type IntrospectionQuery,
} from 'graphql';
import {
  ClientError,
  FulcrumClient,
  FulcrumRegion,
  gql,
  resolveGraphQLUrl,
  type TypedDocumentString,
} from './index.js';

// Mock the generated REST API client so FulcrumClient constructor does not hit the network
jest.mock('../generated/dist/index.js', () => ({
  DefaultApi: jest.fn().mockImplementation(() => ({})),
  Configuration: jest.fn().mockImplementation(() => ({})),
}));

const SAMPLE_SCHEMA = buildSchema(`
  type Query {
    siteInspections(status: String): [SiteInspection!]!
  }

  type SiteInspection {
    id: ID!
    status: String
    asset: Asset
  }

  type Asset {
    id: ID!
    assetTag: String
  }
`);

const SAMPLE_INTROSPECTION = graphqlSync({
  schema: SAMPLE_SCHEMA,
  source: getIntrospectionQuery(),
}).data as unknown as IntrospectionQuery;

function makeJsonResponse(
  body: unknown,
  status = 200,
  contentType = 'application/json',
): Response {
  const text = typeof body === 'string' ? body : JSON.stringify(body);
  return new Response(text, {
    status,
    headers: { 'content-type': contentType },
  });
}

function getLastFetchCall(fetchSpy: jest.SpyInstance): {
  url: string;
  headers: Headers;
  body: Record<string, unknown>;
  signal: AbortSignal | null | undefined;
} {
  const [urlArg, init] = fetchSpy.mock.calls[fetchSpy.mock.calls.length - 1] as [
    URL | string,
    RequestInit,
  ];
  return {
    url: urlArg.toString(),
    headers: new Headers(init.headers),
    body: JSON.parse(String(init.body)) as Record<string, unknown>,
    signal: init.signal,
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

  it('should prefer explicit graphqlUrl override and fall back when blank', () => {
    expect(
      resolveGraphQLUrl(FulcrumRegion.US, 'https://graphql.internal.example.com/v1/graphql'),
    ).toBe('https://graphql.internal.example.com/v1/graphql');
    expect(
      resolveGraphQLUrl(FulcrumRegion.EU, '  https://override.example.com/query/graphql  '),
    ).toBe('https://override.example.com/query/graphql');
    expect(resolveGraphQLUrl(FulcrumRegion.CA, '   ')).toBe(
      'https://api.fulcrumapp-ca.com/query/graphql',
    );
  });
});

describe('FulcrumClient.graphql', () => {
  let fetchSpy: jest.SpyInstance;

  beforeEach(() => {
    fetchSpy = jest.spyOn(globalThis, 'fetch');
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
      fetchSpy.mockResolvedValueOnce(makeJsonResponse({ data: { ping: true } }));
      const client = new FulcrumClient({ apiKey: 'token-123', region });

      const data = await client.graphql.query<{ ping: boolean }>('{ ping }');

      expect(data).toEqual({ ping: true });
      const call = getLastFetchCall(fetchSpy);
      expect(call.url).toBe(expectedUrl);
      expect(call.headers.get('x-apitoken')).toBe('token-123');
      expect(call.headers.get('content-type')).toBe('application/json');
      expect(call.body).toEqual({ query: '{ ping }' });
    });

    it('should use custom graphqlUrl override when configured on FulcrumClientOptions', async () => {
      fetchSpy.mockResolvedValueOnce(makeJsonResponse({ data: { ok: true } }));
      const client = new FulcrumClient({
        apiKey: 'token-123',
        region: FulcrumRegion.US,
        graphqlUrl: 'https://edge.example.com/custom/graphql',
      });

      await client.graphql.query('{ ok }');

      expect(getLastFetchCall(fetchSpy).url).toBe('https://edge.example.com/custom/graphql');
    });
  });

  describe('documents, headers, signals, and options', () => {
    it('should support gql templates, DocumentNode, variables, headers, User-Agent, and explicit operationName', async () => {
      fetchSpy.mockResolvedValueOnce(
        makeJsonResponse({ data: { siteInspections: [{ id: 'rec-1' }] } }),
      );
      const client = new FulcrumClient({
        apiKey: 'secret-token',
        region: FulcrumRegion.US,
        userAgent: 'TestApp/2.0',
      });

      const doc = parse(gql`
        query FirstOp($status: String) {
          siteInspections(status: $status) {
            id
          }
        }
        query SecondOp {
          siteInspections {
            status
          }
        }
      `);

      const result = await client.graphql.query<
        { siteInspections: Array<{ id: string }> },
        { status: string }
      >(
        doc,
        { status: 'open' },
        {
          operationName: 'FirstOp',
          headers: { 'X-Request-Id': 'req-42' },
        },
      );

      expect(result).toEqual({ siteInspections: [{ id: 'rec-1' }] });
      const call = getLastFetchCall(fetchSpy);
      expect(call.headers.get('x-apitoken')).toBe('secret-token');
      expect(call.headers.get('user-agent')).toBe('TestApp/2.0');
      expect(call.headers.get('x-request-id')).toBe('req-42');
      expect(call.body.operationName).toBe('FirstOp');
      expect(call.body.variables).toEqual({ status: 'open' });
    });

    it('should omit User-Agent header when userAgent option is not provided', async () => {
      fetchSpy.mockResolvedValueOnce(makeJsonResponse({ data: { ok: true } }));
      const client = new FulcrumClient({
        apiKey: 'secret-token',
        region: FulcrumRegion.US,
      });

      await client.graphql.query('{ ok }');

      const call = getLastFetchCall(fetchSpy);
      expect(call.headers.get('user-agent')).toBeNull();
      expect(call.headers.get('x-apitoken')).toBe('secret-token');
    });

    it('should forward AbortSignal, timeout, and combined signal+timeout', async () => {
      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      const controller = new AbortController();
      fetchSpy.mockResolvedValueOnce(makeJsonResponse({ data: { a: 1 } }));
      await client.graphql.query('{ a }', undefined, { signal: controller.signal });
      expect(getLastFetchCall(fetchSpy).signal).toBe(controller.signal);

      fetchSpy.mockResolvedValueOnce(makeJsonResponse({ data: { b: 2 } }));
      await client.graphql.query('{ b }', undefined, { timeout: 5000 });
      expect(getLastFetchCall(fetchSpy).signal).toBeInstanceOf(AbortSignal);

      fetchSpy.mockResolvedValueOnce(makeJsonResponse({ data: { c: 3 } }));
      await client.graphql.query('{ c }', undefined, {
        timeout: 5000,
        signal: controller.signal,
      });
      const combinedSignal = getLastFetchCall(fetchSpy).signal;
      expect(combinedSignal).toBeInstanceOf(AbortSignal);
      expect(combinedSignal).not.toBe(controller.signal);
    });
  });

  describe('error handling', () => {
    it('should throw ClientError with errors, partial data, and status on GraphQL errors', async () => {
      const partialData = { siteInspections: null };
      const errors = [
        {
          message: 'Cannot query field "unknownField"',
          locations: [{ line: 1, column: 10 }],
          path: ['siteInspections'],
          extensions: { code: 'GRAPHQL_VALIDATION_FAILED' },
        },
      ];
      fetchSpy.mockResolvedValueOnce(makeJsonResponse({ data: partialData, errors }, 200));
      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      let caught: unknown;
      try {
        await client.graphql.query('{ siteInspections { unknownField } }');
      } catch (err) {
        caught = err;
      }

      expect(caught).toBeInstanceOf(ClientError);
      const clientErr = caught as ClientError;
      expect(clientErr.response.status).toBe(200);
      expect(clientErr.response.data).toEqual(partialData);
      expect(clientErr.response.errors).toEqual(errors);
    });

    it('should throw ClientError with HTTP status on non-2xx responses', async () => {
      fetchSpy.mockResolvedValueOnce(
        makeJsonResponse(
          { data: null, errors: [{ message: 'Invalid API token' }] },
          401,
        ),
      );
      const client = new FulcrumClient({ apiKey: 'bad-token', region: FulcrumRegion.US });

      let caught: unknown;
      try {
        await client.graphql.query('{ viewer { id } }');
      } catch (err) {
        caught = err;
      }

      expect(caught).toBeInstanceOf(ClientError);
      const clientErr = caught as ClientError;
      expect(clientErr.response.status).toBe(401);
      expect(clientErr.response.errors?.[0]?.message).toBe('Invalid API token');
    });

    it('should throw ClientError on non-JSON HTTP error responses', async () => {
      fetchSpy.mockResolvedValueOnce(makeJsonResponse('Bad Gateway', 502, 'text/plain'));
      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      let caught: unknown;
      try {
        await client.graphql.query('{ test }');
      } catch (err) {
        caught = err;
      }

      expect(caught).toBeInstanceOf(ClientError);
      const clientErr = caught as ClientError;
      expect(clientErr.response.status).toBe(502);
      expect(clientErr.response.body).toBe('Bad Gateway');
    });
  });

  describe('raw', () => {
    it('should return data, errors, extensions, headers, and status without throwing on GraphQL errors', async () => {
      const payload = {
        data: { siteInspections: [{ id: '1' }] },
        errors: [{ message: 'Partial permission denied', path: ['siteInspections', 0, 'secret'] }],
        extensions: { complexity: 12 },
      };
      fetchSpy.mockResolvedValueOnce(makeJsonResponse(payload, 200));
      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      const result = await client.graphql.raw(
        'query Partial { siteInspections { id secret } }',
        undefined,
        { operationName: 'Partial' },
      );

      expect(result.status).toBe(200);
      expect(result.data).toEqual(payload.data);
      expect(result.errors).toEqual(payload.errors);
      expect(result.extensions).toEqual(payload.extensions);
      expect(result.headers).toBeInstanceOf(Headers);
    });

    it('should accept DocumentNode and boxed TypedDocumentString in raw()', async () => {
      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      fetchSpy.mockResolvedValueOnce(makeJsonResponse({ data: { ok: true } }, 200));
      const astResult = await client.graphql.raw<{ ok: boolean }>(parse('{ ok }'));
      expect(astResult.data).toEqual({ ok: true });

      const boxed = {
        toString: () => '{ ok }',
      } as unknown as TypedDocumentString<{ ok: boolean }, Record<string, never>>;
      fetchSpy.mockResolvedValueOnce(makeJsonResponse({ data: { ok: true } }, 200));
      const boxedResult = await client.graphql.raw(boxed);
      expect(boxedResult.data).toEqual({ ok: true });
    });

    it('should still throw ClientError on HTTP 500 responses', async () => {
      fetchSpy.mockResolvedValueOnce(
        makeJsonResponse({ message: 'Internal Server Error' }, 500),
      );
      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      let caught: unknown;
      try {
        await client.graphql.raw('{ test }');
      } catch (err) {
        caught = err;
      }

      expect(caught).toBeInstanceOf(ClientError);
      expect((caught as ClientError).response.status).toBe(500);
    });
  });

  describe('introspection helpers', () => {
    it('should run getIntrospectionQuery() in introspect() and return IntrospectionQuery', async () => {
      fetchSpy.mockResolvedValueOnce(makeJsonResponse({ data: SAMPLE_INTROSPECTION }, 200));
      const client = new FulcrumClient({
        apiKey: 'token',
        region: FulcrumRegion.EU,
        userAgent: 'Agent/1.0',
      });

      const result = await client.graphql.introspect({ headers: { 'X-Caller': 'mcp' } });

      expect(result).toEqual(SAMPLE_INTROSPECTION);
      const call = getLastFetchCall(fetchSpy);
      expect(call.url).toBe('https://api.fulcrumapp-eu.com/query/graphql');
      expect(call.body.query).toBe(getIntrospectionQuery());
      expect(call.body.operationName).toBe('IntrospectionQuery');
      expect(call.headers.get('x-apitoken')).toBe('token');
      expect(call.headers.get('user-agent')).toBe('Agent/1.0');
      expect(call.headers.get('x-caller')).toBe('mcp');
    });

    it('should build a client GraphQLSchema in introspectSchema() usable with validate()', async () => {
      fetchSpy.mockResolvedValueOnce(makeJsonResponse({ data: SAMPLE_INTROSPECTION }, 200));
      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      const schema = await client.graphql.introspectSchema();

      expect(
        validate(schema, parse('{ siteInspections(status: "open") { id asset { assetTag } } }')),
      ).toEqual([]);
      expect(
        validate(schema, parse('{ siteInspections { nonExistentField } }')),
      ).toHaveLength(1);
    });

    it('should return compact GraphQL SDL from introspectSDL()', async () => {
      fetchSpy.mockResolvedValueOnce(makeJsonResponse({ data: SAMPLE_INTROSPECTION }, 200));
      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      const sdl = await client.graphql.introspectSDL({ operationName: 'CustomIntrospect' });

      expect(sdl).toContain('type SiteInspection');
      expect(sdl).toContain('asset: Asset');
      expect(sdl).toContain('assetTag: String');
      expect(getLastFetchCall(fetchSpy).body.operationName).toBe('CustomIntrospect');
    });
  });

  describe('OpenTelemetry instrumentation', () => {
    it('should create spans with graphql.operation.name for all graphql helpers', async () => {
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

      jest
        .spyOn(trace, 'getTracer')
        .mockReturnValue(mockTracer as unknown as ReturnType<typeof trace.getTracer>);

      const client = new FulcrumClient({ apiKey: 'token', region: FulcrumRegion.US });

      fetchSpy.mockResolvedValueOnce(makeJsonResponse({ data: { a: 1 } }));
      await client.graphql.query('query InferredOp { a }');

      fetchSpy.mockResolvedValueOnce(makeJsonResponse({ data: { b: 2 } }));
      await client.graphql.raw('{ b }');

      fetchSpy.mockResolvedValueOnce(makeJsonResponse({ data: SAMPLE_INTROSPECTION }));
      await client.graphql.introspect();

      fetchSpy.mockResolvedValueOnce(makeJsonResponse({ data: SAMPLE_INTROSPECTION }));
      await client.graphql.introspectSchema({ operationName: 'SchemaCheck' });

      fetchSpy.mockResolvedValueOnce(makeJsonResponse({ data: SAMPLE_INTROSPECTION }));
      await client.graphql.introspectSDL();

      fetchSpy.mockResolvedValueOnce(makeJsonResponse({ errors: [{ message: 'Boom' }] }));
      await expect(
        client.graphql.query('{ fail }', undefined, { operationName: 'FailOp' }),
      ).rejects.toThrow(ClientError);

      expect(spans).toHaveLength(6);

      expect(spans[0]).toMatchObject({
        name: 'GraphQL.query',
        attributes: { 'graphql.operation.name': 'InferredOp' },
        statuses: [{ code: SpanStatusCode.OK }],
        ended: true,
      });
      expect(spans[1]).toMatchObject({
        name: 'GraphQL.raw',
        attributes: {},
        statuses: [{ code: SpanStatusCode.OK }],
        ended: true,
      });
      expect(spans[2]).toMatchObject({
        name: 'GraphQL.introspect',
        attributes: { 'graphql.operation.name': 'IntrospectionQuery' },
        statuses: [{ code: SpanStatusCode.OK }],
        ended: true,
      });
      expect(spans[3]).toMatchObject({
        name: 'GraphQL.introspectSchema',
        attributes: { 'graphql.operation.name': 'SchemaCheck' },
        statuses: [{ code: SpanStatusCode.OK }],
        ended: true,
      });
      expect(spans[4]).toMatchObject({
        name: 'GraphQL.introspectSDL',
        attributes: { 'graphql.operation.name': 'IntrospectionQuery' },
        statuses: [{ code: SpanStatusCode.OK }],
        ended: true,
      });
      expect(spans[5].name).toBe('GraphQL.query');
      expect(spans[5].attributes).toEqual({ 'graphql.operation.name': 'FailOp' });
      expect(spans[5].statuses[0]).toMatchObject({ code: SpanStatusCode.ERROR });
      expect(spans[5].exceptions).toHaveLength(1);
      expect(spans[5].ended).toBe(true);
    });
  });
});
