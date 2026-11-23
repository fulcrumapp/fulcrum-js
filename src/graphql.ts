import axios, { isAxiosError, type AxiosRequestConfig } from 'axios';

/**
 * Location in a GraphQL document associated with an error.
 */
export interface GraphQLErrorLocation {
  line: number;
  column: number;
}

/**
 * Individual GraphQL error entry returned in a GraphQL response `errors` array.
 */
export interface GraphQLErrorItem {
  message: string;
  locations?: GraphQLErrorLocation[];
  path?: Array<string | number>;
  extensions?: Record<string, unknown>;
}

/**
 * Standard GraphQL-over-HTTP JSON response envelope.
 */
export interface GraphQLResponse<TData = Record<string, unknown>> {
  data?: TData | null;
  errors?: GraphQLErrorItem[];
  extensions?: Record<string, unknown>;
}

/**
 * Per-request options for GraphQL operations.
 */
export interface GraphQLRequestOptions {
  /** Optional GraphQL operation name when the document contains multiple operations. */
  operationName?: string;
  /** Additional HTTP headers to include on this request. */
  headers?: Record<string, string>;
  /** Optional request timeout in milliseconds. */
  timeout?: number;
  /** Optional AbortSignal to cancel the request. */
  signal?: AbortSignal;
}

/**
 * Structured error thrown when a Fulcrum GraphQL request fails at the HTTP layer
 * or returns one or more GraphQL errors.
 */
export class FulcrumGraphQLError extends Error {
  readonly errors: GraphQLErrorItem[];
  readonly data?: unknown;
  readonly statusCode?: number;

