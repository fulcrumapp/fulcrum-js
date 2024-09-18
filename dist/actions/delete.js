"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mixmatch_1 = __importDefault(require("../mixmatch"));
class Delete extends mixmatch_1.default {
    async delete(id) {
        const body = await this.client.api.del(this.memberPath(id));
        return body[this.resourceName];
    }
}
exports.default = Delete;
//# sourceMappingURL=delete.js.map