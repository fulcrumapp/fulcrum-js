import uuid from 'uuid';
import FormData from 'form-data';

import List from '../actions/list';
import Find from '../actions/find';
import Create from '../actions/create';
import Resource from './base';

export default class MediaResource extends Resource {
  optionsForUpload(file, attributes) {
    const attrs = attributes || {};
    const formData = new FormData();

    const accessKey = attrs.hasOwnProperty('accessKey') ? attrs.accessKey : uuid.v4();

    formData.append(`${this.resourceName}[access_key]`, accessKey);

    let fileOptions = null;

    // File names from media streams like
    // fs.createReadStream('photo.jpg')
    // are automatically added. When reading from buffers like
    // fs.readFileSync('photo.jpg)
    // the file name can't be inferred so it must be supplied like
    // photos.create(fs.readFileSync('photo.jpg'), {fileName: 'photo.jpg'})
    if (attrs.hasOwnProperty('fileName')) {
      fileOptions = { filename: attrs.fileName };
    }

    formData.append(`${this.resourceName}[file]`, file, fileOptions);

    return {
      body: formData,
      headers: {
        'Content-Type': null
      }
    };
  }

  async create(file, attributes) {
    const options = this.optionsForUpload(file, attributes);

    const body = await this.client.api.post(this.createAction, options);

    return body[this.resourceName];
  }

  async media(accessKey, version = 'original') {
    const media = await this.find(accessKey);

    if (!this.versions.includes(version)) {
      throw new Error(`Version must be one of ${this.versions.join(', ')}.`);
    }

    return fetch(media[version])
      .then(resp => resp.body);
  }
}

List.includeInto(MediaResource);
Find.includeInto(MediaResource);
Create.includeInto(MediaResource);
