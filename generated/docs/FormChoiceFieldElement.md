# FormChoiceFieldElement

A single-select or multi-select dropdown / radio field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**key** | **string** | Unique 4-character hex key identifying this element within the form (e.g. \&#39;af72\&#39;) | [default to undefined]
**label** | **string** | Display label for the field | [default to undefined]
**data_name** | **string** | Snake-case column name used in exports and the query API (e.g. \&#39;park_name\&#39;) | [default to undefined]
**description** | **string** | Help text shown below the field label | [optional] [default to undefined]
**required** | **boolean** | Whether a value is required to save the record | [optional] [default to false]
**disabled** | **boolean** | Whether the field is read-only in the mobile app | [optional] [default to false]
**hidden** | **boolean** | Whether the field is hidden by default | [optional] [default to false]
**default_value** | **any** |  | [optional] [default to undefined]
**visible_conditions_type** | **string** | Whether ALL or ANY visible conditions must be met. Null means no conditions. | [optional] [default to undefined]
**visible_conditions** | [**Array&lt;FormElementCondition&gt;**](FormElementCondition.md) | Conditions that control when this element is visible | [optional] [default to undefined]
**required_conditions_type** | **string** | Whether ALL or ANY required conditions must be met. Null means no conditions. | [optional] [default to undefined]
**required_conditions** | [**Array&lt;FormElementCondition&gt;**](FormElementCondition.md) | Conditions that control when this element becomes required | [optional] [default to undefined]
**multiple** | **boolean** | When true, allows selecting multiple choices | [optional] [default to false]
**allow_other** | **boolean** | When true, users can type a custom value not in the choices list | [optional] [default to false]
**choices** | [**Array&lt;FormElementChoice&gt;**](FormElementChoice.md) | List of selectable options | [optional] [default to undefined]
**choice_list_id** | **string** | ID of a shared Choice List resource to use instead of inline choices | [optional] [default to undefined]
**min_length** | **number** | Minimum number of selections required (when &#x60;multiple&#x60; is true) | [optional] [default to undefined]
**max_length** | **number** | Maximum number of selections allowed (when &#x60;multiple&#x60; is true) | [optional] [default to undefined]

## Example

```typescript
import { FormChoiceFieldElement } from 'fulcrum-generated';

const instance: FormChoiceFieldElement = {
    type,
    key,
    label,
    data_name,
    description,
    required,
    disabled,
    hidden,
    default_value,
    visible_conditions_type,
    visible_conditions,
    required_conditions_type,
    required_conditions,
    multiple,
    allow_other,
    choices,
    choice_list_id,
    min_length,
    max_length,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
