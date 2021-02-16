"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetcher_1 = require("./fetcher");
var form_1 = require("./resources/form");
var record_1 = require("./resources/record");
var changeset_1 = require("./resources/changeset");
var choice_list_1 = require("./resources/choice-list");
var classification_set_1 = require("./resources/classification-set");
var authorization_1 = require("./resources/authorization");
var membership_1 = require("./resources/membership");
var project_1 = require("./resources/project");
var layer_1 = require("./resources/layer");
var photo_1 = require("./resources/photo");
var video_1 = require("./resources/video");
var audio_1 = require("./resources/audio");
var signature_1 = require("./resources/signature");
var role_1 = require("./resources/role");
var webhook_1 = require("./resources/webhook");
var audit_log_1 = require("./resources/audit-log");
var query_1 = require("./resources/query");
var VERSION = require('../package.json').version;
var BASE_URL = 'https://api.fulcrumapp.com/api/v2';
var Client = /** @class */ (function () {
    function Client(token, opts) {
        var _opts = opts || {};
        this.baseUrl = _opts.baseUrl || BASE_URL;
        this.version = VERSION;
        var options = {
            baseURI: this.baseUrl,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'User-Agent': _opts.userAgent || "fulcrum-js version " + VERSION
            }
        };
        var tokenOptions = Object.assign({}, options);
        tokenOptions.headers['X-ApiToken'] = token;
        var noTokenOptions = Object.assign({}, options);
        this.api = new fetcher_1.default(tokenOptions);
        this.noTokenApi = new fetcher_1.default(noTokenOptions);
    }
    Client.prototype.urlFromPath = function (path, base) {
        return (base || this.baseUrl) + '/' + path;
    };
    Client.prototype.url = function (path, base) {
        return this.urlFromPath(path, base);
    };
    Object.defineProperty(Client.prototype, "forms", {
        get: function () {
            if (!this._forms) {
                this._forms = new form_1.default(this);
            }
            return this._forms;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "records", {
        get: function () {
            if (!this._records) {
                this._records = new record_1.default(this);
            }
            return this._records;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "changesets", {
        get: function () {
            if (!this._changesets) {
                this._changesets = new changeset_1.default(this);
            }
            return this._changesets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "choiceLists", {
        get: function () {
            if (!this._choiceLists) {
                this._choiceLists = new choice_list_1.default(this);
            }
            return this._choiceLists;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "classificationSets", {
        get: function () {
            if (!this._classificationSets) {
                this._classificationSets = new classification_set_1.default(this);
            }
            return this._classificationSets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "authorizations", {
        get: function () {
            if (!this._authorizations) {
                this._authorizations = new authorization_1.default(this);
            }
            return this._authorizations;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "memberships", {
        get: function () {
            if (!this._memberships) {
                this._memberships = new membership_1.default(this);
            }
            return this._memberships;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "projects", {
        get: function () {
            if (!this._projects) {
                this._projects = new project_1.default(this);
            }
            return this._projects;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "layers", {
        get: function () {
            if (!this._layers) {
                this._layers = new layer_1.default(this);
            }
            return this._layers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "photos", {
        get: function () {
            if (!this._photos) {
                this._photos = new photo_1.default(this);
            }
            return this._photos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "videos", {
        get: function () {
            if (!this._videos) {
                this._videos = new video_1.default(this);
            }
            return this._videos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "audio", {
        get: function () {
            if (!this._audio) {
                this._audio = new audio_1.default(this);
            }
            return this._audio;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "signatures", {
        get: function () {
            if (!this._signatures) {
                this._signatures = new signature_1.default(this);
            }
            return this._signatures;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "roles", {
        get: function () {
            if (!this._roles) {
                this._roles = new role_1.default(this);
            }
            return this._roles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "webhooks", {
        get: function () {
            if (!this._webhooks) {
                this._webhooks = new webhook_1.default(this);
            }
            return this._webhooks;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "query", {
        get: function () {
            if (!this._query) {
                this._query = query_1.default(this);
            }
            return this._query;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Client.prototype, "auditLogs", {
        get: function () {
            if (!this._auditLogs) {
                this._auditLogs = new audit_log_1.default(this);
            }
            return this._auditLogs;
        },
        enumerable: false,
        configurable: true
    });
    Client.prototype.registerAuthenticationErrorHandler = function (func) {
        this.api.registerAuthenticationErrorHandler(func);
    };
    return Client;
}());
exports.default = Client;
//# sourceMappingURL=client.js.map