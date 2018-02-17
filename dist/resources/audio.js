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

var _track = require('../actions/track');

var _track2 = _interopRequireDefault(_track);

var _mediaBase = require('./media-base');

var _mediaBase2 = _interopRequireDefault(_mediaBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Audio = function (_MediaResource) {
  (0, _inherits3.default)(Audio, _MediaResource);

  function Audio() {
    (0, _classCallCheck3.default)(this, Audio);
    return (0, _possibleConstructorReturn3.default)(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).apply(this, arguments));
  }

  (0, _createClass3.default)(Audio, [{
    key: 'defaultContentType',
    get: function get() {
      return 'audio/x-m4a';
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'audio';
    }
  }, {
    key: 'resourcesName',
    get: function get() {
      return 'audio';
    }
  }, {
    key: 'createAction',
    get: function get() {
      return 'audio/upload';
    }
  }]);
  return Audio;
}(_mediaBase2.default);

exports.default = Audio;


_track2.default.includeInto(Audio);
module.exports = exports['default'];
//# sourceMappingURL=audio.js.map