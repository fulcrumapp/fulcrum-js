import DataContainer from "./DataContainer";
import Nullable from "./Nullable";

/**
 * Record Photo Field
 * covers audio, video, and photo value types
 */
export interface RecordMediaField {
  photo_id: string;
  caption?: Nullable<string>;
}

/**
 * Record/Repeatable ChoiceList Field
 * covers single choice, multiple choice, and classification value types
 */
export interface RecordChoiceListField {
  other_values: string[];
  choice_values: string[];
}

/**
 * Record/Repeatable for created_location and updated_location fields
 */
export interface LocationAttributesField {
  altitude: number;
  horizontal_accuracy: number;
  latitude: number;
  longitude: number;
}

/**
 * Record/Repeatable Address entry for form_values field
 */
export interface FormValueAddress {
  sub_thoroughfare: Nullable<string>;
  thoroughfare: Nullable<string>;
  suite: Nullable<string>;
  locality: Nullable<string>;
  sub_admin_area: Nullable<string>;
  admin_area: Nullable<string>;
  postal_code: Nullable<string>;
  country: Nullable<string>;
}

/**
 * Record/Repeatable Signature entry for form_values field
 */
export interface FormValueSignature {
  timestamp: Nullable<string>;
  signature_id: Nullable<string>;
}

/**
 * Record/Repeatable Record Link id entry for form_values field
 */
export interface FormValueRecordLink {
  record_id: Nullable<string>;
}

/**
 * All the accepable values for form_values field in record/repeatable
 * `string` covers things like Text, Numeric, Yes/No, Hyperlink, etc
 */
export interface FormValueField {
  [key: string]:
    | string
    | FormValueAddress
    | RecordChoiceListField
    | FormValueSignature
    | RecordMediaField[]
    | FormValueRecordLink[]
    | Repeatable[];
}

interface RecordBase {
  created_location?: Nullable<LocationAttributesField>;
  created_at?: Nullable<string>;
  updated_location?: Nullable<LocationAttributesField>;
  created_duration?: Nullable<number>;
  updated_at?: Nullable<string>;
  updated_duration?: Nullable<number>;
  edited_duration?: Nullable<number>;
  version?: Nullable<number>;
  updated_by_id?: Nullable<string>;
  created_by_id?: Nullable<string>;
  changeset_id?: Nullable<string>;
  form_values: FormValueField;
}

/**
 * Repeatable "record" used inside form_values in Record or Repeatable
 * */
export interface Repeatable extends RecordBase {
  id: string;
  geometry?: {
    type: string; //TODO: is "Point" the only valid value and should we use a union here?
    coordinates: [number, number];
  };
}

/**
 * Data structure for the Record API
 */
export interface Record extends RecordBase {
  altitude?: Nullable<number>;
  assigned_to_id?: Nullable<string>;
  assigned_to?: Nullable<string>;
  client_created_at?: Nullable<string>;
  client_updated_at?: Nullable<string>;
  course?: Nullable<number>;
  created_by?: Nullable<string>;
  form_id: string;
  horizontal_accuracy?: Nullable<number>;
  id?: Nullable<string>;
  latitude: number;
  longitude: number;
  project_id?: Nullable<string>;
  speed?: Nullable<number>;
  status?: Nullable<string>;
  updated_by?: Nullable<string>;
  vertical_accuracy?: Nullable<number>;
}

export type RecordContainer = DataContainer<Record>;
