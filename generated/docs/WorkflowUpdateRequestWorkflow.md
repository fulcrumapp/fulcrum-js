# WorkflowUpdateRequestWorkflow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Updated display name of the workflow | [optional] [default to undefined]
**description** | **string** | Updated description of the workflow | [optional] [default to undefined]
**object_type** | **string** | Updated object type targeted by the workflow | [optional] [default to undefined]
**object_resource_id** | **string** | Updated identifier of the object resource associated with the workflow | [optional] [default to undefined]
**active** | **boolean** | Whether the workflow is active | [optional] [default to undefined]
**event_type** | **string** | Updated event type that triggers the workflow | [optional] [default to undefined]
**steps** | **Array&lt;object&gt;** | Updated workflow steps | [optional] [default to undefined]

## Example

```typescript
import { WorkflowUpdateRequestWorkflow } from 'fulcrum-generated';

const instance: WorkflowUpdateRequestWorkflow = {
    name,
    description,
    object_type,
    object_resource_id,
    active,
    event_type,
    steps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
