import Client from "../client";

export default abstract class Base {
  client: Client;

  abstract get resourcesName(): string;
  abstract get resourceName(): string;

  constructor(client: Client) {
    this.client = client;
  }

  collectionPath(): string {
    return this.resourcesName;
  }

  actionPath(action: string): string {
    return `${this.resourcesName}/${action}`;
  }

  memberPath(id: string): string {
    return `${this.resourcesName}/${id}`;
  }

  memberActionPath(id: string, action: string): string {
    return `${this.resourcesName}/${id}/${action}`;
  }

  attributesForObject(object: any) {
    const attributes: any = {};
    attributes[this.resourceName] = object;
    return attributes;
  }
}
