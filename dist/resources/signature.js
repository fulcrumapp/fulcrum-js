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

var _mediaBase = require('./media-base');

var _mediaBase2 = _interopRequireDefault(_mediaBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Signature = function (_MediaResource) {
  (0, _inherits3.default)(Signature, _MediaResource);

  function Signature() {
    (0, _classCallCheck3.default)(this, Signature);
    return (0, _possibleConstructorReturn3.default)(this, (Signature.__proto__ || Object.getPrototypeOf(Signature)).apply(this, arguments));
  }

  (0, _createClass3.default)(Signature, [{
    key: 'defaultContentType',
    get: function get() {
      return 'image/png';
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'signature';
    }
  }, {
    key: 'resourcesName',
    get: function get() {
      return 'signatures';
    }
  }, {
    key: 'versions',
    get: function get() {
      return ['original', 'thumbnail', 'large'];
    }
  }]);
  return Signature;
}(_mediaBase2.default);

exports.default = Signature;
module.exports = exports['default'];
//# sourceMappingURL=signature.js.map