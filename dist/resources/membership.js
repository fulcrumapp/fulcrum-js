"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = __importDefault(require("../actions/list"));
const find_1 = __importDefault(require("../actions/find"));
const create_1 = __importDefault(require("../actions/create"));
const base_1 = __importDefault(require("./base"));
class Membership extends base_1.default {
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
exports.default = Membership;
list_1.default.includeInto(Membership);
find_1.default.includeInto(Membership);
create_1.default.includeInto(Membership);
//# sourceMappingURL=membership.js.map