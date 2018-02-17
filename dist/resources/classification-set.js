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

var _create = require('../actions/create');

var _create2 = _interopRequireDefault(_create);

var _update = require('../actions/update');

var _update2 = _interopRequireDefault(_update);

var _delete = require('../actions/delete');

var _delete2 = _interopRequireDefault(_delete);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClassificationSet = function (_Resource) {
  (0, _inherits3.default)(ClassificationSet, _Resource);

  function ClassificationSet() {
    (0, _classCallCheck3.default)(this, ClassificationSet);
    return (0, _possibleConstructorReturn3.default)(this, (ClassificationSet.__proto__ || Object.getPrototypeOf(ClassificationSet)).apply(this, arguments));
  }

  (0, _createClass3.default)(ClassificationSet, [{
    key: 'resourceName',
    get: function get() {
      return 'classification_set';
    }
  }, {
    key: 'resourcesName',
    get: function get() {
      return 'classification_sets';
    }
  }]);
  return ClassificationSet;
}(_base2.default);

exports.default = ClassificationSet;


_list2.default.includeInto(ClassificationSet);
_find2.default.includeInto(ClassificationSet);
_create2.default.includeInto(ClassificationSet);
_update2.default.includeInto(ClassificationSet);
_delete2.default.includeInto(ClassificationSet);
module.exports = exports['default'];
//# sourceMappingURL=classification-set.js.map