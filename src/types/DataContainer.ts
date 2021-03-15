/**
 * DataContainer type inserts various object types
 * into the base return JSON
 *
 * Note: the following names in the JSON are converted to the specified camelCase
 *
 * current_page --> currentPage
 * total_pages --> totalPages
 * total_count --> totalCount
 * per_page --> perPage
 */
export default interface DataContainer<T> {
  currentPage: number;
  objects: T[]; // Forms, Records, Photos, Choice Lists, etc.
  perPage: number; // Configurable number of items per page. Max of 20,000 items per request
  totalCount: number; // Count of 'objects'
  totalPages: number; // Total pages that can be requested with 'per_page' items in each page
}
