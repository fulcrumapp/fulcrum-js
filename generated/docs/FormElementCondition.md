# FormElementCondition

A visibility or required condition rule applied to a form element

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_key** | **string** | The key of the field being tested | [default to undefined]
**operator** | **string** | Comparison operator | [default to undefined]
**value** | **string** | The value to compare against (may be null for is_empty/is_not_empty operators) | [default to undefined]

## Example

```typescript
import { FormElementCondition } from 'fulcrum-generated';

const instance: FormElementCondition = {
    field_key,
    operator,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
