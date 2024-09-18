import Track from '../actions/track';
import MediaResource from './media-base';
export default class Audio extends MediaResource {
    get defaultContentType() {
        return 'audio/x-m4a';
    }
    get resourceName() {
        return 'audio';
    }
    get resourcesName() {
        return 'audio';
    }
    get createAction() {
        return 'audio/upload';
    }
    get versions() {
        return ['original'];
    }
}
Track.includeInto(Audio);
//# sourceMappingURL=audio.js.map