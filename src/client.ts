import { DefaultApi, Configuration } from '../generated/dist/index.js';
import { trace, SpanStatusCode, type Span, type Tracer } from '@opentelemetry/api';
import type {
  ConfigurationParameters,
  DefaultApiRecordsGetAllRequest,
  DefaultApiRecordsGetSingleRequest,
  DefaultApiRecordsCreateRequest,
  DefaultApiRecordsUpdateRequest,
  DefaultApiRecordsGetHistoryRequest,
  DefaultApiRecordsGetAllHistoryRequest,
  DefaultApiFormsGetAllRequest,
  DefaultApiFormsCreateRequest,
  DefaultApiFormsUpdateRequest,
  DefaultApiProjectsGetAllRequest,
  DefaultApiProjectsCreateRequest,
  DefaultApiProjectsUpdateRequest,
  DefaultApiWebhooksGetAllRequest,
  DefaultApiWebhooksCreateRequest,
  DefaultApiWebhooksUpdateRequest,
  DefaultApiQueryGetRequest,
  DefaultApiQueryPostRequest,
  DefaultApiAuditLogsGetAllRequest,
  DefaultApiAuthorizationsGetAllRequest,
  DefaultApiChangesetsGetAllRequest,
  DefaultApiChoiceListsGetAllRequest,
  DefaultApiClassificationSetsGetAllRequest,
  DefaultApiLayersGetAllRequest,
  DefaultApiMembershipsGetAllRequest,
  DefaultApiRolesGetAllRequest,
  RecordsCreateRequest,
  RecordsUpdateRequest,
  FormsCreateRequest,
  FormsUpdateRequest,
  ProjectsCreateRequest,
  ProjectsUpdateRequest,
  WebhooksCreateRequest,
  WebhooksUpdateRequest,
} from '../generated/dist/index.js';

/**
 * Data residency regions for Fulcrum
 */
export enum FulcrumRegion {
  /** United States (default) */
  US = 'https://api.fulcrumapp.com/api',
  /** Australia */
  AU = 'https://api.fulcrumapp-au.com/api',
  /** Canada */
  CA = 'https://api.fulcrumapp-ca.com/api',
  /** Europe */
  EU = 'https://api.fulcrumapp-eu.com/api',
}

export interface FulcrumClientOptions {
  apiKey: string;
  /**
   * Data residency region. Use FulcrumRegion enum for standard regions,
   * or provide a custom URL for internal/new regions.
   * @example FulcrumRegion.US
   * @example 'https://custom.fulcrum.com/api/v2'
   */
  region: FulcrumRegion | string;
  userAgent?: string;
}

/**
 * Clean wrapper types that hide implementation details like content-type headers
 */

// Records
export type RecordsGetAllParams = Omit<DefaultApiRecordsGetAllRequest, 'accept' | 'contentType'>;
export type RecordsGetSingleParams = Omit<DefaultApiRecordsGetSingleRequest, 'accept' | 'contentType'>;
export type RecordsCreateParams = Omit<DefaultApiRecordsCreateRequest, 'accept' | 'contentType'> & {
  record: RecordsCreateRequest['record'];
};
export type RecordsUpdateParams = Omit<DefaultApiRecordsUpdateRequest, 'accept' | 'contentType' | 'recordId'> & {
  record: RecordsUpdateRequest['record'];
};

// Forms
export type FormsGetAllParams = Omit<DefaultApiFormsGetAllRequest, 'accept' | 'contentType'>;
export type FormsCreateParams = Omit<DefaultApiFormsCreateRequest, 'accept' | 'contentType'> & {
  form: FormsCreateRequest['form'];
};
export type FormsUpdateParams = Omit<DefaultApiFormsUpdateRequest, 'accept' | 'contentType' | 'formId'> & {
  form: FormsUpdateRequest['form'];
};

