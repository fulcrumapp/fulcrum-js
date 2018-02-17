import List from '../actions/list';
import Find from '../actions/find';
import Create from '../actions/create';
import Update from '../actions/update';
import Delete from '../actions/delete';
import Resource from './base';

export default class Record extends Resource {
  get resourceName() {
    return 'record';
  }

  get resourcesName() {
    return 'records';
  }

  async delete(id, changesetID) {
    const options = {};

    if (changesetID != null) {
      options.body = {
        record: {
          changeset_id: changesetID
        }
      };
    }

    const resp = await this.client.api.del(this.memberPath(id), options);

    if (resp.err) {
      throw resp.err;
    }
  }
}

List.includeInto(Record);
Find.includeInto(Record);
Create.includeInto(Record);
Update.includeInto(Record);
Delete.includeInto(Record);
