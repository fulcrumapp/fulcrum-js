# RecordHistoryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_page** | **number** | Current page number (when using pagination) | [optional] [default to undefined]
**total_pages** | **number** | Total number of pages (when using pagination) | [optional] [default to undefined]
**total_count** | **number** | Total number of records (when using pagination) | [optional] [default to undefined]
**per_page** | **number** | Number of records per page (when using pagination) | [optional] [default to undefined]
**next_sequence** | **number** | Next sequence number (when using sequence-based pagination) | [optional] [default to undefined]
**records** | [**Array&lt;RecordHistoryItem&gt;**](RecordHistoryItem.md) |  | [optional] [default to undefined]

## Example

```typescript
import { RecordHistoryResponse } from 'fulcrum-generated';

const instance: RecordHistoryResponse = {
    current_page,
    total_pages,
    total_count,
    per_page,
    next_sequence,
    records,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
