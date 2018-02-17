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

var Video = function (_MediaResource) {
  (0, _inherits3.default)(Video, _MediaResource);

  function Video() {
    (0, _classCallCheck3.default)(this, Video);
    return (0, _possibleConstructorReturn3.default)(this, (Video.__proto__ || Object.getPrototypeOf(Video)).apply(this, arguments));
  }

  (0, _createClass3.default)(Video, [{
    key: 'defaultContentType',
    get: function get() {
      return 'video/mp4';
    }
  }, {
    key: 'resourceName',
    get: function get() {
      return 'video';
    }
  }, {
    key: 'resourcesName',
    get: function get() {
      return 'videos';
    }
  }, {
    key: 'createAction',
    get: function get() {
      return 'videos/upload';
    }
  }]);
  return Video;
}(_mediaBase2.default);

exports.default = Video;


_track2.default.includeInto(Video);
module.exports = exports['default'];
//# sourceMappingURL=video.js.map