import { DefaultApi, Configuration } from '../generated/dist/index.js';
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
  US = 'https://api.fulcrumapp.com/api/v2',
  /** Australia */
  AU = 'https://api.fulcrumapp-au.com/api/v2',
  /** Canada */
  CA = 'https://api.fulcrumapp-ca.com/api/v2',
  /** European Union */
  EU = 'https://api.fulcrumapp-eu.com/api/v2',
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

  constructor(options: FulcrumClientOptions) {
    this.options = options;

    const configParams: ConfigurationParameters = {
      apiKey: options.apiKey,
      basePath: options.region,
      baseOptions: {
        headers: {
          ...(options.userAgent && { 'User-Agent': options.userAgent }),
          'X-ApiToken': options.apiKey,
        },
      },
    };

    this.config = new Configuration(configParams);
    this.api = new DefaultApi(this.config);
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
        api.recordsGetAll({
          accept: 'application/json',
          ...params,
        }),

      /**
       * Get a single record by ID
       */
      getById: (recordId: string, params: Omit<RecordsGetSingleParams, 'recordId'> = {}) =>
        api.recordsGetSingle({
          accept: 'application/json',
          recordId,
          ...params,
        }),

      /**
       * Create a new record
       */
      create: (params: RecordsCreateParams) =>
        api.recordsCreate({
          accept: 'application/json',
          contentType: 'application/json',
          recordsCreateRequest: { record: params.record },
          xSkipWorkflows: params.xSkipWorkflows,
          xSkipWebhooks: params.xSkipWebhooks,
        }),

      /**
       * Update a record
       */
      update: (recordId: string, params: RecordsUpdateParams) =>
        api.recordsUpdate({
          accept: 'application/json',
          contentType: 'application/json',
          recordId,
          recordsUpdateRequest: { record: params.record },
          xSkipWorkflows: params.xSkipWorkflows,
          xSkipWebhooks: params.xSkipWebhooks,
        }),

      /**
       * Delete a record
       */
      delete: (recordId: string) =>
        api.recordsDelete({ recordId }),

      /**
       * Get record history
       */
      getHistory: (recordId: string, params: Omit<DefaultApiRecordsGetHistoryRequest, 'recordId'> = {}) =>
        api.recordsGetHistory({ recordId, ...params }),

      /**
       * Get all records history
       */
      getAllHistory: (params: DefaultApiRecordsGetAllHistoryRequest = {}) =>
        api.recordsGetAllHistory(params),
    } as const;
  }

  /**
   * Forms API
   */
  get forms() {
    const api = this.api;
    return {
      getAll: (params: FormsGetAllParams = {}) =>
        api.formsGetAll({
          accept: 'application/json',
          ...params,
        }),

      create: (params: FormsCreateParams) =>
        api.formsCreate({
          accept: 'application/json',
          contentType: 'application/json',
          formsCreateRequest: { form: params.form },
        }),

      update: (formId: string, params: FormsUpdateParams) =>
        api.formsUpdate({
          accept: 'application/json',
          contentType: 'application/json',
          formId,
          formsUpdateRequest: { form: params.form },
        }),

      delete: (formId: string) =>
        api.formsDelete({ formId }),
    } as const;
  }

  /**
   * Projects API
   */
  get projects() {
    const api = this.api;
    return {
      getAll: (params: ProjectsGetAllParams = {}) =>
        api.projectsGetAll({
          accept: 'application/json',
          ...params,
        }),

      create: (params: ProjectsCreateParams) =>
        api.projectsCreate({
          accept: 'application/json',
          contentType: 'application/json',
          projectsCreateRequest: { project: params.project },
        }),

      update: (projectId: string, params: ProjectsUpdateParams) =>
        api.projectsUpdate({
          accept: 'application/json',
          contentType: 'application/json',
          projectId,
          projectsUpdateRequest: { project: params.project },
        }),

      delete: (projectId: string) =>
        api.projectsDelete({ projectId }),
    } as const;
  }

  /**
   * Webhooks API
   */
  get webhooks() {
    const api = this.api;
    return {
      getAll: (params: WebhooksGetAllParams = {}) =>
        api.webhooksGetAll({
          accept: 'application/json',
          ...params,
        }),

      create: (params: WebhooksCreateParams) =>
        api.webhooksCreate({
          accept: 'application/json',
          contentType: 'application/json',
          webhooksCreateRequest: { webhook: params.webhook },
        }),

      update: (webhookId: string, params: WebhooksUpdateParams) =>
        api.webhooksUpdate({
          accept: 'application/json',
          contentType: 'application/json',
          webhookId,
          webhooksUpdateRequest: { webhook: params.webhook },
        }),

      delete: (webhookId: string) =>
        api.webhooksDelete({ webhookId }),
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
        api.queryGet({
          accept: params.accept || 'application/json',
          ...params,
        }),

      post: (params: QueryPostParams) =>
        api.queryPost({
          accept: params.accept || 'application/json',
          ...params,
        }),
    } as const;
  }
}
