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
class Layer extends base_1.default {
    get resourceName() {
        return 'layer';
    }
    get resourcesName() {
        return 'layers';
    }
}
exports.default = Layer;
list_1.default.includeInto(Layer);
find_1.default.includeInto(Layer);
create_1.default.includeInto(Layer);
update_1.default.includeInto(Layer);
delete_1.default.includeInto(Layer);
//# sourceMappingURL=layer.js.map