import List from '../actions/list';
import Find from '../actions/find';
import Create from '../actions/create';
import Update from '../actions/update';
import SerialBatchUpdate from '../actions/serial-batch-update';
import Resource from './base';
import Page from '../page';

export default class Record extends Resource {
  get resourceName() {
    return 'record';
  }

  get resourcesName() {
    return 'records';
  }

  delete(id, changesetID) {
    const options = {};

    if (changesetID != null) {
      options.body = {
        record: {
          changeset_id: changesetID
        }
      };
    }

    return this.client.api.del(this.memberPath(id), options);
  }

  async history(id) {
    const body = await this.client.api.get(this.memberActionPath(id, 'history'));
    return new Page(body, this.resourcesName);
  }
}

List.includeInto(Record);
Find.includeInto(Record);
Create.includeInto(Record);
Update.includeInto(Record);
SerialBatchUpdate.includeInto(Record);
