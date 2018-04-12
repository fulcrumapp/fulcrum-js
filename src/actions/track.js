import FormData from 'form-data';
import Mixin from 'mixmatch';

export default class Track extends Mixin {
  async uploadTrack(file, attributes) {
    const formData = new FormData();

    formData.append(`${this.resourceName}[access_key]`, attributes.access_key);
    formData.append(`${this.resourceName}[track]`, file);

    const options = {
      body: formData,
      headers: {
        'Content-Type': null
      }
    };

    const resp = await this.client.api.post(this.createAction, options);
    return resp.body[this.resourceName];
  }

  async track(id) {
    const body = await this.client.api.get(this.trackPath(id, 'json'));

    return body.tracks;
  }

  trackPath(id, format) {
    return this.memberActionPath(id, 'track', format);
  }
}
