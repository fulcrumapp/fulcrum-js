import List from '../actions/list';
import Find from '../actions/find';
import Update from '../actions/update';
import Delete from '../actions/delete';
import Resource from './base';

export default class Authorization extends Resource {
  get resourceName() {
    return 'authorization';
  }

  get resourcesName() {
    return 'authorizations';
  }

  get createAction() {
    return this.collectionPath();
  }

  async create(object, email, password) {
    const options = {
      body: this.attributesForObject(object)
    };

    const resp = await this.client.noTokenApi
      .auth(email, password)
      .post(this.createAction, options);

    if (resp.err) {
      throw resp.err;
    }

    return resp.body[this.resourceName];
  }
}

List.includeInto(Authorization);
Find.includeInto(Authorization);
Update.includeInto(Authorization);
Delete.includeInto(Authorization);
