"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Base = function () {
  function Base(client) {
    (0, _classCallCheck3.default)(this, Base);

    this.client = client;
  }

  (0, _createClass3.default)(Base, [{
    key: "collectionPath",
    value: function collectionPath() {
      return this.resourcesName;
    }
  }, {
    key: "actionPath",
    value: function actionPath(action) {
      return this.resourcesName + "/" + action;
    }
  }, {
    key: "memberPath",
    value: function memberPath(id) {
      return this.resourcesName + "/" + id;
    }
  }, {
    key: "memberActionPath",
    value: function memberActionPath(id, action) {
      return this.resourcesName + "/" + id + "/" + action;
    }
  }, {
    key: "attributesForObject",
    value: function attributesForObject(object) {
      var attributes = {};
      attributes[this.resourceName] = object;
      return attributes;
    }
  }]);
  return Base;
}();

exports.default = Base;
module.exports = exports["default"];
//# sourceMappingURL=base.js.map