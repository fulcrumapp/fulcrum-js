import List from '../actions/list';
import Find from '../actions/find';
import Create from '../actions/create';

import Resource from './base';

export default class Membership extends Resource {
  get resourceName() {
    return 'membership';
  }

  get resourcesName() {
    return 'memberships';
  }

  async change(resourceType, id, action, membershipIds) {
    const change = {
      type: `${resourceType}_members`
    };

    change[`${resourceType}_id`] = id;

    change[action] = membershipIds;

    const options = {
      body: {
        change: change
      }
    };

    const body = await this.client.api.post(this.actionPath('change_permissions'), options);

    return body[this.resourcesName];
  }
}

List.includeInto(Membership);
Find.includeInto(Membership);
Create.includeInto(Membership)
