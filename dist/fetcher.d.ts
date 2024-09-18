export default class Fetcher {
    constructor(options: any);
    options: any;
    queue: Queue<import("p-queue/dist/priority-queue").default, import("p-queue").QueueAddOptions>;
    headers: any;
    _processOptions(opts: any): any;
    _fetch(url: any, options: any): Promise<any>;
    _queue(url: any, options: any): Promise<any>;
    get(path: any, opts: any): Promise<any>;
    post(path: any, opts: any): Promise<any>;
    put(path: any, opts: any): Promise<any>;
    del(path: any, opts: any): Promise<any>;
    registerAuthenticationErrorHandler(func: any): void;
    authenticationErrorHandler: any;
}
import Queue from 'p-queue';
