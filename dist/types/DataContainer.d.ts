export default interface DataContainer<T> {
    current_page: number;
    objects: T[];
    per_page: number;
    total_count: number;
    total_pages: number;
}
