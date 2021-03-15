import List from "../actions/list";
import Find from "../actions/find";
import Resource from "./base";
export default class Membership extends Resource {
    get resourceName(): string;
    get resourcesName(): string;
    change(resourceType: string, id: string, action: string, membershipIds: string[]): Promise<any>;
}
export default interface Membership extends Resource, List, Find {
}
