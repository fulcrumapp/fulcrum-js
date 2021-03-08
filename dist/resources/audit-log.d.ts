import List from "../actions/list";
import Find from "../actions/find";
import Resource from "./base";
export default class AuditLog extends Resource {
    get resourceName(): string;
    get resourcesName(): string;
}
export default interface AuditLog extends Resource, List, Find {
}
