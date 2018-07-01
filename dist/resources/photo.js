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

var Photo = function (_MediaResource) {
  (0, _inherits3.default)(Photo, _MediaResource);

  function Photo() {
    (0, _classCallCheck3.default)(this, Photo);
    return (0, _possibleConstructorReturn3.default)(this, (Photo.__proto__ || Object.getPrototypeOf(Photo)).apply(this, arguments));
  }

  (0, _createClass3.default)(Photo, [{
    key: 'defaultContentType',
    get: function get() {
      return 'image/jpeg';
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'photo';
    }
  }, {
    key: 'resourcesName',
    get: function get() {
      return 'photos';
    }
  }, {
    key: 'versions',
    get: function get() {
      return ['original', 'thumbnail', 'large'];
    }
  }]);
  return Photo;
}(_mediaBase2.default);

exports.default = Photo;
module.exports = exports['default'];
//# sourceMappingURL=photo.js.map