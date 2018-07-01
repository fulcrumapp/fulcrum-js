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

var _create = require('../actions/create');

var _create2 = _interopRequireDefault(_create);

var _update = require('../actions/update');

var _update2 = _interopRequireDefault(_update);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Changeset = function (_Resource) {
  (0, _inherits3.default)(Changeset, _Resource);

  function Changeset() {
    (0, _classCallCheck3.default)(this, Changeset);
    return (0, _possibleConstructorReturn3.default)(this, (Changeset.__proto__ || Object.getPrototypeOf(Changeset)).apply(this, arguments));
  }

  (0, _createClass3.default)(Changeset, [{
    key: 'close',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(id) {
        var body;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.client.api.put(this.memberActionPath(id, 'close'));

              case 2:
                body = _context.sent;
                return _context.abrupt('return', body[this.resourceName]);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function close(_x) {
        return _ref.apply(this, arguments);
      }

      return close;
    }()
  }, {
    key: 'resourceName',
    get: function get() {
      return 'changeset';
    }
  }, {
    key: 'resourcesName',
    get: function get() {
      return 'changesets';
    }
  }]);
  return Changeset;
}(_base2.default);

exports.default = Changeset;


_list2.default.includeInto(Changeset);
_find2.default.includeInto(Changeset);
_create2.default.includeInto(Changeset);
_update2.default.includeInto(Changeset);
module.exports = exports['default'];
//# sourceMappingURL=changeset.js.map