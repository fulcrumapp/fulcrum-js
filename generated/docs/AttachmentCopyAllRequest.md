# AttachmentCopyAllRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source_parent_id** | **string** | The ID of the source parent (e.g. form ID) to copy reference files from | [default to undefined]
**destination_parent_id** | **string** | The ID of the destination parent (e.g. form ID) to copy reference files to | [default to undefined]
**parent_type** | **string** | The type of the parent resource | [default to undefined]

## Example

```typescript
import { AttachmentCopyAllRequest } from 'fulcrum-generated';

const instance: AttachmentCopyAllRequest = {
    source_parent_id,
    destination_parent_id,
    parent_type,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
