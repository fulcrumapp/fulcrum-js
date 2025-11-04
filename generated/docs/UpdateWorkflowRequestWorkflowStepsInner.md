# UpdateWorkflowRequestWorkflowStepsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the step | [default to undefined]
**name** | **string** | Display name for the step | [optional] [default to undefined]
**description** | **string** | Optional description of the step | [optional] [default to undefined]
**step_type** | **string** | Type of step (for example, filter or email) | [default to undefined]
**arguments** | **object** | Arguments that configure the step | [default to undefined]
**next_steps** | **Array&lt;string&gt;** | Identifiers of the next steps that should run | [default to undefined]
**initial** | **boolean** | Indicates whether the step is the starting point | [default to undefined]

## Example

```typescript
import { UpdateWorkflowRequestWorkflowStepsInner } from 'fulcrum-generated';

const instance: UpdateWorkflowRequestWorkflowStepsInner = {
    id,
    name,
    description,
    step_type,
    arguments,
    next_steps,
    initial,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
