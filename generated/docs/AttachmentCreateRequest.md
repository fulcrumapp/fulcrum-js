# AttachmentCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owners** | [**Array&lt;AttachmentCreateRequestOwnersInner&gt;**](AttachmentCreateRequestOwnersInner.md) | Array of owner objects for the attachment | [default to undefined]
**name** | **string** | Name of the attachment | [optional] [default to undefined]
**file_size** | **number** | Size of the file in bytes | [optional] [default to undefined]
**metadata** | **{ [key: string]: any; }** | Optional metadata for the attachment | [optional] [default to undefined]

## Example

```typescript
import { AttachmentCreateRequest } from 'fulcrum-generated';

const instance: AttachmentCreateRequest = {
    owners,
    name,
    file_size,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
