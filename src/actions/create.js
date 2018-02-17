import Mixin from 'mixmatch';

export default class Create extends Mixin {
  get createAction() {
    return this.collectionPath();
  }

  async create(object) {
    const options = {
      body: this.attributesForObject(object)
    };

    const resp = await this.client.api.post(this.createAction, options);

    if (resp.err) {
      throw resp.err;
    }

    return resp.body[this.resourceName];
  }
}
