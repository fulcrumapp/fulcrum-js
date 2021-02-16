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
var list_1 = require("../actions/list");
var find_1 = require("../actions/find");
var create_1 = require("../actions/create");
var update_1 = require("../actions/update");
var delete_1 = require("../actions/delete");
var base_1 = require("./base");
var Layer = /** @class */ (function (_super) {
    __extends(Layer, _super);
    function Layer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Layer.prototype, "resourceName", {
        get: function () {
            return 'layer';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Layer.prototype, "resourcesName", {
        get: function () {
            return 'layers';
        },
        enumerable: false,
        configurable: true
    });
    return Layer;
}(base_1.default));
exports.default = Layer;
list_1.default.includeInto(Layer);
find_1.default.includeInto(Layer);
create_1.default.includeInto(Layer);
update_1.default.includeInto(Layer);
delete_1.default.includeInto(Layer);
//# sourceMappingURL=layer.js.map