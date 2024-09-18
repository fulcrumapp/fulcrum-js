"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_64_1 = __importDefault(require("base-64"));
const list_1 = __importDefault(require("../actions/list"));
const find_1 = __importDefault(require("../actions/find"));
const update_1 = __importDefault(require("../actions/update"));
const delete_1 = __importDefault(require("../actions/delete"));
const base_1 = __importDefault(require("./base"));
class Authorization extends base_1.default {
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
        const encoded = base_64_1.default.encode(`${email}:${password}`);
        const options = {
            body: this.attributesForObject(object),
            headers: {
                'Authorization': `Basic ${encoded}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };
        const body = await this.client.noTokenApi
            .post(this.createAction, options);
        return body[this.resourceName];
    }
    async regenerate(id) {
        const body = await this.client.api.post(this.memberActionPath(id, 'regenerate'));
        return body[this.resourceName];
    }
}
exports.default = Authorization;
list_1.default.includeInto(Authorization);
find_1.default.includeInto(Authorization);
update_1.default.includeInto(Authorization);
delete_1.default.includeInto(Authorization);
//# sourceMappingURL=authorization.js.map