"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Page {
    constructor(object, resourcesName) {
        this.objects = object[resourcesName];
        this.currentPage = object.current_page;
        this.totalPages = object.total_pages;
        this.totalCount = object.total_count;
        this.perPage = object.per_page;
    }
}
exports.default = Page;
//# sourceMappingURL=page.js.map