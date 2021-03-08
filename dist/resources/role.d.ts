import List from "../actions/list";
import Resource from "./base";
export default class Role extends Resource {
    get resourceName(): string;
    get resourcesName(): string;
}
export default interface Role extends Resource, List {
}
