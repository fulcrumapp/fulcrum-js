import List from '../actions/list';
import Find from '../actions/find';
import Create from '../actions/create';
import Update from '../actions/update';
import Delete from '../actions/delete';
import Resource from './base';

export default class Form extends Resource {
  get resourceName() {
    return 'form';
  }

  get resourcesName() {
    return 'forms';
  }
}

List.includeInto(Form);
Find.includeInto(Form);
Create.includeInto(Form);
Update.includeInto(Form);
Delete.includeInto(Form);
