import Mixin from 'mixmatch';

export default class Create extends Mixin {
  get createAction() {
    return this.collectionPath();
  }

  async create(object) {
    const options = {
      body: this.attributesForObject(object)
    };

    const body = await this.client.api.post(this.createAction, options);

    if (this.client.opts.responseOptions.includeHeaders) {
      const response = body.response[this.resourceName];
      return { headers: body.headers, response };
    }

    return body[this.resourceName];
  }
}
