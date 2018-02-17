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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Find = function (_Mixin) {
  (0, _inherits3.default)(Find, _Mixin);

  function Find() {
    (0, _classCallCheck3.default)(this, Find);
    return (0, _possibleConstructorReturn3.default)(this, (Find.__proto__ || Object.getPrototypeOf(Find)).apply(this, arguments));
  }

  (0, _createClass3.default)(Find, [{
    key: 'find',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(id) {
        var resp;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.client.api.get(this.memberPath(id));

              case 2:
                resp = _context.sent;

                if (!resp.err) {
                  _context.next = 5;
                  break;
                }

                throw resp.err;

              case 5:
                return _context.abrupt('return', resp.body[this.resourceName]);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function find(_x) {
        return _ref.apply(this, arguments);
      }

      return find;
    }()
  }]);
  return Find;
}(_mixmatch2.default);

exports.default = Find;
module.exports = exports['default'];
//# sourceMappingURL=find.js.map