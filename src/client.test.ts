import { FulcrumClient, FulcrumRegion } from '../src/client';

// Mock the generated API
jest.mock('../generated/dist/index.js', () => {
  const mockApi = {
    recordsGetAll: jest.fn().mockResolvedValue({ data: { records: [] } }),
    recordsGetSingle: jest.fn().mockResolvedValue({ data: { record: {} } }),
    recordsCreate: jest.fn().mockResolvedValue({ data: { record: {} } }),
    recordsUpdate: jest.fn().mockResolvedValue({ data: { record: {} } }),
    recordsDelete: jest.fn().mockResolvedValue({ data: {} }),
    recordsGetHistory: jest.fn().mockResolvedValue({ data: { history: [] } }),
    recordsGetAllHistory: jest.fn().mockResolvedValue({ data: { history: [] } }),

    formsGetAll: jest.fn().mockResolvedValue({ data: { forms: [] } }),
    formsCreate: jest.fn().mockResolvedValue({ data: { form: {} } }),
    formsUpdate: jest.fn().mockResolvedValue({ data: { form: {} } }),
    formsDelete: jest.fn().mockResolvedValue({ data: {} }),

    projectsGetAll: jest.fn().mockResolvedValue({ data: { projects: [] } }),
    projectsCreate: jest.fn().mockResolvedValue({ data: { project: {} } }),
    projectsUpdate: jest.fn().mockResolvedValue({ data: { project: {} } }),
    projectsDelete: jest.fn().mockResolvedValue({ data: {} }),

    webhooksGetAll: jest.fn().mockResolvedValue({ data: { webhooks: [] } }),
    webhooksCreate: jest.fn().mockResolvedValue({ data: { webhook: {} } }),
    webhooksUpdate: jest.fn().mockResolvedValue({ data: { webhook: {} } }),
    webhooksDelete: jest.fn().mockResolvedValue({ data: {} }),

    queryGet: jest.fn().mockResolvedValue({ data: { rows: [] } }),
    queryPost: jest.fn().mockResolvedValue({ data: { rows: [] } }),

    // Audit Logs
    auditLogsGetAll: jest.fn().mockResolvedValue({ data: { audit_logs: [] } }),
    auditLogsGetSingle: jest.fn().mockResolvedValue({ data: { audit_log: {} } }),

    // Authorizations
    authorizationsGetAll: jest.fn().mockResolvedValue({ data: { authorizations: [] } }),
    authorizationsGetSingle: jest.fn().mockResolvedValue({ data: { authorization: {} } }),
    authorizationsCreate: jest.fn().mockResolvedValue({ data: { authorization: {} } }),
    authorizationsUpdate: jest.fn().mockResolvedValue({ data: { authorization: {} } }),
    authorizationsDelete: jest.fn().mockResolvedValue({ data: {} }),

    // Changesets
    changesetsGetAll: jest.fn().mockResolvedValue({ data: { changesets: [] } }),
    changesetsGetSingle: jest.fn().mockResolvedValue({ data: { changeset: {} } }),
    changesetsCreate: jest.fn().mockResolvedValue({ data: { changeset: {} } }),
    changesetsUpdate: jest.fn().mockResolvedValue({ data: { changeset: {} } }),
    changesetsClose: jest.fn().mockResolvedValue({ data: {} }),

    // Choice Lists
    choiceListsGetAll: jest.fn().mockResolvedValue({ data: { choice_lists: [] } }),
    choiceListsGetSingle: jest.fn().mockResolvedValue({ data: { choice_list: {} } }),
    choiceListsCreate: jest.fn().mockResolvedValue({ data: { choice_list: {} } }),
    choiceListsUpdate: jest.fn().mockResolvedValue({ data: { choice_list: {} } }),
    choiceListsDelete: jest.fn().mockResolvedValue({ data: {} }),

    // Classification Sets
    classificationSetsGetAll: jest.fn().mockResolvedValue({ data: { classification_sets: [] } }),
    classificationSetsGetSingle: jest.fn().mockResolvedValue({ data: { classification_set: {} } }),
    classificationSetsCreate: jest.fn().mockResolvedValue({ data: { classification_set: {} } }),
    classificationSetsUpdate: jest.fn().mockResolvedValue({ data: { classification_set: {} } }),
    classificationSetsDelete: jest.fn().mockResolvedValue({ data: {} }),

    // Layers
    layersGetAll: jest.fn().mockResolvedValue({ data: { layers: [] } }),
    layersGetSingle: jest.fn().mockResolvedValue({ data: { layer: {} } }),
    layersCreate: jest.fn().mockResolvedValue({ data: { layer: {} } }),
    layersUpdate: jest.fn().mockResolvedValue({ data: { layer: {} } }),
    layersDelete: jest.fn().mockResolvedValue({ data: {} }),

    // Memberships
    membershipsGetAll: jest.fn().mockResolvedValue({ data: { memberships: [] } }),
    membershipsGetSingle: jest.fn().mockResolvedValue({ data: { membership: {} } }),
    membershipsChangePermissions: jest.fn().mockResolvedValue({ data: {} }),
    createMember: jest.fn().mockResolvedValue({ data: { member: {} } }),
    updateMember: jest.fn().mockResolvedValue({ data: { member: {} } }),
    deleteMember: jest.fn().mockResolvedValue({ data: {} }),
    getAllMemberships: jest.fn().mockResolvedValue({ data: { memberships: [] } }),

    // Roles
    rolesGetAll: jest.fn().mockResolvedValue({ data: { roles: [] } }),

    // Groups
    getAllGroups: jest.fn().mockResolvedValue({ data: { groups: [] } }),
    getSingleGroup: jest.fn().mockResolvedValue({ data: { group: {} } }),
    createGroup: jest.fn().mockResolvedValue({ data: { group: {} } }),
    updateGroupNameDescription: jest.fn().mockResolvedValue({ data: { group: {} } }),
    deleteGroup: jest.fn().mockResolvedValue({ data: {} }),
    getGroupResource: jest.fn().mockResolvedValue({ data: { resources: [] } }),
    updateGroupPermissions: jest.fn().mockResolvedValue({ data: {} }),

    // Workflows
    getAllWorkflows: jest.fn().mockResolvedValue({ data: { workflows: [] } }),
    getSingleWorkflow: jest.fn().mockResolvedValue({ data: { workflow: {} } }),
    createWorkflow: jest.fn().mockResolvedValue({ data: { workflow: {} } }),
    updateWorkflow: jest.fn().mockResolvedValue({ data: { workflow: {} } }),
    deleteWorkflow: jest.fn().mockResolvedValue({ data: {} }),

    // Report Templates
    getAllReportTemplates: jest.fn().mockResolvedValue({ data: { report_templates: [] } }),
    getSingleReportTemplate: jest.fn().mockResolvedValue({ data: { report_template: {} } }),
    createReportTemplate: jest.fn().mockResolvedValue({ data: { report_template: {} } }),
    updateReportTemplate: jest.fn().mockResolvedValue({ data: { report_template: {} } }),
    deleteReportTemplate: jest.fn().mockResolvedValue({ data: {} }),

    // Batches
    getAllBatches: jest.fn().mockResolvedValue({ data: { batches: [] } }),
    getSingleBatch: jest.fn().mockResolvedValue({ data: { batch: {} } }),
    createBatch: jest.fn().mockResolvedValue({ data: { batch: {} } }),
    addBatchOperations: jest.fn().mockResolvedValue({ data: {} }),
    startBatch: jest.fn().mockResolvedValue({ data: {} }),

    // Attachments
    getAllAttachments: jest.fn().mockResolvedValue({ data: { attachments: [] } }),
    getSingleAttachment: jest.fn().mockResolvedValue({ data: { attachment: {} } }),
    createAttachment: jest.fn().mockResolvedValue({ data: { attachment: {} } }),
    finalizeAttachment: jest.fn().mockResolvedValue({ data: {} }),
    deleteAttachment: jest.fn().mockResolvedValue({ data: {} }),

    // Users
    usersGetUser: jest.fn().mockResolvedValue({ data: { user: {} } }),

    // Forms - additional methods
    formsGetSingle: jest.fn().mockResolvedValue({ data: { form: {} } }),
    formsGetHistory: jest.fn().mockResolvedValue({ data: { history: [] } }),

    // Projects - additional methods
    projectsGetSingle: jest.fn().mockResolvedValue({ data: { project: {} } }),

    // Webhooks - additional methods
    webhooksGetSingle: jest.fn().mockResolvedValue({ data: { webhook: {} } }),

    // Photos
    photosGetAllMetadata: jest.fn().mockResolvedValue({ data: { photos: [] } }),
    photosGetSingleMetadata: jest.fn().mockResolvedValue({ data: { photo: {} } }),
    photosGetSingleFile: jest.fn().mockResolvedValue({ data: Buffer.from('photo') }),
    photosLargeMetadata: jest.fn().mockResolvedValue({ data: { photo: {} } }),
    photosLargeFile: jest.fn().mockResolvedValue({ data: Buffer.from('photo') }),
    photosThumbnailMetadata: jest.fn().mockResolvedValue({ data: { photo: {} } }),
    photosThumbnailFile: jest.fn().mockResolvedValue({ data: Buffer.from('photo') }),
    photosUpload: jest.fn().mockResolvedValue({ data: { photo: {} } }),

    // Signatures
    signaturesGetAll: jest.fn().mockResolvedValue({ data: { signatures: [] } }),
    signaturesGetSingleMetadata: jest.fn().mockResolvedValue({ data: { signature: {} } }),
    signaturesGetSingleFile: jest.fn().mockResolvedValue({ data: Buffer.from('signature') }),
    signaturesGetThumbnailMetadata: jest.fn().mockResolvedValue({ data: { signature: {} } }),
    signaturesGetThumbnailFile: jest.fn().mockResolvedValue({ data: Buffer.from('signature') }),
    signaturesUpload: jest.fn().mockResolvedValue({ data: { signature: {} } }),

    // Videos
    videosGetAll: jest.fn().mockResolvedValue({ data: { videos: [] } }),
    videosGetSingleMetadata: jest.fn().mockResolvedValue({ data: { video: {} } }),
    videosGetOriginalFile: jest.fn().mockResolvedValue({ data: Buffer.from('video') }),
    videosGetMediumFile: jest.fn().mockResolvedValue({ data: Buffer.from('video') }),
    videosGetSmallFile: jest.fn().mockResolvedValue({ data: Buffer.from('video') }),
    videosGetThumbnailHuge: jest.fn().mockResolvedValue({ data: Buffer.from('thumb') }),
    videosGetThumbnailHugeSquare: jest.fn().mockResolvedValue({ data: Buffer.from('thumb') }),
    videosGetThumbnailLarge: jest.fn().mockResolvedValue({ data: Buffer.from('thumb') }),
    videosGetThumbnailLargeSquare: jest.fn().mockResolvedValue({ data: Buffer.from('thumb') }),
    videosGetThumbnailMedium: jest.fn().mockResolvedValue({ data: Buffer.from('thumb') }),
    videosGetThumbnailMediumSquare: jest.fn().mockResolvedValue({ data: Buffer.from('thumb') }),
    videosGetThumbnailSmall: jest.fn().mockResolvedValue({ data: Buffer.from('thumb') }),
    videosGetThumbnailSmallSquare: jest.fn().mockResolvedValue({ data: Buffer.from('thumb') }),
    videosGetAllTracksGeojson: jest.fn().mockResolvedValue({ data: { tracks: [] } }),
    videosGetAllTracksGpx: jest.fn().mockResolvedValue({ data: '<gpx>' }),
    videosGetAllTracksKml: jest.fn().mockResolvedValue({ data: '<kml>' }),
    videosGetSingleTrackGeojson: jest.fn().mockResolvedValue({ data: { track: {} } }),
    videosGetSingleTrackGpx: jest.fn().mockResolvedValue({ data: '<gpx>' }),
    videosGetSingleTrackJson: jest.fn().mockResolvedValue({ data: { track: {} } }),
    videosGetSingleTrackKml: jest.fn().mockResolvedValue({ data: '<kml>' }),
    videosUpload: jest.fn().mockResolvedValue({ data: { video: {} } }),

    // Audio
    audioGetAll: jest.fn().mockResolvedValue({ data: { audio: [] } }),
    audioGetSingleMetadata: jest.fn().mockResolvedValue({ data: { audio: {} } }),
    audioGetOriginalFile: jest.fn().mockResolvedValue({ data: Buffer.from('audio') }),
    audioGetAllTracksGeojson: jest.fn().mockResolvedValue({ data: { tracks: [] } }),
    audioGetAllTracksGpx: jest.fn().mockResolvedValue({ data: '<gpx>' }),
    audioGetAllTracksJson: jest.fn().mockResolvedValue({ data: { tracks: [] } }),
    audioGetAllTracksKml: jest.fn().mockResolvedValue({ data: '<kml>' }),
    audioGetSingleTrackGeojson: jest.fn().mockResolvedValue({ data: { track: {} } }),
    audioGetSingleTrackGpx: jest.fn().mockResolvedValue({ data: '<gpx>' }),
    audioGetSingleTrackJson: jest.fn().mockResolvedValue({ data: { track: {} } }),
    audioGetSingleTrackKml: jest.fn().mockResolvedValue({ data: '<kml>' }),
    audioUpload: jest.fn().mockResolvedValue({ data: { audio: {} } }),
  };

  return {
    DefaultApi: jest.fn().mockImplementation(() => mockApi),
    Configuration: jest.fn().mockImplementation(() => ({})),
  };
});

