import List from "../actions/list";
import Find from "../actions/find";
import Create from "../actions/create";
import Update from "../actions/update";
import Resource from "./base";
export default class Changeset extends Resource {
    get resourceName(): string;
    get resourcesName(): string;
    close(id: string): Promise<any>;
}
export default interface Changeset extends Resource, List, Find, Create, Update {
}
