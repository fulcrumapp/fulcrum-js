import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import {
  buildClientSchema,
  getIntrospectionQuery,
  print,
  printSchema,
  type GraphQLError,
  type GraphQLSchema,
  type IntrospectionQuery,
} from 'graphql';
import {
  ClientError,
  GraphQLClient as RequestGraphQLClient,
  analyzeDocument,
  gql,
  type RequestDocument,
  type RequestMiddleware,
  type TypedDocumentString,
  type Variables,
} from 'graphql-request';

export { ClientError, gql };
export type {
  GraphQLError,
  GraphQLSchema,
  IntrospectionQuery,
  RequestDocument,
  TypedDocumentNode,
  TypedDocumentString,
  Variables,
};

/**
 * Any GraphQL document accepted by `client.graphql.query()` and `client.graphql.raw()`.
 */
export type GraphQLDocument<TData = unknown, TVariables extends Variables = Variables> =
  | RequestDocument
  | TypedDocumentNode<TData, TVariables>
  | TypedDocumentString<TData, TVariables>;

/**
 * Raw response returned by `client.graphql.raw()` (via `graphql-request`'s `rawRequest`).
 */
export interface GraphQLRawResponse<TData = Record<string, unknown>> {
  data: TData;
  errors?: GraphQLError[];
  extensions?: unknown;
  headers: Headers;
  status: number;
  body: string;
}

/**
 * Per-request options for GraphQL operations.
 */
export interface GraphQLRequestOptions {
  /** Optional GraphQL operation name when the document contains multiple operations. */
  operationName?: string;
  /** Additional HTTP headers to include on this request. */
  headers?: Record<string, string> | Headers | [string, string][];
  /** Optional request timeout in milliseconds. */
  timeout?: number;
  /** Optional AbortSignal to cancel the request. */
  signal?: AbortSignal;
}

/**
 * Per-request options for GraphQL introspection operations.
 * `operationName` is omitted because `getIntrospectionQuery()` defines a single
 * fixed `IntrospectionQuery` operation.
 */
export type GraphQLIntrospectOptions = Omit<GraphQLRequestOptions, 'operationName'>;

/**
 * Public GraphQL handle exposed as `client.graphql`.
 */
export interface GraphQLClient {
  /**
   * Execute a GraphQL document (`string`, `gql` template, `DocumentNode`, or `TypedDocumentNode`)
   * and return `data`. Throws `ClientError` on HTTP failures or GraphQL errors.
   */
  query<TData = Record<string, unknown>, TVariables extends Variables = Variables>(
    document: GraphQLDocument<TData, TVariables>,
    variables?: TVariables,
    options?: GraphQLRequestOptions,
  ): Promise<TData>;

  /**
   * Execute a GraphQL document with `errorPolicy: 'all'` and return
   * `{ data, errors, extensions, headers, status, body }` without throwing on
   * GraphQL-level errors. Still throws `ClientError` on non-2xx HTTP errors.
   */
  raw<TData = Record<string, unknown>, TVariables extends Variables = Variables>(
    document: GraphQLDocument<TData, TVariables>,
    variables?: TVariables,
    options?: GraphQLRequestOptions,
  ): Promise<GraphQLRawResponse<TData>>;

  /**
   * Execute the standard GraphQL introspection query (`getIntrospectionQuery()`)
   * to discover the caller's membership-scoped dynamic schema.
   */
  introspect(options?: GraphQLIntrospectOptions): Promise<IntrospectionQuery>;

  /**
   * Introspect the caller's membership-scoped schema and return an executable
   * client `GraphQLSchema` suitable for local `validate(schema, parse(doc))` checks.
   */
  introspectSchema(options?: GraphQLIntrospectOptions): Promise<GraphQLSchema>;

  /**
   * Introspect the caller's membership-scoped schema and return compact GraphQL SDL
   * via `printSchema()`, ideal for AI agents and MCP tooling.
   */
  introspectSDL(options?: GraphQLIntrospectOptions): Promise<string>;
}

/**
 * Callback signature for wrapping GraphQL calls in OpenTelemetry spans.
 */
export type SpanRunner = <T>(
  name: string,
  fn: () => Promise<T>,
  attributes?: Record<string, string | number | boolean>,
) => Promise<T>;

export interface GraphQLHandleOptions {
  apiKey: string;
  region: string;
  userAgent?: string;
  graphqlUrl?: string;
}

function stripTrailingSlashes(pathname: string): string {
  let end = pathname.length;
  while (end > 0 && pathname.endsWith('/', end)) {
    end -= 1;
  }
  return pathname.slice(0, end);
}

function stripApiSuffix(pathname: string): string {
  const lower = pathname.toLowerCase();
  if (lower.endsWith('/api/v2')) {
    return pathname.slice(0, -'/api/v2'.length);
  }
  if (lower.endsWith('/api')) {
    return pathname.slice(0, -'/api'.length);
  }
  return pathname;
}

