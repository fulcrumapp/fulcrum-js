# Video


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | **string** | Unique identifier for the video | [optional] [default to undefined]
**url** | **string** | API URL to access this video resource | [optional] [default to undefined]
**track** | **string** | URL to the video track data in JSON format, if available | [optional] [default to undefined]
**status** | **string** | Processing status of the video | [optional] [default to undefined]
**uploaded** | **boolean** | Whether the video has been uploaded | [optional] [default to undefined]
**stored** | **boolean** | Whether the video has been stored | [optional] [default to undefined]
**processed** | **boolean** | Whether the video has been processed | [optional] [default to undefined]
**deleted_at** | **string** | Timestamp when the video was deleted | [optional] [default to undefined]
**record_id** | **string** | ID of the associated record | [optional] [default to undefined]
**form_id** | **string** | ID of the associated form | [optional] [default to undefined]
**created_at** | **string** | Timestamp when the video was created | [optional] [default to undefined]
**updated_at** | **string** | Timestamp when the video was last updated | [optional] [default to undefined]
**created_by** | **string** | Display name of the user who created the video | [optional] [default to undefined]
**created_by_id** | **string** | ID of the user who created the video | [optional] [default to undefined]
**updated_by** | **string** | Display name of the user who last updated the video | [optional] [default to undefined]
**updated_by_id** | **string** | ID of the user who last updated the video | [optional] [default to undefined]
**file_size** | **number** | Size of the video file in bytes | [optional] [default to undefined]
**content_type** | **string** | MIME type of the video file | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** | Additional metadata about the video | [optional] [default to undefined]
**thumbnail_small** | **string** | URL to small thumbnail image | [optional] [default to undefined]
**thumbnail_medium** | **string** | URL to medium thumbnail image | [optional] [default to undefined]
**thumbnail_large** | **string** | URL to large thumbnail image | [optional] [default to undefined]
**thumbnail_huge** | **string** | URL to huge thumbnail image | [optional] [default to undefined]
**thumbnail_small_square** | **string** | URL to small square thumbnail image | [optional] [default to undefined]
**thumbnail_medium_square** | **string** | URL to medium square thumbnail image | [optional] [default to undefined]
**thumbnail_large_square** | **string** | URL to large square thumbnail image | [optional] [default to undefined]
**thumbnail_huge_square** | **string** | URL to huge square thumbnail image | [optional] [default to undefined]
**small** | **string** | URL to small version of the video | [optional] [default to undefined]
**medium** | **string** | URL to medium version of the video | [optional] [default to undefined]
**original** | **string** | URL to original video file | [optional] [default to undefined]

## Example

```typescript
import { Video } from 'fulcrum-generated';

const instance: Video = {
    access_key,
    url,
    track,
    status,
    uploaded,
    stored,
    processed,
    deleted_at,
    record_id,
    form_id,
    created_at,
    updated_at,
    created_by,
    created_by_id,
    updated_by,
    updated_by_id,
    file_size,
    content_type,
    metadata,
    thumbnail_small,
    thumbnail_medium,
    thumbnail_large,
    thumbnail_huge,
    thumbnail_small_square,
    thumbnail_medium_square,
    thumbnail_large_square,
    thumbnail_huge_square,
    small,
    medium,
    original,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
