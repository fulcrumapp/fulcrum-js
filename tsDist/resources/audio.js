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
var Audio = /** @class */ (function (_super) {
    __extends(Audio, _super);
    function Audio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Audio.prototype, "defaultContentType", {
        get: function () {
            return 'audio/x-m4a';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Audio.prototype, "resourceName", {
        get: function () {
            return 'audio';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Audio.prototype, "resourcesName", {
        get: function () {
            return 'audio';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Audio.prototype, "createAction", {
        get: function () {
            return 'audio/upload';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Audio.prototype, "versions", {
        get: function () {
            return ['original'];
        },
        enumerable: false,
        configurable: true
    });
    return Audio;
}(media_base_1.default));
exports.default = Audio;
track_1.default.includeInto(Audio);
//# sourceMappingURL=audio.js.map