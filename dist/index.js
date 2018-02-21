'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAuthorization = exports.getUser = exports.Page = exports.Client = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getUser = exports.getUser = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(email, password) {
    var resp, user;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return api.auth(email, password).get('/users');

          case 2:
            resp = _context.sent;

            if (!resp.err) {
              _context.next = 5;
              break;
            }

            throw resp.err;

          case 5:
            user = resp.body.user;


            user.contexts = user.contexts.map(function (context) {
              // To avoid confusion remove the old API tokens. These will
              // be deprecated eventually, and authorizations have been
              // the way to create tokens for a while now.
              delete context.api_token;

              return context;
            });

            return _context.abrupt('return', user);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var createAuthorization = exports.createAuthorization = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(email, password, organizationId, note, timeout) {
    var authorizationObj, resp;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            authorizationObj = {
              authorization: {
                organization_id: organizationId,
                note: note,
                timeout: timeout
              }
            };
            _context2.next = 3;
            return api.auth(email, password).post('/authorizations', {
              body: authorizationObj
            });

          case 3:
            resp = _context2.sent;

            if (!resp.err) {
              _context2.next = 6;
              break;
            }

            throw resp.err;

          case 6:
            return _context2.abrupt('return', resp.body.authorization);

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function createAuthorization(_x3, _x4, _x5, _x6, _x7) {
    return _ref2.apply(this, arguments);
  };
}();

var _frisbee = require('frisbee');

var _frisbee2 = _interopRequireDefault(_frisbee);

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

var _page = require('./page');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Client = _client2.default;
exports.Page = _page2.default;


var api = new _frisbee2.default({
  baseURI: 'https://api.fulcrumapp.com/api/v2',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});
//# sourceMappingURL=index.js.map