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
var media_base_1 = require("./media-base");
var Photo = /** @class */ (function (_super) {
    __extends(Photo, _super);
    function Photo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Photo.prototype, "defaultContentType", {
        get: function () {
            return 'image/jpeg';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Photo.prototype, "resourceName", {
        get: function () {
            return 'photo';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Photo.prototype, "resourcesName", {
        get: function () {
            return 'photos';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Photo.prototype, "versions", {
        get: function () {
            return ['original', 'thumbnail', 'large'];
        },
        enumerable: false,
        configurable: true
    });
    return Photo;
}(media_base_1.default));
exports.default = Photo;
//# sourceMappingURL=photo.js.map