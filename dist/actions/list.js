"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mixmatch_1 = __importDefault(require("../mixmatch"));
const page_1 = __importDefault(require("../page"));
const DEFAULT_PER_PAGE = 1000;
class List extends mixmatch_1.default {
    get defaultListParams() {
        return { per_page: DEFAULT_PER_PAGE };
    }
    async all(params) {
        const options = {
            qs: params || this.defaultListParams
        };
        const body = await this.client.api.get(this.collectionPath(), options);
        return new page_1.default(body, this.resourcesName);
    }
}
exports.default = List;
//# sourceMappingURL=list.js.map