import { DataContainer } from "./DataContainer";

export interface Choice {
  label: string;
  value?: Nullable<string>;
}

export interface ChoiceList {
  name: string;
  description?: Nullable<string>;
  version?: Nullable<number>;
  id?: Nullable<string>;
  created_at?: Nullable<string>;
  updated_at?: Nullable<string>;
  choices: Choice[];
}

export interface ChoiceListContainer extends DataContainer<ChoiceList> {
  objects: ChoiceList[];
}
