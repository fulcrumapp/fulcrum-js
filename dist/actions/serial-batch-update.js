'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var SerialBatchUpdate = function (_Mixin) {
  (0, _inherits3.default)(SerialBatchUpdate, _Mixin);

  function SerialBatchUpdate() {
    (0, _classCallCheck3.default)(this, SerialBatchUpdate);
    return (0, _possibleConstructorReturn3.default)(this, (SerialBatchUpdate.__proto__ || Object.getPrototypeOf(SerialBatchUpdate)).apply(this, arguments));
  }

  (0, _createClass3.default)(SerialBatchUpdate, [{
    key: 'serialBatchUpdate',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ids, attributes) {
        var changesetOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        var changesetObj, changeset, updatedRecords, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, id, recordAttributes, options, body;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Create a changeset for this bulk operation
                changesetObj = {
                  form_id: attributes.form_id || changesetOptions.form_id,
                  metadata: changesetOptions.metadata || {
                    app: 'fulcrum-js',
                    operation: 'serial_batch_update'
                  }
                };
                _context.next = 3;
                return this.client.changesets.create(changesetObj);

              case 3:
                changeset = _context.sent;


                // Update each record with the changeset_id
                updatedRecords = [];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 8;
                _iterator = ids[Symbol.iterator]();

              case 10:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 21;
                  break;
                }

                id = _step.value;
                recordAttributes = (0, _extends3.default)({}, attributes, {
                  changeset_id: changeset.id
                });
                options = {
                  body: this.attributesForObject(recordAttributes)
                };
                _context.next = 16;
                return this.client.api.put(this.memberPath(id), options);

              case 16:
                body = _context.sent;

                updatedRecords.push(body[this.resourceName]);

              case 18:
                _iteratorNormalCompletion = true;
                _context.next = 10;
                break;

              case 21:
                _context.next = 27;
                break;

              case 23:
                _context.prev = 23;
                _context.t0 = _context['catch'](8);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 27:
                _context.prev = 27;
                _context.prev = 28;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 30:
                _context.prev = 30;

                if (!_didIteratorError) {
                  _context.next = 33;
                  break;
                }

                throw _iteratorError;

              case 33:
                return _context.finish(30);

              case 34:
                return _context.finish(27);

              case 35:
                _context.next = 37;
                return this.client.changesets.close(changeset.id);

              case 37:
                return _context.abrupt('return', updatedRecords);

              case 38:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[8, 23, 27, 35], [28,, 30, 34]]);
      }));

      function serialBatchUpdate(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return serialBatchUpdate;
    }()
  }]);
  return SerialBatchUpdate;
}(_mixmatch2.default);

exports.default = SerialBatchUpdate;
module.exports = exports['default'];
//# sourceMappingURL=serial-batch-update.js.map