var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    change(resourceType, id, action, membershipIds) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const body = yield this.client.api.post(this.actionPath('change_permissions'), options);
            return body[this.resourcesName];
        });
    }
}
List.includeInto(Membership);
Find.includeInto(Membership);
Create.includeInto(Membership);
//# sourceMappingURL=membership.js.map