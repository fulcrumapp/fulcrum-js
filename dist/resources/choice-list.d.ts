import List from "../actions/list";
import Find from "../actions/find";
import Create from "../actions/create";
import Update from "../actions/update";
import Delete from "../actions/delete";
import Resource from "./base";
export default class ChoiceList extends Resource {
    get resourceName(): string;
    get resourcesName(): string;
}
export default interface ChoiceList extends Resource, List, Find, Create, Update, Delete {
}
