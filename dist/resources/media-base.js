'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _formData = require('form-data');

var _formData2 = _interopRequireDefault(_formData);

var _list = require('../actions/list');

var _list2 = _interopRequireDefault(_list);

var _find = require('../actions/find');

var _find2 = _interopRequireDefault(_find);

var _create = require('../actions/create');

var _create2 = _interopRequireDefault(_create);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import fetch from 'isomorphic-fetch';
require('portable-fetch');

var MediaResource = function (_Resource) {
  (0, _inherits3.default)(MediaResource, _Resource);

  function MediaResource() {
    (0, _classCallCheck3.default)(this, MediaResource);
    return (0, _possibleConstructorReturn3.default)(this, (MediaResource.__proto__ || Object.getPrototypeOf(MediaResource)).apply(this, arguments));
  }

  (0, _createClass3.default)(MediaResource, [{
    key: 'optionsForUpload',
    value: function optionsForUpload(file, attributes) {
      var attrs = attributes || {};
      var formData = new _formData2.default();

      formData.append(this.resourceName + '[access_key]', attrs.access_key || _uuid2.default.v4());
      formData.append(this.resourceName + '[file]', file);

      return {
        body: formData
      };
    }
  }, {
    key: 'create',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(file, attributes) {
        var options, body;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = this.optionsForUpload(file, attributes);


                Object.assign(options, this.client.api.options);

                _context.next = 4;
                return this.client.api.postMedia(this.createAction, options);

              case 4:
                body = _context.sent;
                return _context.abrupt('return', body[this.resourceName]);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function create(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: 'streamVersion',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(accessKey, version) {
        var media;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.find(accessKey);

              case 2:
                media = _context2.sent;
                return _context2.abrupt('return', fetch(media[version]).then(function (resp) {
                  return resp.body;
                }));

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function streamVersion(_x3, _x4) {
        return _ref2.apply(this, arguments);
      }

      return streamVersion;
    }()
  }, {
    key: 'streamOriginal',
    value: function streamOriginal(accessKey, callback) {
      return this.streamVersion(accessKey, 'original');
    }
  }]);
  return MediaResource;
}(_base2.default);

exports.default = MediaResource;


_list2.default.includeInto(MediaResource);
_find2.default.includeInto(MediaResource);
_create2.default.includeInto(MediaResource);
module.exports = exports['default'];
//# sourceMappingURL=media-base.js.map