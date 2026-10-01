# Signature


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | **string** | Unique identifier for the signature | [optional] [default to undefined]
**url** | **string** | API URL to retrieve this signature | [optional] [default to undefined]
**uploaded** | **boolean** | Whether the signature has been uploaded | [optional] [default to undefined]
**stored** | **boolean** | Whether the signature has been stored | [optional] [default to undefined]
**processed** | **boolean** | Whether the signature has been processed | [optional] [default to undefined]
**deleted_at** | **string** | Timestamp when the signature was deleted | [optional] [default to undefined]
**record_id** | **string** | ID of the associated record | [optional] [default to undefined]
**form_id** | **string** | ID of the associated form | [optional] [default to undefined]
**file_size** | **number** | Size of the signature file in bytes | [optional] [default to undefined]
**content_type** | **string** | MIME type of the signature file | [optional] [default to undefined]
**thumbnail** | **string** | URL to the thumbnail version of the signature | [optional] [default to undefined]
**large** | **string** | URL to the large version of the signature | [optional] [default to undefined]
**original** | **string** | URL to the original signature file | [optional] [default to undefined]
**created_at** | **string** | Timestamp when the signature was created | [optional] [default to undefined]
**updated_at** | **string** | Timestamp when the signature was last updated | [optional] [default to undefined]
**created_by** | **string** | Display name of the user who created the signature | [optional] [default to undefined]
**created_by_id** | **string** | ID of the user who created the signature | [optional] [default to undefined]
**updated_by** | **string** | Display name of the user who last updated the signature | [optional] [default to undefined]
**updated_by_id** | **string** | ID of the user who last updated the signature | [optional] [default to undefined]

## Example

```typescript
import { Signature } from 'fulcrum-generated';

const instance: Signature = {
    access_key,
    url,
    uploaded,
    stored,
    processed,
    deleted_at,
    record_id,
    form_id,
    file_size,
    content_type,
    thumbnail,
    large,
    original,
    created_at,
    updated_at,
    created_by,
    created_by_id,
    updated_by,
    updated_by_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
