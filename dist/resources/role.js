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
var base_1 = require("./base");
var Role = /** @class */ (function (_super) {
    __extends(Role, _super);
    function Role() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Role.prototype, "resourceName", {
        get: function () {
            return "role";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Role.prototype, "resourcesName", {
        get: function () {
            return "roles";
        },
        enumerable: false,
        configurable: true
    });
    return Role;
}(base_1.default));
exports.default = Role;
list_1.default.includeInto(Role);
//# sourceMappingURL=role.js.map