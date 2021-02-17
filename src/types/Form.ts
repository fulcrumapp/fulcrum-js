import { DataContainer } from "./DataContainer";

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
  type: string;
  label: string;
  key: string;
  data_name: string;
  default_value: string;
  enabled: boolean;
  read_only: boolean;
  hidden: boolean;
  description: string;
  choices: StatusFieldChoice[];
  required: boolean;
  disabled: boolean;
  default_previous_value: boolean;
}

export interface Element {
  temporary_place_holder: string;
  // TODO: Define props of Element
}

export interface Form {
  name: string;
  description?: Nullable<string>;
  version?: Nullable<number>;
  bounding_box?: Nullable<BoundingBox>;
  record_title_key: string;
  title_field_keys?: Nullable<string[]>;
  status_field?: Nullable<StatusField>;
  auto_assign?: Nullable<boolean>;
  hidden_on_dashboard?: Nullable<boolean>;
  record_count?: Nullable<number>;
  geometry_types?: ["Point"] | [] | null;
  geometry_required?: Nullable<boolean>;
  script?: Nullable<string>;
  projects_enabled?: Nullable<boolean>;
  assignment_enabled?: Nullable<boolean>;
  id?: Nullable<string>;
  created_at?: Nullable<string>;
  updated_at?: Nullable<string>;
  image?: Nullable<string>;
  image_thumbnail?: Nullable<string>;
  image_small?: Nullable<string>;
  image_large?: Nullable<string>;
  elements: Element[];
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
