# API Coverage Analysis

## Missing from Wrapper

### High Priority (CRUD operations)

#### Authorizations
- ❌ `getSingle` - Get single authorization
- ❌ `create` - Create authorization
- ❌ `update` - Update authorization
- ❌ `delete` - Delete authorization

#### Choice Lists
- ❌ `getSingle` - Get single choice list
- ❌ `create` - Create choice list
- ❌ `update` - Update choice list
- ❌ `delete` - Delete choice list

#### Classification Sets
- ❌ `getSingle` - Get single classification set
- ❌ `create` - Create classification set
- ❌ `update` - Update classification set
- ❌ `delete` - Delete classification set

#### Layers
- ❌ `getSingle` - Get single layer
- ❌ `create` - Create layer
- ❌ `update` - Update layer
- ❌ `delete` - Delete layer

#### Changesets
- ❌ `getSingle` - Get single changeset
- ❌ `create` - Create changeset
- ❌ `update` - Update changeset
- ❌ `close` - Close changeset

#### Groups
- ❌ `getSingle` - Get single group
- ❌ `create` - Create group
- ❌ `update` (updateGroupNameDescription) - Update group name/description
- ❌ `delete` - Delete group
- ❌ `getResource` - Get group resource
- ❌ `updatePermissions` - Update group permissions

### Medium Priority (Specialized resources)

#### Workflows
- ❌ `getAll` - Get all workflows
- ❌ `getSingle` - Get single workflow
- ❌ `create` - Create workflow
- ❌ `update` - Update workflow
- ❌ `delete` - Delete workflow

#### Batches
- ❌ `getAll` - Get all batches
- ❌ `getSingle` - Get single batch
- ❌ `create` - Create batch
- ❌ `addOperations` - Add batch operations
- ❌ `start` - Start batch

#### Report Templates
- ❌ `getAll` - Get all report templates
- ❌ `getSingle` - Get single report template
- ❌ `create` - Create report template
- ❌ `update` - Update report template
- ❌ `delete` - Delete report template

#### Memberships
- ❌ `getSingle` - Get single membership
- ❌ `create` (createMember) - Create member
- ❌ `update` (updateMember) - Update member
- ❌ `delete` (deleteMember) - Delete member
- ❌ `getAllMemberships` - Get all memberships (different from membershipsGetAll)
- ❌ `changePermissions` - Change membership permissions

#### Attachments
- ❌ `getAll` - Get all attachments
- ❌ `getSingle` - Get single attachment
- ❌ `create` - Create attachment
- ❌ `delete` - Delete attachment
- ❌ `finalize` - Finalize attachment

#### Forms
- ❌ `getSingle` - Get single form
- ❌ `getHistory` - Get form history

#### Audit Logs
- ❌ `getSingle` - Get single audit log

#### Users
- ❌ `getUser` - Get current user

### Lower Priority (File/media operations)

#### Photos
- ❌ `getAll` (photosGetAllMetadata) - Get all photo metadata
- ❌ `getSingle` (photosGetSingleMetadata) - Get single photo metadata
- ❌ `getSingleFile` - Get photo file
- ❌ `getThumbnailFile` - Get thumbnail file
- ❌ `getThumbnailMetadata` - Get thumbnail metadata
- ❌ `getLargeFile` - Get large file
- ❌ `getLargeMetadata` - Get large metadata
- ❌ `upload` - Upload photo

#### Signatures
- ❌ `getAll` (signaturesGetAll) - Get all signatures
- ❌ `getSingle` (signaturesGetSingleMetadata) - Get single signature metadata
- ❌ `getSingleFile` - Get signature file
- ❌ `getThumbnailFile` - Get thumbnail file
- ❌ `getThumbnailMetadata` - Get thumbnail metadata
- ❌ `upload` - Upload signature

#### Videos
- ❌ `getAll` - Get all videos
- ❌ `getSingle` (videosGetSingleMetadata) - Get single video metadata
- ❌ `getOriginalFile` - Get original video file
- ❌ `getSmallFile` - Get small video file
- ❌ `getMediumFile` - Get medium video file
- ❌ `getThumbnail*` - Multiple thumbnail variations
- ❌ `getTracks*` - Get track data (GeoJSON, KML, GPX, JSON)
- ❌ `upload` - Upload video

#### Audio
- ❌ `getAll` - Get all audio
- ❌ `getSingle` (audioGetSingleMetadata) - Get single audio metadata
- ❌ `getOriginalFile` - Get original audio file
- ❌ `getTracks*` - Get track data (GeoJSON, KML, GPX, JSON)
- ❌ `upload` - Upload audio

## Currently in Wrapper ✓

### Records ✓
- ✓ `getAll`
- ✓ `getById` (getSingle)
- ✓ `create`
- ✓ `update`
- ✓ `delete`
- ✓ `getHistory`
- ✓ `getAllHistory`

### Forms ✓
- ✓ `getAll`
- ✓ `create`
- ✓ `update`
- ✓ `delete`

### Projects ✓
- ✓ `getAll`
- ✓ `create`
- ✓ `update`
- ✓ `delete`

### Webhooks ✓
- ✓ `getAll`
- ✓ `create`
- ✓ `update`
- ✓ `delete`

### Query ✓
- ✓ `get`
- ✓ `post`

### List-only APIs ✓
- ✓ `auditLogs.getAll`
- ✓ `authorizations.getAll`
- ✓ `changesets.getAll`
- ✓ `choiceLists.getAll`
- ✓ `classificationSets.getAll`
- ✓ `layers.getAll`
- ✓ `memberships.getAll`
- ✓ `roles.getAll`
- ✓ `groups.getAll`

## Recommended Action Plan

### Phase 1: Complete CRUD for existing resources
Add full CRUD (getSingle, create, update, delete) for:
1. Authorizations
2. Choice Lists
3. Classification Sets
4. Layers
5. Changesets
6. Groups

### Phase 2: Add specialized resources
1. Workflows (full CRUD)
2. Report Templates (full CRUD)
3. Batches (full CRUD + operations)
4. Memberships (full operations)
5. Attachments (full operations)

### Phase 3: Add Forms/Audit Logs detail methods
1. Forms - getSingle, getHistory
2. Audit Logs - getSingle
3. Users - getUser

### Phase 4: Media/File operations (as needed)
1. Photos
2. Signatures
3. Videos
4. Audio

## Summary

- **Total API methods in generated client**: 135
- **Currently wrapped**: ~28 methods (~21%)
- **Missing**: ~107 methods (~79%)

Most critical gaps are CRUD operations for resources we only have `getAll` for.
