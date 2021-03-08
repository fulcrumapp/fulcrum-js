"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** The Page Class
 * Note: the following names in the JSON are converted to the specified camelCase
 *
 * current_page --> currentPage
 * total_pages --> totalPages
 * total_count --> totalCount
 * per_page --> perPage
 */
var Page = /** @class */ (function () {
    function Page(object, resourcesName) {
        this.objects = object[resourcesName];
        this.currentPage = object.current_page;
        this.totalPages = object.total_pages;
        this.totalCount = object.total_count;
        this.perPage = object.per_page;
    }
    return Page;
}());
exports.default = Page;
//# sourceMappingURL=page.js.map