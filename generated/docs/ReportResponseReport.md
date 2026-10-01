# ReportResponseReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | **string** | The state of the report | [default to undefined]
**id** | **string** | The unique identifier for the report | [default to undefined]
**created_at** | **string** | The timestamp when the report was created | [default to undefined]
**updated_at** | **string** | The timestamp when the report was last updated | [default to undefined]
**record_id** | **string** | The ID of the record the report was generated for | [default to undefined]
**template_id** | **string** | The ID of the template used to generate the report | [optional] [default to undefined]
**started_at** | **string** | The timestamp when report generation started | [optional] [default to undefined]
**completed_at** | **string** | The timestamp when report generation completed | [optional] [default to undefined]
**failed_at** | **string** | The timestamp when report generation failed (null if successful) | [optional] [default to undefined]
**url** | **string** | The URL to download the generated report | [optional] [default to undefined]

## Example

```typescript
import { ReportResponseReport } from 'fulcrum-generated';

const instance: ReportResponseReport = {
    state,
    id,
    created_at,
    updated_at,
    record_id,
    template_id,
    started_at,
    completed_at,
    failed_at,
    url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
