"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = __importDefault(require("../actions/list"));
const find_1 = __importDefault(require("../actions/find"));
const create_1 = __importDefault(require("../actions/create"));
const update_1 = __importDefault(require("../actions/update"));
const base_1 = __importDefault(require("./base"));
class Changeset extends base_1.default {
    get resourceName() {
        return 'changeset';
    }
    get resourcesName() {
        return 'changesets';
    }
    async close(id) {
        const body = await this.client.api.put(this.memberActionPath(id, 'close'));
        return body[this.resourceName];
    }
}
exports.default = Changeset;
list_1.default.includeInto(Changeset);
find_1.default.includeInto(Changeset);
create_1.default.includeInto(Changeset);
update_1.default.includeInto(Changeset);
//# sourceMappingURL=changeset.js.map