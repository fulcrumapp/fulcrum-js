# CreateWorkflowRequestWorkflow


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Display name of the workflow | [default to undefined]
**description** | **string** | Optional description of the workflow | [optional] [default to undefined]
**object_type** | **string** | Type of object the workflow targets (for example, form) | [default to undefined]
**object_resource_id** | **string** | Identifier of the object resource this workflow is associated with | [default to undefined]
**active** | **boolean** | Whether the workflow is active | [optional] [default to undefined]
**run_for_bulk_actions** | **boolean** | Whether the workflow should run during bulk record actions | [optional] [default to undefined]
**event_type** | **string** | Event that triggers the workflow (for example, record_created) | [default to undefined]
**steps** | [**Array&lt;CreateWorkflowRequestWorkflowStepsInner&gt;**](CreateWorkflowRequestWorkflowStepsInner.md) | Ordered list of workflow steps | [default to undefined]

## Example

```typescript
import { CreateWorkflowRequestWorkflow } from 'fulcrum-generated';

const instance: CreateWorkflowRequestWorkflow = {
    name,
    description,
    object_type,
    object_resource_id,
    active,
    run_for_bulk_actions,
    event_type,
    steps,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
