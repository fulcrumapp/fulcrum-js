/** The Page Class
 * Note: the following names in the JSON are converted to the specified camelCase
 *
 * current_page --> currentPage
 * total_pages --> totalPages
 * total_count --> totalCount
 * per_page --> perPage
 */
export default class Page {
  objects: any[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
  perPage: number;

  constructor(object: any, resourcesName: string) {
    this.objects = object[resourcesName];
    this.currentPage = object.current_page;
    this.totalPages = object.total_pages;
    this.totalCount = object.total_count;
    this.perPage = object.per_page;
  }
}
