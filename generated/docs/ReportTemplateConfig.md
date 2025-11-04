# ReportTemplateConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **string** | The page size for the generated report. | [default to undefined]
**landscape** | **boolean** | Whether the report should be rendered in landscape orientation. | [default to undefined]
**margin_top** | **number** | Top margin in inches. | [default to undefined]
**margin_right** | **number** | Right margin in inches. | [default to undefined]
**margin_bottom** | **number** | Bottom margin in inches. | [default to undefined]
**margin_left** | **number** | Left margin in inches. | [default to undefined]
**output** | **string** | The output format for the generated report. | [default to undefined]
**hidden_fields** | **Array&lt;string&gt;** | Field data names that should be hidden in the report. | [optional] [default to undefined]
**field_empty_value** | **string** | Placeholder text used when a field value is empty. | [optional] [default to undefined]
**header_enabled** | **boolean** |  | [default to undefined]
**header_form_name** | **boolean** |  | [default to undefined]
**header_record_id** | **boolean** |  | [default to undefined]
**footer_enabled** | **boolean** |  | [default to undefined]
**footer_timestamp** | **boolean** |  | [default to undefined]
**footer_organization_image** | **boolean** |  | [default to undefined]
**footer_organization_info** | **boolean** |  | [default to undefined]
**footer_page_number** | **boolean** |  | [default to undefined]
**cover_page_enabled** | **boolean** |  | [default to undefined]
**cover_page_form_name** | **boolean** |  | [default to undefined]
**cover_page_form_description** | **boolean** |  | [default to undefined]
**cover_page_form_image** | **boolean** |  | [default to undefined]
**cover_page_title** | **boolean** |  | [default to undefined]
**cover_page_timestamp** | **boolean** |  | [default to undefined]
**cover_page_image_enabled** | **boolean** |  | [default to undefined]
**cover_page_image_caption** | **boolean** |  | [default to undefined]
**cover_page_map_enabled** | **boolean** |  | [default to undefined]
**cover_page_map_repeatables** | **boolean** |  | [default to undefined]
**cover_page_map_type** | **string** |  | [default to undefined]
**cover_page_map_size** | **string** |  | [default to undefined]
**cover_page_metadata_enabled** | **boolean** |  | [default to undefined]
**cover_page_metadata_created** | **boolean** |  | [default to undefined]
**cover_page_metadata_updated** | **boolean** |  | [default to undefined]
**cover_page_metadata_status** | **boolean** |  | [default to undefined]
**cover_page_metadata_location** | **boolean** |  | [default to undefined]
**cover_page_metadata_project** | **boolean** |  | [default to undefined]
**cover_page_metadata_assigned** | **boolean** |  | [default to undefined]
**parameters** | [**Array&lt;ReportTemplateParameter&gt;**](ReportTemplateParameter.md) | Parameter definitions used when running the report. | [default to undefined]

## Example

```typescript
import { ReportTemplateConfig } from 'fulcrum-generated';

const instance: ReportTemplateConfig = {
    size,
    landscape,
    margin_top,
    margin_right,
    margin_bottom,
    margin_left,
    output,
    hidden_fields,
    field_empty_value,
    header_enabled,
    header_form_name,
    header_record_id,
    footer_enabled,
    footer_timestamp,
    footer_organization_image,
    footer_organization_info,
    footer_page_number,
    cover_page_enabled,
    cover_page_form_name,
    cover_page_form_description,
    cover_page_form_image,
    cover_page_title,
    cover_page_timestamp,
    cover_page_image_enabled,
    cover_page_image_caption,
    cover_page_map_enabled,
    cover_page_map_repeatables,
    cover_page_map_type,
    cover_page_map_size,
    cover_page_metadata_enabled,
    cover_page_metadata_created,
    cover_page_metadata_updated,
    cover_page_metadata_status,
    cover_page_metadata_location,
    cover_page_metadata_project,
    cover_page_metadata_assigned,
    parameters,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
