import Nullable from "../types/Nullable";
import List from "../actions/list";
import Find from "../actions/find";
import Create from "../actions/create";
import Update from "../actions/update";
import Delete from "../actions/delete";
import Resource from "./base";
import Page from "../page";
export default class Form extends Resource {
    get resourceName(): string;
    get resourcesName(): string;
    history(id: string, version?: Nullable<string>): Promise<Page>;
}
export default interface Form extends Resource, List, Find, Create, Update, Delete {
}
