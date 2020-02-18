import List from '../actions/list';
import Find from '../actions/find';
import Create from '../actions/create';
import Update from '../actions/update';
import Delete from '../actions/delete';
import Resource from './base';
import Page from '../page';

export default class Form extends Resource {
  get resourceName() {
    return 'form';
  }

  get resourcesName() {
    return 'forms';
  }

  async history(id, version = null) {
    let options = null;

    if (version != null) {
      options = { qs: { version: version } };
    }

    const body = await this.client.api.get(this.memberActionPath(id, 'history'), options);
    return new Page(body, this.resourcesName);
  }
}

List.includeInto(Form);
Find.includeInto(Form);
Create.includeInto(Form);
Update.includeInto(Form);
Delete.includeInto(Form);
