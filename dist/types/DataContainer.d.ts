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
    objects: T[];
    perPage: number;
    totalCount: number;
    totalPages: number;
}
