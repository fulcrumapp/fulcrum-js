import Client from "../client";

export default abstract class Base {
  client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  collectionPath(): string {
    return this.resourcesName;
  }

  //TODO: types
  actionPath(action: any): string {
    return `${this.resourcesName}/${action}`;
  }

  memberPath(id: string): string {
    return `${this.resourcesName}/${id}`;
  }

  //TODO: types
  memberActionPath(id: string, action: any): string {
    return `${this.resourcesName}/${id}/${action}`;
  }

  //TODO: types
  attributesForObject(object: any) {
    const attributes: any = {};
    attributes[this.resourceName] = object;
    return attributes;
  }

  abstract get resourcesName(): string;
  abstract get resourceName(): string;
}
