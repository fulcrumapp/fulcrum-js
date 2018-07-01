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

var _list = require('../actions/list');

var _list2 = _interopRequireDefault(_list);

var _find = require('../actions/find');

var _find2 = _interopRequireDefault(_find);

var _create = require('../actions/create');

var _create2 = _interopRequireDefault(_create);

var _update = require('../actions/update');

var _update2 = _interopRequireDefault(_update);

var _delete2 = require('../actions/delete');

var _delete3 = _interopRequireDefault(_delete2);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

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
_delete3.default.includeInto(Record);
module.exports = exports['default'];
//# sourceMappingURL=record.js.map