import Client from "../client";
export default abstract class Base {
    client: Client;
    abstract get resourcesName(): string;
    abstract get resourceName(): string;
    constructor(client: Client);
    collectionPath(): string;
    actionPath(action: string): string;
    memberPath(id: string): string;
    memberActionPath(id: string, action: string): string;
    attributesForObject(object: any): any;
}
