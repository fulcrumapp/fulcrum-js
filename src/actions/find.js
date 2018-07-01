import Mixin from 'mixmatch';

export default class Find extends Mixin {
  async find(id) {
    const body = await this.client.api.get(this.memberPath(id));

    return body[this.resourceName];
  }
}
