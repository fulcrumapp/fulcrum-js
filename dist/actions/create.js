"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mixmatch_1 = __importDefault(require("../mixmatch"));
class Create extends mixmatch_1.default {
    get createAction() {
        return this.collectionPath();
    }
    async create(object) {
        const options = {
            body: this.attributesForObject(object)
        };
        const body = await this.client.api.post(this.createAction, options);
        return body[this.resourceName];
    }
}
exports.default = Create;
//# sourceMappingURL=create.js.map