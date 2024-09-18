"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const track_1 = __importDefault(require("../actions/track"));
const media_base_1 = __importDefault(require("./media-base"));
class Audio extends media_base_1.default {
    get defaultContentType() {
        return 'audio/x-m4a';
    }
    get resourceName() {
        return 'audio';
    }
    get resourcesName() {
        return 'audio';
    }
    get createAction() {
        return 'audio/upload';
    }
    get versions() {
        return ['original'];
    }
}
exports.default = Audio;
track_1.default.includeInto(Audio);
//# sourceMappingURL=audio.js.map