import Resource from "./base";
import List from "../actions/list";
import Find from "../actions/find";
import Create from "../actions/create";
import Update from "../actions/update";
import Page from "../page";
export default class Record extends Resource {
    get resourceName(): string;
    get resourcesName(): string;
    delete(id: string, changesetID: string): Promise<any>;
    history(id: string): Promise<Page>;
}
export default interface Record extends Resource, List, Find, Create, Update {
}
