import DataContainer from "./DataContainer";

/**
 * Record Photo Field
 */
export interface RecordPhotoField {
  caption?: Nullable<string>;
  photo_id: string;
}

/**
 * Record ChoiceList Field
 */
export interface RecordChoiceListField {
  other_values: string[];
  choice_values: string[];
}

export interface LocationAttributes {
  altitude: number;
  horizontal_accuracy: number;
  latitude: number;
  longitude: number;
}

export interface FormValue {
  temporary_place_holder: string;
  // TODO: Define props of FormValue
}

export interface Record {
  altitude?: Nullable<number>;
  assigned_to_id?: Nullable<string>;
  assigned_to?: Nullable<string>;
  changeset_id?: Nullable<string>;
  client_created_at?: Nullable<string>;
  client_updated_at?: Nullable<string>;
  course?: Nullable<number>;
  created_at?: Nullable<string>;
  created_by_id?: Nullable<string>;
  created_by?: Nullable<string>;
  created_duration?: Nullable<number>;
  created_location?: Nullable<LocationAttributes>;
  edited_duration?: Nullable<number>;
  form_id: string;
  form_values: FormValue;
  horizontal_accuracy?: Nullable<number>;
  id?: Nullable<string>;
  latitude: number;
  longitude: number;
  project_id?: Nullable<string>;
  speed?: Nullable<number>;
  status?: Nullable<string>;
  updated_at?: Nullable<string>;
  updated_by_id?: Nullable<string>;
  updated_by?: Nullable<string>;
  updated_duration?: Nullable<number>;
  updated_location?: Nullable<LocationAttributes>;
  version?: Nullable<number>;
  vertical_accuracy?: Nullable<number>;
}

export interface RecordContainer extends DataContainer<Record> {
  objects: Record[];
}
