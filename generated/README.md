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
*DefaultApi* | [**audioGetAll**](docs/DefaultApi.md#audiogetall) | **GET** /v2/audio.json | Get a list of audio metadata
*DefaultApi* | [**audioGetAllTracksGeojson**](docs/DefaultApi.md#audiogetalltracksgeojson) | **GET** /v2/audio/tracks.geojson | Get GeoJSON Tracks for All Audio
*DefaultApi* | [**audioGetAllTracksGpx**](docs/DefaultApi.md#audiogetalltracksgpx) | **GET** /v2/audio/tracks.gpx | Get GPX Tracks for All Audio
*DefaultApi* | [**audioGetAllTracksJson**](docs/DefaultApi.md#audiogetalltracksjson) | **GET** /v2/audio/tracks.json | Get JSON Tracks for All Audio
*DefaultApi* | [**audioGetAllTracksKml**](docs/DefaultApi.md#audiogetalltrackskml) | **GET** /v2/audio/tracks.kml | Get KML Tracks for All Audio
*DefaultApi* | [**audioGetOriginalFile**](docs/DefaultApi.md#audiogetoriginalfile) | **GET** /v2/audio/{audio_id}.mp4 | Get an audio original file
*DefaultApi* | [**audioGetSingleMetadata**](docs/DefaultApi.md#audiogetsinglemetadata) | **GET** /v2/audio/{audio_id}.json | Get audio metadata
*DefaultApi* | [**audioGetSingleTrackGeojson**](docs/DefaultApi.md#audiogetsingletrackgeojson) | **GET** /v2/audio/{audio_id}/track.geojson | Get GeoJSON Audio Track
*DefaultApi* | [**audioGetSingleTrackGpx**](docs/DefaultApi.md#audiogetsingletrackgpx) | **GET** /v2/audio/{audio_id}/track.gpx | Get GPX Audio Track
*DefaultApi* | [**audioGetSingleTrackJson**](docs/DefaultApi.md#audiogetsingletrackjson) | **GET** /v2/audio/{audio_id}/track.json | Get JSON Audio Track
*DefaultApi* | [**audioGetSingleTrackKml**](docs/DefaultApi.md#audiogetsingletrackkml) | **GET** /v2/audio/{audio_id}/track.kml | Get KML Audio Track
*DefaultApi* | [**audioUpload**](docs/DefaultApi.md#audioupload) | **POST** /v2/audio/upload.json | Upload audio
*DefaultApi* | [**auditLogsGetAll**](docs/DefaultApi.md#auditlogsgetall) | **GET** /v2/audit_logs.json | Get a list of audit logs
*DefaultApi* | [**auditLogsGetSingle**](docs/DefaultApi.md#auditlogsgetsingle) | **GET** /v2/audit_logs/{audit_log_id}.json | Get an audit log
*DefaultApi* | [**authorizationsCreate**](docs/DefaultApi.md#authorizationscreate) | **POST** /v2/authorizations.json | Create an authorization
*DefaultApi* | [**authorizationsDelete**](docs/DefaultApi.md#authorizationsdelete) | **DELETE** /v2/authorizations/{authorization_id}.json | Delete an authorization
*DefaultApi* | [**authorizationsGetAll**](docs/DefaultApi.md#authorizationsgetall) | **GET** /v2/authorizations.json | Get a list of authorizations
*DefaultApi* | [**authorizationsGetSingle**](docs/DefaultApi.md#authorizationsgetsingle) | **GET** /v2/authorizations/{authorization_id}.json | Get an authorization
*DefaultApi* | [**authorizationsUpdate**](docs/DefaultApi.md#authorizationsupdate) | **PUT** /v2/authorizations/{authorization_id}.json | Update Authorization
*DefaultApi* | [**changesetsClose**](docs/DefaultApi.md#changesetsclose) | **PUT** /v2/changesets/{changeset_id}/close.json | Close Changeset
*DefaultApi* | [**changesetsCreate**](docs/DefaultApi.md#changesetscreate) | **POST** /v2/changesets.json | Create a changeset
*DefaultApi* | [**changesetsGetAll**](docs/DefaultApi.md#changesetsgetall) | **GET** /v2/changesets.json | Get a list of changesets
*DefaultApi* | [**changesetsGetSingle**](docs/DefaultApi.md#changesetsgetsingle) | **GET** /v2/changesets/{changeset_id}.json | Get a changeset
*DefaultApi* | [**changesetsUpdate**](docs/DefaultApi.md#changesetsupdate) | **PUT** /v2/changesets/{changeset_id}.json | Update Changeset
*DefaultApi* | [**choiceListsCreate**](docs/DefaultApi.md#choicelistscreate) | **POST** /v2/choice_lists.json | Create a choice list
*DefaultApi* | [**choiceListsDelete**](docs/DefaultApi.md#choicelistsdelete) | **DELETE** /v2/choice_lists/{choice_list_id}.json | Delete a choice list
*DefaultApi* | [**choiceListsGetAll**](docs/DefaultApi.md#choicelistsgetall) | **GET** /v2/choice_lists.json | Get a list of choice lists
*DefaultApi* | [**choiceListsGetSingle**](docs/DefaultApi.md#choicelistsgetsingle) | **GET** /v2/choice_lists/{choice_list_id}.json | Get a choice list
*DefaultApi* | [**choiceListsUpdate**](docs/DefaultApi.md#choicelistsupdate) | **PUT** /v2/choice_lists/{choice_list_id}.json | Update Choice List
*DefaultApi* | [**classificationSetsCreate**](docs/DefaultApi.md#classificationsetscreate) | **POST** /v2/classification_sets.json | Create a classification set
*DefaultApi* | [**classificationSetsDelete**](docs/DefaultApi.md#classificationsetsdelete) | **DELETE** /v2/classification_sets/{classification_set_id}.json | Delete a classification set
*DefaultApi* | [**classificationSetsGetAll**](docs/DefaultApi.md#classificationsetsgetall) | **GET** /v2/classification_sets.json | Get a list of classification sets
*DefaultApi* | [**classificationSetsGetSingle**](docs/DefaultApi.md#classificationsetsgetsingle) | **GET** /v2/classification_sets/{classification_set_id}.json | Get a classification set
*DefaultApi* | [**classificationSetsUpdate**](docs/DefaultApi.md#classificationsetsupdate) | **PUT** /v2/classification_sets/{classification_set_id}.json | Update Classification Set
*DefaultApi* | [**copyAllAttachments**](docs/DefaultApi.md#copyallattachments) | **POST** /v2/attachments/copy_all | Copy all reference files
*DefaultApi* | [**createAttachment**](docs/DefaultApi.md#createattachment) | **POST** /v2/attachments | Create an attachment
*DefaultApi* | [**createBatch**](docs/DefaultApi.md#createbatch) | **POST** /v2/batch.json | Create a batch
*DefaultApi* | [**createGroup**](docs/DefaultApi.md#creategroup) | **POST** /v2/groups.json | Create a group
*DefaultApi* | [**createMembership**](docs/DefaultApi.md#createmembership) | **POST** /v2/memberships.json | Create a membership
*DefaultApi* | [**createReportTemplate**](docs/DefaultApi.md#createreporttemplate) | **POST** /v2/report_templates.json | Create a report template
*DefaultApi* | [**createWorkflow**](docs/DefaultApi.md#createworkflow) | **POST** /v2/workflows.json | Create a workflow
*DefaultApi* | [**deleteAttachment**](docs/DefaultApi.md#deleteattachment) | **DELETE** /v2/attachments/{attachment_id} | Delete an attachment
*DefaultApi* | [**deleteGroup**](docs/DefaultApi.md#deletegroup) | **DELETE** /v2/groups/{group_id}.json | Delete a group
*DefaultApi* | [**deleteMembership**](docs/DefaultApi.md#deletemembership) | **DELETE** /v2/memberships/{membership_id}.json | Delete a membership
*DefaultApi* | [**deleteReportTemplate**](docs/DefaultApi.md#deletereporttemplate) | **DELETE** /v2/report_templates/{id}.json | Delete a report template
*DefaultApi* | [**deleteWorkflow**](docs/DefaultApi.md#deleteworkflow) | **DELETE** /v2/workflows/{workflow_id}.json | Delete a workflow
*DefaultApi* | [**finalizeAttachment**](docs/DefaultApi.md#finalizeattachment) | **POST** /v2/attachments/finalize | Finalize Attachment
*DefaultApi* | [**formsCreate**](docs/DefaultApi.md#formscreate) | **POST** /v2/forms.json | Create a form
*DefaultApi* | [**formsDelete**](docs/DefaultApi.md#formsdelete) | **DELETE** /v2/forms/{form_id}.json | Delete a form
*DefaultApi* | [**formsGetAll**](docs/DefaultApi.md#formsgetall) | **GET** /v2/forms.json | Get a list of forms
*DefaultApi* | [**formsGetHistory**](docs/DefaultApi.md#formsgethistory) | **GET** /v2/forms/{form_id}/history.json | Get Form History
*DefaultApi* | [**formsGetSingle**](docs/DefaultApi.md#formsgetsingle) | **GET** /v2/forms/{form_id}.json | Get a form
*DefaultApi* | [**formsUpdate**](docs/DefaultApi.md#formsupdate) | **PUT** /v2/forms/{form_id}.json | Update Form
*DefaultApi* | [**getAllAttachments**](docs/DefaultApi.md#getallattachments) | **GET** /v2/attachments | Get a list of attachment metadata
*DefaultApi* | [**getAllBatches**](docs/DefaultApi.md#getallbatches) | **GET** /v2/batch.json | Get a list of batches
*DefaultApi* | [**getAllGroups**](docs/DefaultApi.md#getallgroups) | **GET** /v2/groups.json | Get a list of groups
*DefaultApi* | [**getAllMemberships**](docs/DefaultApi.md#getallmemberships) | **GET** /v2/permissions.json | Get Membership Permissions
*DefaultApi* | [**getAllReportTemplates**](docs/DefaultApi.md#getallreporttemplates) | **GET** /v2/report_templates.json | Get a list of report templates
*DefaultApi* | [**getAllWorkflows**](docs/DefaultApi.md#getallworkflows) | **GET** /v2/workflows.json | Get a list of workflows
*DefaultApi* | [**getGroupResource**](docs/DefaultApi.md#getgroupresource) | **GET** /v2/groups/{group_id}/{resource}.json | Get Group Resource
*DefaultApi* | [**getSingleAttachment**](docs/DefaultApi.md#getsingleattachment) | **GET** /v2/attachments/{attachment_id} | Get an attachment
*DefaultApi* | [**getSingleBatch**](docs/DefaultApi.md#getsinglebatch) | **GET** /v2/batch/{batch_id}.json | Get a batch
*DefaultApi* | [**getSingleGroup**](docs/DefaultApi.md#getsinglegroup) | **GET** /v2/groups/{group_id}.json | Get a group
*DefaultApi* | [**getSingleReportTemplate**](docs/DefaultApi.md#getsinglereporttemplate) | **GET** /v2/report_templates/{id}.json | Get a report template
*DefaultApi* | [**getSingleWorkflow**](docs/DefaultApi.md#getsingleworkflow) | **GET** /v2/workflows/{workflow_id}.json | Get a workflow
*DefaultApi* | [**layersCreate**](docs/DefaultApi.md#layerscreate) | **POST** /v2/layers.json | Create a layer
*DefaultApi* | [**layersDelete**](docs/DefaultApi.md#layersdelete) | **DELETE** /v2/layers/{layer_id}.json | Delete a layer
*DefaultApi* | [**layersGetAll**](docs/DefaultApi.md#layersgetall) | **GET** /v2/layers.json | Get a list of layers
*DefaultApi* | [**layersGetSingle**](docs/DefaultApi.md#layersgetsingle) | **GET** /v2/layers/{layer_id}.json | Get a layer
*DefaultApi* | [**layersUpdate**](docs/DefaultApi.md#layersupdate) | **PUT** /v2/layers/{layer_id}.json | Update Layer
*DefaultApi* | [**membershipsChangePermissions**](docs/DefaultApi.md#membershipschangepermissions) | **POST** /v2/memberships/change_permissions.json | Change Permissions
*DefaultApi* | [**membershipsGetAll**](docs/DefaultApi.md#membershipsgetall) | **GET** /v2/memberships.json | Get a list of memberships
*DefaultApi* | [**membershipsGetSingle**](docs/DefaultApi.md#membershipsgetsingle) | **GET** /v2/memberships/{membership_id}.json | Get a membership
*DefaultApi* | [**photosGetAllMetadata**](docs/DefaultApi.md#photosgetallmetadata) | **GET** /v2/photos.json | Get a list of photo metadata
*DefaultApi* | [**photosGetSingleFile**](docs/DefaultApi.md#photosgetsinglefile) | **GET** /v2/photos/{photo_id}.jpg | Get a photo original file
*DefaultApi* | [**photosGetSingleMetadata**](docs/DefaultApi.md#photosgetsinglemetadata) | **GET** /v2/photos/{photo_id}.json | Get photo metadata
*DefaultApi* | [**photosLargeFile**](docs/DefaultApi.md#photoslargefile) | **GET** /v2/photos/{photo_id}/large.jpg | Get a photo large file
*DefaultApi* | [**photosLargeMetadata**](docs/DefaultApi.md#photoslargemetadata) | **GET** /v2/photos/{photo_id}/large.json | Photo Large Metadata
*DefaultApi* | [**photosThumbnailFile**](docs/DefaultApi.md#photosthumbnailfile) | **GET** /v2/photos/{photo_id}/thumbnail.jpg | Get a photo thumbnail file
*DefaultApi* | [**photosThumbnailMetadata**](docs/DefaultApi.md#photosthumbnailmetadata) | **GET** /v2/photos/{photo_id}/thumbnail.json | Photo Thumbnail Metadata
*DefaultApi* | [**photosUpload**](docs/DefaultApi.md#photosupload) | **POST** /v2/photos.json | Upload a photo
*DefaultApi* | [**projectsCreate**](docs/DefaultApi.md#projectscreate) | **POST** /v2/projects.json | Create a project
*DefaultApi* | [**projectsDelete**](docs/DefaultApi.md#projectsdelete) | **DELETE** /v2/projects/{project_id}.json | Delete a project
*DefaultApi* | [**projectsGetAll**](docs/DefaultApi.md#projectsgetall) | **GET** /v2/projects.json | Get a list of projects
*DefaultApi* | [**projectsGetSingle**](docs/DefaultApi.md#projectsgetsingle) | **GET** /v2/projects/{project_id}.json | Get a project
*DefaultApi* | [**projectsUpdate**](docs/DefaultApi.md#projectsupdate) | **PUT** /v2/projects/{project_id}.json | Update Project
*DefaultApi* | [**queryGet**](docs/DefaultApi.md#queryget) | **GET** /v2/query | Make a Query GET request
*DefaultApi* | [**queryPost**](docs/DefaultApi.md#querypost) | **POST** /v2/query | Make a Query POST request
*DefaultApi* | [**recordsCreate**](docs/DefaultApi.md#recordscreate) | **POST** /v2/records.json | Create a record
*DefaultApi* | [**recordsDelete**](docs/DefaultApi.md#recordsdelete) | **DELETE** /v2/records/{record_id}.json | Delete a record
*DefaultApi* | [**recordsGetAll**](docs/DefaultApi.md#recordsgetall) | **GET** /v2/records.json | Get a list of records
*DefaultApi* | [**recordsGetAllHistory**](docs/DefaultApi.md#recordsgetallhistory) | **GET** /v2/records/history.json | Get the history of a collection of records
*DefaultApi* | [**recordsGetHistory**](docs/DefaultApi.md#recordsgethistory) | **GET** /v2/records/{record_id}/history.json | Get the history of a record
*DefaultApi* | [**recordsGetSingle**](docs/DefaultApi.md#recordsgetsingle) | **GET** /v2/records/{record_id}.json | Get a record
*DefaultApi* | [**recordsPartialUpdate**](docs/DefaultApi.md#recordspartialupdate) | **PATCH** /v2/records/{record_id}.json | Partially update a record
*DefaultApi* | [**recordsUpdate**](docs/DefaultApi.md#recordsupdate) | **PUT** /v2/records/{record_id}.json | Update a record
*DefaultApi* | [**reportsCreate**](docs/DefaultApi.md#reportscreate) | **POST** /v2/reports.json | Create a report
*DefaultApi* | [**reportsFile**](docs/DefaultApi.md#reportsfile) | **GET** /v2/reports/{report_id}.pdf | Get a report file
*DefaultApi* | [**rolesGetAll**](docs/DefaultApi.md#rolesgetall) | **GET** /v2/roles.json | Get a list of roles
*DefaultApi* | [**signaturesGetAll**](docs/DefaultApi.md#signaturesgetall) | **GET** /v2/signatures.json | Get a list of signature metadata
*DefaultApi* | [**signaturesGetSingleFile**](docs/DefaultApi.md#signaturesgetsinglefile) | **GET** /v2/signatures/{signature_id}.png | Get a signature original file
*DefaultApi* | [**signaturesGetSingleMetadata**](docs/DefaultApi.md#signaturesgetsinglemetadata) | **GET** /v2/signatures/{signature_id}.json | Get signature metadata
*DefaultApi* | [**signaturesGetThumbnailFile**](docs/DefaultApi.md#signaturesgetthumbnailfile) | **GET** /v2/signatures/{signature_id}/thumbnail.png | Get a signature thumbnail file
*DefaultApi* | [**signaturesGetThumbnailMetadata**](docs/DefaultApi.md#signaturesgetthumbnailmetadata) | **GET** /v2/signatures/{signature_id}/thumbnail.json | Signature Thumbnail Metadata
*DefaultApi* | [**signaturesUpload**](docs/DefaultApi.md#signaturesupload) | **POST** /v2/signatures.json | Upload a signature
*DefaultApi* | [**sketchesGetAllMetadata**](docs/DefaultApi.md#sketchesgetallmetadata) | **GET** /v2/sketches.json | Get a list of sketch metadata
*DefaultApi* | [**sketchesGetSingleFile**](docs/DefaultApi.md#sketchesgetsinglefile) | **GET** /v2/sketches/{sketch_id}.jpg | Get a sketch original file
*DefaultApi* | [**sketchesGetSingleMetadata**](docs/DefaultApi.md#sketchesgetsinglemetadata) | **GET** /v2/sketches/{sketch_id}.json | Get sketch metadata
*DefaultApi* | [**sketchesLargeFile**](docs/DefaultApi.md#sketcheslargefile) | **GET** /v2/sketches/{sketch_id}/large.jpg | Get a sketch large file
*DefaultApi* | [**sketchesLargeMetadata**](docs/DefaultApi.md#sketcheslargemetadata) | **GET** /v2/sketches/{sketch_id}/large.json | Sketch Large Metadata
*DefaultApi* | [**sketchesThumbnailFile**](docs/DefaultApi.md#sketchesthumbnailfile) | **GET** /v2/sketches/{sketch_id}/thumbnail.jpg | Get a sketch thumbnail file
*DefaultApi* | [**sketchesThumbnailMetadata**](docs/DefaultApi.md#sketchesthumbnailmetadata) | **GET** /v2/sketches/{sketch_id}/thumbnail.json | Sketch Thumbnail Metadata
*DefaultApi* | [**sketchesUpload**](docs/DefaultApi.md#sketchesupload) | **POST** /v2/sketches.json | Upload a sketch
*DefaultApi* | [**startBatch**](docs/DefaultApi.md#startbatch) | **POST** /v2/batch/{batch_id}/start.json | Start Batch
*DefaultApi* | [**updateGroupNameDescription**](docs/DefaultApi.md#updategroupnamedescription) | **PUT** /v2/groups/{group_id}.json | Update Group Name / Description
*DefaultApi* | [**updateGroupPermissions**](docs/DefaultApi.md#updategrouppermissions) | **POST** /v2/groups/change_permissions.json | Update Group Permissions
*DefaultApi* | [**updateMembership**](docs/DefaultApi.md#updatemembership) | **PUT** /v2/memberships/{membership_id}.json | Update a membership
*DefaultApi* | [**updateReportTemplate**](docs/DefaultApi.md#updatereporttemplate) | **PUT** /v2/report_templates/{id}.json | Update Report Template
*DefaultApi* | [**updateWorkflow**](docs/DefaultApi.md#updateworkflow) | **PUT** /v2/workflows/{workflow_id}.json | Update Workflow
*DefaultApi* | [**usersGetUser**](docs/DefaultApi.md#usersgetuser) | **GET** /v2/users.json | Get User Information
*DefaultApi* | [**videosGetAll**](docs/DefaultApi.md#videosgetall) | **GET** /v2/videos.json | Get a list of video metadata
*DefaultApi* | [**videosGetAllTracksGeojson**](docs/DefaultApi.md#videosgetalltracksgeojson) | **GET** /v2/videos/tracks.geojson | Get GeoJSON Tracks for All Videos
*DefaultApi* | [**videosGetAllTracksGpx**](docs/DefaultApi.md#videosgetalltracksgpx) | **GET** /v2/videos/tracks.gpx | Get GPX Tracks for All Videos
*DefaultApi* | [**videosGetAllTracksKml**](docs/DefaultApi.md#videosgetalltrackskml) | **GET** /v2/videos/tracks.kml | Get KML Tracks for All Videos
*DefaultApi* | [**videosGetMediumFile**](docs/DefaultApi.md#videosgetmediumfile) | **GET** /v2/videos/{video_id}/medium.mp4 | Get a video medium file
*DefaultApi* | [**videosGetOriginalFile**](docs/DefaultApi.md#videosgetoriginalfile) | **GET** /v2/videos/{video_id}.mp4 | Get a video original file
*DefaultApi* | [**videosGetSingleMetadata**](docs/DefaultApi.md#videosgetsinglemetadata) | **GET** /v2/videos/{video_id}.json | Get video metadata
*DefaultApi* | [**videosGetSingleTrackGeojson**](docs/DefaultApi.md#videosgetsingletrackgeojson) | **GET** /v2/videos/{video_id}/track.geojson | Get GeoJSON Video Track
*DefaultApi* | [**videosGetSingleTrackGpx**](docs/DefaultApi.md#videosgetsingletrackgpx) | **GET** /v2/videos/{video_id}/track.gpx | Get GPX Video Track
*DefaultApi* | [**videosGetSingleTrackJson**](docs/DefaultApi.md#videosgetsingletrackjson) | **GET** /v2/videos/{video_id}/track.json | Get JSON Video Track
*DefaultApi* | [**videosGetSingleTrackKml**](docs/DefaultApi.md#videosgetsingletrackkml) | **GET** /v2/videos/{video_id}/track.kml | Get KML Video Track
*DefaultApi* | [**videosGetSmallFile**](docs/DefaultApi.md#videosgetsmallfile) | **GET** /v2/videos/{video_id}/small.mp4 | Get a video small file
*DefaultApi* | [**videosGetThumbnailHuge**](docs/DefaultApi.md#videosgetthumbnailhuge) | **GET** /v2/videos/{video_id}/thumbnail_huge.jpg | Get Huge Video Thumbnail
*DefaultApi* | [**videosGetThumbnailHugeSquare**](docs/DefaultApi.md#videosgetthumbnailhugesquare) | **GET** /v2/videos/{video_id}/thumbnail_huge_square.jpg | Get Huge Square Video Thumbnail
*DefaultApi* | [**videosGetThumbnailLarge**](docs/DefaultApi.md#videosgetthumbnaillarge) | **GET** /v2/videos/{video_id}/thumbnail_large.jpg | Get Large Video Thumbnail
*DefaultApi* | [**videosGetThumbnailLargeSquare**](docs/DefaultApi.md#videosgetthumbnaillargesquare) | **GET** /v2/videos/{video_id}/thumbnail_large_square.jpg | Get Large Square Video Thumbnail
*DefaultApi* | [**videosGetThumbnailMedium**](docs/DefaultApi.md#videosgetthumbnailmedium) | **GET** /v2/videos/{video_id}/thumbnail_medium.jpg | Get Medium Video Thumbnail
*DefaultApi* | [**videosGetThumbnailMediumSquare**](docs/DefaultApi.md#videosgetthumbnailmediumsquare) | **GET** /v2/videos/{video_id}/thumbnail_medium_square.jpg | Get Medium Square Video Thumbnail
*DefaultApi* | [**videosGetThumbnailSmall**](docs/DefaultApi.md#videosgetthumbnailsmall) | **GET** /v2/videos/{video_id}/thumbnail_small.jpg | Get Small Video Thumbnail
*DefaultApi* | [**videosGetThumbnailSmallSquare**](docs/DefaultApi.md#videosgetthumbnailsmallsquare) | **GET** /v2/videos/{video_id}/thumbnail_small_square.jpg | Get Small Square Video Thumbnail
*DefaultApi* | [**videosUpload**](docs/DefaultApi.md#videosupload) | **POST** /v2/videos/upload.json | Upload a video
*DefaultApi* | [**webhooksCreate**](docs/DefaultApi.md#webhookscreate) | **POST** /v2/webhooks.json | Create a webhook
*DefaultApi* | [**webhooksDelete**](docs/DefaultApi.md#webhooksdelete) | **DELETE** /v2/webhooks/{webhook_id}.json | Delete a webhook
*DefaultApi* | [**webhooksGetAll**](docs/DefaultApi.md#webhooksgetall) | **GET** /v2/webhooks.json | Get a list of webhooks
*DefaultApi* | [**webhooksGetSingle**](docs/DefaultApi.md#webhooksgetsingle) | **GET** /v2/webhooks/{webhook_id}.json | Get a webhook
*DefaultApi* | [**webhooksUpdate**](docs/DefaultApi.md#webhooksupdate) | **PUT** /v2/webhooks/{webhook_id}.json | Update Webhook


### Documentation For Models

 - [Attachment](docs/Attachment.md)
 - [AttachmentCopyAllRequest](docs/AttachmentCopyAllRequest.md)
 - [AttachmentCopyAllResponse](docs/AttachmentCopyAllResponse.md)
 - [AttachmentCreateRequest](docs/AttachmentCreateRequest.md)
 - [AttachmentCreateRequestAttachment](docs/AttachmentCreateRequestAttachment.md)
 - [AttachmentCreateRequestAttachmentOwnersInner](docs/AttachmentCreateRequestAttachmentOwnersInner.md)
 - [AttachmentOwnersInner](docs/AttachmentOwnersInner.md)
 - [AttachmentTrackRequest](docs/AttachmentTrackRequest.md)
 - [AttachmentTrackRequestAttachment](docs/AttachmentTrackRequestAttachment.md)
 - [AttachmentsResponse](docs/AttachmentsResponse.md)
 - [Audio](docs/Audio.md)
 - [AudiosResponse](docs/AudiosResponse.md)
 - [AuditLocation](docs/AuditLocation.md)
 - [AuthorizationRequest](docs/AuthorizationRequest.md)
 - [AuthorizationRequestAuthorization](docs/AuthorizationRequestAuthorization.md)
 - [BadRequestResponse](docs/BadRequestResponse.md)
 - [BatchAddOperationsRequest](docs/BatchAddOperationsRequest.md)
 - [BatchAddOperationsRequestOperationsInner](docs/BatchAddOperationsRequestOperationsInner.md)
 - [BatchCreateRequest](docs/BatchCreateRequest.md)
 - [BatchCreateRequestBatch](docs/BatchCreateRequestBatch.md)
 - [ChangesetCreateRequest](docs/ChangesetCreateRequest.md)
 - [ChangesetCreateRequestChangeset](docs/ChangesetCreateRequestChangeset.md)
 - [ChangesetCreateRequestChangesetMetadata](docs/ChangesetCreateRequestChangesetMetadata.md)
 - [ChangesetRequest](docs/ChangesetRequest.md)
 - [ChoiceListRequest](docs/ChoiceListRequest.md)
 - [ChoiceListRequestChoiceList](docs/ChoiceListRequestChoiceList.md)
 - [ChoiceListRequestChoiceListChoicesInner](docs/ChoiceListRequestChoiceListChoicesInner.md)
 - [ClassificationSetRequest](docs/ClassificationSetRequest.md)
 - [ClassificationSetRequestClassificationSet](docs/ClassificationSetRequestClassificationSet.md)
 - [ClassificationSetRequestClassificationSetItemsInner](docs/ClassificationSetRequestClassificationSetItemsInner.md)
 - [CopyAllAttachments400Response](docs/CopyAllAttachments400Response.md)
 - [CreateAttachment200Response](docs/CreateAttachment200Response.md)
 - [CreateAttachment200ResponseHeaders](docs/CreateAttachment200ResponseHeaders.md)
 - [CreateGroup201Response](docs/CreateGroup201Response.md)
 - [CreateGroup201ResponseGroup](docs/CreateGroup201ResponseGroup.md)
 - [FormRequest](docs/FormRequest.md)
 - [FormRequestForm](docs/FormRequestForm.md)
 - [Geometry](docs/Geometry.md)
 - [GetAllAttachments401Response](docs/GetAllAttachments401Response.md)
 - [GroupCreateRequest](docs/GroupCreateRequest.md)
 - [GroupCreateRequestGroup](docs/GroupCreateRequestGroup.md)
 - [GroupPermissionChangeRequest](docs/GroupPermissionChangeRequest.md)
 - [GroupPermissionChangeRequestPermissionChange](docs/GroupPermissionChangeRequestPermissionChange.md)
 - [GroupUpdateRequest](docs/GroupUpdateRequest.md)
 - [GroupUpdateRequestGroup](docs/GroupUpdateRequestGroup.md)
 - [LayerRequest](docs/LayerRequest.md)
 - [LayerRequestLayer](docs/LayerRequestLayer.md)
 - [MembershipCreateRequest](docs/MembershipCreateRequest.md)
 - [MembershipCreateRequestMembership](docs/MembershipCreateRequestMembership.md)
 - [MembershipDeleteRequest](docs/MembershipDeleteRequest.md)
 - [MembershipDeleteRequestMembership](docs/MembershipDeleteRequestMembership.md)
 - [MembershipUpdateRequest](docs/MembershipUpdateRequest.md)
 - [MembershipUpdateRequestMembership](docs/MembershipUpdateRequestMembership.md)
 - [ModelRecord](docs/ModelRecord.md)
 - [PermissionChangeRequest](docs/PermissionChangeRequest.md)
 - [PermissionChangeRequestChange](docs/PermissionChangeRequestChange.md)
 - [Photo](docs/Photo.md)
 - [PhotosResponse](docs/PhotosResponse.md)
 - [ProjectRequest](docs/ProjectRequest.md)
 - [ProjectRequestProject](docs/ProjectRequestProject.md)
 - [QueryRequest](docs/QueryRequest.md)
 - [RecordHistoryItem](docs/RecordHistoryItem.md)
 - [RecordHistoryItemGeometry](docs/RecordHistoryItemGeometry.md)
 - [RecordHistoryResponse](docs/RecordHistoryResponse.md)
 - [RecordPatchRequest](docs/RecordPatchRequest.md)
 - [RecordPatchRequestRecord](docs/RecordPatchRequestRecord.md)
 - [RecordRequest](docs/RecordRequest.md)
 - [RecordRequestRecord](docs/RecordRequestRecord.md)
 - [RecordsGetAll400Response](docs/RecordsGetAll400Response.md)
 - [RecordsResponse](docs/RecordsResponse.md)
 - [ReportRequest](docs/ReportRequest.md)
 - [ReportRequestReport](docs/ReportRequestReport.md)
 - [ReportResponse](docs/ReportResponse.md)
 - [ReportResponseReport](docs/ReportResponseReport.md)
 - [ReportTemplateRequest](docs/ReportTemplateRequest.md)
 - [ReportTemplateRequestReportTemplate](docs/ReportTemplateRequestReportTemplate.md)
 - [ReportTemplateRequestReportTemplateConfig](docs/ReportTemplateRequestReportTemplateConfig.md)
 - [ReportTemplateRequestReportTemplateConfigParametersInner](docs/ReportTemplateRequestReportTemplateConfigParametersInner.md)
 - [Signature](docs/Signature.md)
 - [SignaturesResponse](docs/SignaturesResponse.md)
 - [SingleAttachmentResponse](docs/SingleAttachmentResponse.md)
 - [SingleAudioResponse](docs/SingleAudioResponse.md)
 - [SinglePhotoResponse](docs/SinglePhotoResponse.md)
 - [SingleRecordResponse](docs/SingleRecordResponse.md)
 - [SingleSignatureResponse](docs/SingleSignatureResponse.md)
 - [SingleSketchResponse](docs/SingleSketchResponse.md)
 - [SingleVideoResponse](docs/SingleVideoResponse.md)
 - [Sketch](docs/Sketch.md)
 - [SketchesResponse](docs/SketchesResponse.md)
 - [UnauthorizedResponse](docs/UnauthorizedResponse.md)
 - [Video](docs/Video.md)
 - [VideosResponse](docs/VideosResponse.md)
 - [WebhookRequest](docs/WebhookRequest.md)
 - [WebhookRequestWebhook](docs/WebhookRequestWebhook.md)
 - [WebhooksCreate201Response](docs/WebhooksCreate201Response.md)
 - [WebhooksCreate422Response](docs/WebhooksCreate422Response.md)
 - [WebhooksCreate422ResponseWebhook](docs/WebhooksCreate422ResponseWebhook.md)
 - [WebhooksCreate422ResponseWebhookErrors](docs/WebhooksCreate422ResponseWebhookErrors.md)
 - [WebhooksCreate422ResponseWebhookErrorsAnyOf](docs/WebhooksCreate422ResponseWebhookErrorsAnyOf.md)
 - [WebhooksGetAll200Response](docs/WebhooksGetAll200Response.md)
 - [WebhooksGetAll200ResponseWebhooksInner](docs/WebhooksGetAll200ResponseWebhooksInner.md)
 - [WorkflowCreateRequest](docs/WorkflowCreateRequest.md)
 - [WorkflowCreateRequestWorkflow](docs/WorkflowCreateRequestWorkflow.md)
 - [WorkflowUpdateRequest](docs/WorkflowUpdateRequest.md)
 - [WorkflowUpdateRequestWorkflow](docs/WorkflowUpdateRequestWorkflow.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="ApiToken"></a>
### ApiToken

- **Type**: API key
- **API key parameter name**: X-ApiToken
- **Location**: HTTP header

