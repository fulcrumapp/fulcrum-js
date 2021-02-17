export interface Headers {
  [key: string]: string | null;
}
export default interface FetchOptions {
  baseUrl?: string;
  headers?: Headers;
  body?: any;
  qs?: { [key: string]: string };
  userAgent?: string;
}
