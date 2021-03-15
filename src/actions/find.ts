import Mixin from "mixmatch";

import Base from "../resources/base";

export default class Find extends Mixin {
  async find(id: string) {
    const body = await this.client.api.get(this.memberPath(id));

    return body[this.resourceName];
  }
}

export default interface Find extends Mixin, Base {}
