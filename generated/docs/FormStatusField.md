# FormStatusField

The status field configuration for a form. The status field is a special system-level choice field present on every record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Always \&#39;StatusField\&#39; | [default to undefined]
**key** | **string** | Always \&#39;@status\&#39; for the status field | [default to '@status']
**label** | **string** | Display label for the status field | [optional] [default to 'Status']
**data_name** | **string** | Column name used in exports | [default to 'status']
**description** | **string** | Help text shown below the status field label | [optional] [default to undefined]
**default_value** | **string** | The default status value applied to new records | [optional] [default to undefined]
**enabled** | **boolean** | When true, the status field is visible on the record | [optional] [default to true]
**read_only** | **boolean** | When true, the status field cannot be changed in the mobile app | [optional] [default to false]
**hidden** | **boolean** | When true, the status field is hidden from the record form | [optional] [default to false]
**required** | **boolean** | When true, a status value is required to save the record | [optional] [default to false]
**disabled** | **boolean** |  | [optional] [default to false]
**choices** | [**Array&lt;FormElementChoice&gt;**](FormElementChoice.md) | List of valid status values. Each choice has a label, value, and display color. | [default to undefined]

## Example

```typescript
import { FormStatusField } from 'fulcrum-generated';

const instance: FormStatusField = {
    type,
    key,
    label,
    data_name,
    description,
    default_value,
    enabled,
    read_only,
    hidden,
    required,
    disabled,
    choices,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
