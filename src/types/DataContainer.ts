export default interface DataContainer<T> {
  current_page: number;
  objects: T[]; // Forms, Records, Photos, Choice Lists, etc.
  per_page: number; // Configurable number of items per page. Max of 20,000 items per request
  total_count: number; // Count of 'objects'
  total_pages: number; // Total pages that can be requested with 'per_page' items in each page
}
