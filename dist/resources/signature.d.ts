export default class Signature extends MediaResource {
    get defaultContentType(): string;
    get resourceName(): string;
    get resourcesName(): string;
    get versions(): string[];
}
import MediaResource from './media-base';
