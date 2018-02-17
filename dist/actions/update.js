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

var Update = function (_Mixin) {
  (0, _inherits3.default)(Update, _Mixin);

  function Update() {
    (0, _classCallCheck3.default)(this, Update);
    return (0, _possibleConstructorReturn3.default)(this, (Update.__proto__ || Object.getPrototypeOf(Update)).apply(this, arguments));
  }

  (0, _createClass3.default)(Update, [{
    key: 'update',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(id, object) {
        var options, resp;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = {
                  body: this.attributesForObject(object)
                };
                _context.next = 3;
                return this.client.api.put(this.memberPath(id), options);

              case 3:
                resp = _context.sent;

                if (!resp.err) {
                  _context.next = 6;
                  break;
                }

                throw resp.err;

              case 6:
                return _context.abrupt('return', resp.body[this.resourceName]);

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function update(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return update;
    }()
  }]);
  return Update;
}(_mixmatch2.default);

exports.default = Update;
module.exports = exports['default'];
//# sourceMappingURL=update.js.map