// Projects
export type ProjectsGetAllParams = Omit<DefaultApiProjectsGetAllRequest, 'accept' | 'contentType'>;
export type ProjectsCreateParams = Omit<DefaultApiProjectsCreateRequest, 'accept' | 'contentType'> & {
  project: ProjectsCreateRequest['project'];
};
export type ProjectsUpdateParams = Omit<DefaultApiProjectsUpdateRequest, 'accept' | 'contentType' | 'projectId'> & {
  project: ProjectsUpdateRequest['project'];
};

// Webhooks
export type WebhooksGetAllParams = Omit<DefaultApiWebhooksGetAllRequest, 'accept' | 'contentType'>;
export type WebhooksCreateParams = Omit<DefaultApiWebhooksCreateRequest, 'accept' | 'contentType'> & {
  webhook: WebhooksCreateRequest['webhook'];
};
export type WebhooksUpdateParams = Omit<DefaultApiWebhooksUpdateRequest, 'accept' | 'contentType' | 'webhookId'> & {
  webhook: WebhooksUpdateRequest['webhook'];
};

// Query - keeping as-is since accept header is actually meaningful for query (json/csv/geojson)
export type QueryGetParams = DefaultApiQueryGetRequest;
export type QueryPostParams = DefaultApiQueryPostRequest;

/**
 * Fulcrum API Client
 *
 * A wrapper around the auto-generated OpenAPI client that provides
 * a consistent interface and will support analytics and instrumentation.
 *
 * @example
 * ```typescript
 * import { FulcrumClient } from '@fulcrumapp/fulcrum-js';
 *
 * const client = new FulcrumClient({
 *   apiKey: 'your-api-key',
 *   userAgent: 'MyApp/1.0.0'
 * });
 *
 * const records = await client.records.getAll({ formId: 'abc123' });
 * ```
 */
export class FulcrumClient {
  private readonly api: DefaultApi;
  private readonly config: Configuration;
  private readonly options: FulcrumClientOptions;
  private readonly tracer: Tracer;

  constructor(options: FulcrumClientOptions) {
    this.options = options;
    this.tracer = trace.getTracer('@fulcrumapp/fulcrum-js', '3.0.0');

    const configParams: ConfigurationParameters = {
      apiKey: options.apiKey,
      basePath: options.region,
      baseOptions: {
        headers: {
          ...(options.userAgent && { 'User-Agent': options.userAgent }),
        },
      },
    };

    this.config = new Configuration(configParams);
    this.api = new DefaultApi(this.config);
  }

  /**
   * Execute an API call within an OpenTelemetry span
   */
  private async withSpan<T>(name: string, fn: () => Promise<T>, attributes?: Record<string, string | number | boolean>): Promise<T> {
    return this.tracer.startActiveSpan(name, async (span: Span) => {
      try {
        // Add attributes if provided
        if (attributes) {
          for (const [key, value] of Object.entries(attributes)) {
            span.setAttribute(key, value);
          }
        }

        const result = await fn();
        span.setStatus({ code: SpanStatusCode.OK });
        return result;
      } catch (error) {
        span.setStatus({
          code: SpanStatusCode.ERROR,
          message: error instanceof Error ? error.message : 'Unknown error',
        });
        span.recordException(error instanceof Error ? error : new Error(String(error)));
        throw error;
      } finally {
        span.end();
      }
    });
  }

  /**
   * Direct access to the underlying API client.
   * Use this for full API access or when wrapper methods aren't available yet.
   */
  get client(): DefaultApi {
    return this.api;
  }

