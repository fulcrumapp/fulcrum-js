import List from "../actions/list";
import Find from "../actions/find";
import Create from "../actions/create";
import Update from "../actions/update";
import Resource from "./base";

export default class Changeset extends Resource {
  get resourceName() {
    return "changeset";
  }

  get resourcesName() {
    return "changesets";
  }

  async close(id: string) {
    const body = await this.client.api.put(this.memberActionPath(id, "close"));

    return body[this.resourceName];
  }
}

export default interface Changeset extends Resource, List, Find, Create, Update {}

List.includeInto(Changeset);
Find.includeInto(Changeset);
Create.includeInto(Changeset);
Update.includeInto(Changeset);
