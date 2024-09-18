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
const page_1 = __importDefault(require("../page"));
class Record extends base_1.default {
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
        return new page_1.default(body, this.resourcesName);
    }
}
exports.default = Record;
list_1.default.includeInto(Record);
find_1.default.includeInto(Record);
create_1.default.includeInto(Record);
update_1.default.includeInto(Record);
//# sourceMappingURL=record.js.map