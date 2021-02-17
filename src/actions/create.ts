import Mixin from "mixmatch";

import Base from "../resources/base";

export default class Create extends Mixin {
  get createAction() {
    return this.collectionPath();
  }

  //TODO: types
  async create(object: any) {
    const options = {
      body: this.attributesForObject(object),
    };

    const body = await this.client.api.post(this.createAction, options);

    return body[this.resourceName];
  }
}

export default interface Create extends Mixin, Base {}
