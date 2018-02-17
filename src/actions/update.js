import Mixin from 'mixmatch';

export default class Update extends Mixin {
  async update(id, object) {
    const options = {
      body: this.attributesForObject(object)
    };

    const resp = await this.client.api.put(this.memberPath(id), options);

    if (resp.err) {
      throw resp.err;
    }

    return resp.body[this.resourceName];
  }
}
