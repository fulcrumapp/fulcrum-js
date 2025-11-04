# ClassificationSetsCreateRequestClassificationSet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the classification set | [default to undefined]
**description** | **string** | Description of the classification set | [optional] [default to undefined]
**items** | [**Array&lt;ClassificationSetsCreateRequestClassificationSetItemsInner&gt;**](ClassificationSetsCreateRequestClassificationSetItemsInner.md) | Classification items with hierarchical structure | [default to undefined]

## Example

```typescript
import { ClassificationSetsCreateRequestClassificationSet } from 'fulcrum-generated';

const instance: ClassificationSetsCreateRequestClassificationSet = {
    name,
    description,
    items,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
