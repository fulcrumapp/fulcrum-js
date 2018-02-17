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

var _find = require('../actions/find');

var _find2 = _interopRequireDefault(_find);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Project = function (_Resource) {
  (0, _inherits3.default)(Project, _Resource);

  function Project() {
    (0, _classCallCheck3.default)(this, Project);
    return (0, _possibleConstructorReturn3.default)(this, (Project.__proto__ || Object.getPrototypeOf(Project)).apply(this, arguments));
  }

  (0, _createClass3.default)(Project, [{
    key: 'resourceName',
    get: function get() {
      return 'project';
    }
  }, {
    key: 'resourcesName',
    get: function get() {
      return 'projects';
    }
  }]);
  return Project;
}(_base2.default);

exports.default = Project;


_list2.default.includeInto(Project);
_find2.default.includeInto(Project);
module.exports = exports['default'];
//# sourceMappingURL=project.js.map