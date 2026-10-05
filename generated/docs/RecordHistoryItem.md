# RecordHistoryItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** | Record ID | [optional] [default to undefined]
**version** | **number** | Record version number | [optional] [default to undefined]
**status** | **string** | Record status | [optional] [default to undefined]
**record_key** | **string** | Optional record key | [optional] [default to undefined]
**record_sequence** | **number** | Optional record sequence number | [optional] [default to undefined]
**form_id** | **string** | Form ID | [optional] [default to undefined]
**form_version** | **number** | Form version at time of record creation/update | [optional] [default to undefined]
**project_id** | **string** | Project ID | [optional] [default to undefined]
**created_at** | **string** | Record creation timestamp | [optional] [default to undefined]
**updated_at** | **string** | Record last update timestamp | [optional] [default to undefined]
**client_created_at** | **string** | Client-side creation timestamp | [optional] [default to undefined]
**client_updated_at** | **string** | Client-side update timestamp | [optional] [default to undefined]
**created_by** | **string** | Display name of user who created the record | [optional] [default to undefined]
**created_by_id** | **string** | ID of user who created the record | [optional] [default to undefined]
**updated_by** | **string** | Display name of user who last updated the record | [optional] [default to undefined]
**updated_by_id** | **string** | ID of user who last updated the record | [optional] [default to undefined]
**assigned_to** | **string** | Display name of assigned user | [optional] [default to undefined]
**assigned_to_id** | **string** | ID of assigned user | [optional] [default to undefined]
**form_values** | **{ [key: string]: any; }** | Form field values (processed) | [optional] [default to undefined]
**latitude** | **number** | Record location latitude | [optional] [default to undefined]
**longitude** | **number** | Record location longitude | [optional] [default to undefined]
**altitude** | **number** | Record location altitude in meters | [optional] [default to undefined]
**geometry** | [**RecordHistoryItemGeometry**](RecordHistoryItemGeometry.md) |  | [optional] [default to undefined]
**gps_device_capture** | [**GpsDeviceCaptureBase**](GpsDeviceCaptureBase.md) | Flexible GPS device metadata captured with the record. | [optional] [default to undefined]
**speed** | **number** | Speed at time of record creation in m/s | [optional] [default to undefined]
**course** | **number** | Course/heading in degrees | [optional] [default to undefined]
**horizontal_accuracy** | **number** | Horizontal accuracy in meters | [optional] [default to undefined]
**vertical_accuracy** | **number** | Vertical accuracy in meters | [optional] [default to undefined]
**changeset_id** | **string** | Changeset ID | [optional] [default to undefined]
**created_location** | [**AuditLocation**](AuditLocation.md) |  | [optional] [default to undefined]
**updated_location** | [**AuditLocation**](AuditLocation.md) |  | [optional] [default to undefined]
**created_duration** | **number** | Duration of record creation in seconds | [optional] [default to undefined]
**updated_duration** | **number** | Duration of record update in seconds | [optional] [default to undefined]
**edited_duration** | **number** | Total editing duration in seconds | [optional] [default to undefined]
**sequence** | **number** | Sequence number (when using sequence-based pagination) | [optional] [default to undefined]
**history_change_type** | **string** | Type of change (c&#x3D;create, u&#x3D;update, d&#x3D;delete) | [optional] [default to undefined]
**history_id** | **string** | History entry ID | [optional] [default to undefined]
**history_changed_by_id** | **string** | ID of user who made this change | [optional] [default to undefined]
**history_changed_by** | **string** | Display name of user who made this change | [optional] [default to undefined]
**history_created_at** | **string** | Timestamp when this history entry was created | [optional] [default to undefined]

## Example

```typescript
import { RecordHistoryItem } from 'fulcrum-generated';

const instance: RecordHistoryItem = {
    id,
    version,
    status,
    record_key,
    record_sequence,
    form_id,
    form_version,
    project_id,
    created_at,
    updated_at,
    client_created_at,
    client_updated_at,
    created_by,
    created_by_id,
    updated_by,
    updated_by_id,
    assigned_to,
    assigned_to_id,
    form_values,
    latitude,
    longitude,
    altitude,
    geometry,
    gps_device_capture,
    speed,
    course,
    horizontal_accuracy,
    vertical_accuracy,
    changeset_id,
    created_location,
    updated_location,
    created_duration,
    updated_duration,
    edited_duration,
    sequence,
    history_change_type,
    history_id,
    history_changed_by_id,
    history_changed_by,
    history_created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
