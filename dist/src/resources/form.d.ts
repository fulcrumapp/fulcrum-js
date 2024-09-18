export default class Form extends Resource {
    get resourceName(): string;
    get resourcesName(): string;
    history(id: any, version?: null): Promise<Page>;
}
import Resource from './base';
import Page from '../page';
