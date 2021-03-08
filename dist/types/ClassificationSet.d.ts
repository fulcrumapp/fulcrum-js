import DataContainer from "./DataContainer";
export interface ClassificationSetItem {
    child_classifications?: ClassificationSetItem[];
    label: string;
    value?: Nullable<string>;
}
export interface ClassificationSet {
    created_at?: Nullable<string>;
    description?: Nullable<string>;
    id?: Nullable<string>;
    items: ClassificationSetItem[];
    name: string;
    updated_at?: Nullable<string>;
    version?: Nullable<number>;
}
export interface ClassificationSetContainer extends DataContainer<ClassificationSet> {
    objects: ClassificationSet[];
}
