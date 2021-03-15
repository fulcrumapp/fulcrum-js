import Mixin from "mixmatch";

import Base from "../resources/base";
export default class Update extends Mixin {
  async update(id: string, object: any) {
    const options = {
      body: this.attributesForObject(object),
    };

    const body = await this.client.api.put(this.memberPath(id), options);

    return body[this.resourceName];
  }
}

export default interface Update extends Mixin, Base {}
