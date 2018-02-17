"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(object, resourcesName) {
  (0, _classCallCheck3.default)(this, Page);

  this.objects = object[resourcesName];
  this.currentPage = object.current_page;
  this.totalPages = object.total_pages;
  this.totalCount = object.total_count;
  this.perPage = object.per_page;
};

exports.default = Page;
module.exports = exports["default"];
//# sourceMappingURL=page.js.map