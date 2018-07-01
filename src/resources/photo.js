import MediaResource from './media-base';

export default class Photo extends MediaResource {
  get defaultContentType() {
    return 'image/jpeg';
  }

  get resourceName() {
    return 'photo';
  }

  get resourcesName() {
    return 'photos';
  }

  get versions() {
    return [ 'original', 'thumbnail', 'large' ];
  }
}
