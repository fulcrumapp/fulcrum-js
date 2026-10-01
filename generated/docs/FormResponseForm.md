# FormResponseForm

The form object with common properties and metadata. Additional form properties may also be returned by the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique form ID | [optional] [default to undefined]
**name** | **string** | Form name | [optional] [default to undefined]
**description** | **string** | Form description | [optional] [default to undefined]
**elements** | [**Array&lt;FormElement&gt;**](FormElement.md) | Form elements | [optional] [default to undefined]
**status_field** | [**StatusField**](StatusField.md) |  | [optional] [default to undefined]
**record_count** | **number** | Number of records in this form | [optional] [default to undefined]
**created_at** | **string** | ISO 8601 creation timestamp | [optional] [default to undefined]
**updated_at** | **string** | ISO 8601 last update timestamp | [optional] [default to undefined]
**geometry_types** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**auto_assign** | **boolean** |  | [optional] [default to undefined]
**projects_enabled** | **boolean** |  | [optional] [default to undefined]
**assignment_enabled** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { FormResponseForm } from 'fulcrum-generated';

const instance: FormResponseForm = {
    id,
    name,
    description,
    elements,
    status_field,
    record_count,
    created_at,
    updated_at,
    geometry_types,
    auto_assign,
    projects_enabled,
    assignment_enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
