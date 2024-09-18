"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const track_1 = __importDefault(require("../actions/track"));
const media_base_1 = __importDefault(require("./media-base"));
class Video extends media_base_1.default {
    get defaultContentType() {
        return 'video/mp4';
    }
    get resourceName() {
        return 'video';
    }
    get resourcesName() {
        return 'videos';
    }
    get createAction() {
        return 'videos/upload';
    }
    get versions() {
        return ['original', 'small', 'medium'];
    }
}
exports.default = Video;
track_1.default.includeInto(Video);
//# sourceMappingURL=video.js.map