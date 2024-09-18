import Mixin from '../mixmatch';

export default class Update extends Mixin {
  async update(id, object) {
    const options = {
      body: this.attributesForObject(object)
    };

    const body = await this.client.api.put(this.memberPath(id), options);

    return body[this.resourceName];
  }
}
