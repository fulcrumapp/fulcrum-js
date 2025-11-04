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
          recordsCreateRequest: payload,
          xSkipWorkflows: undefined,
          xSkipWebhooks: undefined,
        });
      });

      it('should call update method', async () => {
        const payload = { record: { latitude: 1.5 } };
        await client.records.update('record-123', payload);
        expect(client.client.recordsUpdate).toHaveBeenCalledWith({
          accept: 'application/json',
          contentType: 'application/json',
          recordId: 'record-123',
          recordsUpdateRequest: payload,
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

      it('should call create method', async () => {
        const payload = { form: { name: 'Test' } };
        await client.forms.create(payload);
        expect(client.client.formsCreate).toHaveBeenCalledWith({
          accept: 'application/json',
          contentType: 'application/json',
          formsCreateRequest: payload,
        });
      });

      it('should call update method', async () => {
        const payload = { form: { name: 'Updated' } };
        await client.forms.update('form-123', payload);
        expect(client.client.formsUpdate).toHaveBeenCalledWith({
          accept: 'application/json',
          contentType: 'application/json',
          formId: 'form-123',
          formsUpdateRequest: payload,
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

      it('should call create method', async () => {
        const payload = { project: { name: 'Test' } };
        await client.projects.create(payload);
        expect(client.client.projectsCreate).toHaveBeenCalledWith({
          accept: 'application/json',
          contentType: 'application/json',
          projectsCreateRequest: payload,
        });
      });

      it('should call update method', async () => {
        const payload = { project: { name: 'Updated' } };
        await client.projects.update('project-123', payload);
        expect(client.client.projectsUpdate).toHaveBeenCalledWith({
          accept: 'application/json',
          contentType: 'application/json',
          projectId: 'project-123',
          projectsUpdateRequest: payload,
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

      it('should call create method', async () => {
        const payload = { webhook: { name: 'Test', url: 'https://example.com/webhook' } };
        await client.webhooks.create(payload);
        expect(client.client.webhooksCreate).toHaveBeenCalledWith({
          accept: 'application/json',
          contentType: 'application/json',
          webhooksCreateRequest: payload,
        });
      });

      it('should call update method', async () => {
        const payload = { webhook: { name: 'Updated' } };
        await client.webhooks.update('webhook-123', payload);
        expect(client.client.webhooksUpdate).toHaveBeenCalledWith({
          accept: 'application/json',
          contentType: 'application/json',
          webhookId: 'webhook-123',
          webhooksUpdateRequest: payload,
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
        const params = { queryPostRequest: { q: 'SELECT * FROM records' } };
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
  });
});
