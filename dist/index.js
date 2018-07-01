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
    var options, body, user;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            options = generateAuthOptions(email, password);
            _context.next = 3;
            return api.get('/users', options);

          case 3:
            body = _context.sent;
            user = body.user;


            user.contexts = user.contexts.map(function (context) {
              // To avoid confusion remove the old API tokens. These will
              // be deprecated eventually, and authorizations have been
              // the way to create tokens for a while now.
              delete context.api_token;

              return context;
            });

            return _context.abrupt('return', user);

          case 7:
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
    var authorizationObj, options, body;
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
            options = generateAuthOptions(email, password);


            options.body = authorizationObj;

            _context2.next = 5;
            return api.post('/authorizations', options);

          case 5:
            body = _context2.sent;
            return _context2.abrupt('return', body.authorization);

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

var _base = require('base-64');

var _base2 = _interopRequireDefault(_base);

var _fetcher = require('./fetcher');

var _fetcher2 = _interopRequireDefault(_fetcher);

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

var _page = require('./page');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Client = _client2.default;
exports.Page = _page2.default;


var api = new _fetcher2.default({
  baseURI: 'https://api.fulcrumapp.com/api/v2'
});

function generateAuthOptions(email, password) {
  var encoded = _base2.default.encode(email + ':' + password);

  return {
    headers: {
      'Authorization': 'Basic ' + encoded,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };
}
//# sourceMappingURL=index.js.map