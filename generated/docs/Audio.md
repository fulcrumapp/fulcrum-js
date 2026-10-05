# Audio


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | **string** | Unique identifier for the audio resource | [optional] [default to undefined]
**uploaded** | **boolean** | Whether the audio has been uploaded | [optional] [default to undefined]
**stored** | **boolean** | Whether the audio has been stored | [optional] [default to undefined]
**processed** | **boolean** | Whether the audio has been processed | [optional] [default to undefined]
**deleted_at** | **string** | Timestamp when the audio was deleted | [optional] [default to undefined]
**record_id** | **string** | ID of the associated record | [optional] [default to undefined]
**form_id** | **string** | ID of the associated form | [optional] [default to undefined]
**created_at** | **string** | Timestamp when the audio was created | [optional] [default to undefined]
**updated_at** | **string** | Timestamp when the audio was last updated | [optional] [default to undefined]
**created_by** | **string** | Display name of the user who created the audio | [optional] [default to undefined]
**created_by_id** | **string** | ID of the user who created the audio | [optional] [default to undefined]
**updated_by** | **string** | Display name of the user who last updated the audio | [optional] [default to undefined]
**updated_by_id** | **string** | ID of the user who last updated the audio | [optional] [default to undefined]
**file_size** | **number** | Size of the audio file in bytes | [optional] [default to undefined]
**content_type** | **string** | MIME type of the audio file | [optional] [default to undefined]
**url** | **string** | URL to access the audio resource | [optional] [default to undefined]
**track** | **string** | URL to access the audio track (if available) | [optional] [default to undefined]
**status** | **string** | Processing status of the audio | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** | Audio metadata (e.g., duration, format details) | [optional] [default to undefined]
**small** | **string** | URL to small version of the audio (if processed) | [optional] [default to undefined]
**medium** | **string** | URL to medium version of the audio (if processed) | [optional] [default to undefined]
**original** | **string** | URL to original audio file (if stored) | [optional] [default to undefined]

## Example

```typescript
import { Audio } from 'fulcrum-generated';

const instance: Audio = {
    access_key,
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
    url,
    track,
    status,
    metadata,
    small,
    medium,
    original,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