/**
 * Derive the Fulcrum GraphQL endpoint URL from a configured region URL or explicit override.
 *
 * Strips a trailing `/api` or `/api/v2` path segment from `region` while preserving any
 * custom host base-path prefix, then appends `/query/graphql`.
 */
export function resolveGraphQLUrl(region: string, graphqlUrl?: string): string {
  const explicitUrl = graphqlUrl?.trim();
  if (explicitUrl) {
    return explicitUrl;
  }

  const parsed = new URL(region);
  const trimmedPath = stripTrailingSlashes(parsed.pathname);
  const basePath = stripApiSuffix(trimmedPath);

  return `${parsed.origin}${basePath}/query/graphql`;
}

function buildSignal(timeout?: number, signal?: AbortSignal): AbortSignal | undefined {
  if (timeout === undefined) {
    return signal;
  }
  const timeoutSignal = AbortSignal.timeout(timeout);
  return signal ? AbortSignal.any([signal, timeoutSignal]) : timeoutSignal;
}

function toQueryString<TData, TVariables extends Variables>(
  document: GraphQLDocument<TData, TVariables>,
): string {
  if (typeof document === 'string') {
    return document;
  }
  if ('kind' in document) {
    return print(document);
  }
  return String(document);
}

function createOperationNameMiddleware(operationName: string): RequestMiddleware {
  return (request) => {
    const parsedBody = JSON.parse(String(request.body)) as Record<string, unknown>;
    return {
      ...request,
      operationName,
      body: JSON.stringify({ ...parsedBody, operationName }),
    };
  };
}

function resolveSpanAttributes(
  document: GraphQLDocument,
  operationName?: string,
): Record<string, string> | undefined {
  const resolvedName = operationName ?? analyzeDocument(document).operationName;
  return resolvedName ? { 'graphql.operation.name': resolvedName } : undefined;
}

/**
 * Build the `client.graphql` handle backed by `graphql-request` and `graphql`.
 */
export function createGraphQLHandle(
  handleOptions: GraphQLHandleOptions,
  withSpan: SpanRunner,
): GraphQLClient {
  const endpoint = resolveGraphQLUrl(handleOptions.region, handleOptions.graphqlUrl);
  const baseHeaders: Record<string, string> = {
    'X-ApiToken': handleOptions.apiKey,
    ...(handleOptions.userAgent ? { 'User-Agent': handleOptions.userAgent } : {}),
  };

  const makeClient = (
    errorPolicy: 'none' | 'all',
    operationName?: string,
  ): RequestGraphQLClient =>
    new RequestGraphQLClient(endpoint, {
      headers: baseHeaders,
      errorPolicy,
      ...(operationName ? { requestMiddleware: createOperationNameMiddleware(operationName) } : {}),
    });

  const fetchIntrospection = (options?: GraphQLIntrospectOptions): Promise<IntrospectionQuery> =>
    makeClient('none').request<IntrospectionQuery>({
      document: getIntrospectionQuery(),
      requestHeaders: options?.headers,
      signal: buildSignal(options?.timeout, options?.signal),
    });

  return {
    query: <TData = Record<string, unknown>, TVariables extends Variables = Variables>(
      document: GraphQLDocument<TData, TVariables>,
      variables?: TVariables,
      options?: GraphQLRequestOptions,
    ): Promise<TData> =>
      withSpan(
        'GraphQL.query',
        () =>
          makeClient('none', options?.operationName).request<TData>({
            document,
            variables,
            requestHeaders: options?.headers,
            signal: buildSignal(options?.timeout, options?.signal),
          }),
        resolveSpanAttributes(document, options?.operationName),
      ),

    raw: <TData = Record<string, unknown>, TVariables extends Variables = Variables>(
      document: GraphQLDocument<TData, TVariables>,
      variables?: TVariables,
      options?: GraphQLRequestOptions,
    ): Promise<GraphQLRawResponse<TData>> =>
      withSpan(
        'GraphQL.raw',
        () =>
          makeClient('all', options?.operationName).rawRequest<TData>({
            query: toQueryString(document),
            variables,
            requestHeaders: options?.headers,
            signal: buildSignal(options?.timeout, options?.signal),
          }),
        resolveSpanAttributes(document, options?.operationName),
      ),

    introspect: (options?: GraphQLIntrospectOptions): Promise<IntrospectionQuery> =>
      withSpan('GraphQL.introspect', () => fetchIntrospection(options), {
        'graphql.operation.name': 'IntrospectionQuery',
      }),

    introspectSchema: (options?: GraphQLIntrospectOptions): Promise<GraphQLSchema> =>
      withSpan(
        'GraphQL.introspectSchema',
        async () => buildClientSchema(await fetchIntrospection(options)),
        { 'graphql.operation.name': 'IntrospectionQuery' },
      ),

    introspectSDL: (options?: GraphQLIntrospectOptions): Promise<string> =>
      withSpan(
        'GraphQL.introspectSDL',
        async () => printSchema(buildClientSchema(await fetchIntrospection(options))),
        { 'graphql.operation.name': 'IntrospectionQuery' },
      ),
  } as const;
}
