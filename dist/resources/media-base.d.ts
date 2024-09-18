export default class MediaResource extends Resource {
    optionsForUpload(file: any, attributes: any): {
        body: FormData;
        headers: {
            'Content-Type': null;
        };
    };
    create(file: any, attributes: any): Promise<any>;
    media(accessKey: any, version?: string): Promise<ReadableStream<Uint8Array> | null>;
}
import Resource from './base';
import FormData from 'form-data';
