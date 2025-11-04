## fulcrum-generated@3.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install fulcrum-generated@3.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://api.fulcrumapp.com/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**addBatchOperations**](docs/DefaultApi.md#addbatchoperations) | **POST** /v2/batch/{batch_id}/operations.json | Add batch operations
*DefaultApi* | [**audioGetAll**](docs/DefaultApi.md#audiogetall) | **GET** /v2/audio.json | Get All Audio
*DefaultApi* | [**audioGetAllTracksGeojson**](docs/DefaultApi.md#audiogetalltracksgeojson) | **GET** /v2/audio/tracks.geojson | Get GeoJSON Tracks for All Audio
*DefaultApi* | [**audioGetAllTracksGpx**](docs/DefaultApi.md#audiogetalltracksgpx) | **GET** /v2/audio/tracks.gpx | Get GPX Tracks for All Audio
*DefaultApi* | [**audioGetAllTracksJson**](docs/DefaultApi.md#audiogetalltracksjson) | **GET** /v2/audio/tracks.json | Get JSON Tracks for All Audio
*DefaultApi* | [**audioGetAllTracksKml**](docs/DefaultApi.md#audiogetalltrackskml) | **GET** /v2/audio/tracks.kml | Get KML Tracks for All Audio
*DefaultApi* | [**audioGetOriginalFile**](docs/DefaultApi.md#audiogetoriginalfile) | **GET** /v2/audio/{audio_id}.mp4 | Get Original Audio File
*DefaultApi* | [**audioGetSingleMetadata**](docs/DefaultApi.md#audiogetsinglemetadata) | **GET** /v2/audio/{audio_id}.json | Get Audio Metadata
*DefaultApi* | [**audioGetSingleTrackGeojson**](docs/DefaultApi.md#audiogetsingletrackgeojson) | **GET** /v2/audio/{audio_id}/track.geojson | Get GeoJSON Audio Track
*DefaultApi* | [**audioGetSingleTrackGpx**](docs/DefaultApi.md#audiogetsingletrackgpx) | **GET** /v2/audio/{audio_id}/track.gpx | Get GPX Audio Track
*DefaultApi* | [**audioGetSingleTrackJson**](docs/DefaultApi.md#audiogetsingletrackjson) | **GET** /v2/audio/{audio_id}/track.json | Get JSON Audio Track
*DefaultApi* | [**audioGetSingleTrackKml**](docs/DefaultApi.md#audiogetsingletrackkml) | **GET** /v2/audio/{audio_id}/track.kml | Get KML Audio Track
*DefaultApi* | [**audioUpload**](docs/DefaultApi.md#audioupload) | **POST** /v2/audio/upload.json | Upload Audio
*DefaultApi* | [**auditLogsGetAll**](docs/DefaultApi.md#auditlogsgetall) | **GET** /v2/audit_logs.json | Get All Audit Logs
*DefaultApi* | [**auditLogsGetSingle**](docs/DefaultApi.md#auditlogsgetsingle) | **GET** /v2/audit_logs/{audit_log_id}.json | Get Single Audit Log
*DefaultApi* | [**authorizationsCreate**](docs/DefaultApi.md#authorizationscreate) | **POST** /v2/authorizations.json | Create Authorization
*DefaultApi* | [**authorizationsDelete**](docs/DefaultApi.md#authorizationsdelete) | **DELETE** /v2/authorizations/{authorization_id}.json | Delete Authorization
*DefaultApi* | [**authorizationsGetAll**](docs/DefaultApi.md#authorizationsgetall) | **GET** /v2/authorizations.json | Get All Authorizations
*DefaultApi* | [**authorizationsGetSingle**](docs/DefaultApi.md#authorizationsgetsingle) | **GET** /v2/authorizations/{authorization_id}.json | Get Single Authorization
*DefaultApi* | [**authorizationsUpdate**](docs/DefaultApi.md#authorizationsupdate) | **PUT** /v2/authorizations/{authorization_id}.json | Update Authorization
*DefaultApi* | [**changesetsClose**](docs/DefaultApi.md#changesetsclose) | **PUT** /v2/changesets/{changeset_id}/close.json | Close Changeset
*DefaultApi* | [**changesetsCreate**](docs/DefaultApi.md#changesetscreate) | **POST** /v2/changesets.json | Create Changeset
*DefaultApi* | [**changesetsGetAll**](docs/DefaultApi.md#changesetsgetall) | **GET** /v2/changesets.json | Get All Changesets
*DefaultApi* | [**changesetsGetSingle**](docs/DefaultApi.md#changesetsgetsingle) | **GET** /v2/changesets/{changeset_id}.json | Get Single Changeset
*DefaultApi* | [**changesetsUpdate**](docs/DefaultApi.md#changesetsupdate) | **PUT** /v2/changesets/{changeset_id}.json | Update Changeset
*DefaultApi* | [**choiceListsCreate**](docs/DefaultApi.md#choicelistscreate) | **POST** /v2/choice_lists.json | Create Choice List
*DefaultApi* | [**choiceListsDelete**](docs/DefaultApi.md#choicelistsdelete) | **DELETE** /v2/choice_lists/{choice_list_id}.json | Delete Choice List
*DefaultApi* | [**choiceListsGetAll**](docs/DefaultApi.md#choicelistsgetall) | **GET** /v2/choice_lists.json | Get All Choice Lists
*DefaultApi* | [**choiceListsGetSingle**](docs/DefaultApi.md#choicelistsgetsingle) | **GET** /v2/choice_lists/{choice_list_id}.json | Get Single Choice List
*DefaultApi* | [**choiceListsUpdate**](docs/DefaultApi.md#choicelistsupdate) | **PUT** /v2/choice_lists/{choice_list_id}.json | Update Choice List
*DefaultApi* | [**classificationSetsCreate**](docs/DefaultApi.md#classificationsetscreate) | **POST** /v2/classification_sets.json | Create Classification Set
*DefaultApi* | [**classificationSetsDelete**](docs/DefaultApi.md#classificationsetsdelete) | **DELETE** /v2/classification_sets/{classification_set_id}.json | Delete Classification Set
*DefaultApi* | [**classificationSetsGetAll**](docs/DefaultApi.md#classificationsetsgetall) | **GET** /v2/classification_sets.json | Get All Classification Sets
*DefaultApi* | [**classificationSetsGetSingle**](docs/DefaultApi.md#classificationsetsgetsingle) | **GET** /v2/classification_sets/{classification_set_id}.json | Get Single Classification Set
*DefaultApi* | [**classificationSetsUpdate**](docs/DefaultApi.md#classificationsetsupdate) | **PUT** /v2/classification_sets/{classification_set_id}.json | Update Classification Set
*DefaultApi* | [**createAttachment**](docs/DefaultApi.md#createattachment) | **POST** /v2/attachments | Create Attachment
*DefaultApi* | [**createBatch**](docs/DefaultApi.md#createbatch) | **POST** /v2/batch.json | Create Batch to Bulk Delete Records
*DefaultApi* | [**createGroup**](docs/DefaultApi.md#creategroup) | **POST** /v2/groups.json | Create Group
*DefaultApi* | [**createMember**](docs/DefaultApi.md#createmember) | **POST** /v2/memberships.json | Create Member
*DefaultApi* | [**createReportTemplate**](docs/DefaultApi.md#createreporttemplate) | **POST** /v2/report_templates.json | Create Report Template
*DefaultApi* | [**createWorkflow**](docs/DefaultApi.md#createworkflow) | **POST** /v2/workflows.json | Create Workflow
*DefaultApi* | [**deleteAttachment**](docs/DefaultApi.md#deleteattachment) | **DELETE** /v2/attachments/{attachment_id} | Delete Attachment
*DefaultApi* | [**deleteGroup**](docs/DefaultApi.md#deletegroup) | **DELETE** /v2/groups/{group_id}.json | Delete Group
*DefaultApi* | [**deleteMember**](docs/DefaultApi.md#deletemember) | **DELETE** /v2/memberships/{membership_id}.json | Delete Member
*DefaultApi* | [**deleteReportTemplate**](docs/DefaultApi.md#deletereporttemplate) | **DELETE** /v2/report_templates/{id}.json | Delete Report Template
*DefaultApi* | [**deleteWorkflow**](docs/DefaultApi.md#deleteworkflow) | **DELETE** /v2/workflows/{workflow_id}.json | Delete Workflow
*DefaultApi* | [**finalizeAttachment**](docs/DefaultApi.md#finalizeattachment) | **POST** /v2/attachments/finalize | Finalize Attachment
*DefaultApi* | [**formsCreate**](docs/DefaultApi.md#formscreate) | **POST** /v2/forms.json | Create Form
*DefaultApi* | [**formsDelete**](docs/DefaultApi.md#formsdelete) | **DELETE** /v2/forms/{form_id}.json | Delete Form
*DefaultApi* | [**formsGetAll**](docs/DefaultApi.md#formsgetall) | **GET** /v2/forms.json | Get All Forms
*DefaultApi* | [**formsGetHistory**](docs/DefaultApi.md#formsgethistory) | **GET** /v2/forms/{form_id}/history.json | Get Form History
*DefaultApi* | [**formsGetSingle**](docs/DefaultApi.md#formsgetsingle) | **GET** /v2/forms/{form_id}.json | Get Single Form
*DefaultApi* | [**formsUpdate**](docs/DefaultApi.md#formsupdate) | **PUT** /v2/forms/{form_id}.json | Update Form
*DefaultApi* | [**getAllAttachments**](docs/DefaultApi.md#getallattachments) | **GET** /v2/attachments | Get All Attachments
*DefaultApi* | [**getAllBatches**](docs/DefaultApi.md#getallbatches) | **GET** /v2/batch.json | Get All Batches
*DefaultApi* | [**getAllGroups**](docs/DefaultApi.md#getallgroups) | **GET** /v2/groups.json | Get All Groups
*DefaultApi* | [**getAllMemberships**](docs/DefaultApi.md#getallmemberships) | **GET** /v2/permissions.json | Get Membership Permissions
*DefaultApi* | [**getAllReportTemplates**](docs/DefaultApi.md#getallreporttemplates) | **GET** /v2/report_templates.json | Get All Report Templates
*DefaultApi* | [**getAllWorkflows**](docs/DefaultApi.md#getallworkflows) | **GET** /v2/workflows.json | Get All Workflows
*DefaultApi* | [**getGroupResource**](docs/DefaultApi.md#getgroupresource) | **GET** /v2/groups/{group_id}/{resource}.json | Get Group Resource
*DefaultApi* | [**getSingleAttachment**](docs/DefaultApi.md#getsingleattachment) | **GET** /v2/attachments/{attachment_id} | Get Single Attachment
*DefaultApi* | [**getSingleBatch**](docs/DefaultApi.md#getsinglebatch) | **GET** /v2/batch/{batch_id}.json | Get Single Batch
*DefaultApi* | [**getSingleGroup**](docs/DefaultApi.md#getsinglegroup) | **GET** /v2/groups/{group_id}.json | Get Single Group
*DefaultApi* | [**getSingleReportTemplate**](docs/DefaultApi.md#getsinglereporttemplate) | **GET** /v2/report_templates/{id}.json | Get Single Report Template
*DefaultApi* | [**getSingleWorkflow**](docs/DefaultApi.md#getsingleworkflow) | **GET** /v2/workflows/{workflow_id}.json | Get Single Workflow
*DefaultApi* | [**layersCreate**](docs/DefaultApi.md#layerscreate) | **POST** /v2/layers.json | Create Layer
*DefaultApi* | [**layersDelete**](docs/DefaultApi.md#layersdelete) | **DELETE** /v2/layers/{layer_id}.json | Delete Layer
*DefaultApi* | [**layersGetAll**](docs/DefaultApi.md#layersgetall) | **GET** /v2/layers.json | Get All Layers
*DefaultApi* | [**layersGetSingle**](docs/DefaultApi.md#layersgetsingle) | **GET** /v2/layers/{layer_id}.json | Get Single Layer
*DefaultApi* | [**layersUpdate**](docs/DefaultApi.md#layersupdate) | **PUT** /v2/layers/{layer_id}.json | Update Layer
*DefaultApi* | [**membershipsChangePermissions**](docs/DefaultApi.md#membershipschangepermissions) | **POST** /v2/memberships/change_permissions.json | Change Permissions
*DefaultApi* | [**membershipsGetAll**](docs/DefaultApi.md#membershipsgetall) | **GET** /v2/memberships.json | Get All Memberships
*DefaultApi* | [**membershipsGetSingle**](docs/DefaultApi.md#membershipsgetsingle) | **GET** /v2/memberships/{membership_id}.json | Get Single Membership
*DefaultApi* | [**photosGetAllMetadata**](docs/DefaultApi.md#photosgetallmetadata) | **GET** /v2/photos.json | Get All Photos
*DefaultApi* | [**photosGetSingleFile**](docs/DefaultApi.md#photosgetsinglefile) | **GET** /v2/photos/{photo_id}.jpg | Get Single Photo File
*DefaultApi* | [**photosGetSingleMetadata**](docs/DefaultApi.md#photosgetsinglemetadata) | **GET** /v2/photos/{photo_id}.json | Get Single Photo Metadata
*DefaultApi* | [**photosLargeFile**](docs/DefaultApi.md#photoslargefile) | **GET** /v2/photos/{photo_id}/large.jpg | Photo Large File
*DefaultApi* | [**photosLargeMetadata**](docs/DefaultApi.md#photoslargemetadata) | **GET** /v2/photos/{photo_id}/large.json | Photo Large Metadata
*DefaultApi* | [**photosThumbnailFile**](docs/DefaultApi.md#photosthumbnailfile) | **GET** /v2/photos/{photo_id}/thumbnail.jpg | Photo Thumbnail File
*DefaultApi* | [**photosThumbnailMetadata**](docs/DefaultApi.md#photosthumbnailmetadata) | **GET** /v2/photos/{photo_id}/thumbnail.json | Photo Thumbnail Metadata
*DefaultApi* | [**photosUpload**](docs/DefaultApi.md#photosupload) | **POST** /v2/photos.json | Upload Photo
*DefaultApi* | [**projectsCreate**](docs/DefaultApi.md#projectscreate) | **POST** /v2/projects.json | Create Project
*DefaultApi* | [**projectsDelete**](docs/DefaultApi.md#projectsdelete) | **DELETE** /v2/projects/{project_id}.json | Delete Project
*DefaultApi* | [**projectsGetAll**](docs/DefaultApi.md#projectsgetall) | **GET** /v2/projects.json | Get All Projects
*DefaultApi* | [**projectsGetSingle**](docs/DefaultApi.md#projectsgetsingle) | **GET** /v2/projects/{project_id}.json | Get Single Project
*DefaultApi* | [**projectsUpdate**](docs/DefaultApi.md#projectsupdate) | **PUT** /v2/projects/{project_id}.json | Update Project
*DefaultApi* | [**queryGet**](docs/DefaultApi.md#queryget) | **GET** /v2/query | GET Query
*DefaultApi* | [**queryPost**](docs/DefaultApi.md#querypost) | **POST** /v2/query | POST Query
*DefaultApi* | [**recordsCreate**](docs/DefaultApi.md#recordscreate) | **POST** /v2/records.json | Create Record
*DefaultApi* | [**recordsDelete**](docs/DefaultApi.md#recordsdelete) | **DELETE** /v2/records/{record_id}.json | Delete Record
*DefaultApi* | [**recordsGetAll**](docs/DefaultApi.md#recordsgetall) | **GET** /v2/records.json | Get All Records
*DefaultApi* | [**recordsGetAllHistory**](docs/DefaultApi.md#recordsgetallhistory) | **GET** /v2/records/history.json | Get All Records History
*DefaultApi* | [**recordsGetHistory**](docs/DefaultApi.md#recordsgethistory) | **GET** /v2/records/{record_id}/history.json | Get Record History
*DefaultApi* | [**recordsGetSingle**](docs/DefaultApi.md#recordsgetsingle) | **GET** /v2/records/{record_id}.json | Get Single Record
*DefaultApi* | [**recordsUpdate**](docs/DefaultApi.md#recordsupdate) | **PUT** /v2/records/{record_id}.json | Update Record
*DefaultApi* | [**rolesGetAll**](docs/DefaultApi.md#rolesgetall) | **GET** /v2/roles.json | Get All Roles
*DefaultApi* | [**signaturesGetAll**](docs/DefaultApi.md#signaturesgetall) | **GET** /v2/signatures.json | Get All Signatures
*DefaultApi* | [**signaturesGetSingleFile**](docs/DefaultApi.md#signaturesgetsinglefile) | **GET** /v2/signatures/{signature_id}.png | Get Single Signature File
*DefaultApi* | [**signaturesGetSingleMetadata**](docs/DefaultApi.md#signaturesgetsinglemetadata) | **GET** /v2/signatures/{signature_id}.json | Get Single Signature Metadata
*DefaultApi* | [**signaturesGetThumbnailFile**](docs/DefaultApi.md#signaturesgetthumbnailfile) | **GET** /v2/signatures/{signature_id}/thumbnail.png | Signature Thumbnail File
*DefaultApi* | [**signaturesGetThumbnailMetadata**](docs/DefaultApi.md#signaturesgetthumbnailmetadata) | **GET** /v2/signatures/{signature_id}/thumbnail.json | Signature Thumbnail Metadata
*DefaultApi* | [**signaturesUpload**](docs/DefaultApi.md#signaturesupload) | **POST** /v2/signatures.json | Upload Signature
*DefaultApi* | [**startBatch**](docs/DefaultApi.md#startbatch) | **POST** /v2/batch/{batch_id}/start.json | Start Batch
*DefaultApi* | [**updateGroupNameDescription**](docs/DefaultApi.md#updategroupnamedescription) | **PUT** /v2/groups/{group_id}.json | Update Group Name / Description
*DefaultApi* | [**updateGroupPermissions**](docs/DefaultApi.md#updategrouppermissions) | **POST** /v2/groups/change_permissions.json | Update Group Permissions
*DefaultApi* | [**updateMember**](docs/DefaultApi.md#updatemember) | **PUT** /v2/memberships/{membership_id}.json | Update Member
*DefaultApi* | [**updateReportTemplate**](docs/DefaultApi.md#updatereporttemplate) | **PUT** /v2/report_templates/{id}.json | Update Report Template
*DefaultApi* | [**updateWorkflow**](docs/DefaultApi.md#updateworkflow) | **PUT** /v2/workflows/{workflow_id}.json | Update Workflow
*DefaultApi* | [**usersGetUser**](docs/DefaultApi.md#usersgetuser) | **GET** /v2/users.json | Get User Information
*DefaultApi* | [**videosGetAll**](docs/DefaultApi.md#videosgetall) | **GET** /v2/videos.json | Get All Videos
*DefaultApi* | [**videosGetAllTracksGeojson**](docs/DefaultApi.md#videosgetalltracksgeojson) | **GET** /v2/videos/tracks.geojson | Get GeoJSON Tracks for All Videos
*DefaultApi* | [**videosGetAllTracksGpx**](docs/DefaultApi.md#videosgetalltracksgpx) | **GET** /v2/videos/tracks.gpx | Get GPX Tracks for All Videos
*DefaultApi* | [**videosGetAllTracksKml**](docs/DefaultApi.md#videosgetalltrackskml) | **GET** /v2/videos/tracks.kml | Get KML Tracks for All Videos
*DefaultApi* | [**videosGetMediumFile**](docs/DefaultApi.md#videosgetmediumfile) | **GET** /v2/videos/{video_id}/medium.mp4 | Get Medium Video File
*DefaultApi* | [**videosGetOriginalFile**](docs/DefaultApi.md#videosgetoriginalfile) | **GET** /v2/videos/{video_id}.mp4 | Get Original Video File
*DefaultApi* | [**videosGetSingleMetadata**](docs/DefaultApi.md#videosgetsinglemetadata) | **GET** /v2/videos/{video_id}.json | Get Video Metadata
*DefaultApi* | [**videosGetSingleTrackGeojson**](docs/DefaultApi.md#videosgetsingletrackgeojson) | **GET** /v2/videos/{video_id}/track.geojson | Get GeoJSON Video Track
*DefaultApi* | [**videosGetSingleTrackGpx**](docs/DefaultApi.md#videosgetsingletrackgpx) | **GET** /v2/videos/{video_id}/track.gpx | Get GPX Video Track
*DefaultApi* | [**videosGetSingleTrackJson**](docs/DefaultApi.md#videosgetsingletrackjson) | **GET** /v2/videos/{video_id}/track.json | Get JSON Video Track
*DefaultApi* | [**videosGetSingleTrackKml**](docs/DefaultApi.md#videosgetsingletrackkml) | **GET** /v2/videos/{video_id}/track.kml | Get KML Video Track
*DefaultApi* | [**videosGetSmallFile**](docs/DefaultApi.md#videosgetsmallfile) | **GET** /v2/videos/{video_id}/small.mp4 | Get Small Video File
*DefaultApi* | [**videosGetThumbnailHuge**](docs/DefaultApi.md#videosgetthumbnailhuge) | **GET** /v2/videos/{video_id}/thumbnail_huge.jpg | Get Huge Video Thumbnail
*DefaultApi* | [**videosGetThumbnailHugeSquare**](docs/DefaultApi.md#videosgetthumbnailhugesquare) | **GET** /v2/videos/{video_id}/thumbnail_huge_square.jpg | Get Huge Square Video Thumbnail
*DefaultApi* | [**videosGetThumbnailLarge**](docs/DefaultApi.md#videosgetthumbnaillarge) | **GET** /v2/videos/{video_id}/thumbnail_large.jpg | Get Large Video Thumbnail
*DefaultApi* | [**videosGetThumbnailLargeSquare**](docs/DefaultApi.md#videosgetthumbnaillargesquare) | **GET** /v2/videos/{video_id}/thumbnail_large_square.jpg | Get Large Square Video Thumbnail
*DefaultApi* | [**videosGetThumbnailMedium**](docs/DefaultApi.md#videosgetthumbnailmedium) | **GET** /v2/videos/{video_id}/thumbnail_medium.jpg | Get Medium Video Thumbnail
*DefaultApi* | [**videosGetThumbnailMediumSquare**](docs/DefaultApi.md#videosgetthumbnailmediumsquare) | **GET** /v2/videos/{video_id}/thumbnail_medium_square.jpg | Get Medium Square Video Thumbnail
*DefaultApi* | [**videosGetThumbnailSmall**](docs/DefaultApi.md#videosgetthumbnailsmall) | **GET** /v2/videos/{video_id}/thumbnail_small.jpg | Get Small Video Thumbnail
*DefaultApi* | [**videosGetThumbnailSmallSquare**](docs/DefaultApi.md#videosgetthumbnailsmallsquare) | **GET** /v2/videos/{video_id}/thumbnail_small_square.jpg | Get Small Square Video Thumbnail
*DefaultApi* | [**videosUpload**](docs/DefaultApi.md#videosupload) | **POST** /v2/videos/upload.json | Upload Video
*DefaultApi* | [**webhooksCreate**](docs/DefaultApi.md#webhookscreate) | **POST** /v2/webhooks.json | Create Webhook
*DefaultApi* | [**webhooksDelete**](docs/DefaultApi.md#webhooksdelete) | **DELETE** /v2/webhooks/{webhook_id}.json | Delete Webhook
*DefaultApi* | [**webhooksGetAll**](docs/DefaultApi.md#webhooksgetall) | **GET** /v2/webhooks.json | Get All Webhooks
*DefaultApi* | [**webhooksGetSingle**](docs/DefaultApi.md#webhooksgetsingle) | **GET** /v2/webhooks/{webhook_id}.json | Get Single Webhook
*DefaultApi* | [**webhooksUpdate**](docs/DefaultApi.md#webhooksupdate) | **PUT** /v2/webhooks/{webhook_id}.json | Update Webhook


### Documentation For Models

 - [AddBatchOperationsRequest](docs/AddBatchOperationsRequest.md)
 - [AddBatchOperationsRequestOperationsInner](docs/AddBatchOperationsRequestOperationsInner.md)
 - [AuthorizationsCreateRequest](docs/AuthorizationsCreateRequest.md)
 - [AuthorizationsCreateRequestAuthorization](docs/AuthorizationsCreateRequestAuthorization.md)
 - [AuthorizationsUpdateRequest](docs/AuthorizationsUpdateRequest.md)
 - [AuthorizationsUpdateRequestAuthorization](docs/AuthorizationsUpdateRequestAuthorization.md)
 - [ChangesetsCreateRequest](docs/ChangesetsCreateRequest.md)
 - [ChangesetsCreateRequestChangeset](docs/ChangesetsCreateRequestChangeset.md)
 - [ChangesetsCreateRequestChangesetMetadata](docs/ChangesetsCreateRequestChangesetMetadata.md)
 - [ChangesetsUpdateRequest](docs/ChangesetsUpdateRequest.md)
 - [ChangesetsUpdateRequestChangeset](docs/ChangesetsUpdateRequestChangeset.md)
 - [ChangesetsUpdateRequestChangesetMetadata](docs/ChangesetsUpdateRequestChangesetMetadata.md)
 - [ChoiceListsCreateRequest](docs/ChoiceListsCreateRequest.md)
 - [ChoiceListsCreateRequestChoiceList](docs/ChoiceListsCreateRequestChoiceList.md)
 - [ChoiceListsCreateRequestChoiceListChoicesInner](docs/ChoiceListsCreateRequestChoiceListChoicesInner.md)
 - [ChoiceListsUpdateRequest](docs/ChoiceListsUpdateRequest.md)
 - [ChoiceListsUpdateRequestChoiceList](docs/ChoiceListsUpdateRequestChoiceList.md)
 - [ChoiceValues](docs/ChoiceValues.md)
 - [ClassificationSetsCreateRequest](docs/ClassificationSetsCreateRequest.md)
 - [ClassificationSetsCreateRequestClassificationSet](docs/ClassificationSetsCreateRequestClassificationSet.md)
 - [ClassificationSetsCreateRequestClassificationSetItemsInner](docs/ClassificationSetsCreateRequestClassificationSetItemsInner.md)
 - [ClassificationSetsUpdateRequest](docs/ClassificationSetsUpdateRequest.md)
 - [ClassificationSetsUpdateRequestClassificationSet](docs/ClassificationSetsUpdateRequestClassificationSet.md)
 - [ClassificationSetsUpdateRequestClassificationSetItemsInner](docs/ClassificationSetsUpdateRequestClassificationSetItemsInner.md)
 - [CreateAttachment200Response](docs/CreateAttachment200Response.md)
 - [CreateAttachment200ResponseHeaders](docs/CreateAttachment200ResponseHeaders.md)
 - [CreateAttachmentRequest](docs/CreateAttachmentRequest.md)
 - [CreateAttachmentRequestOwnersInner](docs/CreateAttachmentRequestOwnersInner.md)
 - [CreateBatchRequest](docs/CreateBatchRequest.md)
 - [CreateBatchRequestBatch](docs/CreateBatchRequestBatch.md)
 - [CreateBatchRequestBatchOperationsInner](docs/CreateBatchRequestBatchOperationsInner.md)
 - [CreateGroup201Response](docs/CreateGroup201Response.md)
 - [CreateGroup201ResponseGroup](docs/CreateGroup201ResponseGroup.md)
 - [CreateGroupRequest](docs/CreateGroupRequest.md)
 - [CreateGroupRequestGroup](docs/CreateGroupRequestGroup.md)
 - [CreateMemberRequest](docs/CreateMemberRequest.md)
 - [CreateMemberRequestMembership](docs/CreateMemberRequestMembership.md)
 - [CreateReportTemplateRequest](docs/CreateReportTemplateRequest.md)
 - [CreateReportTemplateRequestReportTemplate](docs/CreateReportTemplateRequestReportTemplate.md)
 - [CreateReportTemplateRequestReportTemplateConfig](docs/CreateReportTemplateRequestReportTemplateConfig.md)
 - [CreateReportTemplateRequestReportTemplateConfigParametersInner](docs/CreateReportTemplateRequestReportTemplateConfigParametersInner.md)
 - [CreateWorkflowRequest](docs/CreateWorkflowRequest.md)
 - [CreateWorkflowRequestWorkflow](docs/CreateWorkflowRequestWorkflow.md)
 - [CreateWorkflowRequestWorkflowStepsInner](docs/CreateWorkflowRequestWorkflowStepsInner.md)
 - [DeleteMemberRequest](docs/DeleteMemberRequest.md)
 - [FinalizeAttachmentRequest](docs/FinalizeAttachmentRequest.md)
 - [FinalizeAttachmentRequestOwnersInner](docs/FinalizeAttachmentRequestOwnersInner.md)
 - [FormsCreateRequest](docs/FormsCreateRequest.md)
 - [FormsCreateRequestForm](docs/FormsCreateRequestForm.md)
 - [FormsUpdateRequest](docs/FormsUpdateRequest.md)
 - [FormsUpdateRequestForm](docs/FormsUpdateRequestForm.md)
 - [Geometry](docs/Geometry.md)
 - [GetAllAttachments200Response](docs/GetAllAttachments200Response.md)
 - [GetAllAttachments200ResponseAttachmentsInner](docs/GetAllAttachments200ResponseAttachmentsInner.md)
 - [GetAllAttachments200ResponseAttachmentsInnerOwnersInner](docs/GetAllAttachments200ResponseAttachmentsInnerOwnersInner.md)
 - [GetAllAttachments401Response](docs/GetAllAttachments401Response.md)
 - [GetSingleAttachment200Response](docs/GetSingleAttachment200Response.md)
 - [LayersCreateRequest](docs/LayersCreateRequest.md)
 - [LayersCreateRequestLayer](docs/LayersCreateRequestLayer.md)
 - [LayersUpdateRequest](docs/LayersUpdateRequest.md)
 - [LayersUpdateRequestLayer](docs/LayersUpdateRequestLayer.md)
 - [MembershipsChangePermissionsRequest](docs/MembershipsChangePermissionsRequest.md)
 - [MembershipsChangePermissionsRequestChange](docs/MembershipsChangePermissionsRequestChange.md)
 - [ModelRecord](docs/ModelRecord.md)
 - [PhotoArrayInner](docs/PhotoArrayInner.md)
 - [ProjectsCreateRequest](docs/ProjectsCreateRequest.md)
 - [ProjectsCreateRequestProject](docs/ProjectsCreateRequestProject.md)
 - [ProjectsUpdateRequest](docs/ProjectsUpdateRequest.md)
 - [ProjectsUpdateRequestProject](docs/ProjectsUpdateRequestProject.md)
 - [QueryPostRequest](docs/QueryPostRequest.md)
 - [RecordFormValuesValue](docs/RecordFormValuesValue.md)
 - [RecordsCreateRequest](docs/RecordsCreateRequest.md)
 - [RecordsCreateRequestRecord](docs/RecordsCreateRequestRecord.md)
 - [RecordsGetAll400Response](docs/RecordsGetAll400Response.md)
 - [RecordsResponse](docs/RecordsResponse.md)
 - [RecordsUpdateRequest](docs/RecordsUpdateRequest.md)
 - [RecordsUpdateRequestRecord](docs/RecordsUpdateRequestRecord.md)
 - [ReportTemplate](docs/ReportTemplate.md)
 - [ReportTemplateConfig](docs/ReportTemplateConfig.md)
 - [ReportTemplateParameter](docs/ReportTemplateParameter.md)
 - [ReportTemplateReadAttributes](docs/ReportTemplateReadAttributes.md)
 - [ReportTemplateRequest](docs/ReportTemplateRequest.md)
 - [ReportTemplateResponse](docs/ReportTemplateResponse.md)
 - [ReportTemplateWriteAttributes](docs/ReportTemplateWriteAttributes.md)
 - [ReportTemplatesResponse](docs/ReportTemplatesResponse.md)
 - [UpdateGroupNameDescriptionRequest](docs/UpdateGroupNameDescriptionRequest.md)
 - [UpdateGroupNameDescriptionRequestGroup](docs/UpdateGroupNameDescriptionRequestGroup.md)
 - [UpdateGroupPermissionsRequest](docs/UpdateGroupPermissionsRequest.md)
 - [UpdateGroupPermissionsRequestChange](docs/UpdateGroupPermissionsRequestChange.md)
 - [UpdateMemberRequest](docs/UpdateMemberRequest.md)
 - [UpdateReportTemplateRequest](docs/UpdateReportTemplateRequest.md)
 - [UpdateWorkflowRequest](docs/UpdateWorkflowRequest.md)
 - [UpdateWorkflowRequestWorkflow](docs/UpdateWorkflowRequestWorkflow.md)
 - [UpdateWorkflowRequestWorkflowStepsInner](docs/UpdateWorkflowRequestWorkflowStepsInner.md)
 - [WebhooksCreate201Response](docs/WebhooksCreate201Response.md)
 - [WebhooksCreate422Response](docs/WebhooksCreate422Response.md)
 - [WebhooksCreate422ResponseWebhook](docs/WebhooksCreate422ResponseWebhook.md)
 - [WebhooksCreate422ResponseWebhookErrors](docs/WebhooksCreate422ResponseWebhookErrors.md)
 - [WebhooksCreate422ResponseWebhookErrorsAnyOf](docs/WebhooksCreate422ResponseWebhookErrorsAnyOf.md)
 - [WebhooksCreateRequest](docs/WebhooksCreateRequest.md)
 - [WebhooksCreateRequestWebhook](docs/WebhooksCreateRequestWebhook.md)
 - [WebhooksGetAll200Response](docs/WebhooksGetAll200Response.md)
 - [WebhooksGetAll200ResponseWebhooksInner](docs/WebhooksGetAll200ResponseWebhooksInner.md)
 - [WebhooksUpdateRequest](docs/WebhooksUpdateRequest.md)
 - [WebhooksUpdateRequestWebhook](docs/WebhooksUpdateRequestWebhook.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="ApiToken"></a>
### ApiToken

- **Type**: API key
- **API key parameter name**: X-ApiToken
- **Location**: HTTP header

