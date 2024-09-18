"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Base {
    constructor(client) {
        this.client = client;
    }
    collectionPath() {
        return this.resourcesName;
    }
    actionPath(action) {
        return `${this.resourcesName}/${action}`;
    }
    memberPath(id) {
        return `${this.resourcesName}/${id}`;
    }
    memberActionPath(id, action) {
        return `${this.resourcesName}/${id}/${action}`;
    }
    attributesForObject(object) {
        const attributes = {};
        attributes[this.resourceName] = object;
        return attributes;
    }
}
exports.default = Base;
//# sourceMappingURL=base.js.map