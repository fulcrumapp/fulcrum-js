# DefaultApi

All URIs are relative to *https://api.fulcrumapp.com/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addBatchOperations**](#addbatchoperations) | **POST** /v2/batch/{batch_id}/operations.json | Add batch operations|
|[**audioGetAll**](#audiogetall) | **GET** /v2/audio.json | Get All Audio|
|[**audioGetAllTracksGeojson**](#audiogetalltracksgeojson) | **GET** /v2/audio/tracks.geojson | Get GeoJSON Tracks for All Audio|
|[**audioGetAllTracksGpx**](#audiogetalltracksgpx) | **GET** /v2/audio/tracks.gpx | Get GPX Tracks for All Audio|
|[**audioGetAllTracksJson**](#audiogetalltracksjson) | **GET** /v2/audio/tracks.json | Get JSON Tracks for All Audio|
|[**audioGetAllTracksKml**](#audiogetalltrackskml) | **GET** /v2/audio/tracks.kml | Get KML Tracks for All Audio|
|[**audioGetOriginalFile**](#audiogetoriginalfile) | **GET** /v2/audio/{audio_id}.mp4 | Get Original Audio File|
|[**audioGetSingleMetadata**](#audiogetsinglemetadata) | **GET** /v2/audio/{audio_id}.json | Get Audio Metadata|
|[**audioGetSingleTrackGeojson**](#audiogetsingletrackgeojson) | **GET** /v2/audio/{audio_id}/track.geojson | Get GeoJSON Audio Track|
|[**audioGetSingleTrackGpx**](#audiogetsingletrackgpx) | **GET** /v2/audio/{audio_id}/track.gpx | Get GPX Audio Track|
|[**audioGetSingleTrackJson**](#audiogetsingletrackjson) | **GET** /v2/audio/{audio_id}/track.json | Get JSON Audio Track|
|[**audioGetSingleTrackKml**](#audiogetsingletrackkml) | **GET** /v2/audio/{audio_id}/track.kml | Get KML Audio Track|
|[**audioUpload**](#audioupload) | **POST** /v2/audio/upload.json | Upload Audio|
|[**auditLogsGetAll**](#auditlogsgetall) | **GET** /v2/audit_logs.json | Get All Audit Logs|
|[**auditLogsGetSingle**](#auditlogsgetsingle) | **GET** /v2/audit_logs/{audit_log_id}.json | Get Single Audit Log|
|[**authorizationsCreate**](#authorizationscreate) | **POST** /v2/authorizations.json | Create Authorization|
|[**authorizationsDelete**](#authorizationsdelete) | **DELETE** /v2/authorizations/{authorization_id}.json | Delete Authorization|
|[**authorizationsGetAll**](#authorizationsgetall) | **GET** /v2/authorizations.json | Get All Authorizations|
|[**authorizationsGetSingle**](#authorizationsgetsingle) | **GET** /v2/authorizations/{authorization_id}.json | Get Single Authorization|
|[**authorizationsUpdate**](#authorizationsupdate) | **PUT** /v2/authorizations/{authorization_id}.json | Update Authorization|
|[**changesetsClose**](#changesetsclose) | **PUT** /v2/changesets/{changeset_id}/close.json | Close Changeset|
|[**changesetsCreate**](#changesetscreate) | **POST** /v2/changesets.json | Create Changeset|
|[**changesetsGetAll**](#changesetsgetall) | **GET** /v2/changesets.json | Get All Changesets|
|[**changesetsGetSingle**](#changesetsgetsingle) | **GET** /v2/changesets/{changeset_id}.json | Get Single Changeset|
|[**changesetsUpdate**](#changesetsupdate) | **PUT** /v2/changesets/{changeset_id}.json | Update Changeset|
|[**choiceListsCreate**](#choicelistscreate) | **POST** /v2/choice_lists.json | Create Choice List|
|[**choiceListsDelete**](#choicelistsdelete) | **DELETE** /v2/choice_lists/{choice_list_id}.json | Delete Choice List|
|[**choiceListsGetAll**](#choicelistsgetall) | **GET** /v2/choice_lists.json | Get All Choice Lists|
|[**choiceListsGetSingle**](#choicelistsgetsingle) | **GET** /v2/choice_lists/{choice_list_id}.json | Get Single Choice List|
|[**choiceListsUpdate**](#choicelistsupdate) | **PUT** /v2/choice_lists/{choice_list_id}.json | Update Choice List|
|[**classificationSetsCreate**](#classificationsetscreate) | **POST** /v2/classification_sets.json | Create Classification Set|
|[**classificationSetsDelete**](#classificationsetsdelete) | **DELETE** /v2/classification_sets/{classification_set_id}.json | Delete Classification Set|
|[**classificationSetsGetAll**](#classificationsetsgetall) | **GET** /v2/classification_sets.json | Get All Classification Sets|
|[**classificationSetsGetSingle**](#classificationsetsgetsingle) | **GET** /v2/classification_sets/{classification_set_id}.json | Get Single Classification Set|
|[**classificationSetsUpdate**](#classificationsetsupdate) | **PUT** /v2/classification_sets/{classification_set_id}.json | Update Classification Set|
|[**createAttachment**](#createattachment) | **POST** /v2/attachments | Create Attachment|
|[**createBatch**](#createbatch) | **POST** /v2/batch.json | Create Batch to Bulk Delete Records|
|[**createGroup**](#creategroup) | **POST** /v2/groups.json | Create Group|
|[**createMember**](#createmember) | **POST** /v2/memberships.json | Create Member|
|[**createReportTemplate**](#createreporttemplate) | **POST** /v2/report_templates.json | Create Report Template|
|[**createWorkflow**](#createworkflow) | **POST** /v2/workflows.json | Create Workflow|
|[**deleteAttachment**](#deleteattachment) | **DELETE** /v2/attachments/{attachment_id} | Delete Attachment|
|[**deleteGroup**](#deletegroup) | **DELETE** /v2/groups/{group_id}.json | Delete Group|
|[**deleteMember**](#deletemember) | **DELETE** /v2/memberships/{membership_id}.json | Delete Member|
|[**deleteReportTemplate**](#deletereporttemplate) | **DELETE** /v2/report_templates/{id}.json | Delete Report Template|
|[**deleteWorkflow**](#deleteworkflow) | **DELETE** /v2/workflows/{workflow_id}.json | Delete Workflow|
|[**finalizeAttachment**](#finalizeattachment) | **POST** /v2/attachments/finalize | Finalize Attachment|
|[**formsCreate**](#formscreate) | **POST** /v2/forms.json | Create Form|
|[**formsDelete**](#formsdelete) | **DELETE** /v2/forms/{form_id}.json | Delete Form|
|[**formsGetAll**](#formsgetall) | **GET** /v2/forms.json | Get All Forms|
|[**formsGetHistory**](#formsgethistory) | **GET** /v2/forms/{form_id}/history.json | Get Form History|
|[**formsGetSingle**](#formsgetsingle) | **GET** /v2/forms/{form_id}.json | Get Single Form|
|[**formsUpdate**](#formsupdate) | **PUT** /v2/forms/{form_id}.json | Update Form|
|[**getAllAttachments**](#getallattachments) | **GET** /v2/attachments | Get All Attachments|
|[**getAllBatches**](#getallbatches) | **GET** /v2/batch.json | Get All Batches|
|[**getAllGroups**](#getallgroups) | **GET** /v2/groups.json | Get All Groups|
|[**getAllMemberships**](#getallmemberships) | **GET** /v2/permissions.json | Get Membership Permissions|
|[**getAllReportTemplates**](#getallreporttemplates) | **GET** /v2/report_templates.json | Get All Report Templates|
|[**getAllWorkflows**](#getallworkflows) | **GET** /v2/workflows.json | Get All Workflows|
|[**getGroupResource**](#getgroupresource) | **GET** /v2/groups/{group_id}/{resource}.json | Get Group Resource|
|[**getSingleAttachment**](#getsingleattachment) | **GET** /v2/attachments/{attachment_id} | Get Single Attachment|
|[**getSingleBatch**](#getsinglebatch) | **GET** /v2/batch/{batch_id}.json | Get Single Batch|
|[**getSingleGroup**](#getsinglegroup) | **GET** /v2/groups/{group_id}.json | Get Single Group|
|[**getSingleReportTemplate**](#getsinglereporttemplate) | **GET** /v2/report_templates/{id}.json | Get Single Report Template|
|[**getSingleWorkflow**](#getsingleworkflow) | **GET** /v2/workflows/{workflow_id}.json | Get Single Workflow|
|[**layersCreate**](#layerscreate) | **POST** /v2/layers.json | Create Layer|
|[**layersDelete**](#layersdelete) | **DELETE** /v2/layers/{layer_id}.json | Delete Layer|
|[**layersGetAll**](#layersgetall) | **GET** /v2/layers.json | Get All Layers|
|[**layersGetSingle**](#layersgetsingle) | **GET** /v2/layers/{layer_id}.json | Get Single Layer|
|[**layersUpdate**](#layersupdate) | **PUT** /v2/layers/{layer_id}.json | Update Layer|
|[**membershipsChangePermissions**](#membershipschangepermissions) | **POST** /v2/memberships/change_permissions.json | Change Permissions|
|[**membershipsGetAll**](#membershipsgetall) | **GET** /v2/memberships.json | Get All Memberships|
|[**membershipsGetSingle**](#membershipsgetsingle) | **GET** /v2/memberships/{membership_id}.json | Get Single Membership|
|[**photosGetAllMetadata**](#photosgetallmetadata) | **GET** /v2/photos.json | Get All Photos|
|[**photosGetSingleFile**](#photosgetsinglefile) | **GET** /v2/photos/{photo_id}.jpg | Get Single Photo File|
|[**photosGetSingleMetadata**](#photosgetsinglemetadata) | **GET** /v2/photos/{photo_id}.json | Get Single Photo Metadata|
|[**photosLargeFile**](#photoslargefile) | **GET** /v2/photos/{photo_id}/large.jpg | Photo Large File|
|[**photosLargeMetadata**](#photoslargemetadata) | **GET** /v2/photos/{photo_id}/large.json | Photo Large Metadata|
|[**photosThumbnailFile**](#photosthumbnailfile) | **GET** /v2/photos/{photo_id}/thumbnail.jpg | Photo Thumbnail File|
|[**photosThumbnailMetadata**](#photosthumbnailmetadata) | **GET** /v2/photos/{photo_id}/thumbnail.json | Photo Thumbnail Metadata|
|[**photosUpload**](#photosupload) | **POST** /v2/photos.json | Upload Photo|
|[**projectsCreate**](#projectscreate) | **POST** /v2/projects.json | Create Project|
|[**projectsDelete**](#projectsdelete) | **DELETE** /v2/projects/{project_id}.json | Delete Project|
|[**projectsGetAll**](#projectsgetall) | **GET** /v2/projects.json | Get All Projects|
|[**projectsGetSingle**](#projectsgetsingle) | **GET** /v2/projects/{project_id}.json | Get Single Project|
|[**projectsUpdate**](#projectsupdate) | **PUT** /v2/projects/{project_id}.json | Update Project|
|[**queryGet**](#queryget) | **GET** /v2/query | GET Query|
|[**queryPost**](#querypost) | **POST** /v2/query | POST Query|
|[**recordsCreate**](#recordscreate) | **POST** /v2/records.json | Create Record|
|[**recordsDelete**](#recordsdelete) | **DELETE** /v2/records/{record_id}.json | Delete Record|
|[**recordsGetAll**](#recordsgetall) | **GET** /v2/records.json | Get All Records|
|[**recordsGetAllHistory**](#recordsgetallhistory) | **GET** /v2/records/history.json | Get All Records History|
|[**recordsGetHistory**](#recordsgethistory) | **GET** /v2/records/{record_id}/history.json | Get Record History|
|[**recordsGetSingle**](#recordsgetsingle) | **GET** /v2/records/{record_id}.json | Get Single Record|
|[**recordsUpdate**](#recordsupdate) | **PUT** /v2/records/{record_id}.json | Update Record|
|[**rolesGetAll**](#rolesgetall) | **GET** /v2/roles.json | Get All Roles|
|[**signaturesGetAll**](#signaturesgetall) | **GET** /v2/signatures.json | Get All Signatures|
|[**signaturesGetSingleFile**](#signaturesgetsinglefile) | **GET** /v2/signatures/{signature_id}.png | Get Single Signature File|
|[**signaturesGetSingleMetadata**](#signaturesgetsinglemetadata) | **GET** /v2/signatures/{signature_id}.json | Get Single Signature Metadata|
|[**signaturesGetThumbnailFile**](#signaturesgetthumbnailfile) | **GET** /v2/signatures/{signature_id}/thumbnail.png | Signature Thumbnail File|
|[**signaturesGetThumbnailMetadata**](#signaturesgetthumbnailmetadata) | **GET** /v2/signatures/{signature_id}/thumbnail.json | Signature Thumbnail Metadata|
|[**signaturesUpload**](#signaturesupload) | **POST** /v2/signatures.json | Upload Signature|
|[**startBatch**](#startbatch) | **POST** /v2/batch/{batch_id}/start.json | Start Batch|
|[**updateGroupNameDescription**](#updategroupnamedescription) | **PUT** /v2/groups/{group_id}.json | Update Group Name / Description|
|[**updateGroupPermissions**](#updategrouppermissions) | **POST** /v2/groups/change_permissions.json | Update Group Permissions|
|[**updateMember**](#updatemember) | **PUT** /v2/memberships/{membership_id}.json | Update Member|
|[**updateReportTemplate**](#updatereporttemplate) | **PUT** /v2/report_templates/{id}.json | Update Report Template|
|[**updateWorkflow**](#updateworkflow) | **PUT** /v2/workflows/{workflow_id}.json | Update Workflow|
|[**usersGetUser**](#usersgetuser) | **GET** /v2/users.json | Get User Information|
|[**videosGetAll**](#videosgetall) | **GET** /v2/videos.json | Get All Videos|
|[**videosGetAllTracksGeojson**](#videosgetalltracksgeojson) | **GET** /v2/videos/tracks.geojson | Get GeoJSON Tracks for All Videos|
|[**videosGetAllTracksGpx**](#videosgetalltracksgpx) | **GET** /v2/videos/tracks.gpx | Get GPX Tracks for All Videos|
|[**videosGetAllTracksKml**](#videosgetalltrackskml) | **GET** /v2/videos/tracks.kml | Get KML Tracks for All Videos|
|[**videosGetMediumFile**](#videosgetmediumfile) | **GET** /v2/videos/{video_id}/medium.mp4 | Get Medium Video File|
|[**videosGetOriginalFile**](#videosgetoriginalfile) | **GET** /v2/videos/{video_id}.mp4 | Get Original Video File|
|[**videosGetSingleMetadata**](#videosgetsinglemetadata) | **GET** /v2/videos/{video_id}.json | Get Video Metadata|
|[**videosGetSingleTrackGeojson**](#videosgetsingletrackgeojson) | **GET** /v2/videos/{video_id}/track.geojson | Get GeoJSON Video Track|
|[**videosGetSingleTrackGpx**](#videosgetsingletrackgpx) | **GET** /v2/videos/{video_id}/track.gpx | Get GPX Video Track|
|[**videosGetSingleTrackJson**](#videosgetsingletrackjson) | **GET** /v2/videos/{video_id}/track.json | Get JSON Video Track|
|[**videosGetSingleTrackKml**](#videosgetsingletrackkml) | **GET** /v2/videos/{video_id}/track.kml | Get KML Video Track|
|[**videosGetSmallFile**](#videosgetsmallfile) | **GET** /v2/videos/{video_id}/small.mp4 | Get Small Video File|
|[**videosGetThumbnailHuge**](#videosgetthumbnailhuge) | **GET** /v2/videos/{video_id}/thumbnail_huge.jpg | Get Huge Video Thumbnail|
|[**videosGetThumbnailHugeSquare**](#videosgetthumbnailhugesquare) | **GET** /v2/videos/{video_id}/thumbnail_huge_square.jpg | Get Huge Square Video Thumbnail|
|[**videosGetThumbnailLarge**](#videosgetthumbnaillarge) | **GET** /v2/videos/{video_id}/thumbnail_large.jpg | Get Large Video Thumbnail|
|[**videosGetThumbnailLargeSquare**](#videosgetthumbnaillargesquare) | **GET** /v2/videos/{video_id}/thumbnail_large_square.jpg | Get Large Square Video Thumbnail|
|[**videosGetThumbnailMedium**](#videosgetthumbnailmedium) | **GET** /v2/videos/{video_id}/thumbnail_medium.jpg | Get Medium Video Thumbnail|
|[**videosGetThumbnailMediumSquare**](#videosgetthumbnailmediumsquare) | **GET** /v2/videos/{video_id}/thumbnail_medium_square.jpg | Get Medium Square Video Thumbnail|
|[**videosGetThumbnailSmall**](#videosgetthumbnailsmall) | **GET** /v2/videos/{video_id}/thumbnail_small.jpg | Get Small Video Thumbnail|
|[**videosGetThumbnailSmallSquare**](#videosgetthumbnailsmallsquare) | **GET** /v2/videos/{video_id}/thumbnail_small_square.jpg | Get Small Square Video Thumbnail|
|[**videosUpload**](#videosupload) | **POST** /v2/videos/upload.json | Upload Video|
|[**webhooksCreate**](#webhookscreate) | **POST** /v2/webhooks.json | Create Webhook|
|[**webhooksDelete**](#webhooksdelete) | **DELETE** /v2/webhooks/{webhook_id}.json | Delete Webhook|
|[**webhooksGetAll**](#webhooksgetall) | **GET** /v2/webhooks.json | Get All Webhooks|
|[**webhooksGetSingle**](#webhooksgetsingle) | **GET** /v2/webhooks/{webhook_id}.json | Get Single Webhook|
|[**webhooksUpdate**](#webhooksupdate) | **PUT** /v2/webhooks/{webhook_id}.json | Update Webhook|

# **addBatchOperations**
> object addBatchOperations()

Using the batch operations API, you can bulk delete records from a form or update project, assignee, or status values on multiple records.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AddBatchOperationsRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let batchId: string; //ID of the batch (default to undefined)
let addBatchOperationsRequest: AddBatchOperationsRequest; // (optional)

const { status, data } = await apiInstance.addBatchOperations(
    batchId,
    addBatchOperationsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **addBatchOperationsRequest** | **AddBatchOperationsRequest**|  | |
| **batchId** | [**string**] | ID of the batch | defaults to undefined|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetAll**
> object audioGetAll()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordId: string; //The ID of the record with which the video is associated. (optional) (default to undefined)
let formId: string; //The ID of the form with which the video is associated. Leaving this blank will query against all of your videos. (optional) (default to undefined)
let newestFirst: boolean; //If present, videos will be sorted by updated_at date. (optional) (default to undefined)
let processed: boolean; //Video has been completely processed. (optional) (default to undefined)
let stored: boolean; //Video has been completely stored. (optional) (default to undefined)
let uploaded: boolean; //Video has been completely uploaded. (optional) (default to undefined)
let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.audioGetAll(
    recordId,
    formId,
    newestFirst,
    processed,
    stored,
    uploaded,
    page,
    perPage,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordId** | [**string**] | The ID of the record with which the video is associated. | (optional) defaults to undefined|
| **formId** | [**string**] | The ID of the form with which the video is associated. Leaving this blank will query against all of your videos. | (optional) defaults to undefined|
| **newestFirst** | [**boolean**] | If present, videos will be sorted by updated_at date. | (optional) defaults to undefined|
| **processed** | [**boolean**] | Video has been completely processed. | (optional) defaults to undefined|
| **stored** | [**boolean**] | Video has been completely stored. | (optional) defaults to undefined|
| **uploaded** | [**boolean**] | Video has been completely uploaded. | (optional) defaults to undefined|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetAllTracksGeojson**
> object audioGetAllTracksGeojson()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let type: string; //Set value to `points` to fetch tracks as GeoJSON points (optional) (default to undefined)

const { status, data } = await apiInstance.audioGetAllTracksGeojson(
    accept,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **type** | [**string**] | Set value to &#x60;points&#x60; to fetch tracks as GeoJSON points | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetAllTracksGpx**
> object audioGetAllTracksGpx()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.audioGetAllTracksGpx(
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetAllTracksJson**
> object audioGetAllTracksJson()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.audioGetAllTracksJson(
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetAllTracksKml**
> object audioGetAllTracksKml()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.audioGetAllTracksKml(
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetOriginalFile**
> object audioGetOriginalFile()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let audioId: string; //Audio ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.audioGetOriginalFile(
    audioId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **audioId** | [**string**] | Audio ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetSingleMetadata**
> object audioGetSingleMetadata()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let audioId: string; //Audio ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.audioGetSingleMetadata(
    audioId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **audioId** | [**string**] | Audio ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetSingleTrackGeojson**
> object audioGetSingleTrackGeojson()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let audioId: string; //Audio ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let type: string; //Set value to `points` to fetch tracks as GeoJSON points (optional) (default to undefined)

const { status, data } = await apiInstance.audioGetSingleTrackGeojson(
    audioId,
    accept,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **audioId** | [**string**] | Audio ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **type** | [**string**] | Set value to &#x60;points&#x60; to fetch tracks as GeoJSON points | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetSingleTrackGpx**
> object audioGetSingleTrackGpx()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let audioId: string; //Audio ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.audioGetSingleTrackGpx(
    audioId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **audioId** | [**string**] | Audio ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetSingleTrackJson**
> object audioGetSingleTrackJson()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let audioId: string; //Audio ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.audioGetSingleTrackJson(
    audioId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **audioId** | [**string**] | Audio ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetSingleTrackKml**
> object audioGetSingleTrackKml()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let audioId: string; //Audio ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.audioGetSingleTrackKml(
    audioId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **audioId** | [**string**] | Audio ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioUpload**
> object audioUpload()

Upload audio with optional track file

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.audioUpload(
    accept,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **auditLogsGetAll**
> object auditLogsGetAll()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let source: string; //Valid options include: `export`, `data_export`, `membership`, `layer`, `project`, `audit_log`, `role`, `form`, `data_share`, `classification_set`, `authorization`, `choice_list`, `import`, `organization`, `workflow`, `webhook` (optional) (default to undefined)
let activity: string; //The available actions vary by log type but a complete list of valid actions includes: `update`, `create`, `permission_update`, `download`, `delete`, `reset`, `share_enabled`, `share_disabled`, `update_credit_card`, `plan_change`, `billing_emails_change`, `update_storage`, `add_credit`, `change_default`. (optional) (default to undefined)
let ip: string; //Filter by ip address of the of the audit log action. The ip address must be an exact match in order to return in values from this filter. (optional) (default to undefined)
let user: string; //Filter by user responsible for the logged changes. This parameter must be the Fulcrum resource id for the user in question, which can be obtained from the membership API. (optional) (default to undefined)
let updatedSince: string; //Returns log entries since the given unix timestamp. (optional) (default to undefined)
let updatedBefore: string; //Returns log entries before the given unix timestamp. (optional) (default to undefined)
let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.auditLogsGetAll(
    source,
    activity,
    ip,
    user,
    updatedSince,
    updatedBefore,
    page,
    perPage,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **source** | [**string**] | Valid options include: &#x60;export&#x60;, &#x60;data_export&#x60;, &#x60;membership&#x60;, &#x60;layer&#x60;, &#x60;project&#x60;, &#x60;audit_log&#x60;, &#x60;role&#x60;, &#x60;form&#x60;, &#x60;data_share&#x60;, &#x60;classification_set&#x60;, &#x60;authorization&#x60;, &#x60;choice_list&#x60;, &#x60;import&#x60;, &#x60;organization&#x60;, &#x60;workflow&#x60;, &#x60;webhook&#x60; | (optional) defaults to undefined|
| **activity** | [**string**] | The available actions vary by log type but a complete list of valid actions includes: &#x60;update&#x60;, &#x60;create&#x60;, &#x60;permission_update&#x60;, &#x60;download&#x60;, &#x60;delete&#x60;, &#x60;reset&#x60;, &#x60;share_enabled&#x60;, &#x60;share_disabled&#x60;, &#x60;update_credit_card&#x60;, &#x60;plan_change&#x60;, &#x60;billing_emails_change&#x60;, &#x60;update_storage&#x60;, &#x60;add_credit&#x60;, &#x60;change_default&#x60;. | (optional) defaults to undefined|
| **ip** | [**string**] | Filter by ip address of the of the audit log action. The ip address must be an exact match in order to return in values from this filter. | (optional) defaults to undefined|
| **user** | [**string**] | Filter by user responsible for the logged changes. This parameter must be the Fulcrum resource id for the user in question, which can be obtained from the membership API. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | Returns log entries since the given unix timestamp. | (optional) defaults to undefined|
| **updatedBefore** | [**string**] | Returns log entries before the given unix timestamp. | (optional) defaults to undefined|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **auditLogsGetSingle**
> object auditLogsGetSingle()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let auditLogId: string; //Audit Log ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.auditLogsGetSingle(
    auditLogId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **auditLogId** | [**string**] | Audit Log ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorizationsCreate**
> object authorizationsCreate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AuthorizationsCreateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let authorizationsCreateRequest: AuthorizationsCreateRequest; // (optional)

const { status, data } = await apiInstance.authorizationsCreate(
    accept,
    contentType,
    authorizationsCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authorizationsCreateRequest** | **AuthorizationsCreateRequest**|  | |
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorizationsDelete**
> object authorizationsDelete()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let authorizationId: string; //Authorization ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.authorizationsDelete(
    authorizationId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authorizationId** | [**string**] | Authorization ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorizationsGetAll**
> object authorizationsGetAll()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.authorizationsGetAll(
    page,
    perPage,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorizationsGetSingle**
> object authorizationsGetSingle()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let authorizationId: string; //Authorization ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.authorizationsGetSingle(
    authorizationId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authorizationId** | [**string**] | Authorization ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorizationsUpdate**
> object authorizationsUpdate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AuthorizationsUpdateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let authorizationId: string; //Authorization ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let authorizationsUpdateRequest: AuthorizationsUpdateRequest; // (optional)

const { status, data } = await apiInstance.authorizationsUpdate(
    authorizationId,
    accept,
    contentType,
    authorizationsUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authorizationsUpdateRequest** | **AuthorizationsUpdateRequest**|  | |
| **authorizationId** | [**string**] | Authorization ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changesetsClose**
> object changesetsClose()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let changesetId: string; //Changeset ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.changesetsClose(
    changesetId,
    accept,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changesetId** | [**string**] | Changeset ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changesetsCreate**
> object changesetsCreate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ChangesetsCreateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let changesetsCreateRequest: ChangesetsCreateRequest; // (optional)

const { status, data } = await apiInstance.changesetsCreate(
    accept,
    contentType,
    changesetsCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changesetsCreateRequest** | **ChangesetsCreateRequest**|  | |
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changesetsGetAll**
> object changesetsGetAll()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.changesetsGetAll(
    page,
    perPage,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changesetsGetSingle**
> object changesetsGetSingle()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let changesetId: string; //Changeset ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.changesetsGetSingle(
    changesetId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changesetId** | [**string**] | Changeset ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changesetsUpdate**
> object changesetsUpdate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ChangesetsUpdateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let changesetId: string; //Changeset ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let changesetsUpdateRequest: ChangesetsUpdateRequest; // (optional)

const { status, data } = await apiInstance.changesetsUpdate(
    changesetId,
    accept,
    contentType,
    changesetsUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changesetsUpdateRequest** | **ChangesetsUpdateRequest**|  | |
| **changesetId** | [**string**] | Changeset ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **choiceListsCreate**
> object choiceListsCreate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ChoiceListsCreateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let choiceListsCreateRequest: ChoiceListsCreateRequest; // (optional)

const { status, data } = await apiInstance.choiceListsCreate(
    accept,
    contentType,
    choiceListsCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **choiceListsCreateRequest** | **ChoiceListsCreateRequest**|  | |
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **choiceListsDelete**
> object choiceListsDelete()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let choiceListId: string; //Choice List ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.choiceListsDelete(
    choiceListId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **choiceListId** | [**string**] | Choice List ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **choiceListsGetAll**
> object choiceListsGetAll()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.choiceListsGetAll(
    page,
    perPage,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **choiceListsGetSingle**
> object choiceListsGetSingle()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let choiceListId: string; //Choice List ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.choiceListsGetSingle(
    choiceListId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **choiceListId** | [**string**] | Choice List ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **choiceListsUpdate**
> object choiceListsUpdate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ChoiceListsUpdateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let choiceListId: string; //Choice List ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let choiceListsUpdateRequest: ChoiceListsUpdateRequest; // (optional)

const { status, data } = await apiInstance.choiceListsUpdate(
    choiceListId,
    accept,
    contentType,
    choiceListsUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **choiceListsUpdateRequest** | **ChoiceListsUpdateRequest**|  | |
| **choiceListId** | [**string**] | Choice List ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **classificationSetsCreate**
> object classificationSetsCreate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ClassificationSetsCreateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let classificationSetsCreateRequest: ClassificationSetsCreateRequest; // (optional)

const { status, data } = await apiInstance.classificationSetsCreate(
    accept,
    contentType,
    classificationSetsCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **classificationSetsCreateRequest** | **ClassificationSetsCreateRequest**|  | |
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **classificationSetsDelete**
> object classificationSetsDelete()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let classificationSetId: string; //Classification Set ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.classificationSetsDelete(
    classificationSetId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **classificationSetId** | [**string**] | Classification Set ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **classificationSetsGetAll**
> object classificationSetsGetAll()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')
let type: 'organization' | 'system' | 'all'; //Type of classification sets to return (optional) (default to 'organization')

const { status, data } = await apiInstance.classificationSetsGetAll(
    page,
    perPage,
    accept,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **type** | [**&#39;organization&#39; | &#39;system&#39; | &#39;all&#39;**]**Array<&#39;organization&#39; &#124; &#39;system&#39; &#124; &#39;all&#39;>** | Type of classification sets to return | (optional) defaults to 'organization'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **classificationSetsGetSingle**
> object classificationSetsGetSingle()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let classificationSetId: string; //Classification Set ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.classificationSetsGetSingle(
    classificationSetId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **classificationSetId** | [**string**] | Classification Set ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **classificationSetsUpdate**
> object classificationSetsUpdate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ClassificationSetsUpdateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let classificationSetId: string; //Classification Set ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let classificationSetsUpdateRequest: ClassificationSetsUpdateRequest; // (optional)

const { status, data } = await apiInstance.classificationSetsUpdate(
    classificationSetId,
    accept,
    contentType,
    classificationSetsUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **classificationSetsUpdateRequest** | **ClassificationSetsUpdateRequest**|  | |
| **classificationSetId** | [**string**] | Classification Set ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createAttachment**
> CreateAttachment200Response createAttachment()

There is only one parameter that is required for creating an attachment: `owners`. You must specify at least one owner of type `record` or `form`. If you create a `record` attachment you can optionally include a `name` and `file_size`. The name will be the name of the file shown in the record information. The file_size is only used for verifying that uploading this attachment will not exceed your current storage limit. If no file_size is provided the attachment may be rejected once it has been uploaded. The response will provide the `url` to upload (PUT) the file to.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateAttachmentRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let xApitoken: string; //API Token. Required to authenticate the request. (optional) (default to undefined)
let createAttachmentRequest: CreateAttachmentRequest; // (optional)

const { status, data } = await apiInstance.createAttachment(
    xApitoken,
    createAttachmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createAttachmentRequest** | **CreateAttachmentRequest**|  | |
| **xApitoken** | [**string**] | API Token. Required to authenticate the request. | (optional) defaults to undefined|


### Return type

**CreateAttachment200Response**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**401** | 401 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createBatch**
> object createBatch()

Using the batch operations API, you can bulk delete records from a form.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateBatchRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createBatchRequest: CreateBatchRequest; // (optional)

const { status, data } = await apiInstance.createBatch(
    createBatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createBatchRequest** | **CreateBatchRequest**|  | |


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGroup**
> CreateGroup201Response createGroup()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateGroupRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let createGroupRequest: CreateGroupRequest; // (optional)

const { status, data } = await apiInstance.createGroup(
    accept,
    contentType,
    createGroupRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createGroupRequest** | **CreateGroupRequest**|  | |
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**CreateGroup201Response**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | 201 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createMember**
> object createMember()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateMemberRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let createMemberRequest: CreateMemberRequest; // (optional)

const { status, data } = await apiInstance.createMember(
    accept,
    contentType,
    createMemberRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createMemberRequest** | **CreateMemberRequest**|  | |
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createReportTemplate**
> object createReportTemplate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateReportTemplateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let createReportTemplateRequest: CreateReportTemplateRequest; // (optional)

const { status, data } = await apiInstance.createReportTemplate(
    createReportTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createReportTemplateRequest** | **CreateReportTemplateRequest**|  | |


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createWorkflow**
> object createWorkflow()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    CreateWorkflowRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentTyoe: string; // (optional) (default to 'application/json')
let createWorkflowRequest: CreateWorkflowRequest; // (optional)

const { status, data } = await apiInstance.createWorkflow(
    accept,
    contentTyoe,
    createWorkflowRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createWorkflowRequest** | **CreateWorkflowRequest**|  | |
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentTyoe** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteAttachment**
> object deleteAttachment()

The delete endpoint only applies to Form attachments. Use this endpoint to delete an attachment. For record attachments, simply remove the association of an attachment from the record and the attachment will be deleted.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let attachmentId: string; //The attachment\'s ID (default to 'Attachment ID')
let xApitoken: string; //API Token. Required to authenticate the request. (optional) (default to undefined)

const { status, data } = await apiInstance.deleteAttachment(
    attachmentId,
    xApitoken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachmentId** | [**string**] | The attachment\&#39;s ID | defaults to 'Attachment ID'|
| **xApitoken** | [**string**] | API Token. Required to authenticate the request. | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | 201 |  -  |
|**401** | 401 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteGroup**
> object deleteGroup()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let groupId: string; //ID of the group (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.deleteGroup(
    groupId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | ID of the group | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | 204 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteMember**
> object deleteMember()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    DeleteMemberRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let membershipId: string; //The ID of the member (default to undefined)
let deleteMemberRequest: DeleteMemberRequest; // (optional)

const { status, data } = await apiInstance.deleteMember(
    membershipId,
    deleteMemberRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteMemberRequest** | **DeleteMemberRequest**|  | |
| **membershipId** | [**string**] | The ID of the member | defaults to undefined|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteReportTemplate**
> object deleteReportTemplate()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //The id of the report (default to undefined)

const { status, data } = await apiInstance.deleteReportTemplate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The id of the report | defaults to undefined|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteWorkflow**
> object deleteWorkflow()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workflowId: string; //The ID of the workflow (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.deleteWorkflow(
    workflowId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowId** | [**string**] | The ID of the workflow | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **finalizeAttachment**
> object finalizeAttachment()

The finalize endpoint is a required step for Form attachments. Use this endpoint to tell Fulcrum that your attachment has been uploaded.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    FinalizeAttachmentRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let xApitoken: string; //API Token. Required to authenticate the request. (optional) (default to undefined)
let finalizeAttachmentRequest: FinalizeAttachmentRequest; // (optional)

const { status, data } = await apiInstance.finalizeAttachment(
    xApitoken,
    finalizeAttachmentRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **finalizeAttachmentRequest** | **FinalizeAttachmentRequest**|  | |
| **xApitoken** | [**string**] | API Token. Required to authenticate the request. | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | 201 |  -  |
|**401** | 401 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **formsCreate**
> object formsCreate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    FormsCreateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let formsCreateRequest: FormsCreateRequest; // (optional)

const { status, data } = await apiInstance.formsCreate(
    accept,
    contentType,
    formsCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formsCreateRequest** | **FormsCreateRequest**|  | |
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **formsDelete**
> object formsDelete()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let formId: string; //Form ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.formsDelete(
    formId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formId** | [**string**] | Form ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **formsGetAll**
> object formsGetAll()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let schema: boolean; //schema=false will only return the form metadata (optional) (default to true)
let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')
let type: 'organization' | 'system' | 'all'; //Types of forms to return (optional) (default to 'organization')

const { status, data } = await apiInstance.formsGetAll(
    schema,
    page,
    perPage,
    accept,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **schema** | [**boolean**] | schema&#x3D;false will only return the form metadata | (optional) defaults to true|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **type** | [**&#39;organization&#39; | &#39;system&#39; | &#39;all&#39;**]**Array<&#39;organization&#39; &#124; &#39;system&#39; &#124; &#39;all&#39;>** | Types of forms to return | (optional) defaults to 'organization'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **formsGetHistory**
> object formsGetHistory()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let formId: string; //Form ID (default to undefined)
let version: number; //The form history version (optional) (default to undefined)
let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.formsGetHistory(
    formId,
    version,
    page,
    perPage,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formId** | [**string**] | Form ID | defaults to undefined|
| **version** | [**number**] | The form history version | (optional) defaults to undefined|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **formsGetSingle**
> object formsGetSingle()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let formId: string; //Form ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let schema: boolean; //schema=false will only return the form metadata (optional) (default to true)

const { status, data } = await apiInstance.formsGetSingle(
    formId,
    accept,
    schema
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formId** | [**string**] | Form ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **schema** | [**boolean**] | schema&#x3D;false will only return the form metadata | (optional) defaults to true|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **formsUpdate**
> object formsUpdate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    FormsUpdateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let formId: string; //Form ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let formsUpdateRequest: FormsUpdateRequest; // (optional)

const { status, data } = await apiInstance.formsUpdate(
    formId,
    accept,
    contentType,
    formsUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formsUpdateRequest** | **FormsUpdateRequest**|  | |
| **formId** | [**string**] | Form ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllAttachments**
> GetAllAttachments200Response getAllAttachments()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordId: string; //The ID of the record with which the attachment is associated. This is required when listing record attachments. (optional) (default to undefined)
let formId: string; //The ID of the form with which the attachment is associated. This parameter will allow you to get all reference files within a form, NOT all of the record attachments in a form (optional) (default to undefined)
let ownerType: string; //The type of attachment to query for. Must be either `form` or `record`. (optional) (default to 'form')
let xApitoken: string; //API Token. Required to authenticate the request. (optional) (default to undefined)

const { status, data } = await apiInstance.getAllAttachments(
    recordId,
    formId,
    ownerType,
    xApitoken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordId** | [**string**] | The ID of the record with which the attachment is associated. This is required when listing record attachments. | (optional) defaults to undefined|
| **formId** | [**string**] | The ID of the form with which the attachment is associated. This parameter will allow you to get all reference files within a form, NOT all of the record attachments in a form | (optional) defaults to undefined|
| **ownerType** | [**string**] | The type of attachment to query for. Must be either &#x60;form&#x60; or &#x60;record&#x60;. | (optional) defaults to 'form'|
| **xApitoken** | [**string**] | API Token. Required to authenticate the request. | (optional) defaults to undefined|


### Return type

**GetAllAttachments200Response**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**401** | 401 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllBatches**
> object getAllBatches()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: string; // (optional) (default to '1')
let perPage: string; // (optional) (default to '20000')
let sort: string; // (optional) (default to 'created_at')
let sortDirection: string; //One of DESC for descending or ASC for ascending (optional) (default to 'DESC')

const { status, data } = await apiInstance.getAllBatches(
    page,
    perPage,
    sort,
    sortDirection
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**string**] |  | (optional) defaults to '1'|
| **perPage** | [**string**] |  | (optional) defaults to '20000'|
| **sort** | [**string**] |  | (optional) defaults to 'created_at'|
| **sortDirection** | [**string**] | One of DESC for descending or ASC for ascending | (optional) defaults to 'DESC'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllGroups**
> object getAllGroups()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: string; // (optional) (default to '1')
let perPage: string; // (optional) (default to '20000')
let associations: boolean; //Set to `true` in order to see each group\'s assigned `member_ids`, `layer_ids`, `project_ids` and `form_ids` (optional) (default to false)

const { status, data } = await apiInstance.getAllGroups(
    page,
    perPage,
    associations
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**string**] |  | (optional) defaults to '1'|
| **perPage** | [**string**] |  | (optional) defaults to '20000'|
| **associations** | [**boolean**] | Set to &#x60;true&#x60; in order to see each group\&#39;s assigned &#x60;member_ids&#x60;, &#x60;layer_ids&#x60;, &#x60;project_ids&#x60; and &#x60;form_ids&#x60; | (optional) defaults to false|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllMemberships**
> object getAllMemberships()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let type: string; //The type of permission (member_forms, member_layers, member_projects, form_members, layer_members, or project_members) (default to 'member_projects')
let objectId: string; //The membership_id of the user or the id of the form, layer or project (default to undefined)
let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.getAllMemberships(
    type,
    objectId,
    page,
    perPage,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **type** | [**string**] | The type of permission (member_forms, member_layers, member_projects, form_members, layer_members, or project_members) | defaults to 'member_projects'|
| **objectId** | [**string**] | The membership_id of the user or the id of the form, layer or project | defaults to undefined|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllReportTemplates**
> object getAllReportTemplates()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let formId: string; //The form to fetch reports for (optional) (default to undefined)

const { status, data } = await apiInstance.getAllReportTemplates(
    page,
    perPage,
    formId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **formId** | [**string**] | The form to fetch reports for | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllWorkflows**
> object getAllWorkflows()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.getAllWorkflows(
    page,
    perPage,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getGroupResource**
> object getGroupResource()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let groupId: string; //Group ID (default to undefined)
let resource: string; //One of `members`, `projects`, `layers` or `forms` (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let page: number; //Page of the response (optional) (default to 1)
let perPage: number; //Amount of items in every page (optional) (default to 20000)

const { status, data } = await apiInstance.getGroupResource(
    groupId,
    resource,
    accept,
    page,
    perPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Group ID | defaults to undefined|
| **resource** | [**string**] | One of &#x60;members&#x60;, &#x60;projects&#x60;, &#x60;layers&#x60; or &#x60;forms&#x60; | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **page** | [**number**] | Page of the response | (optional) defaults to 1|
| **perPage** | [**number**] | Amount of items in every page | (optional) defaults to 20000|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSingleAttachment**
> GetSingleAttachment200Response getSingleAttachment()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let attachmentId: string; //The attachment id. (default to undefined)
let xApitoken: string; //API Token. Required to authenticate the request. (optional) (default to undefined)

const { status, data } = await apiInstance.getSingleAttachment(
    attachmentId,
    xApitoken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachmentId** | [**string**] | The attachment id. | defaults to undefined|
| **xApitoken** | [**string**] | API Token. Required to authenticate the request. | (optional) defaults to undefined|


### Return type

**GetSingleAttachment200Response**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**401** | 401 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSingleBatch**
> object getSingleBatch()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let batchId: string; //The ID of the batch (default to undefined)
let page: string; // (optional) (default to '1')
let perPage: string; // (optional) (default to '20000')

const { status, data } = await apiInstance.getSingleBatch(
    batchId,
    page,
    perPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchId** | [**string**] | The ID of the batch | defaults to undefined|
| **page** | [**string**] |  | (optional) defaults to '1'|
| **perPage** | [**string**] |  | (optional) defaults to '20000'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSingleGroup**
> object getSingleGroup()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let groupId: string; //Group ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let associations: boolean; //Set to `true` in order to see each group\'s assigned `member_ids`, `layer_ids`, `project_ids` and `form_ids` (optional) (default to false)

const { status, data } = await apiInstance.getSingleGroup(
    groupId,
    accept,
    associations
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupId** | [**string**] | Group ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **associations** | [**boolean**] | Set to &#x60;true&#x60; in order to see each group\&#39;s assigned &#x60;member_ids&#x60;, &#x60;layer_ids&#x60;, &#x60;project_ids&#x60; and &#x60;form_ids&#x60; | (optional) defaults to false|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSingleReportTemplate**
> object getSingleReportTemplate()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //The id of the report (default to undefined)

const { status, data } = await apiInstance.getSingleReportTemplate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | The id of the report | defaults to undefined|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSingleWorkflow**
> object getSingleWorkflow()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workflowId: string; //The id of the workflow (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.getSingleWorkflow(
    workflowId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowId** | [**string**] | The id of the workflow | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **layersCreate**
> object layersCreate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    LayersCreateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let layersCreateRequest: LayersCreateRequest; // (optional)

const { status, data } = await apiInstance.layersCreate(
    accept,
    contentType,
    layersCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **layersCreateRequest** | **LayersCreateRequest**|  | |
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **layersDelete**
> object layersDelete()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let layerId: string; //Layer ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.layersDelete(
    layerId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **layerId** | [**string**] | Layer ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **layersGetAll**
> object layersGetAll()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.layersGetAll(
    page,
    perPage,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **layersGetSingle**
> object layersGetSingle()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let layerId: string; //Layer ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.layersGetSingle(
    layerId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **layerId** | [**string**] | Layer ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **layersUpdate**
> object layersUpdate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    LayersUpdateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let layerId: string; //Layer ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let layersUpdateRequest: LayersUpdateRequest; // (optional)

const { status, data } = await apiInstance.layersUpdate(
    layerId,
    accept,
    contentType,
    layersUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **layersUpdateRequest** | **LayersUpdateRequest**|  | |
| **layerId** | [**string**] | Layer ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **membershipsChangePermissions**
> object membershipsChangePermissions()

Add or remove membership permissions from layers, forms, or projects

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    MembershipsChangePermissionsRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let membershipsChangePermissionsRequest: MembershipsChangePermissionsRequest; // (optional)

const { status, data } = await apiInstance.membershipsChangePermissions(
    accept,
    contentType,
    membershipsChangePermissionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **membershipsChangePermissionsRequest** | **MembershipsChangePermissionsRequest**|  | |
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **membershipsGetAll**
> object membershipsGetAll()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let formId: string; //Limit members to a specific Form (optional) (default to undefined)
let projectId: string; //Limit members to a specific Project (optional) (default to undefined)
let layerId: string; //Limit members to a specific Layer (optional) (default to undefined)
let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.membershipsGetAll(
    formId,
    projectId,
    layerId,
    page,
    perPage,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formId** | [**string**] | Limit members to a specific Form | (optional) defaults to undefined|
| **projectId** | [**string**] | Limit members to a specific Project | (optional) defaults to undefined|
| **layerId** | [**string**] | Limit members to a specific Layer | (optional) defaults to undefined|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **membershipsGetSingle**
> object membershipsGetSingle()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let membershipId: string; //Membership ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.membershipsGetSingle(
    membershipId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **membershipId** | [**string**] | Membership ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **photosGetAllMetadata**
> object photosGetAllMetadata()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordId: string; //The ID of the record with which the photo is associated. (optional) (default to undefined)
let formId: string; //The ID of the form with which the photo is associated. Leaving this blank will query against all of your photos. (optional) (default to undefined)
let newestFirst: boolean; //If present, photos will be sorted by updated_at date. (optional) (default to undefined)
let processed: boolean; //Photo has been completely processed. (optional) (default to undefined)
let stored: boolean; //Photo has been completely stored. (optional) (default to undefined)
let uploaded: boolean; //Photo has been completely uploaded. (optional) (default to undefined)
let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.photosGetAllMetadata(
    recordId,
    formId,
    newestFirst,
    processed,
    stored,
    uploaded,
    page,
    perPage,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordId** | [**string**] | The ID of the record with which the photo is associated. | (optional) defaults to undefined|
| **formId** | [**string**] | The ID of the form with which the photo is associated. Leaving this blank will query against all of your photos. | (optional) defaults to undefined|
| **newestFirst** | [**boolean**] | If present, photos will be sorted by updated_at date. | (optional) defaults to undefined|
| **processed** | [**boolean**] | Photo has been completely processed. | (optional) defaults to undefined|
| **stored** | [**boolean**] | Photo has been completely stored. | (optional) defaults to undefined|
| **uploaded** | [**boolean**] | Photo has been completely uploaded. | (optional) defaults to undefined|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **photosGetSingleFile**
> object photosGetSingleFile()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let photoId: string; //Photo ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.photosGetSingleFile(
    photoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **photoId** | [**string**] | Photo ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **photosGetSingleMetadata**
> object photosGetSingleMetadata()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let photoId: string; //Photo ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.photosGetSingleMetadata(
    photoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **photoId** | [**string**] | Photo ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **photosLargeFile**
> object photosLargeFile()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let photoId: string; //Photo ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.photosLargeFile(
    photoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **photoId** | [**string**] | Photo ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **photosLargeMetadata**
> object photosLargeMetadata()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let photoId: string; //Photo ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.photosLargeMetadata(
    photoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **photoId** | [**string**] | Photo ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **photosThumbnailFile**
> object photosThumbnailFile()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let photoId: string; //Photo ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.photosThumbnailFile(
    photoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **photoId** | [**string**] | Photo ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **photosThumbnailMetadata**
> object photosThumbnailMetadata()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let photoId: string; //Photo ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.photosThumbnailMetadata(
    photoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **photoId** | [**string**] | Photo ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **photosUpload**
> object photosUpload()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.photosUpload(
    accept,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsCreate**
> object projectsCreate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectsCreateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let projectsCreateRequest: ProjectsCreateRequest; // (optional)

const { status, data } = await apiInstance.projectsCreate(
    accept,
    contentType,
    projectsCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectsCreateRequest** | **ProjectsCreateRequest**|  | |
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsDelete**
> object projectsDelete()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: string; //Project ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.projectsDelete(
    projectId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] | Project ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsGetAll**
> object projectsGetAll()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.projectsGetAll(
    page,
    perPage,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsGetSingle**
> object projectsGetSingle()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: string; //Project ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.projectsGetSingle(
    projectId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectId** | [**string**] | Project ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsUpdate**
> object projectsUpdate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectsUpdateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: string; //Project ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let projectsUpdateRequest: ProjectsUpdateRequest; // (optional)

const { status, data } = await apiInstance.projectsUpdate(
    projectId,
    accept,
    contentType,
    projectsUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectsUpdateRequest** | **ProjectsUpdateRequest**|  | |
| **projectId** | [**string**] | Project ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queryGet**
> object queryGet()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let q: string; //The SQL query (default to undefined)
let format: string; //The format of the results returned by the query. Options include `csv`, `json`, `geojson`, `postgres`. (optional) (default to 'csv')
let headers: boolean; //Include headers for csv format? (optional) (default to true)
let metadata: boolean; //Include column metadata for `json` format? (optional) (default to false)
let arrays: boolean; //Return row arrays instead of objects for `json` format? (optional) (default to false)
let tableName: string; //Table name for `postgres` format. Defaults to query. (optional) (default to undefined)
let sortColumn: string; //The name of the column used to sort on. (optional) (default to undefined)
let sortDirection: string; //The sort direction (asc, desc). (optional) (default to undefined)
let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')
let userAgent: string; // (optional) (default to 'Application')

const { status, data } = await apiInstance.queryGet(
    q,
    format,
    headers,
    metadata,
    arrays,
    tableName,
    sortColumn,
    sortDirection,
    page,
    perPage,
    accept,
    userAgent
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **q** | [**string**] | The SQL query | defaults to undefined|
| **format** | [**string**] | The format of the results returned by the query. Options include &#x60;csv&#x60;, &#x60;json&#x60;, &#x60;geojson&#x60;, &#x60;postgres&#x60;. | (optional) defaults to 'csv'|
| **headers** | [**boolean**] | Include headers for csv format? | (optional) defaults to true|
| **metadata** | [**boolean**] | Include column metadata for &#x60;json&#x60; format? | (optional) defaults to false|
| **arrays** | [**boolean**] | Return row arrays instead of objects for &#x60;json&#x60; format? | (optional) defaults to false|
| **tableName** | [**string**] | Table name for &#x60;postgres&#x60; format. Defaults to query. | (optional) defaults to undefined|
| **sortColumn** | [**string**] | The name of the column used to sort on. | (optional) defaults to undefined|
| **sortDirection** | [**string**] | The sort direction (asc, desc). | (optional) defaults to undefined|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **userAgent** | [**string**] |  | (optional) defaults to 'Application'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queryPost**
> object queryPost()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    QueryPostRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')
let queryPostRequest: QueryPostRequest; // (optional)

const { status, data } = await apiInstance.queryPost(
    page,
    perPage,
    accept,
    queryPostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **queryPostRequest** | **QueryPostRequest**|  | |
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recordsCreate**
> object recordsCreate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RecordsCreateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let xSkipWorkflows: boolean; //Skips all app workflows (optional) (default to false)
let xSkipWebhooks: boolean; //Skips all app webhooks (optional) (default to false)
let recordsCreateRequest: RecordsCreateRequest; // (optional)

const { status, data } = await apiInstance.recordsCreate(
    accept,
    contentType,
    xSkipWorkflows,
    xSkipWebhooks,
    recordsCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordsCreateRequest** | **RecordsCreateRequest**|  | |
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|
| **xSkipWorkflows** | [**boolean**] | Skips all app workflows | (optional) defaults to false|
| **xSkipWebhooks** | [**boolean**] | Skips all app webhooks | (optional) defaults to false|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recordsDelete**
> object recordsDelete()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordId: string; //Record ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let xSkipWorkflows: boolean; //Skips all app workflows (optional) (default to false)
let xSkipWebhooks: boolean; //Skips all app webhooks (optional) (default to false)

const { status, data } = await apiInstance.recordsDelete(
    recordId,
    accept,
    xSkipWorkflows,
    xSkipWebhooks
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordId** | [**string**] | Record ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **xSkipWorkflows** | [**boolean**] | Skips all app workflows | (optional) defaults to false|
| **xSkipWebhooks** | [**boolean**] | Skips all app webhooks | (optional) defaults to false|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recordsGetAll**
> RecordsResponse recordsGetAll()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let newestFirst: boolean; //If present, records will be sorted by updated_at date. (optional) (default to undefined)
let boundingBox: string; //Bounding box of the records requested. Format should be: lat,long,lat,long (bottom, left, top, right). (optional) (default to undefined)
let changesetId: string; //The id of the changeset associated with the record. (optional) (default to undefined)
let formId: string; //The id of the form with which the record is associated. Leaving this blank will query against all of your records. (optional) (default to undefined)
let projectId: string; //The id of the project with which the record is associated. Leaving this blank will query against all of your records. (optional) (default to undefined)
let clientCreatedBefore: string; //Return only records which were created by the client (device) before the given time. (optional) (default to undefined)
let clientCreatedSince: string; //Return only records which were created by the client (device) after the given time. (optional) (default to undefined)
let clientUpdatedBefore: string; //Return only records which were updated by the client (device) before the given time. (optional) (default to undefined)
let clientUpdatedSince: string; //Return only records which were updated by the client (device) after the given time. (optional) (default to undefined)
let createdBefore: string; //Return only records which were created (on the server) before the given time. (optional) (default to undefined)
let createdSince: string; //Return only records which were created (on the server) after the given time. (optional) (default to undefined)
let updatedBefore: string; //Return only records which were updated (on the server) before the given time. (optional) (default to undefined)
let updatedSince: string; //Return only records which were updated (on the server) after the given time. (optional) (default to undefined)
let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.recordsGetAll(
    newestFirst,
    boundingBox,
    changesetId,
    formId,
    projectId,
    clientCreatedBefore,
    clientCreatedSince,
    clientUpdatedBefore,
    clientUpdatedSince,
    createdBefore,
    createdSince,
    updatedBefore,
    updatedSince,
    page,
    perPage,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newestFirst** | [**boolean**] | If present, records will be sorted by updated_at date. | (optional) defaults to undefined|
| **boundingBox** | [**string**] | Bounding box of the records requested. Format should be: lat,long,lat,long (bottom, left, top, right). | (optional) defaults to undefined|
| **changesetId** | [**string**] | The id of the changeset associated with the record. | (optional) defaults to undefined|
| **formId** | [**string**] | The id of the form with which the record is associated. Leaving this blank will query against all of your records. | (optional) defaults to undefined|
| **projectId** | [**string**] | The id of the project with which the record is associated. Leaving this blank will query against all of your records. | (optional) defaults to undefined|
| **clientCreatedBefore** | [**string**] | Return only records which were created by the client (device) before the given time. | (optional) defaults to undefined|
| **clientCreatedSince** | [**string**] | Return only records which were created by the client (device) after the given time. | (optional) defaults to undefined|
| **clientUpdatedBefore** | [**string**] | Return only records which were updated by the client (device) before the given time. | (optional) defaults to undefined|
| **clientUpdatedSince** | [**string**] | Return only records which were updated by the client (device) after the given time. | (optional) defaults to undefined|
| **createdBefore** | [**string**] | Return only records which were created (on the server) before the given time. | (optional) defaults to undefined|
| **createdSince** | [**string**] | Return only records which were created (on the server) after the given time. | (optional) defaults to undefined|
| **updatedBefore** | [**string**] | Return only records which were updated (on the server) before the given time. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | Return only records which were updated (on the server) after the given time. | (optional) defaults to undefined|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**RecordsResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |
|**404** | 404 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recordsGetAllHistory**
> object recordsGetAllHistory()

This endpoint can help you get records from a specific changeset, or retrieve records for a deleted form.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let changesetId: string; // (optional) (default to undefined)
let deletedFormId: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.recordsGetAllHistory(
    accept,
    changesetId,
    deletedFormId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **changesetId** | [**string**] |  | (optional) defaults to undefined|
| **deletedFormId** | [**string**] |  | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recordsGetHistory**
> object recordsGetHistory()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordId: string; //Record ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.recordsGetHistory(
    recordId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordId** | [**string**] | Record ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recordsGetSingle**
> ModelRecord recordsGetSingle()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordId: string; //Record ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.recordsGetSingle(
    recordId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordId** | [**string**] | Record ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**ModelRecord**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |
|**404** | 404 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recordsUpdate**
> object recordsUpdate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RecordsUpdateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordId: string; //Record ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let xSkipWorkflows: boolean; //Skips all app workflows (optional) (default to false)
let xSkipWebhooks: boolean; //Skips all app webhooks (optional) (default to false)
let recordsUpdateRequest: RecordsUpdateRequest; // (optional)

const { status, data } = await apiInstance.recordsUpdate(
    recordId,
    accept,
    contentType,
    xSkipWorkflows,
    xSkipWebhooks,
    recordsUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordsUpdateRequest** | **RecordsUpdateRequest**|  | |
| **recordId** | [**string**] | Record ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|
| **xSkipWorkflows** | [**boolean**] | Skips all app workflows | (optional) defaults to false|
| **xSkipWebhooks** | [**boolean**] | Skips all app webhooks | (optional) defaults to false|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rolesGetAll**
> object rolesGetAll()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')
let sort: string; //Sort by role name. Default sort is by `updated_at` if sort is not provided (optional) (default to undefined)
let sortDirection: string; //The sort direction (asc, desc). Default is `asc` (optional) (default to 'asc')

const { status, data } = await apiInstance.rolesGetAll(
    page,
    perPage,
    accept,
    sort,
    sortDirection
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **sort** | [**string**] | Sort by role name. Default sort is by &#x60;updated_at&#x60; if sort is not provided | (optional) defaults to undefined|
| **sortDirection** | [**string**] | The sort direction (asc, desc). Default is &#x60;asc&#x60; | (optional) defaults to 'asc'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signaturesGetAll**
> object signaturesGetAll()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordId: string; //The ID of the record with which the photo is associated. (optional) (default to undefined)
let formId: string; //The ID of the form with which the photo is associated. Leaving this blank will query against all of your photos. (optional) (default to undefined)
let newestFirst: boolean; //If present, photos will be sorted by updated_at date. (optional) (default to undefined)
let processed: boolean; //Signature has been completely processed. (optional) (default to undefined)
let stored: boolean; //Signature has been completely stored. (optional) (default to undefined)
let uploaded: boolean; //Signature has been completely uploaded. (optional) (default to undefined)
let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.signaturesGetAll(
    recordId,
    formId,
    newestFirst,
    processed,
    stored,
    uploaded,
    page,
    perPage,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordId** | [**string**] | The ID of the record with which the photo is associated. | (optional) defaults to undefined|
| **formId** | [**string**] | The ID of the form with which the photo is associated. Leaving this blank will query against all of your photos. | (optional) defaults to undefined|
| **newestFirst** | [**boolean**] | If present, photos will be sorted by updated_at date. | (optional) defaults to undefined|
| **processed** | [**boolean**] | Signature has been completely processed. | (optional) defaults to undefined|
| **stored** | [**boolean**] | Signature has been completely stored. | (optional) defaults to undefined|
| **uploaded** | [**boolean**] | Signature has been completely uploaded. | (optional) defaults to undefined|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signaturesGetSingleFile**
> object signaturesGetSingleFile()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let signatureId: string; //Signature ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.signaturesGetSingleFile(
    signatureId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signatureId** | [**string**] | Signature ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signaturesGetSingleMetadata**
> object signaturesGetSingleMetadata()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let signatureId: string; //Signature ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.signaturesGetSingleMetadata(
    signatureId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signatureId** | [**string**] | Signature ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signaturesGetThumbnailFile**
> object signaturesGetThumbnailFile()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let signatureId: string; //Signature ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.signaturesGetThumbnailFile(
    signatureId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signatureId** | [**string**] | Signature ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signaturesGetThumbnailMetadata**
> object signaturesGetThumbnailMetadata()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let signatureId: string; //Signature ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.signaturesGetThumbnailMetadata(
    signatureId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signatureId** | [**string**] | Signature ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signaturesUpload**
> object signaturesUpload()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.signaturesUpload(
    accept,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startBatch**
> object startBatch()

Start your pending batch

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let batchId: string; //ID of the batch (default to undefined)

const { status, data } = await apiInstance.startBatch(
    batchId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchId** | [**string**] | ID of the batch | defaults to undefined|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGroupNameDescription**
> CreateGroup201Response updateGroupNameDescription()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateGroupNameDescriptionRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let groupId: string; //ID of the group (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let updateGroupNameDescriptionRequest: UpdateGroupNameDescriptionRequest; // (optional)

const { status, data } = await apiInstance.updateGroupNameDescription(
    groupId,
    accept,
    contentType,
    updateGroupNameDescriptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGroupNameDescriptionRequest** | **UpdateGroupNameDescriptionRequest**|  | |
| **groupId** | [**string**] | ID of the group | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**CreateGroup201Response**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGroupPermissions**
> CreateGroup201Response updateGroupPermissions()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateGroupPermissionsRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let updateGroupPermissionsRequest: UpdateGroupPermissionsRequest; // (optional)

const { status, data } = await apiInstance.updateGroupPermissions(
    accept,
    contentType,
    updateGroupPermissionsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateGroupPermissionsRequest** | **UpdateGroupPermissionsRequest**|  | |
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**CreateGroup201Response**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateMember**
> object updateMember()

You can use this to update parameters of a member, but this will not work if the member is apart of multiple organizations.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateMemberRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let membershipId: string; //The ID of the member (default to undefined)
let updateMemberRequest: UpdateMemberRequest; // (optional)

const { status, data } = await apiInstance.updateMember(
    membershipId,
    updateMemberRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateMemberRequest** | **UpdateMemberRequest**|  | |
| **membershipId** | [**string**] | The ID of the member | defaults to undefined|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateReportTemplate**
> object updateReportTemplate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateReportTemplateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //The id of the report (default to undefined)
let updateReportTemplateRequest: UpdateReportTemplateRequest; // (optional)

const { status, data } = await apiInstance.updateReportTemplate(
    id,
    updateReportTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateReportTemplateRequest** | **UpdateReportTemplateRequest**|  | |
| **id** | [**string**] | The id of the report | defaults to undefined|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWorkflow**
> object updateWorkflow()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    UpdateWorkflowRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workflowId: string; //The ID of the workflow (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentTyoe: string; // (optional) (default to 'application/json')
let updateWorkflowRequest: UpdateWorkflowRequest; // (optional)

const { status, data } = await apiInstance.updateWorkflow(
    workflowId,
    accept,
    contentTyoe,
    updateWorkflowRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **updateWorkflowRequest** | **UpdateWorkflowRequest**|  | |
| **workflowId** | [**string**] | The ID of the workflow | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentTyoe** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **usersGetUser**
> object usersGetUser()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.usersGetUser(
    page,
    perPage,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetAll**
> object videosGetAll()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordId: string; //The ID of the record with which the video is associated. (optional) (default to undefined)
let formId: string; //The ID of the form with which the video is associated. Leaving this blank will query against all of your videos. (optional) (default to undefined)
let newestFirst: boolean; //If present, videos will be sorted by updated_at date. (optional) (default to undefined)
let processed: boolean; //Video has been completely processed. (optional) (default to undefined)
let stored: boolean; //Video has been completely stored. (optional) (default to undefined)
let uploaded: boolean; //Video has been completely uploaded. (optional) (default to undefined)
let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetAll(
    recordId,
    formId,
    newestFirst,
    processed,
    stored,
    uploaded,
    page,
    perPage,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordId** | [**string**] | The ID of the record with which the video is associated. | (optional) defaults to undefined|
| **formId** | [**string**] | The ID of the form with which the video is associated. Leaving this blank will query against all of your videos. | (optional) defaults to undefined|
| **newestFirst** | [**boolean**] | If present, videos will be sorted by updated_at date. | (optional) defaults to undefined|
| **processed** | [**boolean**] | Video has been completely processed. | (optional) defaults to undefined|
| **stored** | [**boolean**] | Video has been completely stored. | (optional) defaults to undefined|
| **uploaded** | [**boolean**] | Video has been completely uploaded. | (optional) defaults to undefined|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetAllTracksGeojson**
> object videosGetAllTracksGeojson()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let type: string; //Set value to `points` to fetch tracks as GeoJSON points (optional) (default to undefined)

const { status, data } = await apiInstance.videosGetAllTracksGeojson(
    accept,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **type** | [**string**] | Set value to &#x60;points&#x60; to fetch tracks as GeoJSON points | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetAllTracksGpx**
> object videosGetAllTracksGpx()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetAllTracksGpx(
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetAllTracksKml**
> object videosGetAllTracksKml()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetAllTracksKml(
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetMediumFile**
> object videosGetMediumFile()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //Video ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetMediumFile(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | Video ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetOriginalFile**
> object videosGetOriginalFile()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //Video ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetOriginalFile(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | Video ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetSingleMetadata**
> object videosGetSingleMetadata()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //Video ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetSingleMetadata(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | Video ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetSingleTrackGeojson**
> object videosGetSingleTrackGeojson()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //Video ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let type: string; //Set value to `points` to fetch tracks as GeoJSON points (optional) (default to undefined)

const { status, data } = await apiInstance.videosGetSingleTrackGeojson(
    videoId,
    accept,
    type
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | Video ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **type** | [**string**] | Set value to &#x60;points&#x60; to fetch tracks as GeoJSON points | (optional) defaults to undefined|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetSingleTrackGpx**
> object videosGetSingleTrackGpx()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //Video ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetSingleTrackGpx(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | Video ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetSingleTrackJson**
> object videosGetSingleTrackJson()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //Video ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetSingleTrackJson(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | Video ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetSingleTrackKml**
> object videosGetSingleTrackKml()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //Video ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetSingleTrackKml(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | Video ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetSmallFile**
> object videosGetSmallFile()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //Video ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetSmallFile(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | Video ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetThumbnailHuge**
> object videosGetThumbnailHuge()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //Video ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetThumbnailHuge(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | Video ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetThumbnailHugeSquare**
> object videosGetThumbnailHugeSquare()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //Video ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetThumbnailHugeSquare(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | Video ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetThumbnailLarge**
> object videosGetThumbnailLarge()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //Video ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetThumbnailLarge(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | Video ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetThumbnailLargeSquare**
> object videosGetThumbnailLargeSquare()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //Video ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetThumbnailLargeSquare(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | Video ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetThumbnailMedium**
> object videosGetThumbnailMedium()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //Video ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetThumbnailMedium(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | Video ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetThumbnailMediumSquare**
> object videosGetThumbnailMediumSquare()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //Video ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetThumbnailMediumSquare(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | Video ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetThumbnailSmall**
> object videosGetThumbnailSmall()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //Video ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetThumbnailSmall(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | Video ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetThumbnailSmallSquare**
> object videosGetThumbnailSmallSquare()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //Video ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetThumbnailSmallSquare(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | Video ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosUpload**
> object videosUpload()

Upload video with optional track file

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosUpload(
    accept,
    contentType
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooksCreate**
> WebhooksCreate201Response webhooksCreate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    WebhooksCreateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let webhooksCreateRequest: WebhooksCreateRequest; // (optional)

const { status, data } = await apiInstance.webhooksCreate(
    accept,
    contentType,
    webhooksCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhooksCreateRequest** | **WebhooksCreateRequest**|  | |
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**WebhooksCreate201Response**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | 201 |  -  |
|**400** | 400 |  -  |
|**406** | 406 |  -  |
|**422** | 422 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooksDelete**
> object webhooksDelete()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let webhookId: string; //Webhook ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.webhooksDelete(
    webhookId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] | Webhook ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | 204 |  -  |
|**400** | 400 |  -  |
|**404** | 404 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooksGetAll**
> WebhooksGetAll200Response webhooksGetAll()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.webhooksGetAll(
    page,
    perPage,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**WebhooksGetAll200Response**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooksGetSingle**
> object webhooksGetSingle()



### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let webhookId: string; //Webhook ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.webhooksGetSingle(
    webhookId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookId** | [**string**] | Webhook ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooksUpdate**
> object webhooksUpdate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    WebhooksUpdateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let webhookId: string; //Webhook ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let webhooksUpdateRequest: WebhooksUpdateRequest; // (optional)

const { status, data } = await apiInstance.webhooksUpdate(
    webhookId,
    accept,
    contentType,
    webhooksUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhooksUpdateRequest** | **WebhooksUpdateRequest**|  | |
| **webhookId** | [**string**] | Webhook ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**object**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | 200 |  -  |
|**400** | 400 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

