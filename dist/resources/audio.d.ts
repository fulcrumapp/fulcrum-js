export default class Audio extends MediaResource {
    get defaultContentType(): string;
    get resourceName(): string;
    get resourcesName(): string;
    get createAction(): string;
    get versions(): string[];
}
import MediaResource from './media-base';
