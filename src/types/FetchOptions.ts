export default interface FetchOptions extends RequestInit {
  baseUrl?: string;
  body?: any;
  qs?: { [key: string]: string | number | boolean };
  userAgent?: string;
}
