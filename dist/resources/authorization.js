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

var _base = require('base-64');

var _base2 = _interopRequireDefault(_base);

var _list = require('../actions/list');

var _list2 = _interopRequireDefault(_list);

var _find = require('../actions/find');

var _find2 = _interopRequireDefault(_find);

var _update = require('../actions/update');

var _update2 = _interopRequireDefault(_update);

var _delete = require('../actions/delete');

var _delete2 = _interopRequireDefault(_delete);

var _base3 = require('./base');

var _base4 = _interopRequireDefault(_base3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Authorization = function (_Resource) {
  (0, _inherits3.default)(Authorization, _Resource);

  function Authorization() {
    (0, _classCallCheck3.default)(this, Authorization);
    return (0, _possibleConstructorReturn3.default)(this, (Authorization.__proto__ || Object.getPrototypeOf(Authorization)).apply(this, arguments));
  }

  (0, _createClass3.default)(Authorization, [{
    key: 'create',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(object, email, password) {
        var encoded, options, body;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                encoded = _base2.default.encode(email + ':' + password);
                options = {
                  body: this.attributesForObject(object),
                  headers: {
                    'Authorization': 'Basic ' + encoded,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
                };
                _context.next = 4;
                return this.client.noTokenApi.post(this.createAction, options);

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

      function create(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      }

      return create;
    }()
  }, {
    key: 'regenerate',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
        var body;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.client.api.post(this.memberActionPath(id, 'regenerate'));

              case 2:
                body = _context2.sent;
                return _context2.abrupt('return', body[this.resourceName]);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function regenerate(_x4) {
        return _ref2.apply(this, arguments);
      }

      return regenerate;
    }()
  }, {
    key: 'resourceName',
    get: function get() {
      return 'authorization';
    }
  }, {
    key: 'resourcesName',
    get: function get() {
      return 'authorizations';
    }
  }, {
    key: 'createAction',
    get: function get() {
      return this.collectionPath();
    }
  }]);
  return Authorization;
}(_base4.default);

exports.default = Authorization;


_list2.default.includeInto(Authorization);
_find2.default.includeInto(Authorization);
_update2.default.includeInto(Authorization);
_delete2.default.includeInto(Authorization);
module.exports = exports['default'];
//# sourceMappingURL=authorization.js.map