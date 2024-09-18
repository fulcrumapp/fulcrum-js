"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const media_base_1 = __importDefault(require("./media-base"));
class Signature extends media_base_1.default {
    get defaultContentType() {
        return 'image/png';
    }
    get resourceName() {
        return 'signature';
    }
    get resourcesName() {
        return 'signatures';
    }
    get versions() {
        return ['original', 'thumbnail', 'large'];
    }
}
exports.default = Signature;
//# sourceMappingURL=signature.js.map