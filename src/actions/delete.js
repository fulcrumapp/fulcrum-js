import Mixin from 'mixmatch';

export default class Delete extends Mixin {
  async delete(id) {
    const resp = await this.client.api.del(this.memberPath(id));

    if (resp.err) {
      throw resp.err;
    }

    return resp.body[this.resourceName];
  }
}
