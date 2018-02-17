import List from '../actions/list';
import Find from '../actions/find';
import Resource from './base';

export default class Membership extends Resource {
  get resourceName() {
    return 'membership';
  }

  get resourcesName() {
    return 'memberships';
  }

  async change(resourceType, id, action, userIds) {
    const change = {
      type: `${resourceType}_members`
    };

    change[`${resourceType}_id`] = id;

    change[action] = userIds;

    const options = {
      body: {
        change: change
      }
    };

    const resp = await this.client.api.post(this.actionPath('change_permissions'), options);

    if (resp.err) {
      throw resp.err;
    }

    return resp.body[this.resourcesName];
  }
}

List.includeInto(Membership);
Find.includeInto(Membership);
