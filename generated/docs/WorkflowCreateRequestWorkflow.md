# WorkflowCreateRequestWorkflow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Display name of the workflow | [default to undefined]
**description** | **string** | Optional description of the workflow | [optional] [default to undefined]
**object_type** | **string** | Type of object the workflow targets (for example, form) | [default to undefined]
**object_resource_id** | **string** | Identifier of the object resource associated with the workflow | [default to undefined]
**event_type** | **string** | Type of event that triggers the workflow | [default to undefined]
**steps** | **Array&lt;object&gt;** | Steps that define the workflow logic | [default to undefined]

## Example

```typescript
import { WorkflowCreateRequestWorkflow } from 'fulcrum-generated';

const instance: WorkflowCreateRequestWorkflow = {
    name,
    description,
    object_type,
    object_resource_id,
    event_type,
    steps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
