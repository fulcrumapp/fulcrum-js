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
  DefaultApiAuditLogsGetSingleRequest,
  DefaultApiAuthorizationsGetAllRequest,
  DefaultApiAuthorizationsGetSingleRequest,
  DefaultApiAuthorizationsCreateRequest,
  DefaultApiAuthorizationsUpdateRequest,
  DefaultApiAuthorizationsDeleteRequest,
  DefaultApiChangesetsGetAllRequest,
  DefaultApiChangesetsGetSingleRequest,
  DefaultApiChangesetsCreateRequest,
  DefaultApiChangesetsUpdateRequest,
  DefaultApiChangesetsCloseRequest,
  DefaultApiChoiceListsGetAllRequest,
  DefaultApiChoiceListsGetSingleRequest,
  DefaultApiChoiceListsCreateRequest,
  DefaultApiChoiceListsUpdateRequest,
  DefaultApiChoiceListsDeleteRequest,
  DefaultApiClassificationSetsGetAllRequest,
  DefaultApiClassificationSetsGetSingleRequest,
  DefaultApiClassificationSetsCreateRequest,
  DefaultApiClassificationSetsUpdateRequest,
  DefaultApiClassificationSetsDeleteRequest,
  DefaultApiLayersGetAllRequest,
  DefaultApiLayersGetSingleRequest,
  DefaultApiLayersCreateRequest,
  DefaultApiLayersUpdateRequest,
  DefaultApiLayersDeleteRequest,
  DefaultApiMembershipsGetAllRequest,
  DefaultApiMembershipsGetSingleRequest,
  DefaultApiMembershipsChangePermissionsRequest,
  DefaultApiCreateMemberRequest,
  DefaultApiDeleteMemberRequest,
  DefaultApiUpdateMemberRequest,
  DefaultApiGetAllMembershipsRequest,
  DefaultApiRolesGetAllRequest,
  DefaultApiGetAllGroupsRequest,
  DefaultApiGetSingleGroupRequest,
  DefaultApiCreateGroupRequest,
  DefaultApiUpdateGroupNameDescriptionRequest,
  DefaultApiDeleteGroupRequest,
  DefaultApiGetGroupResourceRequest,
  DefaultApiUpdateGroupPermissionsRequest,
  DefaultApiGetAllWorkflowsRequest,
  DefaultApiGetSingleWorkflowRequest,
  DefaultApiCreateWorkflowRequest,
  DefaultApiUpdateWorkflowRequest,
  DefaultApiDeleteWorkflowRequest,
  DefaultApiGetAllReportTemplatesRequest,
  DefaultApiGetSingleReportTemplateRequest,
  DefaultApiCreateReportTemplateRequest,
  DefaultApiUpdateReportTemplateRequest,
  DefaultApiDeleteReportTemplateRequest,
  DefaultApiGetAllBatchesRequest,
  DefaultApiGetSingleBatchRequest,
  DefaultApiCreateBatchRequest,
  DefaultApiAddBatchOperationsRequest,
  DefaultApiStartBatchRequest,
  DefaultApiGetAllAttachmentsRequest,
  DefaultApiGetSingleAttachmentRequest,
  DefaultApiCreateAttachmentRequest,
  DefaultApiFinalizeAttachmentRequest,
  DefaultApiDeleteAttachmentRequest,
  DefaultApiPhotosGetAllMetadataRequest,
  DefaultApiPhotosGetSingleFileRequest,
  DefaultApiPhotosGetSingleMetadataRequest,
  DefaultApiPhotosLargeFileRequest,
  DefaultApiPhotosLargeMetadataRequest,
  DefaultApiPhotosThumbnailFileRequest,
  DefaultApiPhotosThumbnailMetadataRequest,
  DefaultApiPhotosUploadRequest,
  DefaultApiSignaturesGetAllRequest,
  DefaultApiSignaturesGetSingleFileRequest,
  DefaultApiSignaturesGetSingleMetadataRequest,
  DefaultApiSignaturesGetThumbnailFileRequest,
  DefaultApiSignaturesGetThumbnailMetadataRequest,
  DefaultApiSignaturesUploadRequest,
  DefaultApiVideosGetAllRequest,
  DefaultApiVideosGetAllTracksGeojsonRequest,
  DefaultApiVideosGetAllTracksGpxRequest,
  DefaultApiVideosGetAllTracksKmlRequest,
  DefaultApiVideosGetMediumFileRequest,
  DefaultApiVideosGetOriginalFileRequest,
  DefaultApiVideosGetSingleMetadataRequest,
  DefaultApiVideosGetSingleTrackGeojsonRequest,
  DefaultApiVideosGetSingleTrackGpxRequest,
  DefaultApiVideosGetSingleTrackJsonRequest,
  DefaultApiVideosGetSingleTrackKmlRequest,
  DefaultApiVideosGetSmallFileRequest,
  DefaultApiVideosGetThumbnailHugeRequest,
  DefaultApiVideosGetThumbnailHugeSquareRequest,
  DefaultApiVideosGetThumbnailLargeRequest,
  DefaultApiVideosGetThumbnailLargeSquareRequest,
  DefaultApiVideosGetThumbnailMediumRequest,
  DefaultApiVideosGetThumbnailMediumSquareRequest,
  DefaultApiVideosGetThumbnailSmallRequest,
  DefaultApiVideosGetThumbnailSmallSquareRequest,
  DefaultApiVideosUploadRequest,
  DefaultApiAudioGetAllRequest,
  DefaultApiAudioGetAllTracksGeojsonRequest,
  DefaultApiAudioGetAllTracksGpxRequest,
  DefaultApiAudioGetAllTracksJsonRequest,
  DefaultApiAudioGetAllTracksKmlRequest,
  DefaultApiAudioGetOriginalFileRequest,
  DefaultApiAudioGetSingleMetadataRequest,
  DefaultApiAudioGetSingleTrackGeojsonRequest,
  DefaultApiAudioGetSingleTrackGpxRequest,
  DefaultApiAudioGetSingleTrackJsonRequest,
  DefaultApiAudioGetSingleTrackKmlRequest,
  DefaultApiAudioUploadRequest,
  DefaultApiFormsGetSingleRequest,
  DefaultApiFormsGetHistoryRequest,
  DefaultApiProjectsGetSingleRequest,
  DefaultApiWebhooksGetSingleRequest,
  DefaultApiUsersGetUserRequest,
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
  get records(): {
    getAll: (params?: RecordsGetAllParams) => Promise<unknown>;
    getById: (recordId: string, params?: Omit<RecordsGetSingleParams, 'recordId'>) => Promise<unknown>;
    create: (params: RecordsCreateParams) => Promise<unknown>;
    update: (recordId: string, params: RecordsUpdateParams) => Promise<unknown>;
    delete: (recordId: string) => Promise<unknown>;
    getHistory: (recordId: string, params?: Omit<DefaultApiRecordsGetHistoryRequest, 'recordId'>) => Promise<unknown>;
    getAllHistory: (params?: DefaultApiRecordsGetAllHistoryRequest) => Promise<unknown>;
  } {
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
  get forms(): {
    getAll: (params?: FormsGetAllParams) => Promise<unknown>;
    getById: (formId: string, params?: Omit<DefaultApiFormsGetSingleRequest, 'formId' | 'accept'>) => Promise<unknown>;
    getHistory: (formId: string, params?: Omit<DefaultApiFormsGetHistoryRequest, 'formId' | 'accept'>) => Promise<unknown>;
    create: (params: FormsCreateParams) => Promise<unknown>;
    update: (formId: string, params: FormsUpdateParams) => Promise<unknown>;
    delete: (formId: string) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAll: (params: FormsGetAllParams = {}) =>
        this.withSpan('Forms.getAll', () =>
          api.formsGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),

      getById: (formId: string, params: Omit<DefaultApiFormsGetSingleRequest, 'formId' | 'accept'> = {}) =>
        this.withSpan('Forms.getById', () =>
          api.formsGetSingle({
            accept: 'application/json',
            formId,
            ...params,
          }),
          { 'fulcrum.form_id': formId },
        ),

      getHistory: (formId: string, params: Omit<DefaultApiFormsGetHistoryRequest, 'formId' | 'accept'> = {}) =>
        this.withSpan('Forms.getHistory', () =>
          api.formsGetHistory({
            accept: 'application/json',
            formId,
            ...params,
          }),
          { 'fulcrum.form_id': formId },
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
  get projects(): {
    getAll: (params?: ProjectsGetAllParams) => Promise<unknown>;
    getById: (projectId: string, params?: Omit<DefaultApiProjectsGetSingleRequest, 'projectId' | 'accept'>) => Promise<unknown>;
    create: (params: ProjectsCreateParams) => Promise<unknown>;
    update: (projectId: string, params: ProjectsUpdateParams) => Promise<unknown>;
    delete: (projectId: string) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAll: (params: ProjectsGetAllParams = {}) =>
        this.withSpan('Projects.getAll', () =>
          api.projectsGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),

      getById: (projectId: string, params: Omit<DefaultApiProjectsGetSingleRequest, 'projectId' | 'accept'> = {}) =>
        this.withSpan('Projects.getById', () =>
          api.projectsGetSingle({
            accept: 'application/json',
            projectId,
            ...params,
          }),
          { 'fulcrum.project_id': projectId },
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
  get webhooks(): {
    getAll: (params?: WebhooksGetAllParams) => Promise<unknown>;
    getById: (webhookId: string, params?: Omit<DefaultApiWebhooksGetSingleRequest, 'webhookId' | 'accept'>) => Promise<unknown>;
    create: (params: WebhooksCreateParams) => Promise<unknown>;
    update: (webhookId: string, params: WebhooksUpdateParams) => Promise<unknown>;
    delete: (webhookId: string) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAll: (params: WebhooksGetAllParams = {}) =>
        this.withSpan('Webhooks.getAll', () =>
          api.webhooksGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),

      getById: (webhookId: string, params: Omit<DefaultApiWebhooksGetSingleRequest, 'webhookId' | 'accept'> = {}) =>
        this.withSpan('Webhooks.getById', () =>
          api.webhooksGetSingle({
            accept: 'application/json',
            webhookId,
            ...params,
          }),
          { 'fulcrum.webhook_id': webhookId },
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
  get query(): {
    get: (params: QueryGetParams) => Promise<unknown>;
    post: (params: QueryPostParams) => Promise<unknown>;
  } {
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
  get auditLogs(): {
    getAll: (params?: Omit<DefaultApiAuditLogsGetAllRequest, 'accept'>) => Promise<unknown>;
    getById: (auditLogId: string, params?: Omit<DefaultApiAuditLogsGetSingleRequest, 'auditLogId' | 'accept'>) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiAuditLogsGetAllRequest, 'accept'> = {}) =>
        this.withSpan('AuditLogs.getAll', () =>
          api.auditLogsGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),

      getById: (auditLogId: string, params: Omit<DefaultApiAuditLogsGetSingleRequest, 'auditLogId' | 'accept'> = {}) =>
        this.withSpan('AuditLogs.getById', () =>
          api.auditLogsGetSingle({
            accept: 'application/json',
            auditLogId,
            ...params,
          }),
          { 'fulcrum.audit_log_id': auditLogId },
        ),
    } as const;
  }

  /**
   * Authorizations API
   */
  get authorizations(): {
    getAll: (params?: Omit<DefaultApiAuthorizationsGetAllRequest, 'accept'>) => Promise<unknown>;
    getById: (authorizationId: string, params?: Omit<DefaultApiAuthorizationsGetSingleRequest, 'authorizationId' | 'accept'>) => Promise<unknown>;
    create: (params?: Omit<DefaultApiAuthorizationsCreateRequest, 'accept' | 'contentType'>) => Promise<unknown>;
    update: (authorizationId: string, params?: Omit<DefaultApiAuthorizationsUpdateRequest, 'authorizationId' | 'accept' | 'contentType'>) => Promise<unknown>;
    delete: (authorizationId: string, params?: Omit<DefaultApiAuthorizationsDeleteRequest, 'authorizationId' | 'accept'>) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiAuthorizationsGetAllRequest, 'accept'> = {}) =>
        this.withSpan('Authorizations.getAll', () =>
          api.authorizationsGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),

      getById: (authorizationId: string, params: Omit<DefaultApiAuthorizationsGetSingleRequest, 'authorizationId' | 'accept'> = {}) =>
        this.withSpan('Authorizations.getById', () =>
          api.authorizationsGetSingle({
            accept: 'application/json',
            authorizationId,
            ...params,
          }),
          { 'fulcrum.authorization_id': authorizationId },
        ),

      create: (params: Omit<DefaultApiAuthorizationsCreateRequest, 'accept' | 'contentType'> = {}) =>
        this.withSpan('Authorizations.create', () =>
          api.authorizationsCreate({
            accept: 'application/json',
            contentType: 'application/json',
            ...params,
          }),
        ),

      update: (authorizationId: string, params: Omit<DefaultApiAuthorizationsUpdateRequest, 'authorizationId' | 'accept' | 'contentType'> = {}) =>
        this.withSpan('Authorizations.update', () =>
          api.authorizationsUpdate({
            accept: 'application/json',
            contentType: 'application/json',
            authorizationId,
            ...params,
          }),
          { 'fulcrum.authorization_id': authorizationId },
        ),

      delete: (authorizationId: string, params: Omit<DefaultApiAuthorizationsDeleteRequest, 'authorizationId' | 'accept'> = {}) =>
        this.withSpan('Authorizations.delete', () =>
          api.authorizationsDelete({
            accept: 'application/json',
            authorizationId,
            ...params,
          }),
          { 'fulcrum.authorization_id': authorizationId },
        ),
    } as const;
  }

  /**
   * Changesets API
   */
  get changesets(): {
    getAll: (params?: Omit<DefaultApiChangesetsGetAllRequest, 'accept'>) => Promise<unknown>;
    getById: (changesetId: string, params?: Omit<DefaultApiChangesetsGetSingleRequest, 'changesetId' | 'accept'>) => Promise<unknown>;
    create: (params?: Omit<DefaultApiChangesetsCreateRequest, 'accept' | 'contentType'>) => Promise<unknown>;
    update: (changesetId: string, params?: Omit<DefaultApiChangesetsUpdateRequest, 'changesetId' | 'accept' | 'contentType'>) => Promise<unknown>;
    close: (changesetId: string, params?: Omit<DefaultApiChangesetsCloseRequest, 'changesetId' | 'accept'>) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiChangesetsGetAllRequest, 'accept'> = {}) =>
        this.withSpan('Changesets.getAll', () =>
          api.changesetsGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),

      getById: (changesetId: string, params: Omit<DefaultApiChangesetsGetSingleRequest, 'changesetId' | 'accept'> = {}) =>
        this.withSpan('Changesets.getById', () =>
          api.changesetsGetSingle({
            accept: 'application/json',
            changesetId,
            ...params,
          }),
          { 'fulcrum.changeset_id': changesetId },
        ),

      create: (params: Omit<DefaultApiChangesetsCreateRequest, 'accept' | 'contentType'> = {}) =>
        this.withSpan('Changesets.create', () =>
          api.changesetsCreate({
            accept: 'application/json',
            contentType: 'application/json',
            ...params,
          }),
        ),

      update: (changesetId: string, params: Omit<DefaultApiChangesetsUpdateRequest, 'changesetId' | 'accept' | 'contentType'> = {}) =>
        this.withSpan('Changesets.update', () =>
          api.changesetsUpdate({
            accept: 'application/json',
            contentType: 'application/json',
            changesetId,
            ...params,
          }),
          { 'fulcrum.changeset_id': changesetId },
        ),

      close: (changesetId: string, params: Omit<DefaultApiChangesetsCloseRequest, 'changesetId' | 'accept'> = {}) =>
        this.withSpan('Changesets.close', () =>
          api.changesetsClose({
            accept: 'application/json',
            changesetId,
            ...params,
          }),
          { 'fulcrum.changeset_id': changesetId },
        ),
    } as const;
  }

  /**
   * Choice Lists API
   */
  get choiceLists(): {
    getAll: (params?: Omit<DefaultApiChoiceListsGetAllRequest, 'accept'>) => Promise<unknown>;
    getById: (choiceListId: string, params?: Omit<DefaultApiChoiceListsGetSingleRequest, 'choiceListId' | 'accept'>) => Promise<unknown>;
    create: (params?: Omit<DefaultApiChoiceListsCreateRequest, 'accept' | 'contentType'>) => Promise<unknown>;
    update: (choiceListId: string, params?: Omit<DefaultApiChoiceListsUpdateRequest, 'choiceListId' | 'accept' | 'contentType'>) => Promise<unknown>;
    delete: (choiceListId: string, params?: Omit<DefaultApiChoiceListsDeleteRequest, 'choiceListId' | 'accept'>) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiChoiceListsGetAllRequest, 'accept'> = {}) =>
        this.withSpan('ChoiceLists.getAll', () =>
          api.choiceListsGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),

      getById: (choiceListId: string, params: Omit<DefaultApiChoiceListsGetSingleRequest, 'choiceListId' | 'accept'> = {}) =>
        this.withSpan('ChoiceLists.getById', () =>
          api.choiceListsGetSingle({
            accept: 'application/json',
            choiceListId,
            ...params,
          }),
          { 'fulcrum.choice_list_id': choiceListId },
        ),

      create: (params: Omit<DefaultApiChoiceListsCreateRequest, 'accept' | 'contentType'> = {}) =>
        this.withSpan('ChoiceLists.create', () =>
          api.choiceListsCreate({
            accept: 'application/json',
            contentType: 'application/json',
            ...params,
          }),
        ),

      update: (choiceListId: string, params: Omit<DefaultApiChoiceListsUpdateRequest, 'choiceListId' | 'accept' | 'contentType'> = {}) =>
        this.withSpan('ChoiceLists.update', () =>
          api.choiceListsUpdate({
            accept: 'application/json',
            contentType: 'application/json',
            choiceListId,
            ...params,
          }),
          { 'fulcrum.choice_list_id': choiceListId },
        ),

      delete: (choiceListId: string, params: Omit<DefaultApiChoiceListsDeleteRequest, 'choiceListId' | 'accept'> = {}) =>
        this.withSpan('ChoiceLists.delete', () =>
          api.choiceListsDelete({
            accept: 'application/json',
            choiceListId,
            ...params,
          }),
          { 'fulcrum.choice_list_id': choiceListId },
        ),
    } as const;
  }

  /**
   * Classification Sets API
   */
  get classificationSets(): {
    getAll: (params?: Omit<DefaultApiClassificationSetsGetAllRequest, 'accept'>) => Promise<unknown>;
    getById: (classificationSetId: string, params?: Omit<DefaultApiClassificationSetsGetSingleRequest, 'classificationSetId' | 'accept'>) => Promise<unknown>;
    create: (params?: Omit<DefaultApiClassificationSetsCreateRequest, 'accept' | 'contentType'>) => Promise<unknown>;
    update: (classificationSetId: string, params?: Omit<DefaultApiClassificationSetsUpdateRequest, 'classificationSetId' | 'accept' | 'contentType'>) => Promise<unknown>;
    delete: (classificationSetId: string, params?: Omit<DefaultApiClassificationSetsDeleteRequest, 'classificationSetId' | 'accept'>) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiClassificationSetsGetAllRequest, 'accept'> = {}) =>
        this.withSpan('ClassificationSets.getAll', () =>
          api.classificationSetsGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),

      getById: (classificationSetId: string, params: Omit<DefaultApiClassificationSetsGetSingleRequest, 'classificationSetId' | 'accept'> = {}) =>
        this.withSpan('ClassificationSets.getById', () =>
          api.classificationSetsGetSingle({
            accept: 'application/json',
            classificationSetId,
            ...params,
          }),
          { 'fulcrum.classification_set_id': classificationSetId },
        ),

      create: (params: Omit<DefaultApiClassificationSetsCreateRequest, 'accept' | 'contentType'> = {}) =>
        this.withSpan('ClassificationSets.create', () =>
          api.classificationSetsCreate({
            accept: 'application/json',
            contentType: 'application/json',
            ...params,
          }),
        ),

      update: (classificationSetId: string, params: Omit<DefaultApiClassificationSetsUpdateRequest, 'classificationSetId' | 'accept' | 'contentType'> = {}) =>
        this.withSpan('ClassificationSets.update', () =>
          api.classificationSetsUpdate({
            accept: 'application/json',
            contentType: 'application/json',
            classificationSetId,
            ...params,
          }),
          { 'fulcrum.classification_set_id': classificationSetId },
        ),

      delete: (classificationSetId: string, params: Omit<DefaultApiClassificationSetsDeleteRequest, 'classificationSetId' | 'accept'> = {}) =>
        this.withSpan('ClassificationSets.delete', () =>
          api.classificationSetsDelete({
            accept: 'application/json',
            classificationSetId,
            ...params,
          }),
          { 'fulcrum.classification_set_id': classificationSetId },
        ),
    } as const;
  }

  /**
   * Layers API
   */
  get layers(): {
    getAll: (params?: Omit<DefaultApiLayersGetAllRequest, 'accept'>) => Promise<unknown>;
    getById: (layerId: string, params?: Omit<DefaultApiLayersGetSingleRequest, 'layerId' | 'accept'>) => Promise<unknown>;
    create: (params?: Omit<DefaultApiLayersCreateRequest, 'accept' | 'contentType'>) => Promise<unknown>;
    update: (layerId: string, params?: Omit<DefaultApiLayersUpdateRequest, 'layerId' | 'accept' | 'contentType'>) => Promise<unknown>;
    delete: (layerId: string, params?: Omit<DefaultApiLayersDeleteRequest, 'layerId' | 'accept'>) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiLayersGetAllRequest, 'accept'> = {}) =>
        this.withSpan('Layers.getAll', () =>
          api.layersGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),

      getById: (layerId: string, params: Omit<DefaultApiLayersGetSingleRequest, 'layerId' | 'accept'> = {}) =>
        this.withSpan('Layers.getById', () =>
          api.layersGetSingle({
            accept: 'application/json',
            layerId,
            ...params,
          }),
          { 'fulcrum.layer_id': layerId },
        ),

      create: (params: Omit<DefaultApiLayersCreateRequest, 'accept' | 'contentType'> = {}) =>
        this.withSpan('Layers.create', () =>
          api.layersCreate({
            accept: 'application/json',
            contentType: 'application/json',
            ...params,
          }),
        ),

      update: (layerId: string, params: Omit<DefaultApiLayersUpdateRequest, 'layerId' | 'accept' | 'contentType'> = {}) =>
        this.withSpan('Layers.update', () =>
          api.layersUpdate({
            accept: 'application/json',
            contentType: 'application/json',
            layerId,
            ...params,
          }),
          { 'fulcrum.layer_id': layerId },
        ),

      delete: (layerId: string, params: Omit<DefaultApiLayersDeleteRequest, 'layerId' | 'accept'> = {}) =>
        this.withSpan('Layers.delete', () =>
          api.layersDelete({
            accept: 'application/json',
            layerId,
            ...params,
          }),
          { 'fulcrum.layer_id': layerId },
        ),
    } as const;
  }

  /**
   * Memberships API
   */
  get memberships(): {
    getAll: (params?: Omit<DefaultApiMembershipsGetAllRequest, 'accept'>) => Promise<unknown>;
    getById: (membershipId: string, params?: Omit<DefaultApiMembershipsGetSingleRequest, 'membershipId' | 'accept'>) => Promise<unknown>;
    changePermissions: (params?: Omit<DefaultApiMembershipsChangePermissionsRequest, 'accept' | 'contentType'>) => Promise<unknown>;
    create: (params?: Omit<DefaultApiCreateMemberRequest, 'accept' | 'contentType'>) => Promise<unknown>;
    update: (membershipId: string, params?: Omit<DefaultApiUpdateMemberRequest, 'membershipId'>) => Promise<unknown>;
    delete: (membershipId: string, params?: Omit<DefaultApiDeleteMemberRequest, 'membershipId'>) => Promise<unknown>;
    getAllForObject: (type: string, objectId: string, params?: Omit<DefaultApiGetAllMembershipsRequest, 'type' | 'objectId' | 'accept'>) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiMembershipsGetAllRequest, 'accept'> = {}) =>
        this.withSpan('Memberships.getAll', () =>
          api.membershipsGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),

      getById: (membershipId: string, params: Omit<DefaultApiMembershipsGetSingleRequest, 'membershipId' | 'accept'> = {}) =>
        this.withSpan('Memberships.getById', () =>
          api.membershipsGetSingle({
            accept: 'application/json',
            membershipId,
            ...params,
          }),
          { 'fulcrum.membership_id': membershipId },
        ),

      changePermissions: (params: Omit<DefaultApiMembershipsChangePermissionsRequest, 'accept' | 'contentType'> = {}) =>
        this.withSpan('Memberships.changePermissions', () =>
          api.membershipsChangePermissions({
            accept: 'application/json',
            contentType: 'application/json',
            ...params,
          }),
        ),

      create: (params: Omit<DefaultApiCreateMemberRequest, 'accept' | 'contentType'> = {}) =>
        this.withSpan('Memberships.create', () =>
          api.createMember({
            accept: 'application/json',
            contentType: 'application/json',
            ...params,
          }),
        ),

      update: (membershipId: string, params: Omit<DefaultApiUpdateMemberRequest, 'membershipId'> = {}) =>
        this.withSpan('Memberships.update', () =>
          api.updateMember({
            membershipId,
            ...params,
          }),
          { 'fulcrum.membership_id': membershipId },
        ),

      delete: (membershipId: string, params: Omit<DefaultApiDeleteMemberRequest, 'membershipId'> = {}) =>
        this.withSpan('Memberships.delete', () =>
          api.deleteMember({
            membershipId,
            ...params,
          }),
          { 'fulcrum.membership_id': membershipId },
        ),

      getAllForObject: (type: string, objectId: string, params: Omit<DefaultApiGetAllMembershipsRequest, 'type' | 'objectId' | 'accept'> = {}) =>
        this.withSpan('Memberships.getAllForObject', () =>
          api.getAllMemberships({
            accept: 'application/json',
            type,
            objectId,
            ...params,
          }),
          { 'fulcrum.membership_type': type, 'fulcrum.object_id': objectId },
        ),
    } as const;
  }

  /**
   * Roles API
   */
  get roles(): {
    getAll: (params?: Omit<DefaultApiRolesGetAllRequest, 'accept'>) => Promise<unknown>;
  } {
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

  /**
   * Groups API
   */
  get groups(): {
    getAll: (params?: DefaultApiGetAllGroupsRequest) => Promise<unknown>;
    getById: (groupId: string, params?: Omit<DefaultApiGetSingleGroupRequest, 'groupId'>) => Promise<unknown>;
    create: (params?: Omit<DefaultApiCreateGroupRequest, 'accept' | 'contentType'>) => Promise<unknown>;
    update: (groupId: string, params?: Omit<DefaultApiUpdateGroupNameDescriptionRequest, 'groupId' | 'accept' | 'contentType'>) => Promise<unknown>;
    delete: (groupId: string, params?: Omit<DefaultApiDeleteGroupRequest, 'groupId' | 'accept'>) => Promise<unknown>;
    getResource: (groupId: string, resource: string, params?: Omit<DefaultApiGetGroupResourceRequest, 'groupId' | 'resource' | 'accept'>) => Promise<unknown>;
    updatePermissions: (params?: Omit<DefaultApiUpdateGroupPermissionsRequest, 'accept' | 'contentType'>) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAll: (params: DefaultApiGetAllGroupsRequest = {}) =>
        this.withSpan('Groups.getAll', () =>
          api.getAllGroups(params),
        ),

      getById: (groupId: string, params: Omit<DefaultApiGetSingleGroupRequest, 'groupId'> = {}) =>
        this.withSpan('Groups.getById', () =>
          api.getSingleGroup({
            groupId,
            ...params,
          }),
          { 'fulcrum.group_id': groupId },
        ),

      create: (params: Omit<DefaultApiCreateGroupRequest, 'accept' | 'contentType'> = {}) =>
        this.withSpan('Groups.create', () =>
          api.createGroup({
            accept: 'application/json',
            contentType: 'application/json',
            ...params,
          }),
        ),

      update: (groupId: string, params: Omit<DefaultApiUpdateGroupNameDescriptionRequest, 'groupId' | 'accept' | 'contentType'> = {}) =>
        this.withSpan('Groups.update', () =>
          api.updateGroupNameDescription({
            accept: 'application/json',
            contentType: 'application/json',
            groupId,
            ...params,
          }),
          { 'fulcrum.group_id': groupId },
        ),

      delete: (groupId: string, params: Omit<DefaultApiDeleteGroupRequest, 'groupId' | 'accept'> = {}) =>
        this.withSpan('Groups.delete', () =>
          api.deleteGroup({
            accept: 'application/json',
            groupId,
            ...params,
          }),
          { 'fulcrum.group_id': groupId },
        ),

      getResource: (groupId: string, resource: string, params: Omit<DefaultApiGetGroupResourceRequest, 'groupId' | 'resource' | 'accept'> = {}) =>
        this.withSpan('Groups.getResource', () =>
          api.getGroupResource({
            accept: 'application/json',
            groupId,
            resource,
            ...params,
          }),
          { 'fulcrum.group_id': groupId, 'fulcrum.resource': resource },
        ),

      updatePermissions: (params: Omit<DefaultApiUpdateGroupPermissionsRequest, 'accept' | 'contentType'> = {}) =>
        this.withSpan('Groups.updatePermissions', () =>
          api.updateGroupPermissions({
            accept: 'application/json',
            contentType: 'application/json',
            ...params,
          }),
        ),
    } as const;
  }

  /**
   * Workflows API
   */
  get workflows(): {
    getAll: (params?: Omit<DefaultApiGetAllWorkflowsRequest, 'accept'>) => Promise<unknown>;
    getById: (workflowId: string, params?: Omit<DefaultApiGetSingleWorkflowRequest, 'workflowId' | 'accept'>) => Promise<unknown>;
    create: (params?: Omit<DefaultApiCreateWorkflowRequest, 'accept' | 'contentTyoe'>) => Promise<unknown>;
    update: (workflowId: string, params?: Omit<DefaultApiUpdateWorkflowRequest, 'workflowId' | 'accept' | 'contentTyoe'>) => Promise<unknown>;
    delete: (workflowId: string, params?: Omit<DefaultApiDeleteWorkflowRequest, 'workflowId' | 'accept'>) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiGetAllWorkflowsRequest, 'accept'> = {}) =>
        this.withSpan('Workflows.getAll', () =>
          api.getAllWorkflows({
            accept: 'application/json',
            ...params,
          }),
        ),

      getById: (workflowId: string, params: Omit<DefaultApiGetSingleWorkflowRequest, 'workflowId' | 'accept'> = {}) =>
        this.withSpan('Workflows.getById', () =>
          api.getSingleWorkflow({
            accept: 'application/json',
            workflowId,
            ...params,
          }),
          { 'fulcrum.workflow_id': workflowId },
        ),

      create: (params: Omit<DefaultApiCreateWorkflowRequest, 'accept' | 'contentTyoe'> = {}) =>
        this.withSpan('Workflows.create', () =>
          api.createWorkflow({
            accept: 'application/json',
            contentTyoe: 'application/json',
            ...params,
          }),
        ),

      update: (workflowId: string, params: Omit<DefaultApiUpdateWorkflowRequest, 'workflowId' | 'accept' | 'contentTyoe'> = {}) =>
        this.withSpan('Workflows.update', () =>
          api.updateWorkflow({
            accept: 'application/json',
            contentTyoe: 'application/json',
            workflowId,
            ...params,
          }),
          { 'fulcrum.workflow_id': workflowId },
        ),

      delete: (workflowId: string, params: Omit<DefaultApiDeleteWorkflowRequest, 'workflowId' | 'accept'> = {}) =>
        this.withSpan('Workflows.delete', () =>
          api.deleteWorkflow({
            accept: 'application/json',
            workflowId,
            ...params,
          }),
          { 'fulcrum.workflow_id': workflowId },
        ),
    } as const;
  }

  /**
   * Report Templates API
   */
  get reportTemplates(): {
    getAll: (params?: DefaultApiGetAllReportTemplatesRequest) => Promise<unknown>;
    getById: (id: string, params?: Omit<DefaultApiGetSingleReportTemplateRequest, 'id'>) => Promise<unknown>;
    create: (params?: DefaultApiCreateReportTemplateRequest) => Promise<unknown>;
    update: (id: string, params?: Omit<DefaultApiUpdateReportTemplateRequest, 'id'>) => Promise<unknown>;
    delete: (id: string, params?: Omit<DefaultApiDeleteReportTemplateRequest, 'id'>) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAll: (params: DefaultApiGetAllReportTemplatesRequest = {}) =>
        this.withSpan('ReportTemplates.getAll', () =>
          api.getAllReportTemplates(params),
        ),

      getById: (id: string, params: Omit<DefaultApiGetSingleReportTemplateRequest, 'id'> = {}) =>
        this.withSpan('ReportTemplates.getById', () =>
          api.getSingleReportTemplate({
            id,
            ...params,
          }),
          { 'fulcrum.report_template_id': id },
        ),

      create: (params: DefaultApiCreateReportTemplateRequest = {}) =>
        this.withSpan('ReportTemplates.create', () =>
          api.createReportTemplate(params),
        ),

      update: (id: string, params: Omit<DefaultApiUpdateReportTemplateRequest, 'id'> = {}) =>
        this.withSpan('ReportTemplates.update', () =>
          api.updateReportTemplate({
            id,
            ...params,
          }),
          { 'fulcrum.report_template_id': id },
        ),

      delete: (id: string, params: Omit<DefaultApiDeleteReportTemplateRequest, 'id'> = {}) =>
        this.withSpan('ReportTemplates.delete', () =>
          api.deleteReportTemplate({
            id,
            ...params,
          }),
          { 'fulcrum.report_template_id': id },
        ),
    } as const;
  }

  /**
   * Batches API
   */
  get batches(): {
    getAll: (params?: DefaultApiGetAllBatchesRequest) => Promise<unknown>;
    getById: (batchId: string, params?: Omit<DefaultApiGetSingleBatchRequest, 'batchId'>) => Promise<unknown>;
    create: (params?: DefaultApiCreateBatchRequest) => Promise<unknown>;
    addOperations: (batchId: string, params?: Omit<DefaultApiAddBatchOperationsRequest, 'batchId'>) => Promise<unknown>;
    start: (batchId: string, params?: Omit<DefaultApiStartBatchRequest, 'batchId'>) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAll: (params: DefaultApiGetAllBatchesRequest = {}) =>
        this.withSpan('Batches.getAll', () =>
          api.getAllBatches(params),
        ),

      getById: (batchId: string, params: Omit<DefaultApiGetSingleBatchRequest, 'batchId'> = {}) =>
        this.withSpan('Batches.getById', () =>
          api.getSingleBatch({
            batchId,
            ...params,
          }),
          { 'fulcrum.batch_id': batchId },
        ),

      create: (params: DefaultApiCreateBatchRequest = {}) =>
        this.withSpan('Batches.create', () =>
          api.createBatch(params),
        ),

      addOperations: (batchId: string, params: Omit<DefaultApiAddBatchOperationsRequest, 'batchId'> = {}) =>
        this.withSpan('Batches.addOperations', () =>
          api.addBatchOperations({
            batchId,
            ...params,
          }),
          { 'fulcrum.batch_id': batchId },
        ),

      start: (batchId: string, params: Omit<DefaultApiStartBatchRequest, 'batchId'> = {}) =>
        this.withSpan('Batches.start', () =>
          api.startBatch({
            batchId,
            ...params,
          }),
          { 'fulcrum.batch_id': batchId },
        ),
    } as const;
  }

  /**
   * Attachments API
   */
  get attachments(): {
    getAll: (params?: DefaultApiGetAllAttachmentsRequest) => Promise<unknown>;
    getById: (attachmentId: string, params?: Omit<DefaultApiGetSingleAttachmentRequest, 'attachmentId'>) => Promise<unknown>;
    create: (params?: DefaultApiCreateAttachmentRequest) => Promise<unknown>;
    delete: (attachmentId: string, params?: Omit<DefaultApiDeleteAttachmentRequest, 'attachmentId'>) => Promise<unknown>;
    finalize: (params?: DefaultApiFinalizeAttachmentRequest) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAll: (params: DefaultApiGetAllAttachmentsRequest = {}) =>
        this.withSpan('Attachments.getAll', () =>
          api.getAllAttachments(params),
        ),

      getById: (attachmentId: string, params: Omit<DefaultApiGetSingleAttachmentRequest, 'attachmentId'> = {}) =>
        this.withSpan('Attachments.getById', () =>
          api.getSingleAttachment({
            attachmentId,
            ...params,
          }),
          { 'fulcrum.attachment_id': attachmentId },
        ),

      create: (params: DefaultApiCreateAttachmentRequest = {}) =>
        this.withSpan('Attachments.create', () =>
          api.createAttachment(params),
        ),

      finalize: (params: DefaultApiFinalizeAttachmentRequest = {}) =>
        this.withSpan('Attachments.finalize', () =>
          api.finalizeAttachment(params),
        ),

      delete: (attachmentId: string, params: Omit<DefaultApiDeleteAttachmentRequest, 'attachmentId'> = {}) =>
        this.withSpan('Attachments.delete', () =>
          api.deleteAttachment({
            attachmentId,
            ...params,
          }),
          { 'fulcrum.attachment_id': attachmentId },
        ),
    } as const;
  }

  /**
   * Users API
   */
  get users(): {
    getUser: (params?: Omit<DefaultApiUsersGetUserRequest, 'accept'>) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getUser: (params: Omit<DefaultApiUsersGetUserRequest, 'accept'> = {}) =>
        this.withSpan('Users.getUser', () =>
          api.usersGetUser({
            accept: 'application/json',
            ...params,
          }),
        ),
    } as const;
  }

  /**
   * Photos API
   */
  get photos(): {
    getAllMetadata: (params?: Omit<DefaultApiPhotosGetAllMetadataRequest, 'accept'>) => Promise<unknown>;
    getSingleFile: (photoId: string, params?: Omit<DefaultApiPhotosGetSingleFileRequest, 'photoId' | 'accept'>) => Promise<unknown>;
    getSingleMetadata: (photoId: string, params?: Omit<DefaultApiPhotosGetSingleMetadataRequest, 'photoId' | 'accept'>) => Promise<unknown>;
    getLargeFile: (photoId: string, params?: Omit<DefaultApiPhotosLargeFileRequest, 'photoId' | 'accept'>) => Promise<unknown>;
    getLargeMetadata: (photoId: string, params?: Omit<DefaultApiPhotosLargeMetadataRequest, 'photoId' | 'accept'>) => Promise<unknown>;
    getThumbnailFile: (photoId: string, params?: Omit<DefaultApiPhotosThumbnailFileRequest, 'photoId' | 'accept'>) => Promise<unknown>;
    getThumbnailMetadata: (photoId: string, params?: Omit<DefaultApiPhotosThumbnailMetadataRequest, 'photoId' | 'accept'>) => Promise<unknown>;
    upload: (params?: Omit<DefaultApiPhotosUploadRequest, 'accept' | 'contentType'>) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAllMetadata: (params: Omit<DefaultApiPhotosGetAllMetadataRequest, 'accept'> = {}) =>
        this.withSpan('Photos.getAllMetadata', () =>
          api.photosGetAllMetadata({
            accept: 'application/json',
            ...params,
          }),
        ),

      getSingleFile: (photoId: string, params: Omit<DefaultApiPhotosGetSingleFileRequest, 'photoId' | 'accept'> = {}) =>
        this.withSpan('Photos.getSingleFile', () =>
          api.photosGetSingleFile({
            accept: 'application/json',
            photoId,
            ...params,
          }),
          { 'fulcrum.photo_id': photoId },
        ),

      getSingleMetadata: (photoId: string, params: Omit<DefaultApiPhotosGetSingleMetadataRequest, 'photoId' | 'accept'> = {}) =>
        this.withSpan('Photos.getSingleMetadata', () =>
          api.photosGetSingleMetadata({
            accept: 'application/json',
            photoId,
            ...params,
          }),
          { 'fulcrum.photo_id': photoId },
        ),

      getLargeFile: (photoId: string, params: Omit<DefaultApiPhotosLargeFileRequest, 'photoId' | 'accept'> = {}) =>
        this.withSpan('Photos.getLargeFile', () =>
          api.photosLargeFile({
            accept: 'application/json',
            photoId,
            ...params,
          }),
          { 'fulcrum.photo_id': photoId },
        ),

      getLargeMetadata: (photoId: string, params: Omit<DefaultApiPhotosLargeMetadataRequest, 'photoId' | 'accept'> = {}) =>
        this.withSpan('Photos.getLargeMetadata', () =>
          api.photosLargeMetadata({
            accept: 'application/json',
            photoId,
            ...params,
          }),
          { 'fulcrum.photo_id': photoId },
        ),

      getThumbnailFile: (photoId: string, params: Omit<DefaultApiPhotosThumbnailFileRequest, 'photoId' | 'accept'> = {}) =>
        this.withSpan('Photos.getThumbnailFile', () =>
          api.photosThumbnailFile({
            accept: 'application/json',
            photoId,
            ...params,
          }),
          { 'fulcrum.photo_id': photoId },
        ),

      getThumbnailMetadata: (photoId: string, params: Omit<DefaultApiPhotosThumbnailMetadataRequest, 'photoId' | 'accept'> = {}) =>
        this.withSpan('Photos.getThumbnailMetadata', () =>
          api.photosThumbnailMetadata({
            accept: 'application/json',
            photoId,
            ...params,
          }),
          { 'fulcrum.photo_id': photoId },
        ),

      upload: (params: Omit<DefaultApiPhotosUploadRequest, 'accept' | 'contentType'> = {}) =>
        this.withSpan('Photos.upload', () =>
          api.photosUpload({
            accept: 'application/json',
            contentType: 'application/json',
            ...params,
          }),
        ),
    } as const;
  }

  /**
   * Signatures API
   */
  get signatures(): {
    getAll: (params?: Omit<DefaultApiSignaturesGetAllRequest, 'accept'>) => Promise<unknown>;
    getSingleFile: (signatureId: string, params?: Omit<DefaultApiSignaturesGetSingleFileRequest, 'signatureId' | 'accept'>) => Promise<unknown>;
    getSingleMetadata: (signatureId: string, params?: Omit<DefaultApiSignaturesGetSingleMetadataRequest, 'signatureId' | 'accept'>) => Promise<unknown>;
    getThumbnailFile: (signatureId: string, params?: Omit<DefaultApiSignaturesGetThumbnailFileRequest, 'signatureId' | 'accept'>) => Promise<unknown>;
    getThumbnailMetadata: (signatureId: string, params?: Omit<DefaultApiSignaturesGetThumbnailMetadataRequest, 'signatureId' | 'accept'>) => Promise<unknown>;
    upload: (params?: Omit<DefaultApiSignaturesUploadRequest, 'accept' | 'contentType'>) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiSignaturesGetAllRequest, 'accept'> = {}) =>
        this.withSpan('Signatures.getAll', () =>
          api.signaturesGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),

      getSingleFile: (signatureId: string, params: Omit<DefaultApiSignaturesGetSingleFileRequest, 'signatureId' | 'accept'> = {}) =>
        this.withSpan('Signatures.getSingleFile', () =>
          api.signaturesGetSingleFile({
            accept: 'application/json',
            signatureId,
            ...params,
          }),
          { 'fulcrum.signature_id': signatureId },
        ),

      getSingleMetadata: (signatureId: string, params: Omit<DefaultApiSignaturesGetSingleMetadataRequest, 'signatureId' | 'accept'> = {}) =>
        this.withSpan('Signatures.getSingleMetadata', () =>
          api.signaturesGetSingleMetadata({
            accept: 'application/json',
            signatureId,
            ...params,
          }),
          { 'fulcrum.signature_id': signatureId },
        ),

      getThumbnailFile: (signatureId: string, params: Omit<DefaultApiSignaturesGetThumbnailFileRequest, 'signatureId' | 'accept'> = {}) =>
        this.withSpan('Signatures.getThumbnailFile', () =>
          api.signaturesGetThumbnailFile({
            accept: 'application/json',
            signatureId,
            ...params,
          }),
          { 'fulcrum.signature_id': signatureId },
        ),

      getThumbnailMetadata: (signatureId: string, params: Omit<DefaultApiSignaturesGetThumbnailMetadataRequest, 'signatureId' | 'accept'> = {}) =>
        this.withSpan('Signatures.getThumbnailMetadata', () =>
          api.signaturesGetThumbnailMetadata({
            accept: 'application/json',
            signatureId,
            ...params,
          }),
          { 'fulcrum.signature_id': signatureId },
        ),

      upload: (params: Omit<DefaultApiSignaturesUploadRequest, 'accept' | 'contentType'> = {}) =>
        this.withSpan('Signatures.upload', () =>
          api.signaturesUpload({
            accept: 'application/json',
            contentType: 'application/json',
            ...params,
          }),
        ),
    } as const;
  }

  /**
   * Videos API
   */
  get videos(): {
    getAll: (params?: Omit<DefaultApiVideosGetAllRequest, 'accept'>) => Promise<unknown>;
    getAllTracksGeojson: (params?: Omit<DefaultApiVideosGetAllTracksGeojsonRequest, 'accept'>) => Promise<unknown>;
    getAllTracksGpx: (params?: Omit<DefaultApiVideosGetAllTracksGpxRequest, 'accept'>) => Promise<unknown>;
    getAllTracksKml: (params?: Omit<DefaultApiVideosGetAllTracksKmlRequest, 'accept'>) => Promise<unknown>;
    getMediumFile: (videoId: string, params?: Omit<DefaultApiVideosGetMediumFileRequest, 'videoId' | 'accept'>) => Promise<unknown>;
    getOriginalFile: (videoId: string, params?: Omit<DefaultApiVideosGetOriginalFileRequest, 'videoId' | 'accept'>) => Promise<unknown>;
    getSingleMetadata: (videoId: string, params?: Omit<DefaultApiVideosGetSingleMetadataRequest, 'videoId' | 'accept'>) => Promise<unknown>;
    getSingleTrackGeojson: (videoId: string, params?: Omit<DefaultApiVideosGetSingleTrackGeojsonRequest, 'videoId' | 'accept'>) => Promise<unknown>;
    getSingleTrackGpx: (videoId: string, params?: Omit<DefaultApiVideosGetSingleTrackGpxRequest, 'videoId' | 'accept'>) => Promise<unknown>;
    getSingleTrackJson: (videoId: string, params?: Omit<DefaultApiVideosGetSingleTrackJsonRequest, 'videoId' | 'accept'>) => Promise<unknown>;
    getSingleTrackKml: (videoId: string, params?: Omit<DefaultApiVideosGetSingleTrackKmlRequest, 'videoId' | 'accept'>) => Promise<unknown>;
    getSmallFile: (videoId: string, params?: Omit<DefaultApiVideosGetSmallFileRequest, 'videoId' | 'accept'>) => Promise<unknown>;
    getThumbnailHuge: (videoId: string, params?: Omit<DefaultApiVideosGetThumbnailHugeRequest, 'videoId' | 'accept'>) => Promise<unknown>;
    getThumbnailHugeSquare: (videoId: string, params?: Omit<DefaultApiVideosGetThumbnailHugeSquareRequest, 'videoId' | 'accept'>) => Promise<unknown>;
    getThumbnailLarge: (videoId: string, params?: Omit<DefaultApiVideosGetThumbnailLargeRequest, 'videoId' | 'accept'>) => Promise<unknown>;
    getThumbnailLargeSquare: (videoId: string, params?: Omit<DefaultApiVideosGetThumbnailLargeSquareRequest, 'videoId' | 'accept'>) => Promise<unknown>;
    getThumbnailMedium: (videoId: string, params?: Omit<DefaultApiVideosGetThumbnailMediumRequest, 'videoId' | 'accept'>) => Promise<unknown>;
    getThumbnailMediumSquare: (videoId: string, params?: Omit<DefaultApiVideosGetThumbnailMediumSquareRequest, 'videoId' | 'accept'>) => Promise<unknown>;
    getThumbnailSmall: (videoId: string, params?: Omit<DefaultApiVideosGetThumbnailSmallRequest, 'videoId' | 'accept'>) => Promise<unknown>;
    getThumbnailSmallSquare: (videoId: string, params?: Omit<DefaultApiVideosGetThumbnailSmallSquareRequest, 'videoId' | 'accept'>) => Promise<unknown>;
    upload: (params?: Omit<DefaultApiVideosUploadRequest, 'accept' | 'contentType'>) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiVideosGetAllRequest, 'accept'> = {}) =>
        this.withSpan('Videos.getAll', () =>
          api.videosGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),

      getAllTracksGeojson: (params: Omit<DefaultApiVideosGetAllTracksGeojsonRequest, 'accept'> = {}) =>
        this.withSpan('Videos.getAllTracksGeojson', () =>
          api.videosGetAllTracksGeojson({
            accept: 'application/json',
            ...params,
          }),
        ),

      getAllTracksGpx: (params: Omit<DefaultApiVideosGetAllTracksGpxRequest, 'accept'> = {}) =>
        this.withSpan('Videos.getAllTracksGpx', () =>
          api.videosGetAllTracksGpx({
            accept: 'application/json',
            ...params,
          }),
        ),

      getAllTracksKml: (params: Omit<DefaultApiVideosGetAllTracksKmlRequest, 'accept'> = {}) =>
        this.withSpan('Videos.getAllTracksKml', () =>
          api.videosGetAllTracksKml({
            accept: 'application/json',
            ...params,
          }),
        ),

      getMediumFile: (videoId: string, params: Omit<DefaultApiVideosGetMediumFileRequest, 'videoId' | 'accept'> = {}) =>
        this.withSpan('Videos.getMediumFile', () =>
          api.videosGetMediumFile({
            accept: 'application/json',
            videoId,
            ...params,
          }),
          { 'fulcrum.video_id': videoId },
        ),

      getOriginalFile: (videoId: string, params: Omit<DefaultApiVideosGetOriginalFileRequest, 'videoId' | 'accept'> = {}) =>
        this.withSpan('Videos.getOriginalFile', () =>
          api.videosGetOriginalFile({
            accept: 'application/json',
            videoId,
            ...params,
          }),
          { 'fulcrum.video_id': videoId },
        ),

      getSingleMetadata: (videoId: string, params: Omit<DefaultApiVideosGetSingleMetadataRequest, 'videoId' | 'accept'> = {}) =>
        this.withSpan('Videos.getSingleMetadata', () =>
          api.videosGetSingleMetadata({
            accept: 'application/json',
            videoId,
            ...params,
          }),
          { 'fulcrum.video_id': videoId },
        ),

      getSingleTrackGeojson: (videoId: string, params: Omit<DefaultApiVideosGetSingleTrackGeojsonRequest, 'videoId' | 'accept'> = {}) =>
        this.withSpan('Videos.getSingleTrackGeojson', () =>
          api.videosGetSingleTrackGeojson({
            accept: 'application/json',
            videoId,
            ...params,
          }),
          { 'fulcrum.video_id': videoId },
        ),

      getSingleTrackGpx: (videoId: string, params: Omit<DefaultApiVideosGetSingleTrackGpxRequest, 'videoId' | 'accept'> = {}) =>
        this.withSpan('Videos.getSingleTrackGpx', () =>
          api.videosGetSingleTrackGpx({
            accept: 'application/json',
            videoId,
            ...params,
          }),
          { 'fulcrum.video_id': videoId },
        ),

      getSingleTrackJson: (videoId: string, params: Omit<DefaultApiVideosGetSingleTrackJsonRequest, 'videoId' | 'accept'> = {}) =>
        this.withSpan('Videos.getSingleTrackJson', () =>
          api.videosGetSingleTrackJson({
            accept: 'application/json',
            videoId,
            ...params,
          }),
          { 'fulcrum.video_id': videoId },
        ),

      getSingleTrackKml: (videoId: string, params: Omit<DefaultApiVideosGetSingleTrackKmlRequest, 'videoId' | 'accept'> = {}) =>
        this.withSpan('Videos.getSingleTrackKml', () =>
          api.videosGetSingleTrackKml({
            accept: 'application/json',
            videoId,
            ...params,
          }),
          { 'fulcrum.video_id': videoId },
        ),

      getSmallFile: (videoId: string, params: Omit<DefaultApiVideosGetSmallFileRequest, 'videoId' | 'accept'> = {}) =>
        this.withSpan('Videos.getSmallFile', () =>
          api.videosGetSmallFile({
            accept: 'application/json',
            videoId,
            ...params,
          }),
          { 'fulcrum.video_id': videoId },
        ),

      getThumbnailHuge: (videoId: string, params: Omit<DefaultApiVideosGetThumbnailHugeRequest, 'videoId' | 'accept'> = {}) =>
        this.withSpan('Videos.getThumbnailHuge', () =>
          api.videosGetThumbnailHuge({
            accept: 'application/json',
            videoId,
            ...params,
          }),
          { 'fulcrum.video_id': videoId },
        ),

      getThumbnailHugeSquare: (videoId: string, params: Omit<DefaultApiVideosGetThumbnailHugeSquareRequest, 'videoId' | 'accept'> = {}) =>
        this.withSpan('Videos.getThumbnailHugeSquare', () =>
          api.videosGetThumbnailHugeSquare({
            accept: 'application/json',
            videoId,
            ...params,
          }),
          { 'fulcrum.video_id': videoId },
        ),

      getThumbnailLarge: (videoId: string, params: Omit<DefaultApiVideosGetThumbnailLargeRequest, 'videoId' | 'accept'> = {}) =>
        this.withSpan('Videos.getThumbnailLarge', () =>
          api.videosGetThumbnailLarge({
            accept: 'application/json',
            videoId,
            ...params,
          }),
          { 'fulcrum.video_id': videoId },
        ),

      getThumbnailLargeSquare: (videoId: string, params: Omit<DefaultApiVideosGetThumbnailLargeSquareRequest, 'videoId' | 'accept'> = {}) =>
        this.withSpan('Videos.getThumbnailLargeSquare', () =>
          api.videosGetThumbnailLargeSquare({
            accept: 'application/json',
            videoId,
            ...params,
          }),
          { 'fulcrum.video_id': videoId },
        ),

      getThumbnailMedium: (videoId: string, params: Omit<DefaultApiVideosGetThumbnailMediumRequest, 'videoId' | 'accept'> = {}) =>
        this.withSpan('Videos.getThumbnailMedium', () =>
          api.videosGetThumbnailMedium({
            accept: 'application/json',
            videoId,
            ...params,
          }),
          { 'fulcrum.video_id': videoId },
        ),

      getThumbnailMediumSquare: (videoId: string, params: Omit<DefaultApiVideosGetThumbnailMediumSquareRequest, 'videoId' | 'accept'> = {}) =>
        this.withSpan('Videos.getThumbnailMediumSquare', () =>
          api.videosGetThumbnailMediumSquare({
            accept: 'application/json',
            videoId,
            ...params,
          }),
          { 'fulcrum.video_id': videoId },
        ),

      getThumbnailSmall: (videoId: string, params: Omit<DefaultApiVideosGetThumbnailSmallRequest, 'videoId' | 'accept'> = {}) =>
        this.withSpan('Videos.getThumbnailSmall', () =>
          api.videosGetThumbnailSmall({
            accept: 'application/json',
            videoId,
            ...params,
          }),
          { 'fulcrum.video_id': videoId },
        ),

      getThumbnailSmallSquare: (videoId: string, params: Omit<DefaultApiVideosGetThumbnailSmallSquareRequest, 'videoId' | 'accept'> = {}) =>
        this.withSpan('Videos.getThumbnailSmallSquare', () =>
          api.videosGetThumbnailSmallSquare({
            accept: 'application/json',
            videoId,
            ...params,
          }),
          { 'fulcrum.video_id': videoId },
        ),

      upload: (params: Omit<DefaultApiVideosUploadRequest, 'accept' | 'contentType'> = {}) =>
        this.withSpan('Videos.upload', () =>
          api.videosUpload({
            accept: 'application/json',
            contentType: 'application/json',
            ...params,
          }),
        ),
    } as const;
  }

  /**
   * Audio API
   */
  get audio(): {
    getAll: (params?: Omit<DefaultApiAudioGetAllRequest, 'accept'>) => Promise<unknown>;
    getAllTracksGeojson: (params?: Omit<DefaultApiAudioGetAllTracksGeojsonRequest, 'accept'>) => Promise<unknown>;
    getAllTracksGpx: (params?: Omit<DefaultApiAudioGetAllTracksGpxRequest, 'accept'>) => Promise<unknown>;
    getAllTracksJson: (params?: Omit<DefaultApiAudioGetAllTracksJsonRequest, 'accept'>) => Promise<unknown>;
    getAllTracksKml: (params?: Omit<DefaultApiAudioGetAllTracksKmlRequest, 'accept'>) => Promise<unknown>;
    getOriginalFile: (audioId: string, params?: Omit<DefaultApiAudioGetOriginalFileRequest, 'audioId' | 'accept'>) => Promise<unknown>;
    getSingleMetadata: (audioId: string, params?: Omit<DefaultApiAudioGetSingleMetadataRequest, 'audioId' | 'accept'>) => Promise<unknown>;
    getSingleTrackGeojson: (audioId: string, params?: Omit<DefaultApiAudioGetSingleTrackGeojsonRequest, 'audioId' | 'accept'>) => Promise<unknown>;
    getSingleTrackGpx: (audioId: string, params?: Omit<DefaultApiAudioGetSingleTrackGpxRequest, 'audioId' | 'accept'>) => Promise<unknown>;
    getSingleTrackJson: (audioId: string, params?: Omit<DefaultApiAudioGetSingleTrackJsonRequest, 'audioId' | 'accept'>) => Promise<unknown>;
    getSingleTrackKml: (audioId: string, params?: Omit<DefaultApiAudioGetSingleTrackKmlRequest, 'audioId' | 'accept'>) => Promise<unknown>;
    upload: (params?: Omit<DefaultApiAudioUploadRequest, 'accept' | 'contentType'>) => Promise<unknown>;
  } {
    const api = this.api;
    return {
      getAll: (params: Omit<DefaultApiAudioGetAllRequest, 'accept'> = {}) =>
        this.withSpan('Audio.getAll', () =>
          api.audioGetAll({
            accept: 'application/json',
            ...params,
          }),
        ),

      getAllTracksGeojson: (params: Omit<DefaultApiAudioGetAllTracksGeojsonRequest, 'accept'> = {}) =>
        this.withSpan('Audio.getAllTracksGeojson', () =>
          api.audioGetAllTracksGeojson({
            accept: 'application/json',
            ...params,
          }),
        ),

      getAllTracksGpx: (params: Omit<DefaultApiAudioGetAllTracksGpxRequest, 'accept'> = {}) =>
        this.withSpan('Audio.getAllTracksGpx', () =>
          api.audioGetAllTracksGpx({
            accept: 'application/json',
            ...params,
          }),
        ),

      getAllTracksJson: (params: Omit<DefaultApiAudioGetAllTracksJsonRequest, 'accept'> = {}) =>
        this.withSpan('Audio.getAllTracksJson', () =>
          api.audioGetAllTracksJson({
            accept: 'application/json',
            ...params,
          }),
        ),

      getAllTracksKml: (params: Omit<DefaultApiAudioGetAllTracksKmlRequest, 'accept'> = {}) =>
        this.withSpan('Audio.getAllTracksKml', () =>
          api.audioGetAllTracksKml({
            accept: 'application/json',
            ...params,
          }),
        ),

      getOriginalFile: (audioId: string, params: Omit<DefaultApiAudioGetOriginalFileRequest, 'audioId' | 'accept'> = {}) =>
        this.withSpan('Audio.getOriginalFile', () =>
          api.audioGetOriginalFile({
            accept: 'application/json',
            audioId,
            ...params,
          }),
          { 'fulcrum.audio_id': audioId },
        ),

      getSingleMetadata: (audioId: string, params: Omit<DefaultApiAudioGetSingleMetadataRequest, 'audioId' | 'accept'> = {}) =>
        this.withSpan('Audio.getSingleMetadata', () =>
          api.audioGetSingleMetadata({
            accept: 'application/json',
            audioId,
            ...params,
          }),
          { 'fulcrum.audio_id': audioId },
        ),

      getSingleTrackGeojson: (audioId: string, params: Omit<DefaultApiAudioGetSingleTrackGeojsonRequest, 'audioId' | 'accept'> = {}) =>
        this.withSpan('Audio.getSingleTrackGeojson', () =>
          api.audioGetSingleTrackGeojson({
            accept: 'application/json',
            audioId,
            ...params,
          }),
          { 'fulcrum.audio_id': audioId },
        ),

      getSingleTrackGpx: (audioId: string, params: Omit<DefaultApiAudioGetSingleTrackGpxRequest, 'audioId' | 'accept'> = {}) =>
        this.withSpan('Audio.getSingleTrackGpx', () =>
          api.audioGetSingleTrackGpx({
            accept: 'application/json',
            audioId,
            ...params,
          }),
          { 'fulcrum.audio_id': audioId },
        ),

      getSingleTrackJson: (audioId: string, params: Omit<DefaultApiAudioGetSingleTrackJsonRequest, 'audioId' | 'accept'> = {}) =>
        this.withSpan('Audio.getSingleTrackJson', () =>
          api.audioGetSingleTrackJson({
            accept: 'application/json',
            audioId,
            ...params,
          }),
          { 'fulcrum.audio_id': audioId },
        ),

      getSingleTrackKml: (audioId: string, params: Omit<DefaultApiAudioGetSingleTrackKmlRequest, 'audioId' | 'accept'> = {}) =>
        this.withSpan('Audio.getSingleTrackKml', () =>
          api.audioGetSingleTrackKml({
            accept: 'application/json',
            audioId,
            ...params,
          }),
          { 'fulcrum.audio_id': audioId },
        ),

      upload: (params: Omit<DefaultApiAudioUploadRequest, 'accept' | 'contentType'> = {}) =>
        this.withSpan('Audio.upload', () =>
          api.audioUpload({
            accept: 'application/json',
            contentType: 'application/json',
            ...params,
          }),
        ),
    } as const;
  }
}
