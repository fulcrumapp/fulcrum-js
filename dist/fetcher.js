'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getQueryString(params) {
  return Object.keys(params).map(function (k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
  }).join('&');
}

function errorMessageForStatus(status) {
  var messages = {
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found'
  };

  return messages[status] || 'HTTP ' + status;
}

var Fetcher = function () {
  function Fetcher(options) {
    (0, _classCallCheck3.default)(this, Fetcher);

    this.options = options;

    this.headers = options.headers;
  }

  (0, _createClass3.default)(Fetcher, [{
    key: '_processOptions',
    value: function _processOptions(opts) {
      var options = (0, _extends3.default)({}, opts, {
        headers: (0, _extends3.default)({}, this.headers, opts.headers)
      });

      // remove any nil or blank headers
      // (e.g. to automatically set Content-Type with `FormData` boundary)
      Object.keys(options.headers).forEach(function (key) {
        if (typeof options.headers[key] === 'undefined' || options.headers[key] === null || options.headers[key] === '') {
          delete options.headers[key];
        }
      });

      delete options.baseURI;

      if (options && options.hasOwnProperty('body') && options.hasOwnProperty('headers') && options.headers['Content-Type'] === 'application/json') {
        options.body = JSON.stringify(options.body);
      }

      return options;
    }
  }, {
    key: '_fetch',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url, options) {
        var resp, errorMessage, contentType;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(url, options);

              case 2:
                resp = _context.sent;

                if (resp.ok) {
                  _context.next = 7;
                  break;
                }

                errorMessage = errorMessageForStatus(resp.status) || 'Unknown Error';


                if (errorMessage === 'Unauthorized' && this.authenticationErrorHandler) {
                  this.authenticationErrorHandler();
                }

                throw new Error(errorMessage);

              case 7:
                contentType = resp.headers.get('Content-Type');

                if (!(contentType && contentType.split(';')[0] === 'application/json')) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt('return', resp.json());

              case 10:
                return _context.abrupt('return', resp.text());

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _fetch(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return _fetch;
    }()
  }, {
    key: 'get',
    value: function get(path, opts) {
      var url = this.options.baseURI + '/' + path;

      if (opts && opts.hasOwnProperty('qs')) {
        url += '?' + getQueryString(opts.qs);
        delete opts.qs;
      }

      var options = this._processOptions(Object.assign({ method: 'GET' }, opts));

      return this._fetch(url, options);
    }
  }, {
    key: 'post',
    value: function post(path, opts) {
      var url = this.options.baseURI + '/' + path;

      var options = this._processOptions(Object.assign({ method: 'POST' }, opts));

      return this._fetch(url, options);
    }
  }, {
    key: 'put',
    value: function put(path, opts) {
      var url = this.options.baseURI + '/' + path;

      var options = this._processOptions(Object.assign({ method: 'PUT' }, opts));

      return this._fetch(url, options);
    }
  }, {
    key: 'del',
    value: function del(path, opts) {
      var url = this.options.baseURI + '/' + path;

      var options = this._processOptions(Object.assign({ method: 'DELETE' }, opts));

      return this._fetch(url, options);
    }
  }, {
    key: 'registerAuthenticationErrorHandler',
    value: function registerAuthenticationErrorHandler(func) {
      this.authenticationErrorHandler = func;
    }
  }]);
  return Fetcher;
}();

exports.default = Fetcher;
module.exports = exports['default'];
//# sourceMappingURL=fetcher.js.map