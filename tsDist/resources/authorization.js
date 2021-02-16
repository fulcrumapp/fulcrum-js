"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var base_64_1 = require("base-64");
var list_1 = require("../actions/list");
var find_1 = require("../actions/find");
var update_1 = require("../actions/update");
var delete_1 = require("../actions/delete");
var base_1 = require("./base");
var Authorization = /** @class */ (function (_super) {
    __extends(Authorization, _super);
    function Authorization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Authorization.prototype, "resourceName", {
        get: function () {
            return 'authorization';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authorization.prototype, "resourcesName", {
        get: function () {
            return 'authorizations';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Authorization.prototype, "createAction", {
        get: function () {
            return this.collectionPath();
        },
        enumerable: false,
        configurable: true
    });
    Authorization.prototype.create = function (object, email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var encoded, options, body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        encoded = base_64_1.default.encode(email + ":" + password);
                        options = {
                            body: this.attributesForObject(object),
                            headers: {
                                'Authorization': "Basic " + encoded,
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            }
                        };
                        return [4 /*yield*/, this.client.noTokenApi
                                .post(this.createAction, options)];
                    case 1:
                        body = _a.sent();
                        return [2 /*return*/, body[this.resourceName]];
                }
            });
        });
    };
    Authorization.prototype.regenerate = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.api.post(this.memberActionPath(id, 'regenerate'))];
                    case 1:
                        body = _a.sent();
                        return [2 /*return*/, body[this.resourceName]];
                }
            });
        });
    };
    return Authorization;
}(base_1.default));
exports.default = Authorization;
list_1.default.includeInto(Authorization);
find_1.default.includeInto(Authorization);
update_1.default.includeInto(Authorization);
delete_1.default.includeInto(Authorization);
//# sourceMappingURL=authorization.js.map