export default class Changeset extends Resource {
    get resourceName(): string;
    get resourcesName(): string;
    close(id: any): Promise<any>;
}
import Resource from './base';
