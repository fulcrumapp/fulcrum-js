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
class ClassificationSet extends base_1.default {
    get resourceName() {
        return 'classification_set';
    }
    get resourcesName() {
        return 'classification_sets';
    }
}
exports.default = ClassificationSet;
list_1.default.includeInto(ClassificationSet);
find_1.default.includeInto(ClassificationSet);
create_1.default.includeInto(ClassificationSet);
update_1.default.includeInto(ClassificationSet);
delete_1.default.includeInto(ClassificationSet);
//# sourceMappingURL=classification-set.js.map