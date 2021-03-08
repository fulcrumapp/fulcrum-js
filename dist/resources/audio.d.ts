import Track from "../actions/track";
import MediaResource from "./media-base";
export default class Audio extends MediaResource {
    get defaultContentType(): string;
    get resourceName(): string;
    get resourcesName(): string;
    get createAction(): string;
    get versions(): string[];
}
export default interface Audio extends MediaResource, Track {
}
