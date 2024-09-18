export default class Base {
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
//# sourceMappingURL=base.js.map