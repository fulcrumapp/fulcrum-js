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

  large(id) {
    return this.streamVersion(id, 'large');
  }

  largeURL(id) {
    return this.client.url(this.memberActionPath(id, 'large', 'jpg'));
  }

  thumbnail(id) {
    return this.streamVersion(id, 'thumbnail');
  }

  thumbnailURL(id) {
    return this.client.url(this.memberActionPath(id, 'thumbnail', 'jpg'));
  }
}
