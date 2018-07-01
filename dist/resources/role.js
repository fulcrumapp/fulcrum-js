'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _list = require('../actions/list');

var _list2 = _interopRequireDefault(_list);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Role = function (_Resource) {
  (0, _inherits3.default)(Role, _Resource);

  function Role() {
    (0, _classCallCheck3.default)(this, Role);
    return (0, _possibleConstructorReturn3.default)(this, (Role.__proto__ || Object.getPrototypeOf(Role)).apply(this, arguments));
  }

  (0, _createClass3.default)(Role, [{
    key: 'resourceName',
    get: function get() {
      return 'role';
    }
  }, {
    key: 'resourcesName',
    get: function get() {
      return 'roles';
    }
  }]);
  return Role;
}(_base2.default);

exports.default = Role;


_list2.default.includeInto(Role);
module.exports = exports['default'];
//# sourceMappingURL=role.js.map