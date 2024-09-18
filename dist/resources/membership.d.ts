export default class Membership extends Resource {
    get resourceName(): string;
    get resourcesName(): string;
    change(resourceType: any, id: any, action: any, membershipIds: any): Promise<any>;
}
import Resource from './base';
