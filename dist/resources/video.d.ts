import Track from "../actions/track";
import MediaResource from "./media-base";
export default class Video extends MediaResource {
    get defaultContentType(): string;
    get resourceName(): string;
    get resourcesName(): string;
    get createAction(): string;
    get versions(): string[];
}
export default interface Video extends MediaResource, Track {
}
