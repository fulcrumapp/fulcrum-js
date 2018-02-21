import uuid from 'uuid';
import FormData from 'form-data';
// import fetch from 'isomorphic-fetch';
require('portable-fetch');

import List from '../actions/list';
import Find from '../actions/find';
import Create from '../actions/create';
import Resource from './base';

export default class MediaResource extends Resource {
  optionsForUpload(file, attributes) {
    const attrs = attributes || {};
    const formData = new FormData();

    formData.append(`${this.resourceName}[access_key]`, attrs.access_key || uuid.v4());
    formData.append(`${this.resourceName}[file]`, file);

    return {
      body: formData,
      headers: {
        'Content-Type': null
      }
    };
  }

  async create(file, attributes) {
    const options = this.optionsForUpload(file, attributes);
    const resp = await this.client.api.post(this.createAction, options);

    if (resp.error) {
      throw resp.error;
    }

    return resp.body[this.resourceName];
  }

  async streamVersion(accessKey, version) {
    const media = await this.find(accessKey);
    return fetch(media[version])
      .then(resp => resp.body);
  }

  streamOriginal(accessKey, callback) {
    return this.streamVersion(accessKey, 'original');
  }
}

List.includeInto(MediaResource);
Find.includeInto(MediaResource);
Create.includeInto(MediaResource);
