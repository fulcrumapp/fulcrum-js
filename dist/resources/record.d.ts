export default class Record extends Resource {
    get resourceName(): string;
    get resourcesName(): string;
    delete(id: any, changesetID: any): any;
    history(id: any): Promise<Page>;
}
import Resource from './base';
import Page from '../page';
