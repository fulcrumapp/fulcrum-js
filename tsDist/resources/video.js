"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var track_1 = require("../actions/track");
var media_base_1 = require("./media-base");
var Video = /** @class */ (function (_super) {
    __extends(Video, _super);
    function Video() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Video.prototype, "defaultContentType", {
        get: function () {
            return 'video/mp4';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "resourceName", {
        get: function () {
            return 'video';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "resourcesName", {
        get: function () {
            return 'videos';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "createAction", {
        get: function () {
            return 'videos/upload';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Video.prototype, "versions", {
        get: function () {
            return ['original', 'small', 'medium'];
        },
        enumerable: false,
        configurable: true
    });
    return Video;
}(media_base_1.default));
exports.default = Video;
track_1.default.includeInto(Video);
//# sourceMappingURL=video.js.map