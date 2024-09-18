export default class Base {
    constructor(client: any);
    client: any;
    collectionPath(): any;
    actionPath(action: any): string;
    memberPath(id: any): string;
    memberActionPath(id: any, action: any): string;
    attributesForObject(object: any): {};
}
