import Mixin from 'mixmatch';

export default class Delete extends Mixin {
  async delete(id) {
    const body = await this.client.api.del(this.memberPath(id));

    if (this.client.opts.responseOptions.includeHeaders) {
      const response = body.response[this.resourceName];
      return { headers: body.headers, response };
    }

    return body[this.resourceName];
  }
}