describe('FulcrumClient', () => {
  describe('constructor', () => {
    it('should create a client with API key', () => {
      const client = new FulcrumClient({
        apiKey: 'test-api-key',
        region: FulcrumRegion.US,
      });

      expect(client).toBeInstanceOf(FulcrumClient);
      expect(client.client).toBeDefined();
    });

    it('should create a client with API key and user agent', () => {
      const client = new FulcrumClient({
        apiKey: 'test-api-key',
        region: FulcrumRegion.US,
        userAgent: 'TestAgent/1.0.0',
      });

      expect(client).toBeDefined();
      expect(client.client).toBeDefined();
    });

    it('should use region when provided', () => {
      const client = new FulcrumClient({
        apiKey: 'test-api-key',
        region: FulcrumRegion.EU,
      });

      expect(client.client).toBeDefined();
    });

    it('should accept custom region URL', () => {
      const client = new FulcrumClient({
        apiKey: 'test-api-key',
        region: 'https://custom.fulcrum.com/api/v2',
      });

      expect(client.client).toBeDefined();
    });
  });

  describe('path construction', () => {
    it('should construct paths that start with /api/v2', () => {
      // Test with US region - just verify the region value
      expect(FulcrumRegion.US).toBe('https://api.fulcrumapp.com/api');
      // Generated API paths start with /v2/
      // So final URL should be: https://api.fulcrumapp.com/api + /v2/forms.json
      // = https://api.fulcrumapp.com/api/v2/forms.json
    });

    it('should not have duplicate "api" in the path', () => {
      // All regions should end with /api (no /v2)
      expect(FulcrumRegion.US).toBe('https://api.fulcrumapp.com/api');
      expect(FulcrumRegion.AU).toBe('https://api.fulcrumapp-au.com/api');
      expect(FulcrumRegion.CA).toBe('https://api.fulcrumapp-ca.com/api');
      expect(FulcrumRegion.EU).toBe('https://api.fulcrumapp-eu.com/api');

      // None should contain "/api/api" or "/api" appearing twice in path segments
      expect(FulcrumRegion.US).not.toMatch(/\/api\/.*\/api/);
      expect(FulcrumRegion.AU).not.toMatch(/\/api\/.*\/api/);
      expect(FulcrumRegion.CA).not.toMatch(/\/api\/.*\/api/);
      expect(FulcrumRegion.EU).not.toMatch(/\/api\/.*\/api/);
    });

    it('should not have duplicate "v2" in the path', () => {
      // Regions should not end with /v2/v2 or contain v2 twice
      expect(FulcrumRegion.US).not.toMatch(/v2.*v2/);
      expect(FulcrumRegion.AU).not.toMatch(/v2.*v2/);
      expect(FulcrumRegion.CA).not.toMatch(/v2.*v2/);
      expect(FulcrumRegion.EU).not.toMatch(/v2.*v2/);
    });

    it('should not have double slashes in the path', () => {
      // Check that region values don't end with slash
      expect(FulcrumRegion.US).not.toMatch(/\/$/);
      expect(FulcrumRegion.AU).not.toMatch(/\/$/);
      expect(FulcrumRegion.CA).not.toMatch(/\/$/);
      expect(FulcrumRegion.EU).not.toMatch(/\/$/);

      // And don't contain double slashes (except in https://)
      const withoutProtocol = FulcrumRegion.US.replace('https://', '');
      expect(withoutProtocol).not.toMatch(/\/\//);
    });

    it('should construct correct full URLs for all regions', () => {
      // When basePath is "https://api.fulcrumapp.com/api"
      // and API path is "/v2/forms.json"
      // Result should be: "https://api.fulcrumapp.com/api/v2/forms.json"

      const testCases = [
        {
          region: FulcrumRegion.US,
          expected: 'https://api.fulcrumapp.com/api/v2/forms.json'
        },
        {
          region: FulcrumRegion.AU,
          expected: 'https://api.fulcrumapp-au.com/api/v2/forms.json'
        },
        {
          region: FulcrumRegion.CA,
          expected: 'https://api.fulcrumapp-ca.com/api/v2/forms.json'
        },
        {
          region: FulcrumRegion.EU,
          expected: 'https://api.fulcrumapp-eu.com/api/v2/forms.json'
        },
      ];

      for (const { region, expected } of testCases) {
        const fullUrl = `${region}/v2/forms.json`;
        expect(fullUrl).toBe(expected);

        // Verify no duplicate path segments
        expect(fullUrl).not.toMatch(/\/api\/.*\/api/); // No /api appearing twice in path
        expect(fullUrl).not.toMatch(/\/v2\/.*\/v2/);   // No /v2 appearing twice in path

        // Verify no double slashes (except https://)
        const withoutProtocol = fullUrl.replace('https://', '');
        expect(withoutProtocol).not.toMatch(/\/\//);
      }
    });

    it('should work with custom region URLs', () => {
      const customRegion = 'https://custom.fulcrum.com/api';
      const fullUrl = `${customRegion}/v2/forms.json`;

      expect(fullUrl).toBe('https://custom.fulcrum.com/api/v2/forms.json');
      expect(fullUrl).not.toMatch(/\/api\/.*\/api/);
      expect(fullUrl).not.toMatch(/\/v2\/.*\/v2/);

      const withoutProtocol = fullUrl.replace('https://', '');
      expect(withoutProtocol).not.toMatch(/\/\//);
    });
  });

  describe('API accessors', () => {
    let client: FulcrumClient;

    beforeEach(() => {
      client = new FulcrumClient({
        apiKey: 'test-api-key',
        region: FulcrumRegion.US,
      });
      jest.clearAllMocks();
    });

    describe('records API', () => {
      it('should have all records methods', () => {
        expect(client.records).toBeDefined();
        expect(client.records.getAll).toBeInstanceOf(Function);
        expect(client.records.getById).toBeInstanceOf(Function);
        expect(client.records.create).toBeInstanceOf(Function);
        expect(client.records.update).toBeInstanceOf(Function);
        expect(client.records.delete).toBeInstanceOf(Function);
        expect(client.records.getHistory).toBeInstanceOf(Function);
        expect(client.records.getAllHistory).toBeInstanceOf(Function);
      });

      it('should call getAll method', async () => {
        await client.records.getAll({ formId: 'form-123' });
        expect(client.client.recordsGetAll).toHaveBeenCalledWith({
          accept: 'application/json',
          formId: 'form-123',
        });
      });

      it('should call getById method', async () => {
        await client.records.getById('record-123');
        expect(client.client.recordsGetSingle).toHaveBeenCalledWith({
          accept: 'application/json',
          recordId: 'record-123',
        });
      });

      it('should call getById method with additional params', async () => {
        await client.records.getById('record-123', {});
        expect(client.client.recordsGetSingle).toHaveBeenCalledWith({
          accept: 'application/json',
          recordId: 'record-123',
        });
      });

      it('should call create method', async () => {
        const payload = { record: { form_id: 'form-123' } };
        await client.records.create(payload);
        expect(client.client.recordsCreate).toHaveBeenCalledWith({
          accept: 'application/json',
          contentType: 'application/json',
          recordRequest: payload,
          xSkipWorkflows: undefined,
          xSkipWebhooks: undefined,
        });
      });

      it('should call update method', async () => {
        const payload = { record: { form_id: 'form-123', latitude: 1.5 } };
        await client.records.update('record-123', payload);
        expect(client.client.recordsUpdate).toHaveBeenCalledWith({
          accept: 'application/json',
          contentType: 'application/json',
          recordId: 'record-123',
          recordRequest: payload,
          xSkipWorkflows: undefined,
          xSkipWebhooks: undefined,
        });
      });

      it('should call delete method', async () => {
        await client.records.delete('record-123');
        expect(client.client.recordsDelete).toHaveBeenCalledWith({ recordId: 'record-123' });
      });

      it('should call getHistory method', async () => {
        await client.records.getHistory('record-123');
        expect(client.client.recordsGetHistory).toHaveBeenCalledWith({
          recordId: 'record-123'
        });
      });

      it('should call getHistory method with additional params', async () => {
        await client.records.getHistory('record-123', {});
        expect(client.client.recordsGetHistory).toHaveBeenCalledWith({
          recordId: 'record-123'
        });
      });

      it('should call getAllHistory method', async () => {
        await client.records.getAllHistory();
        expect(client.client.recordsGetAllHistory).toHaveBeenCalledWith({});
      });
    });

    describe('forms API', () => {
      it('should have all forms methods', () => {
        expect(client.forms).toBeDefined();
        expect(client.forms.getAll).toBeInstanceOf(Function);
        expect(client.forms.getById).toBeInstanceOf(Function);
        expect(client.forms.getHistory).toBeInstanceOf(Function);
        expect(client.forms.create).toBeInstanceOf(Function);
        expect(client.forms.update).toBeInstanceOf(Function);
        expect(client.forms.delete).toBeInstanceOf(Function);
      });

      it('should call getAll method', async () => {
        await client.forms.getAll();
        expect(client.client.formsGetAll).toHaveBeenCalledWith({
          accept: 'application/json',
        });
      });

      it('should call getAll method with params', async () => {
        await client.forms.getAll({ page: 1 });
        expect(client.client.formsGetAll).toHaveBeenCalledWith({
          accept: 'application/json',
          page: 1,
        });
      });

      it('should call getById method', async () => {
        await client.forms.getById('form-123');
        expect(client.client.formsGetSingle).toHaveBeenCalledWith({
          accept: 'application/json',
          formId: 'form-123',
        });
      });

      it('should call getHistory method', async () => {
        await client.forms.getHistory('form-123');
        expect(client.client.formsGetHistory).toHaveBeenCalledWith({
          accept: 'application/json',
          formId: 'form-123',
        });
      });

      it('should call create method', async () => {
        const payload = { form: { name: 'Test' } };
        await client.forms.create(payload);
        expect(client.client.formsCreate).toHaveBeenCalledWith({
          accept: 'application/json',
          contentType: 'application/json',
          formRequest: payload,
        });
      });

      it('should call update method', async () => {
        const payload = { form: { name: 'Updated' } };
        await client.forms.update('form-123', payload);
        expect(client.client.formsUpdate).toHaveBeenCalledWith({
          accept: 'application/json',
          contentType: 'application/json',
          formId: 'form-123',
          formRequest: payload,
        });
      });

      it('should call delete method', async () => {
        await client.forms.delete('form-123');
        expect(client.client.formsDelete).toHaveBeenCalledWith({ formId: 'form-123' });
      });
    });

    describe('projects API', () => {
      it('should have all projects methods', () => {
        expect(client.projects).toBeDefined();
        expect(client.projects.getAll).toBeInstanceOf(Function);
        expect(client.projects.getById).toBeInstanceOf(Function);
        expect(client.projects.create).toBeInstanceOf(Function);
        expect(client.projects.update).toBeInstanceOf(Function);
        expect(client.projects.delete).toBeInstanceOf(Function);
      });

      it('should call getAll method', async () => {
        await client.projects.getAll({ page: 1 });
        expect(client.client.projectsGetAll).toHaveBeenCalledWith({
          accept: 'application/json',
          page: 1,
        });
      });

      it('should call getById method', async () => {
        await client.projects.getById('project-123');
        expect(client.client.projectsGetSingle).toHaveBeenCalledWith({
          accept: 'application/json',
          projectId: 'project-123',
        });
      });

      it('should call create method', async () => {
        const payload = { project: { name: 'Test' } };
        await client.projects.create(payload);
        expect(client.client.projectsCreate).toHaveBeenCalledWith({
          accept: 'application/json',
          contentType: 'application/json',
          projectRequest: payload,
        });
      });

      it('should call update method', async () => {
        const payload = { project: { name: 'Updated' } };
        await client.projects.update('project-123', payload);
        expect(client.client.projectsUpdate).toHaveBeenCalledWith({
          accept: 'application/json',
          contentType: 'application/json',
          projectId: 'project-123',
          projectRequest: payload,
        });
      });

      it('should call delete method', async () => {
        await client.projects.delete('project-123');
        expect(client.client.projectsDelete).toHaveBeenCalledWith({ projectId: 'project-123' });
      });
    });

    describe('webhooks API', () => {
      it('should have all webhooks methods', () => {
        expect(client.webhooks).toBeDefined();
        expect(client.webhooks.getAll).toBeInstanceOf(Function);
        expect(client.webhooks.getById).toBeInstanceOf(Function);
        expect(client.webhooks.create).toBeInstanceOf(Function);
        expect(client.webhooks.update).toBeInstanceOf(Function);
        expect(client.webhooks.delete).toBeInstanceOf(Function);
      });

      it('should call getAll method', async () => {
        await client.webhooks.getAll();
        expect(client.client.webhooksGetAll).toHaveBeenCalledWith({
          accept: 'application/json',
        });
      });

      it('should call getById method', async () => {
        await client.webhooks.getById('webhook-123');
        expect(client.client.webhooksGetSingle).toHaveBeenCalledWith({
          accept: 'application/json',
          webhookId: 'webhook-123',
        });
      });

      it('should call create method', async () => {
        const payload = { webhook: { name: 'Test', url: 'https://example.com/webhook' } };
        await client.webhooks.create(payload);
        expect(client.client.webhooksCreate).toHaveBeenCalledWith({
          accept: 'application/json',
          contentType: 'application/json',
          webhookRequest: payload,
        });
      });

      it('should call update method', async () => {
        const payload = { webhook: { name: 'Updated', url: 'https://example.com/webhooks/updated' } };
        await client.webhooks.update('webhook-123', payload);
        expect(client.client.webhooksUpdate).toHaveBeenCalledWith({
          accept: 'application/json',
          contentType: 'application/json',
          webhookId: 'webhook-123',
          webhookRequest: payload,
        });
      });

      it('should call delete method', async () => {
        await client.webhooks.delete('webhook-123');
        expect(client.client.webhooksDelete).toHaveBeenCalledWith({ webhookId: 'webhook-123' });
      });
    });

    describe('query API', () => {
      it('should have all query methods', () => {
        expect(client.query).toBeDefined();
        expect(client.query.get).toBeInstanceOf(Function);
        expect(client.query.post).toBeInstanceOf(Function);
      });

      it('should call get method', async () => {
        const params = { q: 'SELECT * FROM records' };
        await client.query.get(params);
        expect(client.client.queryGet).toHaveBeenCalledWith({
          accept: 'application/json',
          ...params,
        });
      });

      it('should call post method', async () => {
        const params = { queryRequest: { q: 'SELECT * FROM records' } };
        await client.query.post(params);
        expect(client.client.queryPost).toHaveBeenCalledWith({
          accept: 'application/json',
          ...params,
        });
      });
    });

    describe('underlying client', () => {
      it('should expose underlying client', () => {
        expect(client.client).toBeDefined();
        expect(typeof client.client.recordsGetAll).toBe('function');
      });
    });

    describe('auditLogs API', () => {
      it('should have all audit logs methods', () => {
        expect(client.auditLogs).toBeDefined();
        expect(client.auditLogs.getAll).toBeInstanceOf(Function);
        expect(client.auditLogs.getById).toBeInstanceOf(Function);
      });

      it('should call audit logs methods', async () => {
        await client.auditLogs.getAll();
        expect(client.client.auditLogsGetAll).toHaveBeenCalled();

        await client.auditLogs.getById('log-123');
        expect(client.client.auditLogsGetSingle).toHaveBeenCalled();
      });
    });

    describe('authorizations API', () => {
      it('should have all authorization methods', () => {
        expect(client.authorizations).toBeDefined();
        expect(client.authorizations.getAll).toBeInstanceOf(Function);
        expect(client.authorizations.getById).toBeInstanceOf(Function);
        expect(client.authorizations.create).toBeInstanceOf(Function);
        expect(client.authorizations.update).toBeInstanceOf(Function);
        expect(client.authorizations.delete).toBeInstanceOf(Function);
      });

      it('should call authorization methods', async () => {
        await client.authorizations.getAll();
        expect(client.client.authorizationsGetAll).toHaveBeenCalled();

        await client.authorizations.getById('auth-123');
        expect(client.client.authorizationsGetSingle).toHaveBeenCalled();

        await client.authorizations.create({});
        expect(client.client.authorizationsCreate).toHaveBeenCalled();

        await client.authorizations.update('auth-123', {});
        expect(client.client.authorizationsUpdate).toHaveBeenCalled();

        await client.authorizations.delete('auth-123');
        expect(client.client.authorizationsDelete).toHaveBeenCalled();
      });
    });

    describe('changesets API', () => {
      it('should have all changeset methods', () => {
        expect(client.changesets).toBeDefined();
        expect(client.changesets.getAll).toBeInstanceOf(Function);
        expect(client.changesets.getById).toBeInstanceOf(Function);
        expect(client.changesets.create).toBeInstanceOf(Function);
        expect(client.changesets.update).toBeInstanceOf(Function);
        expect(client.changesets.close).toBeInstanceOf(Function);
      });

      it('should call changeset methods', async () => {
        await client.changesets.getAll();
        expect(client.client.changesetsGetAll).toHaveBeenCalled();

        await client.changesets.getById('changeset-123');
        expect(client.client.changesetsGetSingle).toHaveBeenCalled();

        await client.changesets.create({});
        expect(client.client.changesetsCreate).toHaveBeenCalled();

        await client.changesets.update('changeset-123', {});
        expect(client.client.changesetsUpdate).toHaveBeenCalled();

        await client.changesets.close('changeset-123');
        expect(client.client.changesetsClose).toHaveBeenCalled();
      });
    });

    describe('choiceLists API', () => {
      it('should have all choice list methods', () => {
        expect(client.choiceLists).toBeDefined();
        expect(client.choiceLists.getAll).toBeInstanceOf(Function);
        expect(client.choiceLists.getById).toBeInstanceOf(Function);
        expect(client.choiceLists.create).toBeInstanceOf(Function);
        expect(client.choiceLists.update).toBeInstanceOf(Function);
        expect(client.choiceLists.delete).toBeInstanceOf(Function);
      });

      it('should call choice list methods', async () => {
        await client.choiceLists.getAll();
        expect(client.client.choiceListsGetAll).toHaveBeenCalled();

        await client.choiceLists.getById('list-123');
        expect(client.client.choiceListsGetSingle).toHaveBeenCalled();

        await client.choiceLists.create({});
        expect(client.client.choiceListsCreate).toHaveBeenCalled();

        await client.choiceLists.update('list-123', {});
        expect(client.client.choiceListsUpdate).toHaveBeenCalled();

        await client.choiceLists.delete('list-123');
        expect(client.client.choiceListsDelete).toHaveBeenCalled();
      });
    });

    describe('classificationSets API', () => {
      it('should have all classification set methods', () => {
        expect(client.classificationSets).toBeDefined();
        expect(client.classificationSets.getAll).toBeInstanceOf(Function);
        expect(client.classificationSets.getById).toBeInstanceOf(Function);
        expect(client.classificationSets.create).toBeInstanceOf(Function);
        expect(client.classificationSets.update).toBeInstanceOf(Function);
        expect(client.classificationSets.delete).toBeInstanceOf(Function);
      });

      it('should call classification set methods', async () => {
        await client.classificationSets.getAll();
        expect(client.client.classificationSetsGetAll).toHaveBeenCalled();

        await client.classificationSets.getById('set-123');
        expect(client.client.classificationSetsGetSingle).toHaveBeenCalled();

        await client.classificationSets.create({});
        expect(client.client.classificationSetsCreate).toHaveBeenCalled();

        await client.classificationSets.update('set-123', {});
        expect(client.client.classificationSetsUpdate).toHaveBeenCalled();

        await client.classificationSets.delete('set-123');
        expect(client.client.classificationSetsDelete).toHaveBeenCalled();
      });
    });

    describe('layers API', () => {
      it('should have all layer methods', () => {
        expect(client.layers).toBeDefined();
        expect(client.layers.getAll).toBeInstanceOf(Function);
        expect(client.layers.getById).toBeInstanceOf(Function);
        expect(client.layers.create).toBeInstanceOf(Function);
        expect(client.layers.update).toBeInstanceOf(Function);
        expect(client.layers.delete).toBeInstanceOf(Function);
      });

      it('should call layer methods', async () => {
        await client.layers.getAll();
        expect(client.client.layersGetAll).toHaveBeenCalled();

        await client.layers.getById('layer-123');
        expect(client.client.layersGetSingle).toHaveBeenCalled();

        await client.layers.create({});
        expect(client.client.layersCreate).toHaveBeenCalled();

        await client.layers.update('layer-123', {});
        expect(client.client.layersUpdate).toHaveBeenCalled();

        await client.layers.delete('layer-123');
        expect(client.client.layersDelete).toHaveBeenCalled();
      });
    });

    describe('memberships API', () => {
      it('should have all membership methods', () => {
        expect(client.memberships).toBeDefined();
        expect(client.memberships.getAll).toBeInstanceOf(Function);
        expect(client.memberships.getById).toBeInstanceOf(Function);
        expect(client.memberships.changePermissions).toBeInstanceOf(Function);
        expect(client.memberships.create).toBeInstanceOf(Function);
        expect(client.memberships.update).toBeInstanceOf(Function);
        expect(client.memberships.delete).toBeInstanceOf(Function);
        expect(client.memberships.getAllForObject).toBeInstanceOf(Function);
      });

      it('should call membership methods', async () => {
        await client.memberships.getAll();
        expect(client.client.membershipsGetAll).toHaveBeenCalled();

        await client.memberships.getById('member-123');
        expect(client.client.membershipsGetSingle).toHaveBeenCalled();

        await client.memberships.changePermissions({});
        expect(client.client.membershipsChangePermissions).toHaveBeenCalled();

        await client.memberships.create({});
        expect(client.client.createMember).toHaveBeenCalled();

        await client.memberships.update('member-123', {});
        expect(client.client.updateMember).toHaveBeenCalled();

        await client.memberships.delete('member-123', {});
        expect(client.client.deleteMember).toHaveBeenCalled();

        await client.memberships.getAllForObject('member_forms', 'user-123');
        expect(client.client.getAllMemberships).toHaveBeenCalled();
      });
    });

    describe('roles API', () => {
      it('should have all role methods', () => {
        expect(client.roles).toBeDefined();
        expect(client.roles.getAll).toBeInstanceOf(Function);
      });

      it('should call role methods', async () => {
        await client.roles.getAll();
        expect(client.client.rolesGetAll).toHaveBeenCalled();
      });
    });

    describe('groups API', () => {
      it('should have all group methods', () => {
        expect(client.groups).toBeDefined();
        expect(client.groups.getAll).toBeInstanceOf(Function);
        expect(client.groups.getById).toBeInstanceOf(Function);
        expect(client.groups.create).toBeInstanceOf(Function);
        expect(client.groups.update).toBeInstanceOf(Function);
        expect(client.groups.delete).toBeInstanceOf(Function);
        expect(client.groups.getResource).toBeInstanceOf(Function);
        expect(client.groups.updatePermissions).toBeInstanceOf(Function);
      });

      it('should call group methods', async () => {
        await client.groups.getAll();
        expect(client.client.getAllGroups).toHaveBeenCalled();

        await client.groups.getById('group-123');
        expect(client.client.getSingleGroup).toHaveBeenCalled();

        await client.groups.create({});
        expect(client.client.createGroup).toHaveBeenCalled();

        await client.groups.update('group-123', {});
        expect(client.client.updateGroupNameDescription).toHaveBeenCalled();

        await client.groups.delete('group-123');
        expect(client.client.deleteGroup).toHaveBeenCalled();

        await client.groups.getResource('group-123', 'members');
        expect(client.client.getGroupResource).toHaveBeenCalled();

        await client.groups.updatePermissions({});
        expect(client.client.updateGroupPermissions).toHaveBeenCalled();
      });
    });

    describe('workflows API', () => {
      it('should have all workflow methods', () => {
        expect(client.workflows).toBeDefined();
        expect(client.workflows.getAll).toBeInstanceOf(Function);
        expect(client.workflows.getById).toBeInstanceOf(Function);
        expect(client.workflows.create).toBeInstanceOf(Function);
        expect(client.workflows.update).toBeInstanceOf(Function);
        expect(client.workflows.delete).toBeInstanceOf(Function);
      });

      it('should call workflow methods', async () => {
        await client.workflows.getAll();
        expect(client.client.getAllWorkflows).toHaveBeenCalled();

        await client.workflows.getById('workflow-123');
        expect(client.client.getSingleWorkflow).toHaveBeenCalled();

        await client.workflows.create({});
        expect(client.client.createWorkflow).toHaveBeenCalled();

        await client.workflows.update('workflow-123', {});
        expect(client.client.updateWorkflow).toHaveBeenCalled();

        await client.workflows.delete('workflow-123');
        expect(client.client.deleteWorkflow).toHaveBeenCalled();
      });
    });

    describe('reportTemplates API', () => {
      it('should have all report template methods', () => {
        expect(client.reportTemplates).toBeDefined();
        expect(client.reportTemplates.getAll).toBeInstanceOf(Function);
        expect(client.reportTemplates.getById).toBeInstanceOf(Function);
        expect(client.reportTemplates.create).toBeInstanceOf(Function);
        expect(client.reportTemplates.update).toBeInstanceOf(Function);
        expect(client.reportTemplates.delete).toBeInstanceOf(Function);
      });

      it('should call report template methods', async () => {
        await client.reportTemplates.getAll();
        expect(client.client.getAllReportTemplates).toHaveBeenCalled();

        await client.reportTemplates.getById('template-123');
        expect(client.client.getSingleReportTemplate).toHaveBeenCalled();

        await client.reportTemplates.create({});
        expect(client.client.createReportTemplate).toHaveBeenCalled();

        await client.reportTemplates.update('template-123', {});
        expect(client.client.updateReportTemplate).toHaveBeenCalled();

        await client.reportTemplates.delete('template-123');
        expect(client.client.deleteReportTemplate).toHaveBeenCalled();
      });
    });

    describe('batches API', () => {
      it('should have all batch methods', () => {
        expect(client.batches).toBeDefined();
        expect(client.batches.getAll).toBeInstanceOf(Function);
        expect(client.batches.getById).toBeInstanceOf(Function);
        expect(client.batches.create).toBeInstanceOf(Function);
        expect(client.batches.addOperations).toBeInstanceOf(Function);
        expect(client.batches.start).toBeInstanceOf(Function);
      });

      it('should call batch methods', async () => {
        await client.batches.getAll();
        expect(client.client.getAllBatches).toHaveBeenCalled();

        await client.batches.getById('batch-123');
        expect(client.client.getSingleBatch).toHaveBeenCalled();

        await client.batches.create({});
        expect(client.client.createBatch).toHaveBeenCalled();

        await client.batches.addOperations('batch-123', {});
        expect(client.client.addBatchOperations).toHaveBeenCalled();

        await client.batches.start('batch-123', {});
        expect(client.client.startBatch).toHaveBeenCalled();
      });
    });

    describe('attachments API', () => {
      it('should have all attachment methods', () => {
        expect(client.attachments).toBeDefined();
        expect(client.attachments.getAll).toBeInstanceOf(Function);
        expect(client.attachments.getById).toBeInstanceOf(Function);
        expect(client.attachments.create).toBeInstanceOf(Function);
        expect(client.attachments.finalize).toBeInstanceOf(Function);
        expect(client.attachments.delete).toBeInstanceOf(Function);
      });

      it('should call attachment methods', async () => {
        await client.attachments.getAll();
        expect(client.client.getAllAttachments).toHaveBeenCalled();

        await client.attachments.getById('attachment-123');
        expect(client.client.getSingleAttachment).toHaveBeenCalled();

        await client.attachments.create({});
        expect(client.client.createAttachment).toHaveBeenCalled();

        await client.attachments.finalize({});
        expect(client.client.finalizeAttachment).toHaveBeenCalled();

        await client.attachments.delete('attachment-123');
        expect(client.client.deleteAttachment).toHaveBeenCalled();
      });
    });

    describe('users API', () => {
      it('should have all user methods', () => {
        expect(client.users).toBeDefined();
        expect(client.users.getUser).toBeInstanceOf(Function);
      });

      it('should call user methods', async () => {
        await client.users.getUser();
        expect(client.client.usersGetUser).toHaveBeenCalled();
      });
    });

    describe('photos API', () => {
      it('should have all photo methods', () => {
        expect(client.photos).toBeDefined();
        expect(client.photos.getAllMetadata).toBeInstanceOf(Function);
        expect(client.photos.getSingleMetadata).toBeInstanceOf(Function);
        expect(client.photos.getSingleFile).toBeInstanceOf(Function);
        expect(client.photos.getLargeMetadata).toBeInstanceOf(Function);
        expect(client.photos.getLargeFile).toBeInstanceOf(Function);
        expect(client.photos.getThumbnailMetadata).toBeInstanceOf(Function);
        expect(client.photos.getThumbnailFile).toBeInstanceOf(Function);
        expect(client.photos.upload).toBeInstanceOf(Function);
      });

      it('should call photo methods', async () => {
        await client.photos.getAllMetadata();
        expect(client.client.photosGetAllMetadata).toHaveBeenCalled();

        await client.photos.getSingleMetadata('photo-123');
        expect(client.client.photosGetSingleMetadata).toHaveBeenCalled();

        await client.photos.getSingleFile('photo-123');
        expect(client.client.photosGetSingleFile).toHaveBeenCalled();

        await client.photos.getLargeMetadata('photo-123');
        expect(client.client.photosLargeMetadata).toHaveBeenCalled();

        await client.photos.getLargeFile('photo-123');
        expect(client.client.photosLargeFile).toHaveBeenCalled();

        await client.photos.getThumbnailMetadata('photo-123');
        expect(client.client.photosThumbnailMetadata).toHaveBeenCalled();

        await client.photos.getThumbnailFile('photo-123');
        expect(client.client.photosThumbnailFile).toHaveBeenCalled();

        await client.photos.upload({});
        expect(client.client.photosUpload).toHaveBeenCalled();
      });
    });

    describe('signatures API', () => {
      it('should have all signature methods', () => {
        expect(client.signatures).toBeDefined();
        expect(client.signatures.getAll).toBeInstanceOf(Function);
        expect(client.signatures.getSingleMetadata).toBeInstanceOf(Function);
        expect(client.signatures.getSingleFile).toBeInstanceOf(Function);
        expect(client.signatures.getThumbnailMetadata).toBeInstanceOf(Function);
        expect(client.signatures.getThumbnailFile).toBeInstanceOf(Function);
        expect(client.signatures.upload).toBeInstanceOf(Function);
      });

      it('should call signature methods', async () => {
        await client.signatures.getAll();
        expect(client.client.signaturesGetAll).toHaveBeenCalled();

        await client.signatures.getSingleMetadata('signature-123');
        expect(client.client.signaturesGetSingleMetadata).toHaveBeenCalled();

        await client.signatures.getSingleFile('signature-123');
        expect(client.client.signaturesGetSingleFile).toHaveBeenCalled();

        await client.signatures.getThumbnailMetadata('signature-123');
        expect(client.client.signaturesGetThumbnailMetadata).toHaveBeenCalled();

        await client.signatures.getThumbnailFile('signature-123');
        expect(client.client.signaturesGetThumbnailFile).toHaveBeenCalled();

        await client.signatures.upload({});
        expect(client.client.signaturesUpload).toHaveBeenCalled();
      });
    });

    describe('videos API', () => {
      it('should have all video methods', () => {
        expect(client.videos).toBeDefined();
        expect(client.videos.getAll).toBeInstanceOf(Function);
        expect(client.videos.getSingleMetadata).toBeInstanceOf(Function);
        expect(client.videos.getOriginalFile).toBeInstanceOf(Function);
        expect(client.videos.getMediumFile).toBeInstanceOf(Function);
        expect(client.videos.getSmallFile).toBeInstanceOf(Function);
        expect(client.videos.upload).toBeInstanceOf(Function);
      });

      it('should call video methods', async () => {
        await client.videos.getAll();
        expect(client.client.videosGetAll).toHaveBeenCalled();

        await client.videos.getSingleMetadata('video-123');
        expect(client.client.videosGetSingleMetadata).toHaveBeenCalled();

        await client.videos.getOriginalFile('video-123');
        expect(client.client.videosGetOriginalFile).toHaveBeenCalled();

        await client.videos.getMediumFile('video-123');
        expect(client.client.videosGetMediumFile).toHaveBeenCalled();

        await client.videos.getSmallFile('video-123');
        expect(client.client.videosGetSmallFile).toHaveBeenCalled();

        await client.videos.upload({});
        expect(client.client.videosUpload).toHaveBeenCalled();

        // Track methods
        await client.videos.getAllTracksGeojson();
        expect(client.client.videosGetAllTracksGeojson).toHaveBeenCalled();

        await client.videos.getAllTracksGpx();
        expect(client.client.videosGetAllTracksGpx).toHaveBeenCalled();

        await client.videos.getAllTracksKml();
        expect(client.client.videosGetAllTracksKml).toHaveBeenCalled();

        await client.videos.getSingleTrackGeojson('video-123');
        expect(client.client.videosGetSingleTrackGeojson).toHaveBeenCalled();

        await client.videos.getSingleTrackGpx('video-123');
        expect(client.client.videosGetSingleTrackGpx).toHaveBeenCalled();

        await client.videos.getSingleTrackJson('video-123');
        expect(client.client.videosGetSingleTrackJson).toHaveBeenCalled();

        await client.videos.getSingleTrackKml('video-123');
        expect(client.client.videosGetSingleTrackKml).toHaveBeenCalled();

        // Thumbnail methods
        await client.videos.getThumbnailHuge('video-123');
        expect(client.client.videosGetThumbnailHuge).toHaveBeenCalled();

        await client.videos.getThumbnailHugeSquare('video-123');
        expect(client.client.videosGetThumbnailHugeSquare).toHaveBeenCalled();

        await client.videos.getThumbnailLarge('video-123');
        expect(client.client.videosGetThumbnailLarge).toHaveBeenCalled();

        await client.videos.getThumbnailLargeSquare('video-123');
        expect(client.client.videosGetThumbnailLargeSquare).toHaveBeenCalled();

        await client.videos.getThumbnailMedium('video-123');
        expect(client.client.videosGetThumbnailMedium).toHaveBeenCalled();

        await client.videos.getThumbnailMediumSquare('video-123');
        expect(client.client.videosGetThumbnailMediumSquare).toHaveBeenCalled();

        await client.videos.getThumbnailSmall('video-123');
        expect(client.client.videosGetThumbnailSmall).toHaveBeenCalled();

        await client.videos.getThumbnailSmallSquare('video-123');
        expect(client.client.videosGetThumbnailSmallSquare).toHaveBeenCalled();
      });
    });

    describe('audio API', () => {
      it('should have all audio methods', () => {
        expect(client.audio).toBeDefined();
        expect(client.audio.getAll).toBeInstanceOf(Function);
        expect(client.audio.getSingleMetadata).toBeInstanceOf(Function);
        expect(client.audio.getOriginalFile).toBeInstanceOf(Function);
        expect(client.audio.upload).toBeInstanceOf(Function);
      });

      it('should call audio methods', async () => {
        await client.audio.getAll();
        expect(client.client.audioGetAll).toHaveBeenCalled();

        await client.audio.getSingleMetadata('audio-123');
        expect(client.client.audioGetSingleMetadata).toHaveBeenCalled();

        await client.audio.getOriginalFile('audio-123');
        expect(client.client.audioGetOriginalFile).toHaveBeenCalled();

        await client.audio.upload({});
        expect(client.client.audioUpload).toHaveBeenCalled();

        // Track methods
        await client.audio.getAllTracksGeojson();
        expect(client.client.audioGetAllTracksGeojson).toHaveBeenCalled();

        await client.audio.getAllTracksGpx();
        expect(client.client.audioGetAllTracksGpx).toHaveBeenCalled();

        await client.audio.getAllTracksJson();
        expect(client.client.audioGetAllTracksJson).toHaveBeenCalled();

        await client.audio.getAllTracksKml();
        expect(client.client.audioGetAllTracksKml).toHaveBeenCalled();

        await client.audio.getSingleTrackGeojson('audio-123');
        expect(client.client.audioGetSingleTrackGeojson).toHaveBeenCalled();

        await client.audio.getSingleTrackGpx('audio-123');
        expect(client.client.audioGetSingleTrackGpx).toHaveBeenCalled();

        await client.audio.getSingleTrackJson('audio-123');
        expect(client.client.audioGetSingleTrackJson).toHaveBeenCalled();

        await client.audio.getSingleTrackKml('audio-123');
        expect(client.client.audioGetSingleTrackKml).toHaveBeenCalled();
      });
    });

    describe('error handling with OpenTelemetry', () => {
      it('should handle errors in API calls and record them in spans', async () => {
        const error = new Error('API Error');
        client.client.recordsGetAll = jest.fn().mockRejectedValue(error);

        await expect(client.records.getAll()).rejects.toThrow('API Error');
      });

      it('should handle non-Error objects in API calls', async () => {
        const error = 'String error';
        client.client.formsGetAll = jest.fn().mockRejectedValue(error);

        await expect(client.forms.getAll()).rejects.toBe(error);
      });
    });
  });
});
