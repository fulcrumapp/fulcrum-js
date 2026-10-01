# DefaultApi

All URIs are relative to *https://api.fulcrumapp.com/api*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addBatchOperations**](#addbatchoperations) | **POST** /v2/batch/{batch_id}/operations.json | Add batch operations|
|[**audioGetAll**](#audiogetall) | **GET** /v2/audio.json | Get a list of audio metadata|
|[**audioGetAllTracksGeojson**](#audiogetalltracksgeojson) | **GET** /v2/audio/tracks.geojson | Get GeoJSON Tracks for All Audio|
|[**audioGetAllTracksGpx**](#audiogetalltracksgpx) | **GET** /v2/audio/tracks.gpx | Get GPX Tracks for All Audio|
|[**audioGetAllTracksJson**](#audiogetalltracksjson) | **GET** /v2/audio/tracks.json | Get JSON Tracks for All Audio|
|[**audioGetAllTracksKml**](#audiogetalltrackskml) | **GET** /v2/audio/tracks.kml | Get KML Tracks for All Audio|
|[**audioGetOriginalFile**](#audiogetoriginalfile) | **GET** /v2/audio/{audio_id}.mp4 | Get an audio original file|
|[**audioGetSingleMetadata**](#audiogetsinglemetadata) | **GET** /v2/audio/{audio_id}.json | Get audio metadata|
|[**audioGetSingleTrackGeojson**](#audiogetsingletrackgeojson) | **GET** /v2/audio/{audio_id}/track.geojson | Get GeoJSON Audio Track|
|[**audioGetSingleTrackGpx**](#audiogetsingletrackgpx) | **GET** /v2/audio/{audio_id}/track.gpx | Get GPX Audio Track|
|[**audioGetSingleTrackJson**](#audiogetsingletrackjson) | **GET** /v2/audio/{audio_id}/track.json | Get JSON Audio Track|
|[**audioGetSingleTrackKml**](#audiogetsingletrackkml) | **GET** /v2/audio/{audio_id}/track.kml | Get KML Audio Track|
|[**audioUpload**](#audioupload) | **POST** /v2/audio/upload.json | Upload audio|
|[**auditLogsGetAll**](#auditlogsgetall) | **GET** /v2/audit_logs.json | Get a list of audit logs|
|[**auditLogsGetSingle**](#auditlogsgetsingle) | **GET** /v2/audit_logs/{audit_log_id}.json | Get an audit log|
|[**authorizationsCreate**](#authorizationscreate) | **POST** /v2/authorizations.json | Create an authorization|
|[**authorizationsDelete**](#authorizationsdelete) | **DELETE** /v2/authorizations/{authorization_id}.json | Delete an authorization|
|[**authorizationsGetAll**](#authorizationsgetall) | **GET** /v2/authorizations.json | Get a list of authorizations|
|[**authorizationsGetSingle**](#authorizationsgetsingle) | **GET** /v2/authorizations/{authorization_id}.json | Get an authorization|
|[**authorizationsUpdate**](#authorizationsupdate) | **PUT** /v2/authorizations/{authorization_id}.json | Update Authorization|
|[**changesetsClose**](#changesetsclose) | **PUT** /v2/changesets/{changeset_id}/close.json | Close Changeset|
|[**changesetsCreate**](#changesetscreate) | **POST** /v2/changesets.json | Create a changeset|
|[**changesetsGetAll**](#changesetsgetall) | **GET** /v2/changesets.json | Get a list of changesets|
|[**changesetsGetSingle**](#changesetsgetsingle) | **GET** /v2/changesets/{changeset_id}.json | Get a changeset|
|[**changesetsUpdate**](#changesetsupdate) | **PUT** /v2/changesets/{changeset_id}.json | Update Changeset|
|[**choiceListsCreate**](#choicelistscreate) | **POST** /v2/choice_lists.json | Create a choice list|
|[**choiceListsDelete**](#choicelistsdelete) | **DELETE** /v2/choice_lists/{choice_list_id}.json | Delete a choice list|
|[**choiceListsGetAll**](#choicelistsgetall) | **GET** /v2/choice_lists.json | Get a list of choice lists|
|[**choiceListsGetSingle**](#choicelistsgetsingle) | **GET** /v2/choice_lists/{choice_list_id}.json | Get a choice list|
|[**choiceListsUpdate**](#choicelistsupdate) | **PUT** /v2/choice_lists/{choice_list_id}.json | Update Choice List|
|[**classificationSetsCreate**](#classificationsetscreate) | **POST** /v2/classification_sets.json | Create a classification set|
|[**classificationSetsDelete**](#classificationsetsdelete) | **DELETE** /v2/classification_sets/{classification_set_id}.json | Delete a classification set|
|[**classificationSetsGetAll**](#classificationsetsgetall) | **GET** /v2/classification_sets.json | Get a list of classification sets|
|[**classificationSetsGetSingle**](#classificationsetsgetsingle) | **GET** /v2/classification_sets/{classification_set_id}.json | Get a classification set|
|[**classificationSetsUpdate**](#classificationsetsupdate) | **PUT** /v2/classification_sets/{classification_set_id}.json | Update Classification Set|
|[**copyAllAttachments**](#copyallattachments) | **POST** /v2/attachments/copy_all | Copy all reference files|
|[**createAttachment**](#createattachment) | **POST** /v2/attachments | Create an attachment|
|[**createBatch**](#createbatch) | **POST** /v2/batch.json | Create a batch|
|[**createGroup**](#creategroup) | **POST** /v2/groups.json | Create a group|
|[**createMembership**](#createmembership) | **POST** /v2/memberships.json | Create a membership|
|[**createReportTemplate**](#createreporttemplate) | **POST** /v2/report_templates.json | Create a report template|
|[**createWorkflow**](#createworkflow) | **POST** /v2/workflows.json | Create a workflow|
|[**deleteAttachment**](#deleteattachment) | **DELETE** /v2/attachments/{attachment_id} | Delete an attachment|
|[**deleteGroup**](#deletegroup) | **DELETE** /v2/groups/{group_id}.json | Delete a group|
|[**deleteMembership**](#deletemembership) | **DELETE** /v2/memberships/{membership_id}.json | Delete a membership|
|[**deleteReportTemplate**](#deletereporttemplate) | **DELETE** /v2/report_templates/{id}.json | Delete a report template|
|[**deleteWorkflow**](#deleteworkflow) | **DELETE** /v2/workflows/{workflow_id}.json | Delete a workflow|
|[**finalizeAttachment**](#finalizeattachment) | **POST** /v2/attachments/finalize | Finalize Attachment|
|[**formsCreate**](#formscreate) | **POST** /v2/forms.json | Create a form|
|[**formsDelete**](#formsdelete) | **DELETE** /v2/forms/{form_id}.json | Delete a form|
|[**formsGetAll**](#formsgetall) | **GET** /v2/forms.json | Get a list of forms|
|[**formsGetHistory**](#formsgethistory) | **GET** /v2/forms/{form_id}/history.json | Get Form History|
|[**formsGetSingle**](#formsgetsingle) | **GET** /v2/forms/{form_id}.json | Get a form|
|[**formsUpdate**](#formsupdate) | **PUT** /v2/forms/{form_id}.json | Update Form|
|[**getAllAttachments**](#getallattachments) | **GET** /v2/attachments | Get a list of attachment metadata|
|[**getAllBatches**](#getallbatches) | **GET** /v2/batch.json | Get a list of batches|
|[**getAllGroups**](#getallgroups) | **GET** /v2/groups.json | Get a list of groups|
|[**getAllMemberships**](#getallmemberships) | **GET** /v2/permissions.json | Get Membership Permissions|
|[**getAllReportTemplates**](#getallreporttemplates) | **GET** /v2/report_templates.json | Get a list of report templates|
|[**getAllWorkflows**](#getallworkflows) | **GET** /v2/workflows.json | Get a list of workflows|
|[**getGroupResource**](#getgroupresource) | **GET** /v2/groups/{group_id}/{resource}.json | Get Group Resource|
|[**getSingleAttachment**](#getsingleattachment) | **GET** /v2/attachments/{attachment_id} | Get an attachment|
|[**getSingleBatch**](#getsinglebatch) | **GET** /v2/batch/{batch_id}.json | Get a batch|
|[**getSingleGroup**](#getsinglegroup) | **GET** /v2/groups/{group_id}.json | Get a group|
|[**getSingleReportTemplate**](#getsinglereporttemplate) | **GET** /v2/report_templates/{id}.json | Get a report template|
|[**getSingleWorkflow**](#getsingleworkflow) | **GET** /v2/workflows/{workflow_id}.json | Get a workflow|
|[**layersCreate**](#layerscreate) | **POST** /v2/layers.json | Create a layer|
|[**layersDelete**](#layersdelete) | **DELETE** /v2/layers/{layer_id}.json | Delete a layer|
|[**layersGetAll**](#layersgetall) | **GET** /v2/layers.json | Get a list of layers|
|[**layersGetSingle**](#layersgetsingle) | **GET** /v2/layers/{layer_id}.json | Get a layer|
|[**layersUpdate**](#layersupdate) | **PUT** /v2/layers/{layer_id}.json | Update Layer|
|[**membershipsChangePermissions**](#membershipschangepermissions) | **POST** /v2/memberships/change_permissions.json | Change Permissions|
|[**membershipsGetAll**](#membershipsgetall) | **GET** /v2/memberships.json | Get a list of memberships|
|[**membershipsGetSingle**](#membershipsgetsingle) | **GET** /v2/memberships/{membership_id}.json | Get a membership|
|[**photosGetAllMetadata**](#photosgetallmetadata) | **GET** /v2/photos.json | Get a list of photo metadata|
|[**photosGetSingleFile**](#photosgetsinglefile) | **GET** /v2/photos/{photo_id}.jpg | Get a photo original file|
|[**photosGetSingleMetadata**](#photosgetsinglemetadata) | **GET** /v2/photos/{photo_id}.json | Get photo metadata|
|[**photosLargeFile**](#photoslargefile) | **GET** /v2/photos/{photo_id}/large.jpg | Get a photo large file|
|[**photosLargeMetadata**](#photoslargemetadata) | **GET** /v2/photos/{photo_id}/large.json | Photo Large Metadata|
|[**photosThumbnailFile**](#photosthumbnailfile) | **GET** /v2/photos/{photo_id}/thumbnail.jpg | Get a photo thumbnail file|
|[**photosThumbnailMetadata**](#photosthumbnailmetadata) | **GET** /v2/photos/{photo_id}/thumbnail.json | Photo Thumbnail Metadata|
|[**photosUpload**](#photosupload) | **POST** /v2/photos.json | Upload a photo|
|[**projectsCreate**](#projectscreate) | **POST** /v2/projects.json | Create a project|
|[**projectsDelete**](#projectsdelete) | **DELETE** /v2/projects/{project_id}.json | Delete a project|
|[**projectsGetAll**](#projectsgetall) | **GET** /v2/projects.json | Get a list of projects|
|[**projectsGetSingle**](#projectsgetsingle) | **GET** /v2/projects/{project_id}.json | Get a project|
|[**projectsUpdate**](#projectsupdate) | **PUT** /v2/projects/{project_id}.json | Update Project|
|[**queryGet**](#queryget) | **GET** /v2/query | Make a Query GET request|
|[**queryPost**](#querypost) | **POST** /v2/query | Make a Query POST request|
|[**recordsCreate**](#recordscreate) | **POST** /v2/records.json | Create a record|
|[**recordsDelete**](#recordsdelete) | **DELETE** /v2/records/{record_id}.json | Delete a record|
|[**recordsGetAll**](#recordsgetall) | **GET** /v2/records.json | Get a list of records|
|[**recordsGetAllHistory**](#recordsgetallhistory) | **GET** /v2/records/history.json | Get the history of a collection of records|
|[**recordsGetHistory**](#recordsgethistory) | **GET** /v2/records/{record_id}/history.json | Get the history of a record|
|[**recordsGetSingle**](#recordsgetsingle) | **GET** /v2/records/{record_id}.json | Get a record|
|[**recordsPartialUpdate**](#recordspartialupdate) | **PATCH** /v2/records/{record_id}.json | Partially update a record|
|[**recordsUpdate**](#recordsupdate) | **PUT** /v2/records/{record_id}.json | Update a record|
|[**reportsCreate**](#reportscreate) | **POST** /v2/reports.json | Create a report|
|[**reportsFile**](#reportsfile) | **GET** /v2/reports/{report_id}.pdf | Get a report file|
|[**rolesGetAll**](#rolesgetall) | **GET** /v2/roles.json | Get a list of roles|
|[**signaturesGetAll**](#signaturesgetall) | **GET** /v2/signatures.json | Get a list of signature metadata|
|[**signaturesGetSingleFile**](#signaturesgetsinglefile) | **GET** /v2/signatures/{signature_id}.png | Get a signature original file|
|[**signaturesGetSingleMetadata**](#signaturesgetsinglemetadata) | **GET** /v2/signatures/{signature_id}.json | Get signature metadata|
|[**signaturesGetThumbnailFile**](#signaturesgetthumbnailfile) | **GET** /v2/signatures/{signature_id}/thumbnail.png | Get a signature thumbnail file|
|[**signaturesGetThumbnailMetadata**](#signaturesgetthumbnailmetadata) | **GET** /v2/signatures/{signature_id}/thumbnail.json | Signature Thumbnail Metadata|
|[**signaturesUpload**](#signaturesupload) | **POST** /v2/signatures.json | Upload a signature|
|[**sketchesGetAllMetadata**](#sketchesgetallmetadata) | **GET** /v2/sketches.json | Get a list of sketch metadata|
|[**sketchesGetSingleFile**](#sketchesgetsinglefile) | **GET** /v2/sketches/{sketch_id}.jpg | Get a sketch original file|
|[**sketchesGetSingleMetadata**](#sketchesgetsinglemetadata) | **GET** /v2/sketches/{sketch_id}.json | Get sketch metadata|
|[**sketchesLargeFile**](#sketcheslargefile) | **GET** /v2/sketches/{sketch_id}/large.jpg | Get a sketch large file|
|[**sketchesLargeMetadata**](#sketcheslargemetadata) | **GET** /v2/sketches/{sketch_id}/large.json | Sketch Large Metadata|
|[**sketchesThumbnailFile**](#sketchesthumbnailfile) | **GET** /v2/sketches/{sketch_id}/thumbnail.jpg | Get a sketch thumbnail file|
|[**sketchesThumbnailMetadata**](#sketchesthumbnailmetadata) | **GET** /v2/sketches/{sketch_id}/thumbnail.json | Sketch Thumbnail Metadata|
|[**sketchesUpload**](#sketchesupload) | **POST** /v2/sketches.json | Upload a sketch|
|[**startBatch**](#startbatch) | **POST** /v2/batch/{batch_id}/start.json | Start Batch|
|[**updateGroupNameDescription**](#updategroupnamedescription) | **PUT** /v2/groups/{group_id}.json | Update Group Name / Description|
|[**updateGroupPermissions**](#updategrouppermissions) | **POST** /v2/groups/change_permissions.json | Update Group Permissions|
|[**updateMembership**](#updatemembership) | **PUT** /v2/memberships/{membership_id}.json | Update a membership|
|[**updateReportTemplate**](#updatereporttemplate) | **PUT** /v2/report_templates/{id}.json | Update Report Template|
|[**updateWorkflow**](#updateworkflow) | **PUT** /v2/workflows/{workflow_id}.json | Update Workflow|
|[**usersGetUser**](#usersgetuser) | **GET** /v2/users.json | Get User Information|
|[**videosGetAll**](#videosgetall) | **GET** /v2/videos.json | Get a list of video metadata|
|[**videosGetAllTracksGeojson**](#videosgetalltracksgeojson) | **GET** /v2/videos/tracks.geojson | Get GeoJSON Tracks for All Videos|
|[**videosGetAllTracksGpx**](#videosgetalltracksgpx) | **GET** /v2/videos/tracks.gpx | Get GPX Tracks for All Videos|
|[**videosGetAllTracksKml**](#videosgetalltrackskml) | **GET** /v2/videos/tracks.kml | Get KML Tracks for All Videos|
|[**videosGetMediumFile**](#videosgetmediumfile) | **GET** /v2/videos/{video_id}/medium.mp4 | Get a video medium file|
|[**videosGetOriginalFile**](#videosgetoriginalfile) | **GET** /v2/videos/{video_id}.mp4 | Get a video original file|
|[**videosGetSingleMetadata**](#videosgetsinglemetadata) | **GET** /v2/videos/{video_id}.json | Get video metadata|
|[**videosGetSingleTrackGeojson**](#videosgetsingletrackgeojson) | **GET** /v2/videos/{video_id}/track.geojson | Get GeoJSON Video Track|
|[**videosGetSingleTrackGpx**](#videosgetsingletrackgpx) | **GET** /v2/videos/{video_id}/track.gpx | Get GPX Video Track|
|[**videosGetSingleTrackJson**](#videosgetsingletrackjson) | **GET** /v2/videos/{video_id}/track.json | Get JSON Video Track|
|[**videosGetSingleTrackKml**](#videosgetsingletrackkml) | **GET** /v2/videos/{video_id}/track.kml | Get KML Video Track|
|[**videosGetSmallFile**](#videosgetsmallfile) | **GET** /v2/videos/{video_id}/small.mp4 | Get a video small file|
|[**videosGetThumbnailHuge**](#videosgetthumbnailhuge) | **GET** /v2/videos/{video_id}/thumbnail_huge.jpg | Get Huge Video Thumbnail|
|[**videosGetThumbnailHugeSquare**](#videosgetthumbnailhugesquare) | **GET** /v2/videos/{video_id}/thumbnail_huge_square.jpg | Get Huge Square Video Thumbnail|
|[**videosGetThumbnailLarge**](#videosgetthumbnaillarge) | **GET** /v2/videos/{video_id}/thumbnail_large.jpg | Get Large Video Thumbnail|
|[**videosGetThumbnailLargeSquare**](#videosgetthumbnaillargesquare) | **GET** /v2/videos/{video_id}/thumbnail_large_square.jpg | Get Large Square Video Thumbnail|
|[**videosGetThumbnailMedium**](#videosgetthumbnailmedium) | **GET** /v2/videos/{video_id}/thumbnail_medium.jpg | Get Medium Video Thumbnail|
|[**videosGetThumbnailMediumSquare**](#videosgetthumbnailmediumsquare) | **GET** /v2/videos/{video_id}/thumbnail_medium_square.jpg | Get Medium Square Video Thumbnail|
|[**videosGetThumbnailSmall**](#videosgetthumbnailsmall) | **GET** /v2/videos/{video_id}/thumbnail_small.jpg | Get Small Video Thumbnail|
|[**videosGetThumbnailSmallSquare**](#videosgetthumbnailsmallsquare) | **GET** /v2/videos/{video_id}/thumbnail_small_square.jpg | Get Small Square Video Thumbnail|
|[**videosUpload**](#videosupload) | **POST** /v2/videos/upload.json | Upload a video|
|[**webhooksCreate**](#webhookscreate) | **POST** /v2/webhooks.json | Create a webhook|
|[**webhooksDelete**](#webhooksdelete) | **DELETE** /v2/webhooks/{webhook_id}.json | Delete a webhook|
|[**webhooksGetAll**](#webhooksgetall) | **GET** /v2/webhooks.json | Get a list of webhooks|
|[**webhooksGetSingle**](#webhooksgetsingle) | **GET** /v2/webhooks/{webhook_id}.json | Get a webhook|
|[**webhooksUpdate**](#webhooksupdate) | **PUT** /v2/webhooks/{webhook_id}.json | Update Webhook|

# **addBatchOperations**
> object addBatchOperations()

Using the batch operations API, you can bulk delete records from a form or update project, assignee, or status values on multiple records.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    BatchAddOperationsRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let batchId: string; //ID of the batch (default to undefined)
let batchAddOperationsRequest: BatchAddOperationsRequest; // (optional)

const { status, data } = await apiInstance.addBatchOperations(
    batchId,
    batchAddOperationsRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchAddOperationsRequest** | **BatchAddOperationsRequest**|  | |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetAll**
> AudiosResponse audioGetAll()

Retrieve metadata for a list of audio files.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordId: string; //The ID of the record with which the audio file is associated. (optional) (default to undefined)
let formId: string; //The ID of the form with which the audio file is associated. Leaving this blank will query against all of your audio files. (optional) (default to undefined)
let newestFirst: boolean; //If present, audio files will be sorted by updated_at date. (optional) (default to undefined)
let processed: boolean; //Filter for audio files that have been completely processed. (optional) (default to undefined)
let stored: boolean; //Filter for audio files that have been completely stored. (optional) (default to undefined)
let uploaded: boolean; //Filter for audio files that have been completely uploaded. (optional) (default to undefined)
let page: number; //The page number requested. (optional) (default to 1)
let perPage: number; //The number of items to return per page. (optional) (default to 20000)
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
| **recordId** | [**string**] | The ID of the record with which the audio file is associated. | (optional) defaults to undefined|
| **formId** | [**string**] | The ID of the form with which the audio file is associated. Leaving this blank will query against all of your audio files. | (optional) defaults to undefined|
| **newestFirst** | [**boolean**] | If present, audio files will be sorted by updated_at date. | (optional) defaults to undefined|
| **processed** | [**boolean**] | Filter for audio files that have been completely processed. | (optional) defaults to undefined|
| **stored** | [**boolean**] | Filter for audio files that have been completely stored. | (optional) defaults to undefined|
| **uploaded** | [**boolean**] | Filter for audio files that have been completely uploaded. | (optional) defaults to undefined|
| **page** | [**number**] | The page number requested. | (optional) defaults to 1|
| **perPage** | [**number**] | The number of items to return per page. | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**AudiosResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetAllTracksGeojson**
> object audioGetAllTracksGeojson()

Get GPS tracks for audio files in GeoJSON format.

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetAllTracksGpx**
> object audioGetAllTracksGpx()

Get GPS tracks for audio files in GPX format.

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetAllTracksJson**
> object audioGetAllTracksJson()

Get GPS tracks for audio files in JSON format.

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetAllTracksKml**
> object audioGetAllTracksKml()

Get GPS tracks for audio files in KML format.

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetOriginalFile**
> File audioGetOriginalFile()

Download the original audio file.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let audioId: string; //The unique identifier of the audio file. (default to undefined)

const { status, data } = await apiInstance.audioGetOriginalFile(
    audioId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **audioId** | [**string**] | The unique identifier of the audio file. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: audio/mp4, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetSingleMetadata**
> SingleAudioResponse audioGetSingleMetadata()

Retrieve metadata for a single audio file.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let audioId: string; //The unique identifier of the audio file. (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.audioGetSingleMetadata(
    audioId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **audioId** | [**string**] | The unique identifier of the audio file. | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**SingleAudioResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetSingleTrackGeojson**
> object audioGetSingleTrackGeojson()

Get the GPS track for an audio file in GeoJSON format.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let audioId: string; //The unique identifier of the audio file. (default to undefined)
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
| **audioId** | [**string**] | The unique identifier of the audio file. | defaults to undefined|
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetSingleTrackGpx**
> object audioGetSingleTrackGpx()

Get the GPS track for an audio file in GPX format.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let audioId: string; //The unique identifier of the audio file. (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.audioGetSingleTrackGpx(
    audioId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **audioId** | [**string**] | The unique identifier of the audio file. | defaults to undefined|
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetSingleTrackJson**
> object audioGetSingleTrackJson()

Get the GPS track for an audio file in JSON format.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let audioId: string; //The unique identifier of the audio file. (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.audioGetSingleTrackJson(
    audioId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **audioId** | [**string**] | The unique identifier of the audio file. | defaults to undefined|
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioGetSingleTrackKml**
> object audioGetSingleTrackKml()

Get the GPS track for an audio file in KML format.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let audioId: string; //The unique identifier of the audio file. (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.audioGetSingleTrackKml(
    audioId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **audioId** | [**string**] | The unique identifier of the audio file. | defaults to undefined|
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **audioUpload**
> object audioUpload()

Upload audio with optional track file.

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
let user: string; //Filter by user responsible for the logged changes. This parameter must be the Fulcrum ID for the user in question, which can be obtained from the membership API. (optional) (default to undefined)
let updatedSince: string; //Return log entries since the given unix timestamp. (optional) (default to undefined)
let updatedBefore: string; //Return log entries before the given unix timestamp. (optional) (default to undefined)
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
| **user** | [**string**] | Filter by user responsible for the logged changes. This parameter must be the Fulcrum ID for the user in question, which can be obtained from the membership API. | (optional) defaults to undefined|
| **updatedSince** | [**string**] | Return log entries since the given unix timestamp. | (optional) defaults to undefined|
| **updatedBefore** | [**string**] | Return log entries before the given unix timestamp. | (optional) defaults to undefined|
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorizationsCreate**
> object authorizationsCreate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AuthorizationRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let authorizationRequest: AuthorizationRequest; // (optional)

const { status, data } = await apiInstance.authorizationsCreate(
    accept,
    contentType,
    authorizationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authorizationRequest** | **AuthorizationRequest**|  | |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authorizationsUpdate**
> object authorizationsUpdate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AuthorizationRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let authorizationId: string; //Authorization ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let authorizationRequest: AuthorizationRequest; // (optional)

const { status, data } = await apiInstance.authorizationsUpdate(
    authorizationId,
    accept,
    contentType,
    authorizationRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **authorizationRequest** | **AuthorizationRequest**|  | |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changesetsCreate**
> object changesetsCreate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ChangesetCreateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let changesetCreateRequest: ChangesetCreateRequest; // (optional)

const { status, data } = await apiInstance.changesetsCreate(
    accept,
    contentType,
    changesetCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changesetCreateRequest** | **ChangesetCreateRequest**|  | |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **changesetsUpdate**
> object changesetsUpdate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ChangesetRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let changesetId: string; //Changeset ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let changesetRequest: ChangesetRequest; // (optional)

const { status, data } = await apiInstance.changesetsUpdate(
    changesetId,
    accept,
    contentType,
    changesetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changesetRequest** | **ChangesetRequest**|  | |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **choiceListsCreate**
> object choiceListsCreate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ChoiceListRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let choiceListRequest: ChoiceListRequest; // (optional)

const { status, data } = await apiInstance.choiceListsCreate(
    accept,
    contentType,
    choiceListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **choiceListRequest** | **ChoiceListRequest**|  | |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**201** | Created |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **choiceListsUpdate**
> object choiceListsUpdate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ChoiceListRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let choiceListId: string; //Choice List ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let choiceListRequest: ChoiceListRequest; // (optional)

const { status, data } = await apiInstance.choiceListsUpdate(
    choiceListId,
    accept,
    contentType,
    choiceListRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **choiceListRequest** | **ChoiceListRequest**|  | |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **classificationSetsCreate**
> object classificationSetsCreate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ClassificationSetRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let classificationSetRequest: ClassificationSetRequest; // (optional)

const { status, data } = await apiInstance.classificationSetsCreate(
    accept,
    contentType,
    classificationSetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **classificationSetRequest** | **ClassificationSetRequest**|  | |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**201** | Created |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **classificationSetsUpdate**
> object classificationSetsUpdate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ClassificationSetRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let classificationSetId: string; //Classification Set ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let classificationSetRequest: ClassificationSetRequest; // (optional)

const { status, data } = await apiInstance.classificationSetsUpdate(
    classificationSetId,
    accept,
    contentType,
    classificationSetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **classificationSetRequest** | **ClassificationSetRequest**|  | |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **copyAllAttachments**
> AttachmentCopyAllResponse copyAllAttachments(attachmentCopyAllRequest)

Copy all reference files from one form to another. Limits: 100 reference files per form, 1GB total per form.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AttachmentCopyAllRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let attachmentCopyAllRequest: AttachmentCopyAllRequest; //
let xApitoken: string; //API Token. Required to authenticate the request. (optional) (default to undefined)

const { status, data } = await apiInstance.copyAllAttachments(
    attachmentCopyAllRequest,
    xApitoken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachmentCopyAllRequest** | **AttachmentCopyAllRequest**|  | |
| **xApitoken** | [**string**] | API Token. Required to authenticate the request. | (optional) defaults to undefined|


### Return type

**AttachmentCopyAllResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | 400 |  -  |
|**401** | 401 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createAttachment**
> CreateAttachment200Response createAttachment()

There is only one parameter that is required for creating an attachment: `owners`. You must specify at least one owner of type `record` or `form`. If you create a `record` attachment you can optionally include a `name` and `file_size`. The name will be the name of the file shown in the record information. The file_size is only used for verifying that uploading this attachment will not exceed your current storage limit. If no file_size is provided the attachment may be rejected once it has been uploaded. The response will provide the `url` to upload (PUT) the file to.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AttachmentCreateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let xApitoken: string; //API Token. Required to authenticate the request. (optional) (default to undefined)
let attachmentCreateRequest: AttachmentCreateRequest; // (optional)

const { status, data } = await apiInstance.createAttachment(
    xApitoken,
    attachmentCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachmentCreateRequest** | **AttachmentCreateRequest**|  | |
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
    BatchCreateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let batchCreateRequest: BatchCreateRequest; // (optional)

const { status, data } = await apiInstance.createBatch(
    batchCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **batchCreateRequest** | **BatchCreateRequest**|  | |


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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createGroup**
> CreateGroup201Response createGroup()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    GroupCreateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let groupCreateRequest: GroupCreateRequest; // (optional)

const { status, data } = await apiInstance.createGroup(
    accept,
    contentType,
    groupCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupCreateRequest** | **GroupCreateRequest**|  | |
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

# **createMembership**
> object createMembership()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    MembershipCreateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let membershipCreateRequest: MembershipCreateRequest; // (optional)

const { status, data } = await apiInstance.createMembership(
    accept,
    contentType,
    membershipCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **membershipCreateRequest** | **MembershipCreateRequest**|  | |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createReportTemplate**
> ReportTemplateResponse createReportTemplate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ReportTemplateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let reportTemplateRequest: ReportTemplateRequest; // (optional)

const { status, data } = await apiInstance.createReportTemplate(
    reportTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportTemplateRequest** | **ReportTemplateRequest**|  | |


### Return type

**ReportTemplateResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**400** | Bad Request |  -  |
|**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createWorkflow**
> object createWorkflow()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    WorkflowCreateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let workflowCreateRequest: WorkflowCreateRequest; // (optional)

const { status, data } = await apiInstance.createWorkflow(
    accept,
    contentType,
    workflowCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowCreateRequest** | **WorkflowCreateRequest**|  | |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**201** | Created |  -  |
|**401** | 401 |  -  |
|**200** | OK |  -  |

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
|**204** | No Content |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteMembership**
> object deleteMembership()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    MembershipDeleteRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let membershipId: string; //The ID of the member (default to undefined)
let membershipDeleteRequest: MembershipDeleteRequest; // (optional)

const { status, data } = await apiInstance.deleteMembership(
    membershipId,
    membershipDeleteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **membershipDeleteRequest** | **MembershipDeleteRequest**|  | |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteReportTemplate**
> ReportTemplateResponse deleteReportTemplate()



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

**ReportTemplateResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **finalizeAttachment**
> object finalizeAttachment()

The finalize endpoint is a required step for Form attachments. Use this endpoint to tell Fulcrum that your attachment has been uploaded.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    AttachmentTrackRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let xApitoken: string; //API Token. Required to authenticate the request. (optional) (default to undefined)
let attachmentTrackRequest: AttachmentTrackRequest; // (optional)

const { status, data } = await apiInstance.finalizeAttachment(
    xApitoken,
    attachmentTrackRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachmentTrackRequest** | **AttachmentTrackRequest**|  | |
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
|**201** | Created |  -  |
|**401** | 401 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **formsCreate**
> FormResponse formsCreate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    FormRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let formRequest: FormRequest; // (optional)

const { status, data } = await apiInstance.formsCreate(
    accept,
    contentType,
    formRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formRequest** | **FormRequest**|  | |
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**FormResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Created |  -  |
|**422** | Unprocessable Entity — validation errors (e.g. missing required element properties like disabled, hidden, required). Note: some element validation failures (e.g. YesNoField missing positive/negative) may incorrectly return 500 instead of 422. |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
let status: 'active' | 'inactive' | 'all'; //The status (active/inactive) of the forms to return. (optional) (default to 'active')

const { status, data } = await apiInstance.formsGetAll(
    schema,
    page,
    perPage,
    accept,
    type,
    status
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
| **status** | [**&#39;active&#39; | &#39;inactive&#39; | &#39;all&#39;**]**Array<&#39;active&#39; &#124; &#39;inactive&#39; &#124; &#39;all&#39;>** | The status (active/inactive) of the forms to return. | (optional) defaults to 'active'|


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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **formsUpdate**
> FormResponse formsUpdate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    FormRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let formId: string; //Form ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let formRequest: FormRequest; // (optional)

const { status, data } = await apiInstance.formsUpdate(
    formId,
    accept,
    contentType,
    formRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **formRequest** | **FormRequest**|  | |
| **formId** | [**string**] | Form ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**FormResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**422** | Unprocessable Entity — validation errors |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllAttachments**
> AttachmentsResponse getAllAttachments()

Retrieve a list of attachments.

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
let sort: 'name' | 'file_size' | 'uploaded_at'; //The field to sort results by. (optional) (default to undefined)
let sortDirection: 'asc' | 'desc'; //The sort direction(asc, desc). Default is asc. (optional) (default to 'asc')
let xApitoken: string; //API Token. Required to authenticate the request. (optional) (default to undefined)

const { status, data } = await apiInstance.getAllAttachments(
    recordId,
    formId,
    ownerType,
    sort,
    sortDirection,
    xApitoken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordId** | [**string**] | The ID of the record with which the attachment is associated. This is required when listing record attachments. | (optional) defaults to undefined|
| **formId** | [**string**] | The ID of the form with which the attachment is associated. This parameter will allow you to get all reference files within a form, NOT all of the record attachments in a form | (optional) defaults to undefined|
| **ownerType** | [**string**] | The type of attachment to query for. Must be either &#x60;form&#x60; or &#x60;record&#x60;. | (optional) defaults to 'form'|
| **sort** | [**&#39;name&#39; | &#39;file_size&#39; | &#39;uploaded_at&#39;**]**Array<&#39;name&#39; &#124; &#39;file_size&#39; &#124; &#39;uploaded_at&#39;>** | The field to sort results by. | (optional) defaults to undefined|
| **sortDirection** | [**&#39;asc&#39; | &#39;desc&#39;**]**Array<&#39;asc&#39; &#124; &#39;desc&#39;>** | The sort direction(asc, desc). Default is asc. | (optional) defaults to 'asc'|
| **xApitoken** | [**string**] | API Token. Required to authenticate the request. | (optional) defaults to undefined|


### Return type

**AttachmentsResponse**

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllReportTemplates**
> ReportTemplatesResponse getAllReportTemplates()



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

**ReportTemplatesResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSingleAttachment**
> Attachment getSingleAttachment()

Retrieve metadata for a single attachment.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let attachmentId: string; //The unique identifier of the attachment. (default to undefined)
let xApitoken: string; //API Token. Required to authenticate the request. (optional) (default to undefined)

const { status, data } = await apiInstance.getSingleAttachment(
    attachmentId,
    xApitoken
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachmentId** | [**string**] | The unique identifier of the attachment. | defaults to undefined|
| **xApitoken** | [**string**] | API Token. Required to authenticate the request. | (optional) defaults to undefined|


### Return type

**Attachment**

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getSingleReportTemplate**
> ReportTemplateResponse getSingleReportTemplate()



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

**ReportTemplateResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **layersCreate**
> LayerResponse layersCreate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    LayerRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let layerRequest: LayerRequest; // (optional)

const { status, data } = await apiInstance.layersCreate(
    accept,
    contentType,
    layerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **layerRequest** | **LayerRequest**|  | |
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**LayerResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **layersGetAll**
> LayerListResponse layersGetAll()



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

**LayerListResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **layersGetSingle**
> LayerResponse layersGetSingle()



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

**LayerResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **layersUpdate**
> LayerResponse layersUpdate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    LayerRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let layerId: string; //Layer ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let layerRequest: LayerRequest; // (optional)

const { status, data } = await apiInstance.layersUpdate(
    layerId,
    accept,
    contentType,
    layerRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **layerRequest** | **LayerRequest**|  | |
| **layerId** | [**string**] | Layer ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**LayerResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **membershipsChangePermissions**
> object membershipsChangePermissions()

Add or remove membership permissions from layers, forms, or projects.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    PermissionChangeRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let permissionChangeRequest: PermissionChangeRequest; // (optional)

const { status, data } = await apiInstance.membershipsChangePermissions(
    accept,
    contentType,
    permissionChangeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **permissionChangeRequest** | **PermissionChangeRequest**|  | |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **photosGetAllMetadata**
> PhotosResponse photosGetAllMetadata()

Retrieve metadata for a list of photos.

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
let processed: boolean; //Filter for photos that have been completely processed. (optional) (default to undefined)
let stored: boolean; //Filter for photos that have been completely stored. (optional) (default to undefined)
let uploaded: boolean; //Filter for photos that have been completely uploaded. (optional) (default to undefined)
let page: number; //The page number requested. (optional) (default to 1)
let perPage: number; //The number of items to return per page. (optional) (default to 20000)
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
| **processed** | [**boolean**] | Filter for photos that have been completely processed. | (optional) defaults to undefined|
| **stored** | [**boolean**] | Filter for photos that have been completely stored. | (optional) defaults to undefined|
| **uploaded** | [**boolean**] | Filter for photos that have been completely uploaded. | (optional) defaults to undefined|
| **page** | [**number**] | The page number requested. | (optional) defaults to 1|
| **perPage** | [**number**] | The number of items to return per page. | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**PhotosResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **photosGetSingleFile**
> File photosGetSingleFile()

Download the original photo file.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let photoId: string; //The unique identifier of the photo. (default to undefined)

const { status, data } = await apiInstance.photosGetSingleFile(
    photoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **photoId** | [**string**] | The unique identifier of the photo. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **photosGetSingleMetadata**
> SinglePhotoResponse photosGetSingleMetadata()

Retrieve metadata for a single photo.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let photoId: string; //The unique identifier of the photo. (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.photosGetSingleMetadata(
    photoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **photoId** | [**string**] | The unique identifier of the photo. | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**SinglePhotoResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **photosLargeFile**
> File photosLargeFile()

Download the large variant of a photo.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let photoId: string; //The unique identifier of the photo. (default to undefined)

const { status, data } = await apiInstance.photosLargeFile(
    photoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **photoId** | [**string**] | The unique identifier of the photo. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **photosLargeMetadata**
> object photosLargeMetadata()

Retrieve metadata for a photo\'s large variant.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let photoId: string; //The unique identifier of the photo. (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.photosLargeMetadata(
    photoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **photoId** | [**string**] | The unique identifier of the photo. | defaults to undefined|
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **photosThumbnailFile**
> File photosThumbnailFile()

Download the thumbnail variant of a photo.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let photoId: string; //The unique identifier of the photo. (default to undefined)

const { status, data } = await apiInstance.photosThumbnailFile(
    photoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **photoId** | [**string**] | The unique identifier of the photo. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **photosThumbnailMetadata**
> object photosThumbnailMetadata()

Retrieve metadata for a photo\'s thumbnail variant.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let photoId: string; //The unique identifier of the photo. (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.photosThumbnailMetadata(
    photoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **photoId** | [**string**] | The unique identifier of the photo. | defaults to undefined|
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **photosUpload**
> object photosUpload()

Upload a photo file to associate with a record.

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsCreate**
> object projectsCreate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let projectRequest: ProjectRequest; // (optional)

const { status, data } = await apiInstance.projectsCreate(
    accept,
    contentType,
    projectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectRequest** | **ProjectRequest**|  | |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**201** | Created |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**204** | No Content |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **projectsUpdate**
> object projectsUpdate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ProjectRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let projectId: string; //Project ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let projectRequest: ProjectRequest; // (optional)

const { status, data } = await apiInstance.projectsUpdate(
    projectId,
    accept,
    contentType,
    projectRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **projectRequest** | **ProjectRequest**|  | |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queryGet**
> object queryGet()

Execute a Query API request using HTTP GET. Provide a SQL like query to query against your organization\'s data.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let q: string; //The SQL query to execute. (default to undefined)
let format: string; //The format of the results returned by the query. Options include `csv`, `json`, `geojson`, `postgres`. (optional) (default to 'csv')
let headers: boolean; //Include headers for csv format? (optional) (default to true)
let metadata: boolean; //Include column metadata for `json` format? (optional) (default to false)
let arrays: boolean; //Return row arrays instead of objects for `json` format? (optional) (default to false)
let tableName: string; //Table name for `postgres` format. Defaults to query. (optional) (default to undefined)
let sortColumn: string; //The name of the column used to sort on. (optional) (default to undefined)
let sortDirection: string; //The sort direction (asc, desc). (optional) (default to undefined)
let page: number; //The page number requested. (optional) (default to 1)
let perPage: number; //The number of items to return per page. (optional) (default to 20000)
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
| **q** | [**string**] | The SQL query to execute. | defaults to undefined|
| **format** | [**string**] | The format of the results returned by the query. Options include &#x60;csv&#x60;, &#x60;json&#x60;, &#x60;geojson&#x60;, &#x60;postgres&#x60;. | (optional) defaults to 'csv'|
| **headers** | [**boolean**] | Include headers for csv format? | (optional) defaults to true|
| **metadata** | [**boolean**] | Include column metadata for &#x60;json&#x60; format? | (optional) defaults to false|
| **arrays** | [**boolean**] | Return row arrays instead of objects for &#x60;json&#x60; format? | (optional) defaults to false|
| **tableName** | [**string**] | Table name for &#x60;postgres&#x60; format. Defaults to query. | (optional) defaults to undefined|
| **sortColumn** | [**string**] | The name of the column used to sort on. | (optional) defaults to undefined|
| **sortDirection** | [**string**] | The sort direction (asc, desc). | (optional) defaults to undefined|
| **page** | [**number**] | The page number requested. | (optional) defaults to 1|
| **perPage** | [**number**] | The number of items to return per page. | (optional) defaults to 20000|
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **queryPost**
> object queryPost()

Execute a Query API request using HTTP POST. Provide a SQL like query to query against your organization\'s data.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    QueryRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let page: number; //The page number requested. (optional) (default to 1)
let perPage: number; //The number of items to return per page. (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')
let queryRequest: QueryRequest; // (optional)

const { status, data } = await apiInstance.queryPost(
    page,
    perPage,
    accept,
    queryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **queryRequest** | **QueryRequest**|  | |
| **page** | [**number**] | The page number requested. | (optional) defaults to 1|
| **perPage** | [**number**] | The number of items to return per page. | (optional) defaults to 20000|
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recordsCreate**
> SingleRecordResponse recordsCreate()

Create a new record in the specified form using the provided form values, location information, and any associated metadata.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RecordRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let xSkipWorkflows: boolean; //Skips all app workflows (optional) (default to false)
let xSkipWebhooks: boolean; //Skips all app webhooks (optional) (default to false)
let recordRequest: RecordRequest; // (optional)

const { status, data } = await apiInstance.recordsCreate(
    accept,
    contentType,
    xSkipWorkflows,
    xSkipWebhooks,
    recordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordRequest** | **RecordRequest**|  | |
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|
| **xSkipWorkflows** | [**boolean**] | Skips all app workflows | (optional) defaults to false|
| **xSkipWebhooks** | [**boolean**] | Skips all app webhooks | (optional) defaults to false|


### Return type

**SingleRecordResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recordsDelete**
> SingleRecordResponse recordsDelete()

Delete a record from your organization.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordId: string; //The unique identifier of the record to delete. (default to undefined)
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
| **recordId** | [**string**] | The unique identifier of the record to delete. | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **xSkipWorkflows** | [**boolean**] | Skips all app workflows | (optional) defaults to false|
| **xSkipWebhooks** | [**boolean**] | Skips all app webhooks | (optional) defaults to false|


### Return type

**SingleRecordResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recordsGetAll**
> RecordsResponse recordsGetAll()

Get a list of records from your organization that can be filtered by dimensions such as form, project, changeset, bounding box, and date ranges.

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
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recordsGetAllHistory**
> RecordHistoryResponse recordsGetAllHistory()

Retrieve historical record data from your organization. This endpoint is useful for accessing records from a specific changeset or retrieving records that belonged to a deleted form.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let changesetId: string; //Filters records to only those associated with the specified changeset ID. (optional) (default to undefined)
let deletedFormId: string; //Filters records to only those that belonged to a form that has been deleted. Use this to retrieve data from removed forms. (optional) (default to undefined)

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
| **changesetId** | [**string**] | Filters records to only those associated with the specified changeset ID. | (optional) defaults to undefined|
| **deletedFormId** | [**string**] | Filters records to only those that belonged to a form that has been deleted. Use this to retrieve data from removed forms. | (optional) defaults to undefined|


### Return type

**RecordHistoryResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recordsGetHistory**
> RecordHistoryResponse recordsGetHistory()

Retrieve the complete version history of a record.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordId: string; //The unique identifier of the record whose history you want to retrieve. (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.recordsGetHistory(
    recordId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordId** | [**string**] | The unique identifier of the record whose history you want to retrieve. | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**RecordHistoryResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recordsGetSingle**
> SingleRecordResponse recordsGetSingle()

Retrieve detailed information about a specific record by its ID. This includes all form field values, location data, timestamps, and associated metadata.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordId: string; //The unique identifier of the record to retrieve. (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.recordsGetSingle(
    recordId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordId** | [**string**] | The unique identifier of the record to retrieve. | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**SingleRecordResponse**

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
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recordsPartialUpdate**
> SingleRecordResponse recordsPartialUpdate()

Update specific fields of an existing record without requiring the complete record object. Only the fields included in the request body will be modified, while all other fields remain unchanged. This is useful for updating individual field values or metadata.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RecordPatchRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordId: string; //Record ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let xSkipWorkflows: boolean; //Skips all app workflows (optional) (default to false)
let xSkipWebhooks: boolean; //Skips all app webhooks (optional) (default to false)
let recordPatchRequest: RecordPatchRequest; // (optional)

const { status, data } = await apiInstance.recordsPartialUpdate(
    recordId,
    accept,
    contentType,
    xSkipWorkflows,
    xSkipWebhooks,
    recordPatchRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordPatchRequest** | **RecordPatchRequest**|  | |
| **recordId** | [**string**] | Record ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|
| **contentType** | [**string**] |  | (optional) defaults to 'application/json'|
| **xSkipWorkflows** | [**boolean**] | Skips all app workflows | (optional) defaults to false|
| **xSkipWebhooks** | [**boolean**] | Skips all app webhooks | (optional) defaults to false|


### Return type

**SingleRecordResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recordsUpdate**
> object recordsUpdate()

Update a record with a provided record object. The record object is expected to be the complete representation of the record. Any fields not included are assumed null.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    RecordRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordId: string; //Record ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let xSkipWorkflows: boolean; //Skips all app workflows (optional) (default to false)
let xSkipWebhooks: boolean; //Skips all app webhooks (optional) (default to false)
let recordRequest: RecordRequest; // (optional)

const { status, data } = await apiInstance.recordsUpdate(
    recordId,
    accept,
    contentType,
    xSkipWorkflows,
    xSkipWebhooks,
    recordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recordRequest** | **RecordRequest**|  | |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reportsCreate**
> ReportResponse reportsCreate(reportRequest)

Generate a new report for a specific record, optionally using a report template.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ReportRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let reportRequest: ReportRequest; //

const { status, data } = await apiInstance.reportsCreate(
    reportRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportRequest** | **ReportRequest**|  | |


### Return type

**ReportResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Report created successfully |  -  |
|**400** | Bad Request |  -  |
|**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **reportsFile**
> File reportsFile()

Download the generated PDF report file.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let reportId: string; //The unique identifier of the report. (default to undefined)
let accept: string; // (optional) (default to 'application/pdf')

const { status, data } = await apiInstance.reportsFile(
    reportId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportId** | [**string**] | The unique identifier of the report. | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/pdf'|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**404** | Not Found |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signaturesGetAll**
> SignaturesResponse signaturesGetAll()

Retrieve metadata for a list of signatures.

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
let processed: boolean; //Filter for signatures that have been completely processed. (optional) (default to undefined)
let stored: boolean; //Filter for signatures that have been completely stored. (optional) (default to undefined)
let uploaded: boolean; //Filter for signatures that have been completely uploaded. (optional) (default to undefined)
let page: number; //The page number requested. (optional) (default to 1)
let perPage: number; //The number of items to return per page. (optional) (default to 20000)
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
| **processed** | [**boolean**] | Filter for signatures that have been completely processed. | (optional) defaults to undefined|
| **stored** | [**boolean**] | Filter for signatures that have been completely stored. | (optional) defaults to undefined|
| **uploaded** | [**boolean**] | Filter for signatures that have been completely uploaded. | (optional) defaults to undefined|
| **page** | [**number**] | The page number requested. | (optional) defaults to 1|
| **perPage** | [**number**] | The number of items to return per page. | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**SignaturesResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signaturesGetSingleFile**
> File signaturesGetSingleFile()

Download the original signature file.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let signatureId: string; //The unique identifier of the signature. (default to undefined)

const { status, data } = await apiInstance.signaturesGetSingleFile(
    signatureId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signatureId** | [**string**] | The unique identifier of the signature. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signaturesGetSingleMetadata**
> SingleSignatureResponse signaturesGetSingleMetadata()

Retrieve metadata for a single signature.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let signatureId: string; //The unique identifier of the signature. (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.signaturesGetSingleMetadata(
    signatureId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signatureId** | [**string**] | The unique identifier of the signature. | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**SingleSignatureResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signaturesGetThumbnailFile**
> File signaturesGetThumbnailFile()

Download the thumbnail variant of a signature.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let signatureId: string; //The unique identifier of the signature. (default to undefined)

const { status, data } = await apiInstance.signaturesGetThumbnailFile(
    signatureId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signatureId** | [**string**] | The unique identifier of the signature. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/png, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signaturesGetThumbnailMetadata**
> SingleSignatureResponse signaturesGetThumbnailMetadata()

Retrieve metadata for a signature\'s thumbnail variant.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let signatureId: string; //The unique identifier of the signature. (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.signaturesGetThumbnailMetadata(
    signatureId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **signatureId** | [**string**] | The unique identifier of the signature. | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**SingleSignatureResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **signaturesUpload**
> SingleSignatureResponse signaturesUpload()

Upload a signature file to associate with a record.

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

**SingleSignatureResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sketchesGetAllMetadata**
> SketchesResponse sketchesGetAllMetadata()

Retrieve metadata for a list of sketches.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let recordId: string; //The ID of the record with which the sketch is associated. (optional) (default to undefined)
let formId: string; //The ID of the form with which the sketch is associated. Leaving this blank will query against all of your sketches. (optional) (default to undefined)
let newestFirst: boolean; //If present, sketches will be sorted by updated_at date. (optional) (default to undefined)
let processed: boolean; //Sketch has been completely processed. (optional) (default to undefined)
let stored: boolean; //Sketch has been completely stored. (optional) (default to undefined)
let uploaded: boolean; //Sketch has been completely uploaded. (optional) (default to undefined)
let page: number; //The page number requested (optional) (default to 1)
let perPage: number; //Number of items per page (optional) (default to 20000)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.sketchesGetAllMetadata(
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
| **recordId** | [**string**] | The ID of the record with which the sketch is associated. | (optional) defaults to undefined|
| **formId** | [**string**] | The ID of the form with which the sketch is associated. Leaving this blank will query against all of your sketches. | (optional) defaults to undefined|
| **newestFirst** | [**boolean**] | If present, sketches will be sorted by updated_at date. | (optional) defaults to undefined|
| **processed** | [**boolean**] | Sketch has been completely processed. | (optional) defaults to undefined|
| **stored** | [**boolean**] | Sketch has been completely stored. | (optional) defaults to undefined|
| **uploaded** | [**boolean**] | Sketch has been completely uploaded. | (optional) defaults to undefined|
| **page** | [**number**] | The page number requested | (optional) defaults to 1|
| **perPage** | [**number**] | Number of items per page | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**SketchesResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sketchesGetSingleFile**
> File sketchesGetSingleFile()

Download the original sketch file.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let sketchId: string; //Sketch ID (default to undefined)

const { status, data } = await apiInstance.sketchesGetSingleFile(
    sketchId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sketchId** | [**string**] | Sketch ID | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sketchesGetSingleMetadata**
> SingleSketchResponse sketchesGetSingleMetadata()

Retrieve metadata for a single sketch.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let sketchId: string; //Sketch ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.sketchesGetSingleMetadata(
    sketchId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sketchId** | [**string**] | Sketch ID | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**SingleSketchResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sketchesLargeFile**
> File sketchesLargeFile()

Download the large variant of a sketch.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let sketchId: string; //Sketch ID (default to undefined)

const { status, data } = await apiInstance.sketchesLargeFile(
    sketchId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sketchId** | [**string**] | Sketch ID | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sketchesLargeMetadata**
> object sketchesLargeMetadata()

Retrieve metadata for a sketch\'s large variant.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let sketchId: string; //Sketch ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.sketchesLargeMetadata(
    sketchId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sketchId** | [**string**] | Sketch ID | defaults to undefined|
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sketchesThumbnailFile**
> File sketchesThumbnailFile()

Download the thumbnail variant of a sketch.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let sketchId: string; //Sketch ID (default to undefined)

const { status, data } = await apiInstance.sketchesThumbnailFile(
    sketchId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sketchId** | [**string**] | Sketch ID | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sketchesThumbnailMetadata**
> object sketchesThumbnailMetadata()

Retrieve metadata for a sketch\'s thumbnail variant.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let sketchId: string; //Sketch ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.sketchesThumbnailMetadata(
    sketchId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sketchId** | [**string**] | Sketch ID | defaults to undefined|
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sketchesUpload**
> object sketchesUpload()

Upload a sketch file to associate with a record.

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

const { status, data } = await apiInstance.sketchesUpload(
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **startBatch**
> object startBatch()

Start your pending batch.

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateGroupNameDescription**
> CreateGroup201Response updateGroupNameDescription()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    GroupUpdateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let groupId: string; //ID of the group (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let groupUpdateRequest: GroupUpdateRequest; // (optional)

const { status, data } = await apiInstance.updateGroupNameDescription(
    groupId,
    accept,
    contentType,
    groupUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupUpdateRequest** | **GroupUpdateRequest**|  | |
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
    GroupPermissionChangeRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let groupPermissionChangeRequest: GroupPermissionChangeRequest; // (optional)

const { status, data } = await apiInstance.updateGroupPermissions(
    accept,
    contentType,
    groupPermissionChangeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **groupPermissionChangeRequest** | **GroupPermissionChangeRequest**|  | |
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

# **updateMembership**
> object updateMembership()

You can use this to update parameters of a member, but this will not work if the member is apart of multiple organizations.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    MembershipUpdateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let membershipId: string; //The ID of the member (default to undefined)
let membershipUpdateRequest: MembershipUpdateRequest; // (optional)

const { status, data } = await apiInstance.updateMembership(
    membershipId,
    membershipUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **membershipUpdateRequest** | **MembershipUpdateRequest**|  | |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateReportTemplate**
> ReportTemplateResponse updateReportTemplate()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    ReportTemplateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let id: string; //The id of the report (default to undefined)
let reportTemplateRequest: ReportTemplateRequest; // (optional)

const { status, data } = await apiInstance.updateReportTemplate(
    id,
    reportTemplateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reportTemplateRequest** | **ReportTemplateRequest**|  | |
| **id** | [**string**] | The id of the report | defaults to undefined|


### Return type

**ReportTemplateResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |
|**422** | Unprocessable Entity – validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateWorkflow**
> object updateWorkflow()



### Example

```typescript
import {
    DefaultApi,
    Configuration,
    WorkflowUpdateRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let workflowId: string; //The ID of the workflow (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let workflowUpdateRequest: WorkflowUpdateRequest; // (optional)

const { status, data } = await apiInstance.updateWorkflow(
    workflowId,
    accept,
    contentType,
    workflowUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **workflowUpdateRequest** | **WorkflowUpdateRequest**|  | |
| **workflowId** | [**string**] | The ID of the workflow | defaults to undefined|
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetAll**
> VideosResponse videosGetAll()

Retrieve metadata for a list of videos.

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
let processed: boolean; //Filter for videos that have been completely processed. (optional) (default to undefined)
let stored: boolean; //Filter for videos that have been completely stored. (optional) (default to undefined)
let uploaded: boolean; //Filter for videos that have been completely uploaded. (optional) (default to undefined)
let page: number; //The page number requested. (optional) (default to 1)
let perPage: number; //The number of items to return per page. (optional) (default to 20000)
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
| **processed** | [**boolean**] | Filter for videos that have been completely processed. | (optional) defaults to undefined|
| **stored** | [**boolean**] | Filter for videos that have been completely stored. | (optional) defaults to undefined|
| **uploaded** | [**boolean**] | Filter for videos that have been completely uploaded. | (optional) defaults to undefined|
| **page** | [**number**] | The page number requested. | (optional) defaults to 1|
| **perPage** | [**number**] | The number of items to return per page. | (optional) defaults to 20000|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**VideosResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetAllTracksGeojson**
> object videosGetAllTracksGeojson()

Get GPS tracks for videos in GeoJSON format.

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetAllTracksGpx**
> object videosGetAllTracksGpx()

Get GPS tracks for videos in GPX format.

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetAllTracksKml**
> object videosGetAllTracksKml()

Get GPS tracks for videos in KML format.

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetMediumFile**
> File videosGetMediumFile()

Download a medium variant of the video.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //The unique identifier of the video. (default to undefined)

const { status, data } = await apiInstance.videosGetMediumFile(
    videoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | The unique identifier of the video. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: video/mp4, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetOriginalFile**
> File videosGetOriginalFile()

Download the original video file.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //The unique identifier of the video. (default to undefined)

const { status, data } = await apiInstance.videosGetOriginalFile(
    videoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | The unique identifier of the video. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: video/mp4, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetSingleMetadata**
> SingleVideoResponse videosGetSingleMetadata()

Retrieve metadata for a specific video.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //The unique identifier of the video. (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetSingleMetadata(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | The unique identifier of the video. | defaults to undefined|
| **accept** | [**string**] |  | (optional) defaults to 'application/json'|


### Return type

**SingleVideoResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetSingleTrackGeojson**
> object videosGetSingleTrackGeojson()

Get the GPS track for a video in GeoJSON format.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //The unique identifier of the video. (default to undefined)
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
| **videoId** | [**string**] | The unique identifier of the video. | defaults to undefined|
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetSingleTrackGpx**
> object videosGetSingleTrackGpx()

Get the GPS track for a video in GPX format.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //The unique identifier of the video. (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetSingleTrackGpx(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | The unique identifier of the video. | defaults to undefined|
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetSingleTrackJson**
> object videosGetSingleTrackJson()

Get the GPS track for a video in JSON format.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //The unique identifier of the video. (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetSingleTrackJson(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | The unique identifier of the video. | defaults to undefined|
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetSingleTrackKml**
> object videosGetSingleTrackKml()

Get the GPS track for a video in KML format.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //The unique identifier of the video. (default to undefined)
let accept: string; // (optional) (default to 'application/json')

const { status, data } = await apiInstance.videosGetSingleTrackKml(
    videoId,
    accept
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | The unique identifier of the video. | defaults to undefined|
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetSmallFile**
> File videosGetSmallFile()

Download the small variant of the video.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //The unique identifier of the video. (default to undefined)

const { status, data } = await apiInstance.videosGetSmallFile(
    videoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | The unique identifier of the video. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: video/mp4, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetThumbnailHuge**
> File videosGetThumbnailHuge()

Download a huge thumbnail variant for a video.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //The unique identifier of the video. (default to undefined)

const { status, data } = await apiInstance.videosGetThumbnailHuge(
    videoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | The unique identifier of the video. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetThumbnailHugeSquare**
> File videosGetThumbnailHugeSquare()

Download a huge square thumbnail variant for a video.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //The unique identifier of the video. (default to undefined)

const { status, data } = await apiInstance.videosGetThumbnailHugeSquare(
    videoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | The unique identifier of the video. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetThumbnailLarge**
> File videosGetThumbnailLarge()

Download a large thumbnail variant for a video.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //The unique identifier of the video. (default to undefined)

const { status, data } = await apiInstance.videosGetThumbnailLarge(
    videoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | The unique identifier of the video. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetThumbnailLargeSquare**
> File videosGetThumbnailLargeSquare()

Download a large square thumbnail variant for a video.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //The unique identifier of the video. (default to undefined)

const { status, data } = await apiInstance.videosGetThumbnailLargeSquare(
    videoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | The unique identifier of the video. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetThumbnailMedium**
> File videosGetThumbnailMedium()

Download a medium thumbnail variant for a video.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //The unique identifier of the video. (default to undefined)

const { status, data } = await apiInstance.videosGetThumbnailMedium(
    videoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | The unique identifier of the video. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetThumbnailMediumSquare**
> File videosGetThumbnailMediumSquare()

Download a medium square thumbnail variant for a video.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //The unique identifier of the video. (default to undefined)

const { status, data } = await apiInstance.videosGetThumbnailMediumSquare(
    videoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | The unique identifier of the video. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetThumbnailSmall**
> File videosGetThumbnailSmall()

Download the small thumbnail variant for a video.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //The unique identifier of the video. (default to undefined)

const { status, data } = await apiInstance.videosGetThumbnailSmall(
    videoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | The unique identifier of the video. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosGetThumbnailSmallSquare**
> File videosGetThumbnailSmallSquare()

Download a small square thumbnail variant for a video.

### Example

```typescript
import {
    DefaultApi,
    Configuration
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let videoId: string; //The unique identifier of the video. (default to undefined)

const { status, data } = await apiInstance.videosGetThumbnailSmallSquare(
    videoId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **videoId** | [**string**] | The unique identifier of the video. | defaults to undefined|


### Return type

**File**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: image/jpeg, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **videosUpload**
> SingleVideoResponse videosUpload()

Upload video to be associated with a record.

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

**SingleVideoResponse**

### Authorization

[ApiToken](../README.md#ApiToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooksCreate**
> WebhooksCreate201Response webhooksCreate()

Create a webhook.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    WebhookRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let webhookRequest: WebhookRequest; // (optional)

const { status, data } = await apiInstance.webhooksCreate(
    accept,
    contentType,
    webhookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookRequest** | **WebhookRequest**|  | |
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
|**406** | Not Acceptable |  -  |
|**422** | 422 |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooksDelete**
> object webhooksDelete()

Delete a webhook.

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
|**204** | No Content |  -  |
|**400** | 400 |  -  |
|**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooksGetAll**
> WebhooksGetAll200Response webhooksGetAll()

Get a list of webhooks.

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
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooksGetSingle**
> object webhooksGetSingle()

Get a webhook.

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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **webhooksUpdate**
> object webhooksUpdate()

Update a webhook.

### Example

```typescript
import {
    DefaultApi,
    Configuration,
    WebhookRequest
} from 'fulcrum-generated';

const configuration = new Configuration();
const apiInstance = new DefaultApi(configuration);

let webhookId: string; //Webhook ID (default to undefined)
let accept: string; // (optional) (default to 'application/json')
let contentType: string; // (optional) (default to 'application/json')
let webhookRequest: WebhookRequest; // (optional)

const { status, data } = await apiInstance.webhooksUpdate(
    webhookId,
    accept,
    contentType,
    webhookRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **webhookRequest** | **WebhookRequest**|  | |
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
|**200** | Success |  -  |
|**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

