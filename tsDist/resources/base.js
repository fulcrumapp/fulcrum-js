"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base = /** @class */ (function () {
    function Base(client) {
        this.client = client;
    }
    Base.prototype.collectionPath = function () {
        return this.resourcesName;
    };
    Base.prototype.actionPath = function (action) {
        return this.resourcesName + "/" + action;
    };
    Base.prototype.memberPath = function (id) {
        return this.resourcesName + "/" + id;
    };
    Base.prototype.memberActionPath = function (id, action) {
        return this.resourcesName + "/" + id + "/" + action;
    };
    Base.prototype.attributesForObject = function (object) {
        var attributes = {};
        attributes[this.resourceName] = object;
        return attributes;
    };
    return Base;
}());
exports.default = Base;
//# sourceMappingURL=base.js.map