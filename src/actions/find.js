import Mixin from 'mixmatch';

export default class Find extends Mixin {
  async find(id) {
    const body = await this.client.api.get(this.memberPath(id));

    if (this.client.opts.responseOptions.includeHeaders) {
      const response = body.response[this.resourceName];
      return { headers: body.headers, response };
    }

    return body[this.resourceName];
  }
}
