"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const media_base_1 = __importDefault(require("./media-base"));
class Photo extends media_base_1.default {
    get defaultContentType() {
        return 'image/jpeg';
    }
    get resourceName() {
        return 'photo';
    }
    get resourcesName() {
        return 'photos';
    }
    get versions() {
        return ['original', 'thumbnail', 'large'];
    }
}
exports.default = Photo;
//# sourceMappingURL=photo.js.map