"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = __importDefault(require("../actions/list"));
const find_1 = __importDefault(require("../actions/find"));
const create_1 = __importDefault(require("../actions/create"));
const update_1 = __importDefault(require("../actions/update"));
const delete_1 = __importDefault(require("../actions/delete"));
const base_1 = __importDefault(require("./base"));
const page_1 = __importDefault(require("../page"));
class Form extends base_1.default {
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
        return new page_1.default(body, this.resourcesName);
    }
}
exports.default = Form;
list_1.default.includeInto(Form);
find_1.default.includeInto(Form);
create_1.default.includeInto(Form);
update_1.default.includeInto(Form);
delete_1.default.includeInto(Form);
//# sourceMappingURL=form.js.map