  /**
   * Records API
   */
  get records() {
    const api = this.api;
    return {
      /**
       * Get all records
       */
      getAll: (params: RecordsGetAllParams = {}) =>
        this.withSpan('Records.getAll', () =>
          api.recordsGetAll({
            accept: 'application/json',
            ...params,
          }),
          params.formId ? { 'fulcrum.form_id': params.formId } : undefined,
        ),

      /**
       * Get a single record by ID
       */
      getById: (recordId: string, params: Omit<RecordsGetSingleParams, 'recordId'> = {}) =>
        this.withSpan('Records.getById', () =>
          api.recordsGetSingle({
            accept: 'application/json',
            recordId,
            ...params,
          }),
          { 'fulcrum.record_id': recordId },
        ),

      /**
       * Create a new record
       */
      create: (params: RecordsCreateParams) =>
        this.withSpan('Records.create', () =>
          api.recordsCreate({
            accept: 'application/json',
            contentType: 'application/json',
            recordsCreateRequest: { record: params.record },
            xSkipWorkflows: params.xSkipWorkflows,
            xSkipWebhooks: params.xSkipWebhooks,
          }),
          {
            'fulcrum.form_id': params.record.form_id || '',
            'fulcrum.skip_workflows': params.xSkipWorkflows || false,
            'fulcrum.skip_webhooks': params.xSkipWebhooks || false,
          },
        ),

      /**
       * Update a record
       */
      update: (recordId: string, params: RecordsUpdateParams) =>
        this.withSpan('Records.update', () =>
          api.recordsUpdate({
            accept: 'application/json',
            contentType: 'application/json',
            recordId,
            recordsUpdateRequest: { record: params.record },
            xSkipWorkflows: params.xSkipWorkflows,
            xSkipWebhooks: params.xSkipWebhooks,
          }),
          {
            'fulcrum.record_id': recordId,
            'fulcrum.skip_workflows': params.xSkipWorkflows || false,
            'fulcrum.skip_webhooks': params.xSkipWebhooks || false,
          },
        ),

      /**
       * Delete a record
       */
      delete: (recordId: string) =>
        this.withSpan('Records.delete', () =>
          api.recordsDelete({ recordId }),
          { 'fulcrum.record_id': recordId },
        ),

      /**
       * Get record history
       */
      getHistory: (recordId: string, params: Omit<DefaultApiRecordsGetHistoryRequest, 'recordId'> = {}) =>
        this.withSpan('Records.getHistory', () =>
          api.recordsGetHistory({ recordId, ...params }),
          { 'fulcrum.record_id': recordId },
        ),

      /**
       * Get all records history
       */
      getAllHistory: (params: DefaultApiRecordsGetAllHistoryRequest = {}) =>
        this.withSpan('Records.getAllHistory', () =>
          api.recordsGetAllHistory(params),
        ),
    } as const;
  }

  /**
   * Forms API
   */
  get forms() {
    const api = this.api;
    return {
      getAll: (params: FormsGetAllParams = {}) =>
        this.withSpan('Forms.getAll', () =>
          api.formsGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),

      create: (params: FormsCreateParams) =>
        this.withSpan('Forms.create', () =>
          api.formsCreate({
            accept: 'application/json',
            contentType: 'application/json',
            formsCreateRequest: { form: params.form },
          }),
          params.form.name ? { 'fulcrum.form_name': params.form.name } : undefined,
        ),

      update: (formId: string, params: FormsUpdateParams) =>
        this.withSpan('Forms.update', () =>
          api.formsUpdate({
            accept: 'application/json',
            contentType: 'application/json',
            formId,
            formsUpdateRequest: { form: params.form },
          }),
          { 'fulcrum.form_id': formId },
        ),

      delete: (formId: string) =>
        this.withSpan('Forms.delete', () =>
          api.formsDelete({ formId }),
          { 'fulcrum.form_id': formId },
        ),
    } as const;
  }

  /**
   * Projects API
   */
  get projects() {
    const api = this.api;
    return {
      getAll: (params: ProjectsGetAllParams = {}) =>
        this.withSpan('Projects.getAll', () =>
          api.projectsGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),

      create: (params: ProjectsCreateParams) =>
        this.withSpan('Projects.create', () =>
          api.projectsCreate({
            accept: 'application/json',
            contentType: 'application/json',
            projectsCreateRequest: { project: params.project },
          }),
          params.project.name ? { 'fulcrum.project_name': params.project.name } : undefined,
        ),

      update: (projectId: string, params: ProjectsUpdateParams) =>
        this.withSpan('Projects.update', () =>
          api.projectsUpdate({
            accept: 'application/json',
            contentType: 'application/json',
            projectId,
            projectsUpdateRequest: { project: params.project },
          }),
          { 'fulcrum.project_id': projectId },
        ),

      delete: (projectId: string) =>
        this.withSpan('Projects.delete', () =>
          api.projectsDelete({ projectId }),
          { 'fulcrum.project_id': projectId },
        ),
    } as const;
  }

