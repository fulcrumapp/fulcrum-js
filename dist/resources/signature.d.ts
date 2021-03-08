import MediaResource from "./media-base";
export default class Signature extends MediaResource {
    get defaultContentType(): string;
    get resourceName(): string;
    get resourcesName(): string;
    get versions(): string[];
    get createAction(): string;
}
