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
class ChoiceList extends base_1.default {
    get resourceName() {
        return 'choice_list';
    }
    get resourcesName() {
        return 'choice_lists';
    }
}
exports.default = ChoiceList;
list_1.default.includeInto(ChoiceList);
find_1.default.includeInto(ChoiceList);
create_1.default.includeInto(ChoiceList);
update_1.default.includeInto(ChoiceList);
delete_1.default.includeInto(ChoiceList);
//# sourceMappingURL=choice-list.js.map