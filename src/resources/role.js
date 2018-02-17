import List from '../actions/list';
import Resource from './base';

export default class Role extends Resource {
  get resourceName() {
    return 'role';
  }

  get resourcesName() {
    return 'roles';
  }
}

List.includeInto(Role);