  constructor(
    message: string,
    options?: {
      errors?: GraphQLErrorItem[];
      data?: unknown;
      statusCode?: number;
      cause?: unknown;
    },
  ) {
    super(message);
    this.name = 'FulcrumGraphQLError';
    this.errors = options?.errors ?? [];
    this.data = options?.data;
    this.statusCode = options?.statusCode;
    if (options?.cause !== undefined) {
      (this as Error & { cause?: unknown }).cause = options.cause;
    }
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

/**
 * Public GraphQL handle exposed as `client.graphql`.
 */
export interface GraphQLClient {
  /**
   * Execute a GraphQL query and return `response.data`.
   * Throws `FulcrumGraphQLError` on HTTP/transport failures, non-empty GraphQL `errors`,
   * or missing `data`.
   */
  query<TData = Record<string, unknown>, TVariables = Record<string, unknown>>(
    document: string,
    variables?: TVariables,
    options?: GraphQLRequestOptions,
  ): Promise<TData>;

  /**
   * Execute a GraphQL query and return the full `{ data, errors, extensions }` envelope
   * without throwing on GraphQL-level errors. Still throws `FulcrumGraphQLError` on
   * transport or non-2xx HTTP errors.
   */
  raw<TData = Record<string, unknown>, TVariables = Record<string, unknown>>(
    document: string,
    variables?: TVariables,
    options?: GraphQLRequestOptions,
  ): Promise<GraphQLResponse<TData>>;

  /**
   * Execute the standard GraphQL introspection query (`__schema`) to discover the
   * caller's membership-scoped dynamic schema.
   */
  introspect(options?: GraphQLRequestOptions): Promise<Record<string, unknown>>;
}

/**
 * Standard GraphQL introspection query for discovering membership-scoped schemas.
 */
export const INTROSPECTION_QUERY = `
  query IntrospectionQuery {
    __schema {
      queryType { name }
      mutationType { name }
      subscriptionType { name }
      types {
        ...FullType
      }
      directives {
        name
        description
        locations
        args {
          ...InputValue
        }
      }
    }
  }

  fragment FullType on __Type {
    kind
    name
    description
    fields(includeDeprecated: true) {
      name
      description
      args {
        ...InputValue
      }
      type {
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    inputFields {
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    enumValues(includeDeprecated: true) {
      name
      description
      isDeprecated
      deprecationReason
    }
    possibleTypes {
      ...TypeRef
    }
  }

  fragment InputValue on __InputValue {
    name
    description
    type {
      ...TypeRef
    }
    defaultValue
  }

  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

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

function formatGraphQLErrors(errors: GraphQLErrorItem[]): string {
  const messages = errors
    .map((err) => err.message)
    .filter((message): message is string => typeof message === 'string' && message.length > 0);

  if (messages.length === 0) {
    return 'GraphQL request returned errors';
  }

  return messages.join('; ');
}

function extractGraphQLErrors(payload: unknown): GraphQLErrorItem[] {
  if (
    payload !== null &&
    typeof payload === 'object' &&
    'errors' in payload &&
    Array.isArray((payload as { errors?: unknown }).errors)
  ) {
    return (payload as { errors: GraphQLErrorItem[] }).errors;
  }
  return [];
}

function extractGraphQLData(payload: unknown): unknown {
  if (payload !== null && typeof payload === 'object' && 'data' in payload) {
    return (payload as { data?: unknown }).data;
  }
  return undefined;
}

export interface ExecuteGraphQLRequestParams<TVariables> {
  url: string;
  apiKey: string;
  userAgent?: string;
  document: string;
  variables?: TVariables;
  options?: GraphQLRequestOptions;
}

export interface ExecuteGraphQLResult<TData> {
  envelope: GraphQLResponse<TData>;
  statusCode: number;
}

function buildGraphQLPayload<TVariables>(
  document: string,
  variables?: TVariables,
  operationName?: string,
): { query: string; variables?: TVariables; operationName?: string } {
  const payload: {
    query: string;
    variables?: TVariables;
    operationName?: string;
  } = { query: document };

  if (variables !== undefined) {
    payload.variables = variables;
  }
  if (operationName !== undefined) {
    payload.operationName = operationName;
  }

  return payload;
}

function buildGraphQLRequestConfig(
  apiKey: string,
  userAgent?: string,
  options?: GraphQLRequestOptions,
): AxiosRequestConfig {
  const headers: Record<string, string> = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-ApiToken': apiKey,
    ...(userAgent ? { 'User-Agent': userAgent } : {}),
    ...options?.headers,
  };

  const config: AxiosRequestConfig = { headers };
  if (options?.timeout !== undefined) {
    config.timeout = options.timeout;
  }
  if (options?.signal !== undefined) {
    config.signal = options.signal;
  }

  return config;
}

function formatAxiosErrorMessage(
  errors: GraphQLErrorItem[],
  statusCode: number | undefined,
  fallbackMessage: string,
): string {
  if (errors.length > 0) {
    return formatGraphQLErrors(errors);
  }
  if (statusCode !== undefined) {
    return `GraphQL request failed with status ${statusCode}: ${fallbackMessage}`;
  }
  return fallbackMessage;
}

function toFulcrumGraphQLError(error: unknown): FulcrumGraphQLError {
  if (isAxiosError(error)) {
    const statusCode = error.response?.status;
    const responseData = error.response?.data;
    const errors = extractGraphQLErrors(responseData);
    const data = extractGraphQLData(responseData);
    const message = formatAxiosErrorMessage(errors, statusCode, error.message);

    return new FulcrumGraphQLError(message, {
      errors,
      data,
      statusCode,
      cause: error,
    });
  }

  return new FulcrumGraphQLError(error instanceof Error ? error.message : String(error), {
    cause: error,
  });
}

/**
 * Low-level HTTP transport for Fulcrum GraphQL requests using axios.
 */
export async function executeGraphQLRequest<TData, TVariables>(
  params: ExecuteGraphQLRequestParams<TVariables>,
): Promise<ExecuteGraphQLResult<TData>> {
  const { url, apiKey, userAgent, document, variables, options } = params;
  const payload = buildGraphQLPayload(document, variables, options?.operationName);
  const config = buildGraphQLRequestConfig(apiKey, userAgent, options);

  try {
    const response = await axios.post<GraphQLResponse<TData>>(url, payload, config);
    const envelope: GraphQLResponse<TData> =
      response.data && typeof response.data === 'object' ? response.data : {};

    return {
      envelope,
      statusCode: response.status,
    };
  } catch (error) {
    throw toFulcrumGraphQLError(error);
  }
}

/**
 * Unwrap a GraphQL response envelope for `query()` / `introspect()`,
 * throwing `FulcrumGraphQLError` when GraphQL errors are present or `data` is absent.
 */
export function unwrapGraphQLResult<TData>(result: ExecuteGraphQLResult<TData>): TData {
  const { envelope, statusCode } = result;

  if (Array.isArray(envelope.errors) && envelope.errors.length > 0) {
    throw new FulcrumGraphQLError(formatGraphQLErrors(envelope.errors), {
      errors: envelope.errors,
      data: envelope.data,
      statusCode,
    });
  }

  if (envelope.data === undefined || envelope.data === null) {
    throw new FulcrumGraphQLError('GraphQL response contained no data', {
      data: envelope.data,
      statusCode,
    });
  }

  return envelope.data;
}
