import List from "../actions/list";
import Find from "../actions/find";
import Update from "../actions/update";
import Delete from "../actions/delete";
import Resource from "./base";
export default class Authorization extends Resource {
    get resourceName(): string;
    get resourcesName(): string;
    get createAction(): string;
    create(object: any, email: string, password: string): Promise<any>;
    regenerate(id: string): Promise<any>;
}
export default interface Authorization extends Resource, List, Find, Update, Delete {
}
