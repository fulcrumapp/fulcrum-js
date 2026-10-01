# Photo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | **string** | Unique identifier for the photo | [optional] [default to undefined]
**uploaded** | **boolean** | Whether the photo has been uploaded | [optional] [default to undefined]
**stored** | **boolean** | Whether the photo has been stored | [optional] [default to undefined]
**processed** | **boolean** | Whether the photo has been processed | [optional] [default to undefined]
**record_id** | **string** | ID of the associated record | [optional] [default to undefined]
**form_id** | **string** | ID of the associated form | [optional] [default to undefined]
**created_at** | **string** | When the photo was created | [optional] [default to undefined]
**updated_at** | **string** | When the photo was last updated | [optional] [default to undefined]
**deleted_at** | **string** | When the photo was deleted | [optional] [default to undefined]
**file_size** | **number** | Size of the photo file in bytes | [optional] [default to undefined]
**content_type** | **string** | MIME type of the photo | [optional] [default to undefined]
**latitude** | **number** | Latitude coordinate where photo was taken | [optional] [default to undefined]
**longitude** | **number** | Longitude coordinate where photo was taken | [optional] [default to undefined]
**url** | **string** | API URL for this photo resource | [optional] [default to undefined]
**thumbnail** | **string** | URL to thumbnail version of the photo | [optional] [default to undefined]
**large** | **string** | URL to large version of the photo | [optional] [default to undefined]
**original** | **string** | URL to original version of the photo | [optional] [default to undefined]
**exif** | **{ [key: string]: any; }** | EXIF metadata from the photo | [optional] [default to undefined]
**created_by** | **string** | Display name of user who created the photo | [optional] [default to undefined]
**created_by_id** | **string** | ID of user who created the photo | [optional] [default to undefined]
**updated_by** | **string** | Display name of user who last updated the photo | [optional] [default to undefined]
**updated_by_id** | **string** | ID of user who last updated the photo | [optional] [default to undefined]

## Example

```typescript
import { Photo } from 'fulcrum-generated';

const instance: Photo = {
    access_key,
    uploaded,
    stored,
    processed,
    record_id,
    form_id,
    created_at,
    updated_at,
    deleted_at,
    file_size,
    content_type,
    latitude,
    longitude,
    url,
    thumbnail,
    large,
    original,
    exif,
    created_by,
    created_by_id,
    updated_by,
    updated_by_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
