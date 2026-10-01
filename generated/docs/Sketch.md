# Sketch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **string** | Timestamp when the sketch was created | [optional] [default to undefined]
**updated_at** | **string** | Timestamp when the sketch was last updated | [optional] [default to undefined]
**access_key** | **string** | Unique identifier for the sketch | [optional] [default to undefined]
**uploaded** | **boolean** | Whether the sketch has been uploaded | [optional] [default to undefined]
**stored** | **boolean** | Whether the sketch has been stored | [optional] [default to undefined]
**processed** | **boolean** | Whether the sketch has been processed | [optional] [default to undefined]
**record_id** | **string** | ID of the associated record | [optional] [default to undefined]
**form_id** | **string** | ID of the associated form | [optional] [default to undefined]
**file_size** | **number** | Size of the sketch file in bytes | [optional] [default to undefined]
**created_by** | **string** | Display name of the user who created the sketch | [optional] [default to undefined]
**created_by_id** | **string** | ID of the user who created the sketch | [optional] [default to undefined]
**updated_by** | **string** | Display name of the user who last updated the sketch | [optional] [default to undefined]
**updated_by_id** | **string** | ID of the user who last updated the sketch | [optional] [default to undefined]
**content_type** | **string** | MIME type of the sketch file | [optional] [default to undefined]
**exif** | **{ [key: string]: any; }** | EXIF metadata from the sketch | [optional] [default to undefined]
**url** | **string** | API URL to access this sketch resource | [optional] [default to undefined]
**thumbnail** | **string** | URL to thumbnail version of the sketch | [optional] [default to undefined]
**small** | **string** | URL to small version of the sketch | [optional] [default to undefined]
**medium** | **string** | URL to medium version of the sketch | [optional] [default to undefined]
**large** | **string** | URL to large version of the sketch | [optional] [default to undefined]
**original** | **string** | URL to original version of the sketch | [optional] [default to undefined]

## Example

```typescript
import { Sketch } from 'fulcrum-generated';

const instance: Sketch = {
    created_at,
    updated_at,
    access_key,
    uploaded,
    stored,
    processed,
    record_id,
    form_id,
    file_size,
    created_by,
    created_by_id,
    updated_by,
    updated_by_id,
    content_type,
    exif,
    url,
    thumbnail,
    small,
    medium,
    large,
    original,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
