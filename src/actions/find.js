import Mixin from 'mixmatch';

export default class Find extends Mixin {
  async find(id) {
    const resp = await this.client.api.get(this.memberPath(id));
    if (resp.err) {
      throw resp.err;
    }

    return resp.body[this.resourceName];
  }
}
