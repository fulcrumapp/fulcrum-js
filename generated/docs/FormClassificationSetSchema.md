# FormClassificationSetSchema

Inline classification set definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Classification set resource ID | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**items** | [**Array&lt;FormClassificationItem&gt;**](FormClassificationItem.md) |  | [optional] [default to undefined]

## Example

```typescript
import { FormClassificationSetSchema } from 'fulcrum-generated';

const instance: FormClassificationSetSchema = {
    id,
    name,
    description,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
