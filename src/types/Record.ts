import { DataContainer } from "./DataContainer";

/**
 * Record Photo Field
 */
export interface Photo {
  caption?: Nullable<string>;
  photo_id: string;
}

/**
 * Record ChoiceList Field
 */
export interface ChoiceList {
  other_values: string[];
  choice_values: string[];
}

export interface LocationAttributes {
  latitude: number;
  longitude: number;
  altitude: number;
  horizontal_accuracy: number;
}

export interface FormValue {
  temporary_place_holder: string;
  // TODO: Define props of FormValue
}

export interface Record {
  status?: Nullable<string>;
  version?: Nullable<number>;
  id?: Nullable<string>;
  created_at?: Nullable<string>;
  updated_at?: Nullable<string>;
  client_created_at?: Nullable<string>;
  client_updated_at?: Nullable<string>;
  created_by?: Nullable<string>;
  created_by_id?: Nullable<string>;
  updated_by?: Nullable<string>;
  updated_by_id?: Nullable<string>;
  created_location?: Nullable<LocationAttributes>;
  updated_location?: Nullable<LocationAttributes>;
  created_duration?: Nullable<number>;
  updated_duration?: Nullable<number>;
  edited_duration?: Nullable<number>;
  form_id: string;
  project_id?: Nullable<string>;
  changeset_id?: Nullable<string>;
  assigned_to?: Nullable<string>;
  assigned_to_id?: Nullable<string>;
  form_values: FormValue;
  latitude: number;
  longitude: number;
  altitude?: Nullable<number>;
  speed?: Nullable<number>;
  course?: Nullable<number>;
  horizontal_accuracy?: Nullable<number>;
  vertical_accuracy?: Nullable<number>;
}

export interface RecordContainer extends DataContainer<Record> {
  objects: Record[];
}
