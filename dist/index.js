"use strict";
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
exports.createAuthorization = exports.getUser = exports.WebHookDataType = exports.MediaIdKey = exports.FormType = exports.Page = exports.Client = void 0;
var base64 = require("base-64");
var constants_1 = require("./constants");
var fetcher_1 = require("./fetcher");
var client_1 = require("./client");
exports.Client = client_1.default;
var page_1 = require("./page");
exports.Page = page_1.default;
var Form_1 = require("./types/Form");
Object.defineProperty(exports, "FormType", { enumerable: true, get: function () { return Form_1.FormType; } });
var Media_1 = require("./types/Media");
Object.defineProperty(exports, "MediaIdKey", { enumerable: true, get: function () { return Media_1.MediaIdKey; } });
var WebHook_1 = require("./types/WebHook");
Object.defineProperty(exports, "WebHookDataType", { enumerable: true, get: function () { return WebHook_1.WebHookDataType; } });
var api = new fetcher_1.default({
    baseUrl: constants_1.BASE_URL,
    headers: {},
});
function generateAuthOptions(email, password) {
    var encoded = base64.encode(email + ":" + password);
    return {
        headers: {
            Authorization: "Basic " + encoded,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    };
}
function getUser(email, password) {
    return __awaiter(this, void 0, void 0, function () {
        var options, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = generateAuthOptions(email, password);
                    return [4 /*yield*/, api.get("/users", options)];
                case 1:
                    user = (_a.sent()).body.user;
                    user.contexts = user.contexts.map(function (context) {
                        // To avoid confusion remove the old API tokens. These will
                        // be deprecated eventually, and authorizations have been
                        // the way to create tokens for a while now.
                        delete context.api_token;
                        return context;
                    });
                    return [2 /*return*/, user];
            }
        });
    });
}
exports.getUser = getUser;
function createAuthorization(email, password, organizationId, note, timeout, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var authorizationObj, options, body;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    authorizationObj = {
                        authorization: {
                            organization_id: organizationId,
                            user_id: userId,
                            note: note,
                            timeout: timeout,
                        },
                    };
                    options = generateAuthOptions(email, password);
                    options.body = authorizationObj;
                    return [4 /*yield*/, api.post("/authorizations", options)];
                case 1:
                    body = _a.sent();
                    return [2 /*return*/, body.authorization];
            }
        });
    });
}
exports.createAuthorization = createAuthorization;
//# sourceMappingURL=index.js.map