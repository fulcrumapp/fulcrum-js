"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const fetcher_1 = __importDefault(require("./fetcher"));
const form_1 = __importDefault(require("./resources/form"));
const record_1 = __importDefault(require("./resources/record"));
const changeset_1 = __importDefault(require("./resources/changeset"));
const choice_list_1 = __importDefault(require("./resources/choice-list"));
const classification_set_1 = __importDefault(require("./resources/classification-set"));
const authorization_1 = __importDefault(require("./resources/authorization"));
const membership_1 = __importDefault(require("./resources/membership"));
const project_1 = __importDefault(require("./resources/project"));
const layer_1 = __importDefault(require("./resources/layer"));
const photo_1 = __importDefault(require("./resources/photo"));
const video_1 = __importDefault(require("./resources/video"));
const audio_1 = __importDefault(require("./resources/audio"));
const signature_1 = __importDefault(require("./resources/signature"));
const role_1 = __importDefault(require("./resources/role"));
const webhook_1 = __importDefault(require("./resources/webhook"));
const audit_log_1 = __importDefault(require("./resources/audit-log"));
const query_1 = __importDefault(require("./resources/query"));
const VERSION = JSON.parse(fs_1.default.readFileSync(path_1.default.join(import.meta.dirname, '../package.json'))).version;
const BASE_URL = 'https://api.fulcrumapp.com/api/v2';
class Client {
    constructor(token, opts) {
        const _opts = opts || {};
        this.baseUrl = _opts.baseUrl || BASE_URL;
        this.version = VERSION;
        const options = {
            baseURI: this.baseUrl,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'User-Agent': _opts.userAgent || `fulcrum-js version ${VERSION}`
            }
        };
        const tokenOptions = Object.assign({}, options);
        tokenOptions.headers['X-ApiToken'] = token;
        const noTokenOptions = Object.assign({}, options);
        this.api = new fetcher_1.default(tokenOptions);
        this.noTokenApi = new fetcher_1.default(noTokenOptions);
    }
    urlFromPath(path, base) {
        return (base || this.baseUrl) + '/' + path;
    }
    url(path, base) {
        return this.urlFromPath(path, base);
    }
    get forms() {
        if (!this._forms) {
            this._forms = new form_1.default(this);
        }
        return this._forms;
    }
    get records() {
        if (!this._records) {
            this._records = new record_1.default(this);
        }
        return this._records;
    }
    get changesets() {
        if (!this._changesets) {
            this._changesets = new changeset_1.default(this);
        }
        return this._changesets;
    }
    get choiceLists() {
        if (!this._choiceLists) {
            this._choiceLists = new choice_list_1.default(this);
        }
        return this._choiceLists;
    }
    get classificationSets() {
        if (!this._classificationSets) {
            this._classificationSets = new classification_set_1.default(this);
        }
        return this._classificationSets;
    }
    get authorizations() {
        if (!this._authorizations) {
            this._authorizations = new authorization_1.default(this);
        }
        return this._authorizations;
    }
    get memberships() {
        if (!this._memberships) {
            this._memberships = new membership_1.default(this);
        }
        return this._memberships;
    }
    get projects() {
        if (!this._projects) {
            this._projects = new project_1.default(this);
        }
        return this._projects;
    }
    get layers() {
        if (!this._layers) {
            this._layers = new layer_1.default(this);
        }
        return this._layers;
    }
    get photos() {
        if (!this._photos) {
            this._photos = new photo_1.default(this);
        }
        return this._photos;
    }
    get videos() {
        if (!this._videos) {
            this._videos = new video_1.default(this);
        }
        return this._videos;
    }
    get audio() {
        if (!this._audio) {
            this._audio = new audio_1.default(this);
        }
        return this._audio;
    }
    get signatures() {
        if (!this._signatures) {
            this._signatures = new signature_1.default(this);
        }
        return this._signatures;
    }
    get roles() {
        if (!this._roles) {
            this._roles = new role_1.default(this);
        }
        return this._roles;
    }
    get webhooks() {
        if (!this._webhooks) {
            this._webhooks = new webhook_1.default(this);
        }
        return this._webhooks;
    }
    get query() {
        if (!this._query) {
            this._query = (0, query_1.default)(this);
        }
        return this._query;
    }
    get auditLogs() {
        if (!this._auditLogs) {
            this._auditLogs = new audit_log_1.default(this);
        }
        return this._auditLogs;
    }
    registerAuthenticationErrorHandler(func) {
        this.api.registerAuthenticationErrorHandler(func);
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map