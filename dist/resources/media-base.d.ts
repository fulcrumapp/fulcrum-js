import * as FormData from "form-data";
import List from "../actions/list";
import Find from "../actions/find";
import Resource from "./base";
export default abstract class MediaResource extends Resource {
    abstract get createAction(): string;
    abstract get versions(): string[];
    optionsForUpload(file: File, attributes: {
        [key: string]: string;
    }): {
        body: FormData;
        headers: {};
    };
    create(file: File, attributes: {
        [key: string]: string;
    }): Promise<any>;
    media(accessKey: string, version?: string): Promise<ReadableStream<Uint8Array> | null>;
}
export default interface MediaResource extends Resource, List, Find {
}