  /**
   * Webhooks API
   */
  get webhooks() {
    const api = this.api;
    return {
      getAll: (params: WebhooksGetAllParams = {}) =>
        this.withSpan('Webhooks.getAll', () =>
          api.webhooksGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),

      create: (params: WebhooksCreateParams) =>
        this.withSpan('Webhooks.create', () =>
          api.webhooksCreate({
            accept: 'application/json',
            contentType: 'application/json',
            webhooksCreateRequest: { webhook: params.webhook },
          }),
          params.webhook.name ? { 'fulcrum.webhook_name': params.webhook.name } : undefined,
        ),

      update: (webhookId: string, params: WebhooksUpdateParams) =>
        this.withSpan('Webhooks.update', () =>
          api.webhooksUpdate({
            accept: 'application/json',
            contentType: 'application/json',
            webhookId,
            webhooksUpdateRequest: { webhook: params.webhook },
          }),
          { 'fulcrum.webhook_id': webhookId },
        ),

      delete: (webhookId: string) =>
        this.withSpan('Webhooks.delete', () =>
          api.webhooksDelete({ webhookId }),
          { 'fulcrum.webhook_id': webhookId },
        ),
    } as const;
  }

  /**
   * Query API
   * Note: Accept header IS exposed here since it's meaningful (json/csv/geojson)
   */
  get query() {
    const api = this.api;
    return {
      get: (params: QueryGetParams) =>
        this.withSpan('Query.get', () =>
          api.queryGet({
            accept: params.accept || 'application/json',
            ...params,
          }),
          {
            'fulcrum.query.format': params.accept || 'application/json',
            'fulcrum.query.sql': params.q || '',
          },
        ),

      post: (params: QueryPostParams) =>
        this.withSpan('Query.post', () =>
          api.queryPost({
            accept: params.accept || 'application/json',
            ...params,
          }),
          {
            'fulcrum.query.format': params.accept || 'application/json',
            'fulcrum.query.sql': params.queryPostRequest?.q || '',
          },
        ),
    } as const;
  }

  /**
   * Audit Logs API
   */
  get auditLogs() {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiAuditLogsGetAllRequest, 'accept'> = {}) =>
        this.withSpan('AuditLogs.getAll', () =>
          api.auditLogsGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),
    } as const;
  }

  /**
   * Authorizations API
   */
  get authorizations() {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiAuthorizationsGetAllRequest, 'accept'> = {}) =>
        this.withSpan('Authorizations.getAll', () =>
          api.authorizationsGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),
    } as const;
  }

  /**
   * Changesets API
   */
  get changesets() {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiChangesetsGetAllRequest, 'accept'> = {}) =>
        this.withSpan('Changesets.getAll', () =>
          api.changesetsGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),
    } as const;
  }

  /**
   * Choice Lists API
   */
  get choiceLists() {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiChoiceListsGetAllRequest, 'accept'> = {}) =>
        this.withSpan('ChoiceLists.getAll', () =>
          api.choiceListsGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),
    } as const;
  }

  /**
   * Classification Sets API
   */
  get classificationSets() {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiClassificationSetsGetAllRequest, 'accept'> = {}) =>
        this.withSpan('ClassificationSets.getAll', () =>
          api.classificationSetsGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),
    } as const;
  }

  /**
   * Layers API
   */
  get layers() {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiLayersGetAllRequest, 'accept'> = {}) =>
        this.withSpan('Layers.getAll', () =>
          api.layersGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),
    } as const;
  }

  /**
   * Memberships API
   */
  get memberships() {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiMembershipsGetAllRequest, 'accept'> = {}) =>
        this.withSpan('Memberships.getAll', () =>
          api.membershipsGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),
    } as const;
  }

  /**
   * Roles API
   */
  get roles() {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiRolesGetAllRequest, 'accept'> = {}) =>
        this.withSpan('Roles.getAll', () =>
          api.rolesGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),
    } as const;
  }
}
