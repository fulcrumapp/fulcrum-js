import { DataContainer } from "./DataContainer";

export interface ClassificationSetItem {
  label: string;
  value?: Nullable<string>;
  child_classifications?: ClassificationSetItem[];
}

export interface ClassificationSet {
  name: string;
  description?: Nullable<string>;
  version?: Nullable<number>;
  id?: Nullable<string>;
  created_at?: Nullable<string>;
  updated_at?: Nullable<string>;
  items: ClassificationSetItem[];
}

export interface ClassificationSetContainer extends DataContainer<ClassificationSet> {
  objects: ClassificationSet[];
}
