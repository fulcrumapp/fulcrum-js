import "portable-fetch";
import Queue from "p-queue";
import FetchOptions from "./types/FetchOptions";
export default class Fetcher {
    options: FetchOptions;
    queue: Queue;
    headers: any;
    authenticationErrorHandler?: Function;
    constructor(options: FetchOptions);
    _processOptions(opts: FetchOptions): {
        headers: any;
        baseUrl?: string | undefined;
        body?: any;
        qs?: {
            [key: string]: string | number;
        } | undefined;
        userAgent?: string | undefined;
        cache?: "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload" | undefined;
        credentials?: "include" | "omit" | "same-origin" | undefined;
        integrity?: string | undefined;
        keepalive?: boolean | undefined;
        method?: string | undefined;
        mode?: "same-origin" | "cors" | "navigate" | "no-cors" | undefined;
        redirect?: "error" | "follow" | "manual" | undefined;
        referrer?: string | undefined;
        referrerPolicy?: "" | "same-origin" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url" | undefined;
        signal?: AbortSignal | null | undefined;
        window?: any;
    };
    _fetch(url: string, opts: FetchOptions): Promise<any>;
    _queue(url: string, opts: FetchOptions): Promise<any>;
    get(path: string, opts?: FetchOptions): Promise<any>;
    post(path: string, opts?: FetchOptions): Promise<any>;
    put(path: string, opts?: FetchOptions): Promise<any>;
    del(path: string, opts?: FetchOptions): Promise<any>;
    registerAuthenticationErrorHandler(func: Function): void;
}
