# ReportTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Unique identifier for the report template | [optional] [default to undefined]
**name** | **string** | The name of the report template | [optional] [default to undefined]
**description** | **string** | A description of the report template | [optional] [default to undefined]
**body** | **string** | The HTML/EJS template for the report body | [optional] [default to undefined]
**header** | **string** | The HTML/EJS template for the report header | [optional] [default to undefined]
**filename_pattern** | **string** | Pattern for generating report filenames | [optional] [default to undefined]
**footer** | **string** | The HTML/EJS template for the report footer | [optional] [default to undefined]
**styles** | **string** | CSS styles for the report | [optional] [default to undefined]
**script** | **string** | JavaScript code for the report | [optional] [default to undefined]
**config** | **{ [key: string]: any; }** | Configuration settings for the report | [optional] [default to undefined]
**status** | **string** | The status of the report template | [optional] [default to undefined]
**type** | **string** | The type of the report template | [optional] [default to undefined]
**form_id** | **string** | The ID of the form this report template is associated with | [optional] [default to undefined]
**created_at** | **string** | Timestamp when the report template was created | [optional] [default to undefined]
**updated_at** | **string** | Timestamp when the report template was last updated | [optional] [default to undefined]
**created_by** | **string** | Display name of the user who created the report template | [optional] [default to undefined]
**created_by_id** | **string** | ID of the user who created the report template | [optional] [default to undefined]
**updated_by** | **string** | Display name of the user who last updated the report template | [optional] [default to undefined]
**updated_by_id** | **string** | ID of the user who last updated the report template | [optional] [default to undefined]

## Example

```typescript
import { ReportTemplate } from 'fulcrum-generated';

const instance: ReportTemplate = {
    id,
    name,
    description,
    body,
    header,
    filename_pattern,
    footer,
    styles,
    script,
    config,
    status,
    type,
    form_id,
    created_at,
    updated_at,
    created_by,
    created_by_id,
    updated_by,
    updated_by_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
