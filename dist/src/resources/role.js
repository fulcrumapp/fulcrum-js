"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = __importDefault(require("../actions/list"));
const base_1 = __importDefault(require("./base"));
class Role extends base_1.default {
    get resourceName() {
        return 'role';
    }
    get resourcesName() {
        return 'roles';
    }
}
exports.default = Role;
list_1.default.includeInto(Role);
//# sourceMappingURL=role.js.map