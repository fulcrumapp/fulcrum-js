import "portable-fetch";
import Queue from "p-queue";

import FetchOptions from "./types/FetchOptions";

function getQueryString(params: { [key: string]: string }) {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
    .join("&");
}

function errorMessageForStatus(status: number): string {
  const messages: { [key: number]: string } = {
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
  };

  return messages[status] || `HTTP ${status}`;
}

export default class Fetcher {
  options: FetchOptions;
  queue: Queue;
  headers: any;
  authenticationErrorHandler?: Function;

  constructor(options: FetchOptions) {
    this.options = options;
    this.queue = new Queue({ concurrency: 3 });
    this.headers = options.headers ?? {};
  }

  _processOptions(opts: FetchOptions) {
    const options = {
      ...opts,
      headers: {
        ...this.headers,
        ...opts.headers,
      },
    };

    // remove any nil or blank headers
    // (e.g. to automatically set Content-Type with `FormData` boundary)
    Object.keys(options.headers).forEach(key => {
      if (options.headers[key] === undefined || options.headers[key] === null || options.headers[key] === "") {
        delete options.headers[key];
      }
    });

    delete options.baseUrl;

    if (
      options &&
      options.hasOwnProperty("body") &&
      options.hasOwnProperty("headers") &&
      options.headers["Content-Type"] === "application/json"
    ) {
      options.body = JSON.stringify(options.body);
    }

    return options;
  }

  async _fetch(url: string, opts: FetchOptions) {
    const resp = await fetch(url, opts);

    if (!resp.ok) {
      const errorMessage = errorMessageForStatus(resp.status) || "Unknown Error";

      if (errorMessage === "Unauthorized" && this.authenticationErrorHandler) {
        this.authenticationErrorHandler();
      }

      throw new Error(errorMessage);
    }

    const contentType = resp.headers.get("Content-Type");

    if (contentType && contentType.split(";")[0] === "application/json") {
      return resp.json();
    }

    return resp.text();
  }

  _queue(url: string, opts: FetchOptions) {
    return this.queue.add(() => this._fetch(url, opts));
  }

  get(path: string, opts?: FetchOptions) {
    let url = this.options.baseUrl + "/" + path;

    if (opts && opts.hasOwnProperty("qs")) {
      url += "?" + getQueryString(opts.qs as { [key: string]: string });
      delete opts.qs;
    }

    const options = this._processOptions(Object.assign({ method: "GET" }, opts));

    return this._queue(url, options);
  }

  post(path: string, opts?: FetchOptions) {
    const url = this.options.baseUrl + "/" + path;

    const options = this._processOptions(Object.assign({ method: "POST" }, opts));

    return this._queue(url, options);
  }

  put(path: string, opts?: FetchOptions) {
    const url = this.options.baseUrl + "/" + path;

    const options = this._processOptions(Object.assign({ method: "PUT" }, opts));

    return this._queue(url, options);
  }

  del(path: string, opts?: FetchOptions) {
    const url = this.options.baseUrl + "/" + path;

    const options = this._processOptions(Object.assign({ method: "DELETE" }, opts));

    return this._queue(url, options);
  }

  registerAuthenticationErrorHandler(func: Function) {
    this.authenticationErrorHandler = func;
  }
}
