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

var _mixmatch = require('mixmatch');

var _mixmatch2 = _interopRequireDefault(_mixmatch);

var _page = require('../page');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_PER_PAGE = 1000;

var List = function (_Mixin) {
  (0, _inherits3.default)(List, _Mixin);

  function List() {
    (0, _classCallCheck3.default)(this, List);
    return (0, _possibleConstructorReturn3.default)(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  (0, _createClass3.default)(List, [{
    key: 'all',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(params) {
        var options, resp;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = {
                  body: params || this.defaultListParams
                };
                _context.next = 3;
                return this.client.api.get(this.collectionPath(), options);

              case 3:
                resp = _context.sent;

                if (!resp.err) {
                  _context.next = 6;
                  break;
                }

                throw resp.err;

              case 6:
                return _context.abrupt('return', new _page2.default(resp.body, this.resourcesName));

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function all(_x) {
        return _ref.apply(this, arguments);
      }

      return all;
    }()
  }, {
    key: 'defaultListParams',
    get: function get() {
      return { per_page: DEFAULT_PER_PAGE };
    }
  }]);
  return List;
}(_mixmatch2.default);

exports.default = List;
module.exports = exports['default'];
//# sourceMappingURL=list.js.map