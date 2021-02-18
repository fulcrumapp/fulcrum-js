import DataContainer from "./DataContainer";

type MinLat = number;
type MinLong = number;
type MaxLat = number;
type MaxLong = number;
export type BoundingBox = [MinLat, MinLong, MaxLat, MaxLong];

export interface StatusFieldChoice {
  label: string;
  value: string;
  color: string;
}

export interface StatusField {
  choices: StatusFieldChoice[];
  data_name: string;
  default_previous_value: boolean;
  default_value: string;
  description: string;
  disabled: boolean;
  enabled: boolean;
  hidden: boolean;
  key: string;
  label: string;
  read_only: boolean;
  required: boolean;
  type: string;
}

export interface Element {
  temporary_place_holder: string;
  // TODO: Define props of Element
}

export interface Form {
  assignment_enabled?: Nullable<boolean>;
  auto_assign?: Nullable<boolean>;
  bounding_box?: Nullable<BoundingBox>;
  created_at?: Nullable<string>;
  description?: Nullable<string>;
  elements: Element[];
  geometry_required?: Nullable<boolean>;
  geometry_types?: ["Point"] | [] | null;
  hidden_on_dashboard?: Nullable<boolean>;
  id?: Nullable<string>;
  image_large?: Nullable<string>;
  image_small?: Nullable<string>;
  image_thumbnail?: Nullable<string>;
  image?: Nullable<string>;
  name: string;
  projects_enabled?: Nullable<boolean>;
  record_count?: Nullable<number>;
  record_title_key: string;
  script?: Nullable<string>;
  status_field?: Nullable<StatusField>;
  title_field_keys?: Nullable<string[]>;
  updated_at?: Nullable<string>;
  version?: Nullable<number>;
}

export interface FormContainer extends DataContainer<Form> {
  objects: Form[];
}

export interface ShallowForm {
  // TODO: Further define props of ShallowForm
  id?: Nullable<string>;
}

export interface ShallowFormContainer extends DataContainer<ShallowForm> {
  objects: ShallowForm[];
}
