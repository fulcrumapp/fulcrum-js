"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("portable-fetch");
var p_queue_1 = require("p-queue");
function getQueryString(params) {
    return Object.keys(params)
        .map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); })
        .join('&');
}
function errorMessageForStatus(status) {
    var messages = {
        400: 'Bad Request',
        401: 'Unauthorized',
        402: 'Payment Required',
        403: 'Forbidden',
        404: 'Not Found'
    };
    return messages[status] || "HTTP " + status;
}
var Fetcher = /** @class */ (function () {
    function Fetcher(options) {
        this.options = options;
        this.queue = new p_queue_1.default({ concurrency: 3 });
        this.headers = options.headers;
    }
    Fetcher.prototype._processOptions = function (opts) {
        var options = __assign(__assign({}, opts), { headers: __assign(__assign({}, this.headers), opts.headers) });
        // remove any nil or blank headers
        // (e.g. to automatically set Content-Type with `FormData` boundary)
        Object.keys(options.headers).forEach(function (key) {
            if (typeof options.headers[key] === 'undefined' ||
                options.headers[key] === null ||
                options.headers[key] === '') {
                delete options.headers[key];
            }
        });
        delete options.baseURI;
        if (options && options.hasOwnProperty('body') &&
            options.hasOwnProperty('headers') && options.headers['Content-Type'] === 'application/json') {
            options.body = JSON.stringify(options.body);
        }
        return options;
    };
    Fetcher.prototype._fetch = function (url, options) {
        return __awaiter(this, void 0, void 0, function () {
            var resp, errorMessage, contentType;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url, options)];
                    case 1:
                        resp = _a.sent();
                        if (!resp.ok) {
                            errorMessage = errorMessageForStatus(resp.status) || 'Unknown Error';
                            if (errorMessage === 'Unauthorized' && this.authenticationErrorHandler) {
                                this.authenticationErrorHandler();
                            }
                            throw new Error(errorMessage);
                        }
                        contentType = resp.headers.get('Content-Type');
                        if (contentType && contentType.split(';')[0] === 'application/json') {
                            return [2 /*return*/, resp.json()];
                        }
                        return [2 /*return*/, resp.text()];
                }
            });
        });
    };
    Fetcher.prototype._queue = function (url, options) {
        var _this = this;
        return this.queue.add(function () { return _this._fetch(url, options); });
    };
    Fetcher.prototype.get = function (path, opts) {
        var url = this.options.baseURI + '/' + path;
        if (opts && opts.hasOwnProperty('qs')) {
            url += '?' + getQueryString(opts.qs);
            delete opts.qs;
        }
        var options = this._processOptions(Object.assign({ method: 'GET' }, opts));
        return this._queue(url, options);
    };
    Fetcher.prototype.post = function (path, opts) {
        var url = this.options.baseURI + '/' + path;
        var options = this._processOptions(Object.assign({ method: 'POST' }, opts));
        return this._queue(url, options);
    };
    Fetcher.prototype.put = function (path, opts) {
        var url = this.options.baseURI + '/' + path;
        var options = this._processOptions(Object.assign({ method: 'PUT' }, opts));
        return this._queue(url, options);
    };
    Fetcher.prototype.del = function (path, opts) {
        var url = this.options.baseURI + '/' + path;
        var options = this._processOptions(Object.assign({ method: 'DELETE' }, opts));
        return this._queue(url, options);
    };
    Fetcher.prototype.registerAuthenticationErrorHandler = function (func) {
        this.authenticationErrorHandler = func;
    };
    return Fetcher;
}());
exports.default = Fetcher;
//# sourceMappingURL=fetcher.js.map