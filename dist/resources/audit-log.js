"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const list_1 = __importDefault(require("../actions/list"));
const find_1 = __importDefault(require("../actions/find"));
const base_1 = __importDefault(require("./base"));
class AuditLog extends base_1.default {
    get resourceName() {
        return 'audit_log';
    }
    get resourcesName() {
        return 'audit_logs';
    }
}
exports.default = AuditLog;
list_1.default.includeInto(AuditLog);
find_1.default.includeInto(AuditLog);
//# sourceMappingURL=audit-log.js.map