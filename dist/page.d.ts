export default class Page {
    objects: any[];
    currentPage: number;
    totalPages: number;
    totalCount: number;
    perPage: number;
    constructor(object: any, resourcesName: string);
}
