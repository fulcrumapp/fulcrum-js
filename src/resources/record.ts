import Resource from "./base";

import List from "../actions/list";
import Find from "../actions/find";
import Create from "../actions/create";
import Update from "../actions/update";

import Page from "../page";
import FetchOptions from "../types/FetchOptions";

export default class Record extends Resource {
  get resourceName() {
    return "record";
  }

  get resourcesName() {
    return "records";
  }

  delete(id: string, changesetID: string) {
    const options: FetchOptions = {};

    if (changesetID != null) {
      options.body = {
        record: {
          changeset_id: changesetID,
        },
      };
    }

    return this.client.api.del(this.memberPath(id), options);
  }

  async history(id: string) {
    const body = await this.client.api.get(
      this.memberActionPath(id, "history")
    );
    return new Page(body, this.resourcesName);
  }
}

List.includeInto(Record);
Find.includeInto(Record);
Create.includeInto(Record);
Update.includeInto(Record);
