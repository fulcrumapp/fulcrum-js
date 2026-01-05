
# fulcrum-js

A JavaScript and TypeScript library for the Fulcrum API.

## Installation

This package is hosted on the GitHub Package Registry. To install it, you must configure your package manager to use the GitHub registry for the `@fulcrumapp` scope.

### 1. Configure Registry

Add a `.npmrc` file to your project root:

```text
@fulcrumapp:registry=https://npm.pkg.github.com
```

### 2. Install Package

```bash
yarn add @fulcrumapp/fulcrum-js
# or
npm install @fulcrumapp/fulcrum-js
```

## Quick Start

### Using the Fulcrum Client

The easiest way to get started is with the `FulcrumClient`:

```javascript
import { FulcrumClient, FulcrumRegion } from '@fulcrumapp/fulcrum-js';

const client = new FulcrumClient({
  apiKey: 'your-api-token',
  region: FulcrumRegion.US,  // Required: US, AU, CA, EU, or custom URL
  userAgent: 'MyApp/1.0.0'   // Optional but recommended
});

// Get all forms
const formsResponse = await client.forms.getAll();
console.log(formsResponse.data);

// Get records for a specific form
const recordsResponse = await client.records.getAll({ formId: 'form-id-here' });
console.log(recordsResponse.data);
```

### Data Residency / Regional Endpoints

Fulcrum supports multiple data residency regions. You must specify a region when creating the client:

```javascript
import { FulcrumClient, FulcrumRegion } from '@fulcrumapp/fulcrum-js';

// United States
const usClient = new FulcrumClient({
  apiKey: 'your-api-token',
  region: FulcrumRegion.US  // https://api.fulcrumapp.com/api/v2
});

// Australia
const auClient = new FulcrumClient({
  apiKey: 'your-api-token',
  region: FulcrumRegion.AU  // https://api.fulcrumapp-au.com/api/v2
});

// Canada
const caClient = new FulcrumClient({
  apiKey: 'your-api-token',
  region: FulcrumRegion.CA  // https://api.fulcrumapp-ca.com/api/v2
});

// European Union
const euClient = new FulcrumClient({
  apiKey: 'your-api-token',
  region: FulcrumRegion.EU  // https://api.fulcrumapp-eu.com/api/v2
});

// Custom endpoint (for internal clients or new regions)
const customClient = new FulcrumClient({
  apiKey: 'your-api-token',
  region: 'https://custom.fulcrum.com/api/v2'
});
```

### TypeScript Support

```typescript
import { FulcrumClient, FulcrumRegion } from '@fulcrumapp/fulcrum-js';
import type { FormsResponse } from '@fulcrumapp/fulcrum-js';

const client = new FulcrumClient({
  apiKey: 'your-api-token',
  region: FulcrumRegion.US,
  userAgent: 'MyApp/1.0.0'
});

// Get all forms with full type safety
const response = await client.forms.getAll();
const forms: FormsResponse = response.data;
forms.forms?.forEach((form) => {
  console.log(form.name);
});
```

### CommonJS (Node.js)

If you need CommonJS for compatibility with older Node.js projects:

```javascript
const { FulcrumClient, FulcrumRegion } = require('@fulcrumapp/fulcrum-js');

const client = new FulcrumClient({
  apiKey: 'your-api-token',
  region: FulcrumRegion.US
});

// Get all forms
client.forms.getAll().then(response => {
  console.log(response.data);
});
```

## Version History

### Version 3.0 (Latest)

**Breaking Changes:**

- Complete API redesign using auto-generated TypeScript client from OpenAPI spec
- New method naming convention (e.g., `formsGetAll()` instead of `forms.all()`)
- Direct axios responses instead of wrapped `Page` objects
- All methods return `Promise<AxiosResponse<T>>` for consistent response handling
- Full TypeScript support with comprehensive type definitions

**New Features:**

- 🎯 **271+ API methods** covering the complete Fulcrum API
- 🔒 **Full TypeScript support** with 106 TypeScript interfaces
- 📦 **Auto-generated from OpenAPI spec** - always up-to-date with API changes
- ⚡ **Modern axios-based HTTP client** - better error handling and OTEL support
- 🧩 **Comprehensive type safety** - catch errors at compile time
- 📚 **Enhanced API coverage** including Report Templates, Workflows, Batch Operations, Groups, and more
- 🎁 **Dual module support** - ES Modules (recommended) and CommonJS for compatibility
- 📊 **Built-in OpenTelemetry instrumentation** - automatic tracing for all API calls

