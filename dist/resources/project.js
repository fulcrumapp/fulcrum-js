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
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Project.prototype, "resourceName", {
        get: function () {
            return "project";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Project.prototype, "resourcesName", {
        get: function () {
            return "projects";
        },
        enumerable: false,
        configurable: true
    });
    return Project;
}(base_1.default));
exports.default = Project;
list_1.default.includeInto(Project);
find_1.default.includeInto(Project);
create_1.default.includeInto(Project);
update_1.default.includeInto(Project);
delete_1.default.includeInto(Project);
//# sourceMappingURL=project.js.map