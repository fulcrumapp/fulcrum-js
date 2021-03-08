import DataContainer from "./DataContainer";
import Nullable from "./Nullable";

export interface Choice {
  label: string;
  value?: Nullable<string>;
}

export interface ChoiceList {
  choices: Choice[];
  created_at?: Nullable<string>;
  description?: Nullable<string>;
  id?: Nullable<string>;
  name: string;
  updated_at?: Nullable<string>;
  version?: Nullable<number>;
}

export interface ChoiceListContainer extends DataContainer<ChoiceList> {
  objects: ChoiceList[];
}