See the [Upgrading](#upgrading-from-v2-to-v3) section for migration details.

### Version 2.x

Version 1 of this library used callbacks for API responses. Version 2 uses [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). Promises offer some advantages over the callback pattern used previously. You can read more about them in the [Promises](#promises) section.

## Usage

The v3 API provides a clean, resource-based interface through the `FulcrumClient`:

```javascript
import { FulcrumClient, FulcrumRegion } from '@fulcrumapp/fulcrum-js';

const client = new FulcrumClient({
  apiKey: 'your-api-token',
  region: FulcrumRegion.US,  // Required: US, AU, CA, EU, or custom URL
  userAgent: 'MyApp/1.0.0'   // Optional but recommended
});
```

All methods are organized by resource (records, forms, projects, etc.) and return axios responses with full TypeScript support.

### Using the Wrapper Client

The wrapper client provides a simpler, more intuitive API:

```typescript
import { FulcrumClient, FulcrumRegion } from '@fulcrumapp/fulcrum-js';

const client = new FulcrumClient({
  apiKey: 'your-api-token',
  region: FulcrumRegion.US,  // Required
  userAgent: 'MyApp/1.0.0'   // Optional
});
```

#### Working with Records

```typescript
// Get all records for a form
const response = await client.records.getAll({
  formId: 'form-id-here',
  perPage: 1000,
  page: 1
});
console.log(`Found ${response.data.records?.length} records`);

// Get a single record
const recordResponse = await client.records.getById('record-id');
const record = recordResponse.data.record;

// Create a record (no content-type headers needed!)
const createResponse = await client.records.create({
  record: {
    form_id: 'form-id-here',
    status: 'submitted',
    latitude: 40.7128,
    longitude: -74.0060,
    form_values: {
      'field-key': 'value'
    }
  }
});

// Update a record
await client.records.update('record-id', {
  record: {
    form_values: {
      'field-key': 'new value'
    }
  }
});

// Delete a record
await client.records.delete('record-id');

// Get record history
const historyResponse = await client.records.getHistory('record-id');
```

#### Working with Forms

```typescript
// Get all forms
const formsResponse = await client.forms.getAll();
const forms = formsResponse.data.forms;

// Get all forms with pagination
const paginatedResponse = await client.forms.getAll({
  page: 1,
  perPage: 100
});

// Create a form
const createFormResponse = await client.forms.create({
  form: {
    name: 'My New Form',
    description: 'Form description'
  }
});

// Update a form
await client.forms.update('form-id', {
  form: {
    name: 'Updated Form Name'
  }
});

// Delete a form
await client.forms.delete('form-id');
```

#### Working with Projects

```typescript
// Get all projects
const projectsResponse = await client.projects.getAll();

// Create a project
await client.projects.create({
  project: {
    name: 'My Project',
    description: 'Project description'
  }
});

// Update a project
await client.projects.update('project-id', {
  project: {
    name: 'Updated Project'
  }
});

// Delete a project
await client.projects.delete('project-id');
```

#### Working with Webhooks

```typescript
// Get all webhooks
const webhooksResponse = await client.webhooks.getAll();

// Create a webhook
await client.webhooks.create({
  webhook: {
    name: 'My Webhook',
    url: 'https://example.com/webhook'
  }
});

// Update a webhook
await client.webhooks.update('webhook-id', {
  webhook: {
    name: 'Updated Webhook'
  }
});

// Delete a webhook
await client.webhooks.delete('webhook-id');
```

#### Query API

```typescript
// Execute a query (JSON format is default)
const queryResponse = await client.query.get({
  q: 'SELECT * FROM "My Form" WHERE status = \'submitted\' LIMIT 100'
});

const rows = queryResponse.data.rows;
```

#### Accessing the Full API

For API methods not yet wrapped, access the full underlying API client:

```typescript
// Access any of the 271+ API methods directly
const response = await client.client.changesetsGetAll();
const response2 = await client.client.photosGetAllMetadata({ formId: 'form-id' });
```

This gives you access to all Fulcrum API endpoints while still benefiting from the configured client.

### OpenTelemetry Instrumentation

The Fulcrum client includes built-in OpenTelemetry instrumentation that automatically creates spans for all API operations. This provides automatic distributed tracing without any additional configuration.

#### How It Works

Every API call is wrapped in a span with a descriptive name (e.g., `Records.getAll`, `Forms.create`) that will appear in your traces alongside the automatic HTTP spans created by axios instrumentation. This gives you both high-level operation context and low-level HTTP details.

**Span Naming Pattern:** `<Resource>.<operation>`

Examples:

- `Records.getAll` - Fetching all records
- `Records.getById` - Fetching a single record
- `Forms.create` - Creating a new form
- `Query.post` - Executing a SQL query

#### Span Attributes

Spans include relevant Fulcrum-specific attributes:

- `fulcrum.form_id` - Form ID for record operations
- `fulcrum.record_id` - Record ID for single record operations
- `fulcrum.project_id` - Project ID for project operations
- `fulcrum.skip_workflows` - Whether workflows were skipped
- `fulcrum.skip_webhooks` - Whether webhooks were skipped
- `fulcrum.query.sql` - SQL query being executed
- `fulcrum.query.format` - Query response format (json/csv/geojson)

#### Example: Setting Up Tracing

```typescript
import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { ConsoleSpanExporter } from '@opentelemetry/sdk-trace-node';
import { FulcrumClient, FulcrumRegion } from '@fulcrumapp/fulcrum-js';

// Initialize OpenTelemetry
const sdk = new NodeSDK({
  traceExporter: new ConsoleSpanExporter(),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();

// Create Fulcrum client - tracing is automatic
const client = new FulcrumClient({
  apiKey: 'your-api-key',
  region: FulcrumRegion.US,
});

// All API calls are automatically traced
const records = await client.records.getAll({ formId: 'abc123' });

// Your trace will show:
// └─ Records.getAll (fulcrum.form_id: abc123)
//    └─ HTTP GET https://api.fulcrumapp.com/api/v2/records
```

#### Trace Hierarchy

When you make an API call, you'll see a trace hierarchy like this:

```text
Your Application Span
└─ Records.create (fulcrum.form_id: abc123, fulcrum.skip_workflows: false)
   └─ HTTP POST https://api.fulcrumapp.com/api/v2/records
      └─ DNS lookup
      └─ TCP connection
      └─ TLS handshake
      └─ HTTP request/response
```

The Fulcrum span (`Records.create`) provides business context, while the nested HTTP span provides technical details about the network request.

#### Error Tracking

Errors are automatically recorded in spans with full exception details:

```typescript
try {
  await client.records.getById('invalid-id');
} catch (error) {
  // Span will be marked as error with exception details
  // Error status and message automatically recorded
}
```

#### Custom Instrumentation

The client uses the standard OpenTelemetry API, so you can add your own custom spans:

```typescript
import { trace } from '@opentelemetry/api';

const tracer = trace.getTracer('my-app');

await tracer.startActiveSpan('processRecords', async (span) => {
  span.setAttribute('record.count', 100);

  // Fulcrum API calls will be nested under this span
  const records = await client.records.getAll({ formId: 'abc123' });

  // Your processing logic
  for (const record of records.data.records || []) {
    // Process each record
  }

  span.end();
});
```

This creates a trace hierarchy like:

```text
processRecords (record.count: 100)
└─ Records.getAll (fulcrum.form_id: abc123)
   └─ HTTP GET https://api.fulcrumapp.com/api/v2/records
```

### Working with Forms (Low-Level API)

```typescript
const form = formResponse.data.form;
console.log(form.elements);  // Access form schema

// Create a form
await api.formsCreate('application/json', 'application/json', {
  form: {
    name: 'My New Form',
    description: 'Created via API',
    elements: [
      {
        type: 'TextField',
        key: 'name',
        label: 'Name',
        required: true
      }
    ]
  }
});

// Update a form
await api.formsUpdate('form-id', 'application/json', 'application/json', {
  form: {
    name: 'Updated Form Name'
  }
});

// Delete a form
await api.formsDelete('form-id');

// Get form history
const historyResponse = await api.formsGetHistory('form-id');
```

### Working with Media

```typescript
// Get all photos
const photosResponse = await api.photosGetAllMetadata(
  'record-id',              // recordId
  'form-id'                 // formId
);

// Get photo metadata
const photoResponse = await api.photosGetSingleMetadata('photo-id');

// Download photo file (returns blob)
const photoFileResponse = await api.photosGetSingleFile('photo-id');

// Get thumbnail
const thumbnailResponse = await api.photosThumbnailFile('photo-id');

// Get large version
const largeResponse = await api.photosLargeFile('photo-id');

// Similar methods for videos, audio, and signatures
const videoResponse = await api.videosGetSingleMetadata('video-id');
const audioResponse = await api.audioGetSingleMetadata('audio-id');
const signatureResponse = await api.signaturesGetSingleMetadata('signature-id');
```

### Working with Projects (Low-Level API)

```typescript
// Get all projects
const projectsResponse = await api.projectsGetAll();
const projects = projectsResponse.data.projects;

// Create a project
await api.projectsCreate('application/json', 'application/json', {
  project: {
    name: 'My Project',
    description: 'Project description'
  }
});

// Update a project
await api.projectsUpdate('project-id', 'application/json', 'application/json', {
  project: {
    name: 'Updated Project Name'
  }
});

// Delete a project
await api.projectsDelete('project-id');
```

### Working with Changesets

```typescript
// Create a changeset
const changesetResponse = await api.changesetsCreate(
  'application/json',
  'application/json',
  {
    changeset: {
      form_id: 'form-id',
      metadata: {
        app: 'my-app',
        version: '1.0.0'
      }
    }
  }
);

const changesetId = changesetResponse.data.changeset.id;

// Perform operations with the changeset
await api.recordsCreate(
  'application/json',
  'application/json',
  false,
  false,
  {
    record: {
      form_id: 'form-id',
      changeset_id: changesetId,
      form_values: {}
    }
  }
);

// Close the changeset
await api.changesetsClose(changesetId);

// Get all changesets
const changesetsResponse = await api.changesetsGetAll();

// Update a changeset
await api.changesetsUpdate('changeset-id', 'application/json', 'application/json', {
  changeset: {
    metadata: {
      updated: true
    }
  }
});
```

### Working with Webhooks (Low-Level API)

```typescript
// Get all webhooks
const webhooksResponse = await api.webhooksGetAll();
const webhooks = webhooksResponse.data.webhooks;

// Create a webhook
await api.webhooksCreate('application/json', 'application/json', {
  webhook: {
    name: 'My Webhook',
    url: 'https://example.com/webhook',
    active: true,
    events: {
      record_add: true,
      record_update: true,
      record_delete: true
    }
  }
});

// Update a webhook
await api.webhooksUpdate('webhook-id', 'application/json', 'application/json', {
  webhook: {
    active: false
  }
});

// Delete a webhook
await api.webhooksDelete('webhook-id');
```

### Query API (Low-Level API)

```typescript
// Execute SQL queries
const queryResponse = await api.queryPost('application/json', 'application/json', {
  q: 'SELECT * FROM "My Form" LIMIT 10'
});

// Get GeoJSON results
const geoResponse = await api.queryPost('application/geo+json', 'application/json', {
  q: 'SELECT * FROM "My Form" WHERE latitude IS NOT NULL'
});

// Get CSV results
const csvResponse = await api.queryPost('text/csv', 'application/json', {
  q: 'SELECT name, status FROM "My Form"'
});
```

### Batch Operations (Low-Level API)

```typescript
// Create a batch
const batchResponse = await api.createBatch('application/json', 'application/json', {
  batch: {
    form_id: 'form-id',
    operations: [
      {
        action: 'update',
        record_id: 'record-1',
        project_id: 'new-project-id'
      },
      {
        action: 'delete',
        record_id: 'record-2'
      }
    ]
  }
});

const batchId = batchResponse.data.batch.id;

// Add more operations to existing batch
await api.addBatchOperations(batchId, {
  operations: [
    {
      action: 'update',
      record_id: 'record-3',
      status: 'submitted'
    }
  ]
});

// Start batch execution
await api.startBatch(batchId);

// Check batch status
const statusResponse = await api.getSingleBatch(batchId);
console.log(statusResponse.data.batch.status);
```

### Audit Logs

```typescript
// Get all audit logs
const logsResponse = await api.auditLogsGetAll(
  'api',                    // source
  'create',                 // activity
  undefined,                // ip
  undefined,                // user
  '2024-01-01T00:00:00Z',  // updatedSince
  undefined,                // updatedBefore
  1,                        // page
  100                       // perPage
);

const logs = logsResponse.data.audit_logs;

// Get single audit log
const logResponse = await api.auditLogsGetSingle('log-id');
```

### Report Templates

```typescript
// Create a report template
await api.createReportTemplate('application/json', 'application/json', {
  report_template: {
    name: 'My Report',
    form_id: 'form-id',
    title: 'Report Title',
    page_size: 'letter',
    orientation: 'portrait',
    // ... additional template configuration
  }
});

// Get all report templates
const templatesResponse = await api.getAllReportTemplates();

// Update a report template
await api.updateReportTemplate('template-id', 'application/json', 'application/json', {
  report_template: {
    name: 'Updated Report Name'
  }
});

// Delete a report template
await api.deleteReportTemplate('template-id');
```

### Groups and Memberships

```typescript
// Create a group
const groupResponse = await api.createGroup('application/json', 'application/json', {
  group: {
    name: 'Field Team',
    description: 'Field data collectors'
  }
});

// Get all groups
const groupsResponse = await api.getAllGroups();

// Update group
await api.updateGroupNameDescription('group-id', 'application/json', 'application/json', {
  group: {
    name: 'Updated Team Name'
  }
});

// Manage group permissions
await api.updateGroupPermissions('group-id', 'application/json', 'application/json', {
  permissions: {
    forms: ['form-id-1', 'form-id-2']
  }
});

// Add member to organization
await api.createMember('application/json', 'application/json', {
  member: {
    email: 'user@example.com',
    role_id: 'role-id'
  }
});

// Update member
await api.updateMember('member-id', 'application/json', 'application/json', {
  member: {
    role_id: 'new-role-id'
  }
});

// Delete member
await api.deleteMember('member-id');
```

### TypeScript Usage Tips

#### Using Types for Better IDE Support

```typescript
import {
  DefaultApi,
  Configuration,
  // Response types
  RecordsResponse,
  FormsResponse,
  ProjectsResponse,
  // Model types
  Record as FulcrumRecord,
  Form,
  Project,
  // Request types
  RecordsCreateRequest,
  FormsCreateRequest
} from '@fulcrumapp/fulcrum-js';

// Type-safe record creation
const createRecordRequest: RecordsCreateRequest = {
  record: {
    form_id: 'form-id',
    status: 'submitted',
    latitude: 40.7128,
    longitude: -74.0060,
    form_values: {
      'name': 'John Doe'
    }
  }
};

// Using the client
const response = await client.records.create(createRecordRequest);

// TypeScript knows the response type
const record: FulcrumRecord = response.data.record;
```

#### Type-Safe Form Values

```typescript
// Define your form structure
interface MyFormValues {
  name: string;
  age: number;
  email: string;
}

// Create type-safe record
const createRequest: RecordsCreateRequest = {
  record: {
    form_id: 'my-form-id',
    form_values: {
      'name': 'John',
      'age': 30,
      'email': 'john@example.com'
    } as MyFormValues
  }
};
```

#### Handling Errors

```typescript
import { AxiosError } from 'axios';

try {
  const response = await api.recordsGetSingle('invalid-id');
} catch (error) {
  if (error instanceof AxiosError) {
    console.error('API Error:', error.response?.status);
    console.error('Message:', error.response?.data);
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Upgrading from v2 to v3

Version 3 is a major rewrite with breaking changes. The new API provides complete type safety and comprehensive API coverage.

### What Changed

#### 1. Import Paths and Module System

v3 uses ES Modules by default (with CommonJS support for compatibility).

**v2.x:**

```javascript
// CommonJS only
const { Client } = require('@fulcrumapp/fulcrum-js');
const client = new Client('token');
```

**v3.0:**

```javascript
// ES Modules (recommended) - Use the wrapper client!
import { FulcrumClient, FulcrumRegion } from '@fulcrumapp/fulcrum-js';

const client = new FulcrumClient({
  apiKey: 'token',
  region: FulcrumRegion.US
});

// Or CommonJS for legacy compatibility
const { FulcrumClient, FulcrumRegion } = require('@fulcrumapp/fulcrum-js');
```

#### 2. Method Names and Structure

The API structure changed from resource-oriented to flat method names.

**v2.x:**

```javascript
// Resource-based API
await client.records.all({ form_id: 'abc' });
await client.records.find('record-id');
await client.records.create({ form_id: 'abc', ... });
await client.records.update('id', { ... });
await client.records.delete('id');
await client.forms.all();
await client.forms.find('form-id');
```

**v3.0:**

```typescript
// Use the wrapper client for a cleaner API
await client.records.getAll({ formId: 'abc' });
await client.records.getById('record-id');
await client.records.create({ record: { form_id: 'abc', ... } });
await client.records.update('id', { record: { ... } });
await client.records.delete('id');
await client.forms.getAll();
await client.forms.getById('form-id');
```

#### 3. Response Structure

**v2.x** returned custom `Page` objects:

```javascript
const page = await client.records.all({ form_id: 'abc' });
console.log(page.objects);        // Array of records
console.log(page.currentPage);    // Current page number
console.log(page.totalPages);     // Total pages
console.log(page.totalCount);     // Total count
```

**v3.0** returns standard axios responses:

```typescript
const response = await api.recordsGetAll(false, undefined, 'abc');
console.log(response.data.records);     // Array of records
console.log(response.status);           // HTTP status code
console.log(response.headers);          // Response headers
console.log(response.data);             // Full response body
```

#### 4. Error Handling

**v2.x:**

```javascript
try {
  const record = await client.records.find('id');
} catch (error) {
  console.error(error.message);
}
```

**v3.0** uses axios error structure:

```typescript
import { AxiosError } from 'axios';

try {
  const response = await api.recordsGetSingle('id');
} catch (error) {
  if (error instanceof AxiosError) {
    console.error('Status:', error.response?.status);
    console.error('Data:', error.response?.data);
  }
}
```

#### 5. Query API

**v2.x:**

```javascript
const result = await client.query('SELECT * FROM "Form"');
const geojson = await client.query('SELECT * FROM "Form"', 'geojson');
```

**v3.0:**

```typescript
const jsonResponse = await api.queryPost('application/json', 'application/json', {
  q: 'SELECT * FROM "Form"'
});

const geoResponse = await api.queryPost('application/geo+json', 'application/json', {
  q: 'SELECT * FROM "Form"'
});
```

#### 6. Media Handling

**v2.x:**

```javascript
// Upload photo
const stream = fs.createReadStream('photo.jpg');
await client.photos.create(stream, { accessKey: 'key' });

// Download photo
const photoStream = await client.photos.media('photo-id', 'large');
photoStream.pipe(fs.createWriteStream('photo.jpg'));
```

**v3.0:**

```typescript
// Upload photo
await api.photosUpload('application/json', 'image/jpeg');

// Download photo
const response = await api.photosLargeFile('photo-id');
// response.data contains the file blob
```

#### 7. Changesets

**v2.x:**

```javascript
const changeset = await client.changesets.create({
  form_id: 'form-id',
  metadata: { app: 'my-app' }
});

await client.records.delete('record-id', changeset.id);
await client.changesets.close(changeset.id);
```

**v3.0:**

```typescript
const response = await api.changesetsCreate('application/json', 'application/json', {
  changeset: {
    form_id: 'form-id',
    metadata: { app: 'my-app' }
  }
});

const changesetId = response.data.changeset.id;

await api.recordsDelete('record-id');  // Changeset handled differently
await api.changesetsClose(changesetId);
```

### Migration Strategy

#### Recommended: Use the Wrapper Client

The v3 wrapper client (`FulcrumClient`) provides a clean, resource-oriented API similar to v2:

1. Install v3 (ensure you have [configured the GitHub registry](#1-configure-registry)):

  ```bash
  yarn add @fulcrumapp/fulcrum-js@latest
  # or
  npm install @fulcrumapp/fulcrum-js@latest
  ```

1. Update your imports:

  ```typescript
  // Old v2 code
  import { Client } from 'fulcrum-app';

  // New v3 code
  import { FulcrumClient, FulcrumRegion } from '@fulcrumapp/fulcrum-js';
  ```

1. Update client initialization:

  ```typescript
  // Old v2
  const client = new Client('api-token');

  // New v3
  const client = new FulcrumClient({
    apiKey: 'api-token',
    region: FulcrumRegion.US  // Must specify region
  });
  ```

1. Method names are slightly different but similar:

   - `.all()` → `.getAll()`
   - `.find()` → `.getById()`
   - Parameters are now typed objects instead of positional

#### Advanced: Direct Generated API Access

For advanced use cases, you can access the full generated API client directly through `client.client`:

```typescript
import { FulcrumClient, FulcrumRegion } from '@fulcrumapp/fulcrum-js';

const client = new FulcrumClient({
  apiKey: 'token',
  region: FulcrumRegion.US
});

// Access any of the 271+ API methods directly
const response = await client.client.changesetsGetAll();
```

### New Features in v3

Features that are **new** in v3 and weren't available in v2:

#### New in v3: Report Templates

```typescript
await api.createReportTemplate('application/json', 'application/json', { report_template: {...} });
await api.getAllReportTemplates();
```

#### Workflows

```typescript
await api.createWorkflow('application/json', 'application/json', { workflow: {...} });
await api.getAllWorkflows();
```

#### Batch Operations

```typescript
await api.createBatch('application/json', 'application/json', { batch: {...} });
await api.startBatch('batch-id');
```

#### Groups

```typescript
await api.createGroup('application/json', 'application/json', { group: {...} });
await api.getAllGroups();
await api.updateGroupPermissions('group-id', ...);
```

#### Enhanced Media Operations

```typescript
// More granular media access
await api.photosLargeMetadata('photo-id');
await api.photosThumbnailFile('photo-id');
await api.videosGetThumbnailLargeSquare('video-id');
```

#### Track Data

```typescript
// Get GPS tracks in multiple formats
await api.videosGetSingleTrackGeojson('video-id');
await api.audioGetAllTracksGpx();
```

### Complete Method Mapping

**Records:**

- `client.records.all()` → `api.recordsGetAll()`
- `client.records.find(id)` → `api.recordsGetSingle(id)`
- `client.records.create(obj)` → `api.recordsCreate(..., { record: obj })`
- `client.records.update(id, obj)` → `api.recordsUpdate(id, ..., { record: obj })`
- `client.records.delete(id)` → `api.recordsDelete(id)`
- `client.records.history(id)` → `api.recordsGetHistory(id)`
- *(new)* `api.recordsGetAllHistory()`

**Forms:**

- `client.forms.all()` → `api.formsGetAll()`
- `client.forms.find(id)` → `api.formsGetSingle(id)`
- `client.forms.create(obj)` → `api.formsCreate(..., { form: obj })`
- `client.forms.update(id, obj)` → `api.formsUpdate(id, ..., { form: obj })`
- `client.forms.delete(id)` → `api.formsDelete(id)`
- `client.forms.history(id)` → `api.formsGetHistory(id)`

**Projects:**

- `client.projects.all()` → `api.projectsGetAll()`
- `client.projects.find(id)` → `api.projectsGetSingle(id)`
- `client.projects.create(obj)` → `api.projectsCreate(..., { project: obj })`
- `client.projects.update(id, obj)` → `api.projectsUpdate(id, ..., { project: obj })`
- `client.projects.delete(id)` → `api.projectsDelete(id)`

**Changesets:**

- `client.changesets.all()` → `api.changesetsGetAll()`
- `client.changesets.find(id)` → `api.changesetsGetSingle(id)`
- `client.changesets.create(obj)` → `api.changesetsCreate(..., { changeset: obj })`
- `client.changesets.update(id, obj)` → `api.changesetsUpdate(id, ..., { changeset: obj })`
- `client.changesets.close(id)` → `api.changesetsClose(id)`

**Choice Lists:**

- `client.choiceLists.all()` → `api.choiceListsGetAll()`
- `client.choiceLists.find(id)` → `api.choiceListsGetSingle(id)`
- `client.choiceLists.create(obj)` → `api.choiceListsCreate(..., { choice_list: obj })`
- `client.choiceLists.update(id, obj)` → `api.choiceListsUpdate(id, ..., { choice_list: obj })`
- `client.choiceLists.delete(id)` → `api.choiceListsDelete(id)`

**Classification Sets:**

- `client.classificationSets.all()` → `api.classificationSetsGetAll()`
- `client.classificationSets.find(id)` → `api.classificationSetsGetSingle(id)`
- `client.classificationSets.create(obj)` → `api.classificationSetsCreate(..., { classification_set: obj })`
- `client.classificationSets.update(id, obj)` → `api.classificationSetsUpdate(id, ..., { classification_set: obj })`
- `client.classificationSets.delete(id)` → `api.classificationSetsDelete(id)`

**Webhooks:**

- `client.webhooks.all()` → `api.webhooksGetAll()`
- `client.webhooks.find(id)` → `api.webhooksGetSingle(id)`
- `client.webhooks.create(obj)` → `api.webhooksCreate(..., { webhook: obj })`
- `client.webhooks.update(id, obj)` → `api.webhooksUpdate(id, ..., { webhook: obj })`
- `client.webhooks.delete(id)` → `api.webhooksDelete(id)`

**Photos:**

- `client.photos.all()` → `api.photosGetAllMetadata()`
- `client.photos.find(id)` → `api.photosGetSingleMetadata(id)`
- `client.photos.media(id, 'original')` → `api.photosGetSingleFile(id)`
- `client.photos.media(id, 'thumbnail')` → `api.photosThumbnailFile(id)`
- `client.photos.media(id, 'large')` → `api.photosLargeFile(id)`
- *(new)* `api.photosUpload()`

**Videos, Audio, Signatures:**

- Similar pattern to photos with specific methods for each media type
- *(new)* Track data methods: `videosGetSingleTrackGeojson()`, `audioGetAllTracksGpx()`, etc.

**Audit Logs:**

- `client.auditLogs.all()` → `api.auditLogsGetAll()`
- `client.auditLogs.find(id)` → `api.auditLogsGetSingle(id)`

**Authorizations:**

- `client.authorizations.all()` → `api.authorizationsGetAll()`
- `client.authorizations.find(id)` → `api.authorizationsGetSingle(id)`
- `client.authorizations.create(obj)` → `api.authorizationsCreate(..., { authorization: obj })`
- `client.authorizations.update(id, obj)` → `api.authorizationsUpdate(id, ..., { authorization: obj })`
- `client.authorizations.delete(id)` → `api.authorizationsDelete(id)`

**Memberships:**

- `client.memberships.all()` → `api.membershipsGetAll()`
- *(new)* `api.createMember()`, `api.updateMember()`, `api.deleteMember()`

**Roles:**

- `client.roles.all()` → `api.rolesGetAll()`

**Layers:**

- `client.layers.all()` → `api.layersGetAll()`
- `client.layers.find(id)` → `api.layersGetSingle(id)`
- `client.layers.create(obj)` → `api.layersCreate(..., { layer: obj })`
- `client.layers.update(id, obj)` → `api.layersUpdate(id, ..., { layer: obj })`
- `client.layers.delete(id)` → `api.layersDelete(id)`

</details>

## V2 Usage (Legacy)

**Note:** The following documentation is for v2.x. If you're using v3.0, see the [Usage](#usage) section above.

There are three main exports from this module: `Client`, `getUser`, and `createAuthorization`.

### Client

API calls are made using a client. Let's assume you already have an API token and you want to make some calls to the API. If you need an API token, see the [getUser](#getuser) and [createAuthorization](#createauthorization) functions.

```javascript
import { Client } from '@fulcrumapp/fulcrum-js';
// or
// const fulcrum = require('@fulcrumapp/fulcrum-js');
// const Client = fulcrum.Client;

const client = new Client('your-api-token');

client.forms.all({schema: false})
  .then((page) => {
    console.log(`I got you ${page.objects.length} forms.`);
  })
  .catch((error) => {
    console.log('Error getting your forms.', error.message);
  });
```

Various methods are available for each of the resources. Check the chart below for details.

#### Client Resources and Methods

| Resource            | Methods                                       |
|---------------------|-----------------------------------------------|
| Forms               | find, all, create, update, delete, history    |
| Records             | find, all, create, update, delete, history    |
| Projects            | find, all, create, update, delete             |
| Changesets          | find, all, create, update, close              |
| Choice Lists        | find, all, create, update, delete             |
| Classification Sets | find, all, create, update, delete             |
| Webhooks            | find, all, create, update, delete             |
| Photos              | find, all, create, media                      |
| Signatures          | find, all, create, media                      |
| Videos              | find, all, create, media, track, uploadTrack  |
| Audio               | find, all, create, media, track, uploadTrack  |
| Memberships         | all, create, change                           |
| Roles               | all                                           |
| Child Records       | all                                           |
| Layers              | find, all, create, update, delete             |
| Audit Logs          | find, all                                     |
| Authorizations      | find, all, create, update, delete, regenerate |

#### find

Finds a single resource. The single parameter is a resource id.

This method returns a Promise containing the resource.

```javascript
client.forms.find('abc-123')
  .then((form) => {
    console.log('success', form);
  })
  .catch((error) => {
    // There was a problem with the request. Is the API token correct?
    console.log(error.message);
  });
```

Check the [Fulcrum API Docs](https://learn.fulcrumapp.com/dev/rest/endpoints/forms) for an example of returned objects.

#### all

Search for resources. The single parameter is an options object. The options object will be converted to query string parameters and properly url encoded. The options will vary depending on the resource, but the pagination options, `page` and `per_page`, are always accepted.

This method returns a Promise containing a page. The page object has 5 properties.

|property|description|
|-|-|
| `objects` | An array of the resources requested |
| `currentPage` | The current page |
| `perPage` | The number of resources returned per page |
| `totalPages` | The total number of pages required to return all resources |
| `totalCount` | The total count of all resources with respect to current query parameters |

```javascript
const options = {
  form_id: '043d36a5-d144-4bca-b6ce-be210476e913',
  page: 1,
  per_page: 2
}

client.records.all(options)
  .then((page) => {
    console.log(
      `Got page ${page.currentPage} of ${page.totalPages} containing ${page.objects.length} of ${page.totalCount} total resources.`
    );
    // Got page 1 of 5 containing 2 of 10 total resources.
  })
  .catch((error) => {
    console.log(error.message);
  });
```

#### create

Create a resource. The single parameter is an object. The object should represent the resource you are creating. Check the [Fulcrum API Docs](https://learn.fulcrumapp.com/dev/rest/intro) for examples of resource objects.

This method returns a Promise containing the created resource.

```javascript
const obj = {
  name: 'My Awesome Webhook',
  url: 'http://foo.com/fulcrum_webhook',
  active: true
};

client.webhooks.create(obj)
  .then((webhook) => {
    console.log('success', webhook);
  })
  .catch((error) => {
    console.log(error.message);
  });
```

#### update

Update an object. Parameters are a resource id and an object. The id is the unique id for the resource to be updated. The object should represent the resource you are updating.

This method returns a promise containing the updated resource.

```javascript
const obj = {
  name: 'My Awesome Webhook',
  url: 'http://foo.com/fulcrum_webhook',
  active: false,
  id: '139c8c99-d4e4-4bf0-a0c5-ed6b6e2e5605'
};

client.webhooks.update(obj.id, obj)
  .then((webhook) => {
    console.log('success', webhook);
  })
  .catch((error) => {
    console.log(error.message);
  });
```

#### delete

Delete a resource. The single parameter is a resource id.

This method returns a promise containing the resource that was deleted.

```javascript
client.forms.delete('6fc7d1dc-62a4-4c81-a857-6b9660f18b55')
  .then((form) => {
    console.log('success', form);
  })
  .catch((error) => {
    console.log(error.message);
  });
```

#### Handling Authentication Errors

The client also provides a `registerAuthenticationErrorHandler` method which accepts a single parameter, a function to handle authentication errors. Authentication errors will still be thrown but all authentication errors will be sent to the function passed into this method. This is helpful if you've built a client application where a user "logs in" using the `getUser` and `createAuthorization` methods (documented below), and for some reason the authorization token has been deleted. This can tell your application to reset the current session and prompt the user to "log in" again. Using this method is optional.

```javascript
import { Client } from '@fulcrumapp/fulcrum-js';

const handleAuthError = () {
  console.log('The authorization token is no longer valid');
  destroySession();
  promptLogIn();
};

const client = new Client('your-api-token');

client.registerAuthenticationErrorHandler(handleAuthError);
```

#### query

The `Client` object has a `query` method that can be used to access the [Query API](https://learn.fulcrumapp.com/dev/query/intro). The arguments are a SQL string, and an optional format. The default format is `'json'`. Other formats are `'csv'` or `'geojson'`.

```javascript
import { Client } from '@fulcrumapp/fulcrum-js';

const client = new Client('your-api-token');

client.query('SELECT * FROM "Manhole Inspections" LIMIT 1;')
  .then(result => console.log(result))
  .catch(error => console.log(error));

// or to get GeoJSON
client.query('SELECT * FROM "Manhole Inspections" LIMIT 1;', 'geojson')
  .then(geojson => console.log(geojson.features[0].geometry.coordinates[0]))
  .catch(error => console.log(error));
```

### getUser

This is a helper function to get user data including organizations you belong to. Use this in conjunction with [createAuthorization](#createauthorization) to create an API token.

```javascript
import { getUser } from '@fulcrumapp/fulcrum-js';
// or
// const fulcrum = require('@fulcrumapp/fulcrum-js');
// const getUser = fulcrum.getUser;

getUser('name@email.com', 'password')
  .then((user) => {
    console.log(user);
    // user.contexts is an array of the organizations you belong to. Use These
    // ids with createAuthorization to create API tokens.
  })
  .catch((error) => {
    console.log(error.message);
  });
```

### createAuthorization

This is a helper function to create [authorizations](https://learn.fulcrumapp.com/dev/rest/endpoints/authorizations) (API tokens) associated with a user and organization (a membership).

```javascript
import { createAuthorization } from '@fulcrumapp/fulcrum-js';
// or
// const fulcrum = require('@fulcrumapp/fulcrum-js');
// const createAuthorization = fulcrum.createAuthorization;

const email = 'name@email.com';
const password = 'password';
const organizationId = 'organization-id-from-getUser';
const userId = 'optional user id';
const note = 'My awesome app version 4.20';
const timeout = 60 * 60 * 24;

createAuthorization(email, password, organizationId, note, timeout, userId)
  .then((authorization) => {
    console.log(authorization);
    // authorization.token is your API token to use with the rest of the API.
  })
  .catch((error) => {
    console.log(error.message);
  });
```

## Promises

Using Promises, we have more options for flow control and handling errors. In some JavaScript environments we can use the [await operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await).

> The await expression causes async function execution to pause until  a Promise is fulfilled, that is resolved or rejected, and to resume execution of the async function after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise.

In other words, they let us write asynchronous code, where we usually have nested callbacks, in a more sequential pattern. Below is an example of how we would have made two sequential API calls with version 1.

```javascript
function getFormAndRecord(callback) {
  client.forms.find('abc-123', (error, form) => {
    if (error) {
      callback(error);
      return
    }

    client.records.find('def-456', (error, record) => {
      if (error) {
        callback(error);
      } else {
        callback(null, [form, record]);
      }
    })
  });
}

getFormAndRecord((error, results) => {
  if (error) {
    return console.log(error);
  }

  return console.log(results);
});
```

And here's an example of using the await keyword to pause execution until the promises (API calls) are resolved.

```javascript
async function getFormAndRecord() {
  try {
    const form = await client.forms.find('abc-123');
    const record = await client.records.find('def-456');
    console.log(form, record);
  } catch (error) {
    console.log(error);
  }
}

getFormAndRecord();
```

If either the `client.forms.find` or `client.records.find` methods fail, they will be picked up in the `catch`, allowing us to log errors from a single place and have a much cleaner way of making multiple API calls.

Below is a real world example where we 1) create a changeset, 2) delete a record associated with that changeset, 3) close the changeset. This is similar to how the mobile apps work where all adds, updates, and deletes are associated with changesets.

```javascript
async function deleteRecord(formId, recordId) {
  try {
    // metadata is an arbitrary object describing the
    // app/environment that the changeset was performed in
    const changesetObj = {
      form_id: formId,
      metadata: {
        app: 'fulcrum-js',
        version: 99.78
      }
    };

    console.log('Creating changeset ...');
    const changeset = await client.changesets.create(changesetObj);

    console.log('Deleting record ...');
    await client.records.delete(recordId, changeset.id);

    console.log('Closing changeset ...');
    await client.changesets.close(changeset.id);

    console.log(`Deleted record ${recordId} in changeset ${changeset.id}.`);
  } catch (error) {
    console.log(error.message);
  }
}

deleteRecord('abc-123', 'def-456');
```

## Media

This library supports creating all media types supported by the Fulcrum API - photos, videos, signatures, and audio. The `create` method for each of these resource type accepts a [Readable Stream](https://nodejs.org/api/stream.html) and an optional object containing the unique access key for the media.

```javascript
import fs from 'fs';

const photo = fs.createReadStream('photo.jpg');

client.photos.create(photo)
  .then(created => console.log(created))
  .catch(error => console.log(error));
```

To specifiy your own access key (unique id) for a piece of media, pass it along in an options object. Otherwise we'll create one for you using the [uuid package](https://www.npmjs.com/package/uuid).

```javascript
import fs from 'fs';
import uuid from 'uuid';

const photo = fs.createReadStream('photo.jpg');
const key = uuid.v4();

client.photos.create(photo, {accessKey: key})
  .then(created => console.log(created))
  .catch(error => console.log(error));
```

Since the `create` method accepts a Readable Stream we can pipe that stream directly from an http request, keeping us from downloading a file and saving it to a temporary file, then deleting it after a successful create.

```javascript
import request from 'request';

client.photos.create(request('https://nodejs.org/static/legacy/images/logo.png'))
  .then(created => console.log(created))
  .catch(error => console.log(error));
```

Sometimes you might not have access to a media stream, but will have a [Buffer](https://nodejs.org/api/buffer.html) of the entire resource. The library won't be able to infer the file name so you'll need to supply a `fileName` option.

```javascript
const photo = fs.readFileSync('photo.jpg');

client.photos.create(photo, {fileName: 'photo.jpg'})
  .then(created => console.log(created))
  .catch(error => console.log(error));
```

Use the `media` method to get photos, signatures, audio, and video in multiple sizes. The parameters passed to this method are `id` (also referred to as access key), and size. The default size is `original`. The sizes available for each media type are:

| Resource            | Sizes                                |
|---------------------|--------------------------------------|
| Photos              | 'original', 'thumbnail', and 'large' |
| Signatures          | 'original', 'thumbnail', and 'large' |
| Videos              | 'original', 'small', and 'medium'    |
| Audio               | 'original'                           |

Get the original photo size.

```javascript
const writeStream = fs.createWriteStream('original.jpg');

client.photos.media('4352ac45-8527-43ac-819f-0bc735119767')
  .then(photo => photo.pipe(writeStream))
  .catch(error => console.log(error));
```

Get the small version of a video.

```javascript
const writeStream = fs.createWriteStream('vid.mp4');

client.videos.media('5b9b6c9c-2a79-4f69-9539-9c0cb958f0a0')
  .then(video => video.pipe(writeStream))
  .catch(error => console.log(error));
```

## Tracks

Use the `track` method to get audio and video tracks in multiple formats. The parameters passed to this method are `id` (also referred to as access key), and format. The default format is `json`. The other available formats are `geojson`, `kml`, and `gpx`.

Download the track for a video in `json` format.

```javascript
client.videos.track('ccf931bd-4e0f-4562-8c00-3a57f8a62589')
  .then(track => {
    fs.writeFileSync('track.json', JSON.stringify(track));
  })
  .catch(err => console.log(err));
```

Download the track for an audio in `gpx` format.

```javascript
client.audio.track('ccf931bd-4e0f-4562-8c00-3a57f8a62589', 'gpx')
  .then(track => {
    fs.writeFileSync('track.gpx', track);
  })
  .catch(err => console.log(err));
```

## Development

Install dependencies:

```bash
cd fulcrum-js
yarn install
```

### Building

This project uses TypeScript compilation to build ESM and CommonJS outputs:

```bash
yarn build            # Build everything (generated client + wrapper)
yarn build:wrapper   # Build only the wrapper (src/ → dist/)
yarn clean           # Remove dist/ and generated/dist/ directories
yarn lint            # Check code quality with ESLint
yarn test            # Run tests with Jest
```

### OpenAPI Client Generation

The Fulcrum API client is defined in `src/` and can be regenerated from the OpenAPI specification.

#### Updating the Client from OpenAPI Spec

To update the generated client from the latest Fulcrum API specification:

1. Update the OpenAPI spec (optional, only if the spec has changed):

  ```bash
  # Download main spec file
  curl -s "https://raw.githubusercontent.com/fulcrumapp/api/spike/power-automate-testing/reference/rest-api.json" > openapi/rest-api.json

  # Download external schema files
  curl -s "https://raw.githubusercontent.com/fulcrumapp/api/spike/power-automate-testing/reference/components/schemas/ReportTemplateRequest.json" > openapi/components/schemas/ReportTemplateRequest.json
  ```

1. Generate the client from the OpenAPI specification:

  ```bash
  yarn generate
  ```

1. Build the project:

  ```bash
  yarn build
  ```

1. Run tests to ensure nothing broke:

  ```bash
  yarn test
  ```

#### How Generation Works

The project uses `@openapitools/openapi-generator-cli` to generate TypeScript API client code from the OpenAPI specification located at `openapi/rest-api.json`.

**Configuration details:**

- **Generator**: `typescript-axios`
- **Output**: `generated/` directory
- **Package**: `fulcrum-generated`
- **Module System**: Dual build - CommonJS (`dist/index.js`) and ES Modules (`dist/esm/index.js`)
- **Features**:
  - Full TypeScript support with type definitions
  - ES6+ and CommonJS module formats
  - Promise-based async/await API
  - Axios HTTP client with OTEL support
  - 106 TypeScript interfaces/types
  - 271+ API methods

**Generated package.json exports:**

```json
{
  "main": "./dist/index.js",      // CommonJS entry point
  "module": "./dist/esm/index.js", // ES modules entry point
  "typings": "./dist/index.d.ts"   // TypeScript definitions
}
```

This dual-build approach ensures the client works in both modern (ESM) and legacy (CommonJS) environments.

#### Manual Customizations

The following custom logic is maintained manually in the `src/` directory:

- **`Client.js`**: Main client class that wraps resource endpoints
- **`Fetcher.js`**: HTTP client using axios with request queuing
- **`Page.js`**: Pagination response wrapper
- **`resources/`**: Resource-specific implementations for each API endpoint
- **Auth helpers** (`getUser`, `createAuthorization` in `index.js`)
- **Error handling** and authentication error callbacks

These manual implementations provide:

- A user-friendly API that matches the Fulcrum platform conventions
- Request queuing with `p-queue` (concurrency: 3)
- Automatic pagination support via the `Page` class
- Custom error handling and authentication callbacks
- Media streaming support (photos, videos, signatures, audio)
- Better TypeScript/IDE support with explicit type definitions

#### Generated Code Integration

When regenerating from the OpenAPI spec, the generated code is placed in the `generated/` directory. To integrate new generated APIs:

1. Review the generated code in `generated/`
2. Copy relevant parts to `src/resources/` or `src/` as needed
3. Adapt the code to match the existing API patterns
4. Update `src/index.js` to export new resources
5. Add tests for new functionality in `test/`

### HTTP Client

The project uses **axios** for HTTP requests (as of v2.7.0). Previously it used `isomorphic-fetch`, but switched to axios for:

- Better OTEL (OpenTelemetry) instrumentation support
- Automatic request interception
- More consistent error handling
- Isomorphic support (works in Node.js and browsers)

### OTEL Integration

To integrate OpenTelemetry tracing:

```javascript
import { Client } from '@fulcrumapp/fulcrum-js';
import { BasicTracerProvider } from '@opentelemetry/sdk-trace-node';
import { registerInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { AxiosInstrumentation } from '@opentelemetry/instrumentation-axios';

// Initialize tracing
const tracerProvider = new BasicTracerProvider();
registerInstrumentations({
  tracerProvider,
  instrumentations: [new AxiosInstrumentation()],
});

// Now all axios requests (including Fulcrum API calls) will be traced
const client = new Client('your-api-token');
```

## Tests

```bash
yarn test                    # Run all tests
yarn test -- test/test_forms.js  # Run specific test file
yarn lint                    # Check code quality
```

### API Verification

To verify the API client against a live Fulcrum account, use the verification script:

```bash
yarn verify
```

This interactive script will:

- Prompt you for your Fulcrum API token
- Test all available list operations (Forms, Records, Projects, Webhooks)
- Display colored output showing success/failure for each endpoint
- Print statistics about the responses (count of items, sample data)
- Exit with code 0 on success, 1 on failure

**Example output:**

```text
Enter your Fulcrum API token: ****************************

Initializing client...

Testing 4 endpoints...

Testing Forms                    ✓ 5 items (HTTP 200, 12.45 KB)
Testing Records                  ✓ 42 items (HTTP 200, 156.78 KB)
Testing Projects                 ✓ 3 items (HTTP 200, 2.34 KB)
Testing Webhooks                 ✓ 0 items (HTTP 200, 0.15 KB)

Summary:

  ✓ Successful: 4/4
  ✗ Failed:     0/4
  Total Items:  50
  Total Size:   171.72 KB

=================================================
  ✓ Verification Complete
=================================================
```

This is useful for:

- Testing API connectivity
- Verifying your API token works
- Checking account permissions
- Debugging API issues

### Writing Tests

Tests are located in the `test/` directory and use Mocha + nock for HTTP mocking.

Example:

```javascript
import { Client } from '../src/index';
import nock from 'nock';

describe('Forms', () => {
  it('should list forms', (done) => {
    const client = new Client('test-token');

    nock('https://api.fulcrumapp.com')
      .get('/api/v2/forms')
      .reply(200, { forms: [] });

    client.forms.all()
      .then((page) => {
        expect(page.objects).to.deep.equal([]);
        done();
      })
      .catch(done);
  });
});
```

## Publishing

To publish a new version:

```bash
# Ensure all tests pass
yarn test

# Update version in package.json
yarn version --patch  # or --minor/--major

# Build the project
yarn build

# Publish to GitHub Packages
yarn publish
```
