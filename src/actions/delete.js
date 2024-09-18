import Mixin from '../mixmatch';

export default class Delete extends Mixin {
  async delete(id) {
    const body = await this.client.api.del(this.memberPath(id));

    return body[this.resourceName];
  }
}
