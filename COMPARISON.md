# Comparison: v2 (dist/) vs v3 (generated/)

## Overview

This document compares the old v2 client implementation (in `dist/`) with the new v3 auto-generated TypeScript client (in `generated/`).

## Summary of Changes

### v2 (Old - dist/)

- **Language:** JavaScript (ES6+ transpiled to CommonJS via TypeScript)
- **HTTP Client:** axios (migrated from isomorphic-fetch)
- **Structure:** Resource-oriented with 18 resource classes
- **Methods:** ~54 total methods across all resources
- **Type Safety:** None (JavaScript only)
- **API Coverage:** Core CRUD operations for main resources
- **Response:** Custom `Page` wrapper objects
- **Source:** Hand-written code in `src/`

### v3 (New - generated/)
- **Language:** TypeScript
- **HTTP Client:** axios (with full type definitions)
- **Structure:** Flat API with single `DefaultApi` class
- **Methods:** 271+ methods covering complete Fulcrum API
- **Type Safety:** Full TypeScript with 106 interface/type definitions
- **API Coverage:** Complete API including new features (Report Templates, Workflows, Batches, Groups, etc.)
- **Response:** Standard axios `AxiosResponse<T>` objects
- **Source:** Auto-generated from OpenAPI 3.1 specification

## Functionality Comparison

### Resources Available

| Resource | v2 | v3 | Notes |
|----------|----|----|-------|
| Records | ✅ | ✅ | v3 adds history for all records |
| Forms | ✅ | ✅ | Both include schema and history |
| Projects | ✅ | ✅ | Same functionality |
| Changesets | ✅ | ✅ | Same functionality |
| Choice Lists | ✅ | ✅ | Same functionality |
| Classification Sets | ✅ | ✅ | Same functionality |
| Webhooks | ✅ | ✅ | Same functionality |
| Photos | ✅ | ✅ | v3 adds more media sizes |
| Videos | ✅ | ✅ | v3 adds track formats and more thumbnails |
| Audio | ✅ | ✅ | v3 adds track formats (GeoJSON, GPX, KML) |
| Signatures | ✅ | ✅ | v3 adds more media sizes |
| Memberships | ✅ | ✅ | v3 adds create/update/delete member |
| Roles | ✅ | ✅ | Same functionality |
| Layers | ✅ | ✅ | Same functionality |
| Audit Logs | ✅ | ✅ | v3 adds more filtering options |
| Authorizations | ✅ | ✅ | Same functionality |
| Query API | ✅ | ✅ | Both support JSON, CSV, GeoJSON |
| **Report Templates** | ❌ | ✅ | **NEW in v3** |
| **Workflows** | ❌ | ✅ | **NEW in v3** |
| **Batch Operations** | ❌ | ✅ | **NEW in v3** |
| **Groups** | ❌ | ✅ | **NEW in v3** |
| **Attachments** | ❌ | ✅ | **NEW in v3** |

### Method Count by Resource

| Resource | v2 Methods | v3 Methods | v3 Additions |
|----------|------------|------------|--------------|
| Records | 5 | 7 | `recordsGetAllHistory()` |
| Forms | 6 | 6 | Same |
| Projects | 5 | 5 | Same |
| Changesets | 5 | 5 | Same |
| Choice Lists | 5 | 5 | Same |
| Classification Sets | 5 | 5 | Same |
| Webhooks | 5 | 5 | Same |
| Photos | 4 | 8 | Thumbnail/Large metadata & files |
| Videos | 6 | 24 | Multiple thumbnail sizes, track formats |
| Audio | 5 | 14 | Track formats (GeoJSON, GPX, KML, JSON) |
| Signatures | 4 | 8 | Thumbnail/Large metadata & files |
| Memberships | 3 | 6 | Create, update, delete member |
| Roles | 1 | 1 | Same |
| Layers | 5 | 5 | Same |
| Audit Logs | 2 | 2 | Same |
| Authorizations | 6 | 5 | Regenerate key removed (or different name) |
| Query | 1 | 2 | GET and POST variants |
| Report Templates | 0 | 5 | All new |
| Workflows | 0 | 5 | All new |
| Batches | 0 | 5 | All new |
| Groups | 0 | 7 | All new |
| Attachments | 0 | 5 | All new |
| Users | 0 | 1 | `usersGetUser()` new |

## Key Differences

### 1. API Structure

**v2:**
```javascript
const client = new Client('token');
await client.records.all({ form_id: 'abc' });
await client.forms.find('form-id');
```

**v3:**
```typescript
const config = new Configuration({ apiKey: 'token' });
const api = new DefaultApi(config);
await api.recordsGetAll(false, undefined, 'abc');
await api.formsGetSingle('form-id');
```

### 2. Response Format

**v2:** Returns custom `Page` objects
```javascript
const page = await client.records.all();
console.log(page.objects);      // array of records
console.log(page.currentPage);   // number
console.log(page.totalPages);    // number
console.log(page.totalCount);    // number
```

