export default class Authorization extends Resource {
    get resourceName(): string;
    get resourcesName(): string;
    get createAction(): any;
    create(object: any, email: any, password: any): Promise<any>;
    regenerate(id: any): Promise<any>;
}
import Resource from './base';
