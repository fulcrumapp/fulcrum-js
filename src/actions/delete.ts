import Mixin from "mixmatch";

import Base from "../resources/base";

export default class Delete extends Mixin {
  async delete(id: string) {
    const body = await this.client.api.del(this.memberPath(id));

    return body[this.resourceName];
  }
}

export default interface Delete extends Mixin, Base {}
