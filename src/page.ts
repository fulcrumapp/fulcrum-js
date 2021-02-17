//TODO: types
export interface DataContainer<T> {
  current_page: number;
  total_pages: number; // Total pages that can be requested with 'per_page' items in each page
  total_count: number; // Count of 'objects'
  per_page: number; // Configurable number of items per page. Max of 20,000 items per request
  objects: T[]; // Forms, Records, Photos, Choice Lists, etc.
}

export default class Page {
  //TODO: types
  //note: *very* similar to types/DataContainer<t>
  objects: any;
  currentPage: number;
  totalPages: number;
  totalCount: number;
  perPage: number;

  //TODO: types
  constructor(object: any, resourcesName: string) {
    this.objects = object[resourcesName];
    this.currentPage = object.current_page;
    this.totalPages = object.total_pages;
    this.totalCount = object.total_count;
    this.perPage = object.per_page;
  }
}
