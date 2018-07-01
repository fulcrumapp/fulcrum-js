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

var _list = require('../actions/list');

var _list2 = _interopRequireDefault(_list);

var _find = require('../actions/find');

var _find2 = _interopRequireDefault(_find);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Membership = function (_Resource) {
  (0, _inherits3.default)(Membership, _Resource);

  function Membership() {
    (0, _classCallCheck3.default)(this, Membership);
    return (0, _possibleConstructorReturn3.default)(this, (Membership.__proto__ || Object.getPrototypeOf(Membership)).apply(this, arguments));
  }

  (0, _createClass3.default)(Membership, [{
    key: 'change',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resourceType, id, action, membershipIds) {
        var change, options, body;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                change = {
                  type: resourceType + '_members'
                };


                change[resourceType + '_id'] = id;

                change[action] = membershipIds;

                options = {
                  body: {
                    change: change
                  }
                };
                _context.next = 6;
                return this.client.api.post(this.actionPath('change_permissions'), options);

              case 6:
                body = _context.sent;
                return _context.abrupt('return', body[this.resourcesName]);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function change(_x, _x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: 'resourceName',
    get: function get() {
      return 'membership';
    }
  }, {
    key: 'resourcesName',
    get: function get() {
      return 'memberships';
    }
  }]);
  return Membership;
}(_base2.default);

exports.default = Membership;


_list2.default.includeInto(Membership);
_find2.default.includeInto(Membership);
module.exports = exports['default'];
//# sourceMappingURL=membership.js.map