# FormBody

The form object sent when creating or updating a form

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The display name of the form | [default to undefined]
**description** | **string** | A longer description of the form\&#39;s purpose | [optional] [default to undefined]
**elements** | [**Array&lt;FormElement&gt;**](FormElement.md) | Ordered list of form elements (fields, sections, repeatables, labels, etc.) | [default to undefined]
**status_field** | [**FormStatusField**](FormStatusField.md) |  | [optional] [default to undefined]
**title_field_keys** | **Array&lt;string&gt;** | Keys of the fields whose values are combined to form the record title | [optional] [default to undefined]
**record_prefix** | **string** | Short prefix prepended to auto-generated record numbers (e.g. \&#39;INV\&#39;) | [optional] [default to undefined]
**geometry_types** | **Array&lt;string&gt;** | Allowed geometry types for record location. Omit or leave empty to disable record location. | [optional] [default to undefined]
**geometry_required** | **boolean** | When true, a location is required to save the record | [optional] [default to false]
**script** | **string** | JavaScript Data Events script evaluated on the mobile app | [optional] [default to undefined]
**projects_enabled** | **boolean** | When true, records can be assigned to projects | [optional] [default to true]
**assignment_enabled** | **boolean** | When true, records can be assigned to users | [optional] [default to true]
**auto_assign** | **boolean** | When true, new records are automatically assigned to the creating user | [optional] [default to false]
**hidden_on_dashboard** | **boolean** | When true, this form is hidden from the Fulcrum dashboard | [optional] [default to false]

## Example

```typescript
import { FormBody } from 'fulcrum-generated';

const instance: FormBody = {
    name,
    description,
    elements,
    status_field,
    title_field_keys,
    record_prefix,
    geometry_types,
    geometry_required,
    script,
    projects_enabled,
    assignment_enabled,
    auto_assign,
    hidden_on_dashboard,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
