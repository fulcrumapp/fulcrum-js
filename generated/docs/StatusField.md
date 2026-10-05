# StatusField

Status field configuration for a form

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Status field type identifier | [default to undefined]
**key** | **string** | Status field key | [optional] [default to undefined]
**label** | **string** | Display label visible to users | [default to undefined]
**data_name** | **string** | Programmatic status field name | [default to undefined]
**enabled** | **boolean** | Whether the status field is enabled | [optional] [default to undefined]
**default_value** | **string** | Default status value | [optional] [default to undefined]
**choices** | [**Array&lt;StatusFieldChoice&gt;**](StatusFieldChoice.md) | Available status choices | [optional] [default to undefined]

## Example

```typescript
import { StatusField } from 'fulcrum-generated';

const instance: StatusField = {
    type,
    key,
    label,
    data_name,
    enabled,
    default_value,
    choices,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
