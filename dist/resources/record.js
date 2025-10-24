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

var _serialBatchUpdate = require('../actions/serial-batch-update');

var _serialBatchUpdate2 = _interopRequireDefault(_serialBatchUpdate);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _page = require('../page');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Record = function (_Resource) {
  (0, _inherits3.default)(Record, _Resource);

  function Record() {
    (0, _classCallCheck3.default)(this, Record);
    return (0, _possibleConstructorReturn3.default)(this, (Record.__proto__ || Object.getPrototypeOf(Record)).apply(this, arguments));
  }

  (0, _createClass3.default)(Record, [{
    key: 'delete',
    value: function _delete(id, changesetID) {
      var options = {};

      if (changesetID != null) {
        options.body = {
          record: {
            changeset_id: changesetID
          }
        };
      }

      return this.client.api.del(this.memberPath(id), options);
    }
  }, {
    key: 'history',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(id) {
        var body;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.client.api.get(this.memberActionPath(id, 'history'));

              case 2:
                body = _context.sent;
                return _context.abrupt('return', new _page2.default(body, this.resourcesName));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function history(_x) {
        return _ref.apply(this, arguments);
      }

      return history;
    }()
  }, {
    key: 'resourceName',
    get: function get() {
      return 'record';
    }
  }, {
    key: 'resourcesName',
    get: function get() {
      return 'records';
    }
  }]);
  return Record;
}(_base2.default);

exports.default = Record;


_list2.default.includeInto(Record);
_find2.default.includeInto(Record);
_create2.default.includeInto(Record);
_update2.default.includeInto(Record);
_serialBatchUpdate2.default.includeInto(Record);
module.exports = exports['default'];
//# sourceMappingURL=record.js.map