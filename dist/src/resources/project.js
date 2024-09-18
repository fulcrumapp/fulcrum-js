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
class Project extends base_1.default {
    get resourceName() {
        return 'project';
    }
    get resourcesName() {
        return 'projects';
    }
}
exports.default = Project;
list_1.default.includeInto(Project);
find_1.default.includeInto(Project);
create_1.default.includeInto(Project);
update_1.default.includeInto(Project);
delete_1.default.includeInto(Project);
//# sourceMappingURL=project.js.map