**v3:** Returns standard axios responses
```typescript
const response = await api.recordsGetAll();
console.log(response.data.records);  // array of records
console.log(response.status);         // HTTP status
console.log(response.headers);        // Response headers
```

### 3. Type Safety

**v2:** No type safety (JavaScript)
```javascript
// No compile-time checks
const record = await client.records.find('id');
console.log(record.unknownProperty); // Runtime error only
```

**v3:** Full TypeScript support
```typescript
import { Record as FulcrumRecord } from 'fulcrum-app/generated/models';

const response = await api.recordsGetSingle('id');
const record: FulcrumRecord = response.data.record;
console.log(record.unknownProperty); // ❌ Compile error!
console.log(record.form_id);          // ✅ Typed correctly
```

### 4. Error Handling

**v2:** Generic error objects
```javascript
try {
  await client.records.find('id');
} catch (error) {
  console.error(error.message);
}
```

**v3:** Structured axios errors
```typescript
import { AxiosError } from 'axios';

try {
  await api.recordsGetSingle('id');
} catch (error) {
  if (error instanceof AxiosError) {
    console.error(error.response?.status);
    console.error(error.response?.data);
  }
}
```

## New Features in v3

### 1. Report Templates
Full CRUD operations for report templates:
- `createReportTemplate()`
- `getAllReportTemplates()`
- `getSingleReportTemplate()`
- `updateReportTemplate()`
- `deleteReportTemplate()`

### 2. Workflows
Workflow management:
- `createWorkflow()`
- `getAllWorkflows()`
- `getSingleWorkflow()`
- `updateWorkflow()`
- `deleteWorkflow()`

### 3. Batch Operations
Bulk operations on records:
- `createBatch()` - Create batch with operations
- `addBatchOperations()` - Add operations to existing batch
- `startBatch()` - Start batch execution
- `getAllBatches()` - List all batches
- `getSingleBatch()` - Get batch status

### 4. Groups
Team and group management:
- `createGroup()`
- `getAllGroups()`
- `getSingleGroup()`
- `getGroupResource()`
- `updateGroupNameDescription()`
- `updateGroupPermissions()`
- `deleteGroup()`

### 5. Enhanced Media Operations
More granular control over media:
- **Photos:** `photosThumbnailFile()`, `photosThumbnailMetadata()`, `photosLargeFile()`, `photosLargeMetadata()`
- **Videos:** Multiple thumbnail sizes (small, medium, large, huge, all with square variants)
- **Track Data:** GeoJSON, GPX, KML, JSON formats for audio/video tracks

### 6. Attachments
New attachment management:
- `createAttachment()`
- `getAllAttachments()`
- `getSingleAttachment()`
- `finalizeAttachment()`
- `deleteAttachment()`

## Missing Features

### Features in v2 NOT in v3 (or differently named)

1. **Authorization Regenerate Key** - `client.authorizations.regenerate(id)` might have different name in v3
2. **Custom Page Wrapper** - v3 uses raw axios responses, losing the convenient `Page` abstraction
3. **Media Upload with Streams** - v2's `client.photos.create(stream, options)` was more convenient
4. **Helper Functions** - v2 had `getUser()` and `createAuthorization()` helper functions

### Recommended Approach

For the missing helper functions, you may want to keep parts of the v2 code:
- Keep `getUser()` and `createAuthorization()` from v2's `index.js`
- These are not auto-generated and provide valuable convenience

## Recommendations

### ✅ What v3 Does Better
1. **Complete API Coverage** - All endpoints available
2. **Type Safety** - Catch errors at compile time
3. **Auto-Generated** - Always matches API spec
4. **Modern Stack** - TypeScript + axios
5. **Better Documentation** - TSDoc comments on all methods

### ⚠️ What to Watch Out For
1. **Breaking Changes** - Complete API redesign requires code updates
2. **No Pagination Helper** - Must handle pagination manually
3. **More Verbose** - More parameters to pass (Accept headers, Content-Type, etc.)
4. **Different Response Structure** - Need to access `.data` property

### 💡 Migration Tips
1. Start with read-only operations (GET methods)
2. Create wrapper functions for common patterns
3. Use TypeScript to catch migration issues early
4. Keep v2 helper functions (`getUser`, `createAuthorization`)
5. Consider creating a compatibility layer for gradual migration

## Conclusion

**The generated v3 client provides:**
- ✅ **271+ methods** vs v2's ~54 methods
- ✅ **Complete API coverage** including new features
- ✅ **Full TypeScript support** with 106 types
- ✅ **Auto-generated from spec** - always up-to-date
- ✅ **Better for new projects** with modern TypeScript

**The v2 client is better for:**
- ✅ **Backward compatibility** - existing code keeps working
- ✅ **Simpler API** - resource-oriented, less verbose
- ✅ **Page abstraction** - convenient pagination handling
- ✅ **Helper functions** - `getUser()`, `createAuthorization()`

**Recommendation:** Use v3 for new projects, migrate v2 projects gradually with a compatibility wrapper.
