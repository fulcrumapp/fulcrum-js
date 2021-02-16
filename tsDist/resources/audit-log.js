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
var base_1 = require("./base");
var AuditLog = /** @class */ (function (_super) {
    __extends(AuditLog, _super);
    function AuditLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(AuditLog.prototype, "resourceName", {
        get: function () {
            return 'audit_log';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AuditLog.prototype, "resourcesName", {
        get: function () {
            return 'audit_logs';
        },
        enumerable: false,
        configurable: true
    });
    return AuditLog;
}(base_1.default));
exports.default = AuditLog;
list_1.default.includeInto(AuditLog);
find_1.default.includeInto(AuditLog);
//# sourceMappingURL=audit-log.js.map