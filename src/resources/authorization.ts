import * as base64 from "base-64";

import List from "../actions/list";
import Find from "../actions/find";
import Update from "../actions/update";
import Delete from "../actions/delete";
import Resource from "./base";

export default class Authorization extends Resource {
  get resourceName() {
    return "authorization";
  }

  get resourcesName() {
    return "authorizations";
  }

  get createAction() {
    return this.collectionPath();
  }

  async create(object: any, email: string, password: string) {
    const encoded = base64.encode(`${email}:${password}`);
    const options = {
      body: this.attributesForObject(object),
      headers: {
        Authorization: `Basic ${encoded}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const body = await this.client.noTokenApi.post(this.createAction, options);

    return body[this.resourceName];
  }

  async regenerate(id: string) {
    const body = await this.client.api.post(this.memberActionPath(id, "regenerate"));

    return body[this.resourceName];
  }
}

export default interface Authorization extends Resource, List, Find, Update, Delete {}

List.includeInto(Authorization);
Find.includeInto(Authorization);
Update.includeInto(Authorization);
Delete.includeInto(Authorization);
