import Track from '../actions/track';
import MediaResource from './media-base';

export default class Video extends MediaResource {
  get defaultContentType() {
    return 'video/mp4';
  }

  get resourceName() {
    return 'video';
  }

  get resourcesName() {
    return 'videos';
  }

  get createAction() {
    return 'videos/upload';
  }

  get versions() {
    return [ 'original', 'small', 'medium' ];
  }
}

Track.includeInto(Video);
