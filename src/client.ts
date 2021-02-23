import Fetcher from "./fetcher";
import FetchOptions from "./types/FetchOptions";
import { BASE_URL } from "./constants";

import Audio from "./resources/audio";
import AuditLog from "./resources/audit-log";
import Authorization from "./resources/authorization";
import Changeset from "./resources/changeset";
import ChoiceList from "./resources/choice-list";
import ClassificationSet from "./resources/classification-set";
import Form from "./resources/form";
import Layer from "./resources/layer";
import Membership from "./resources/membership";
import Photo from "./resources/photo";
import Project from "./resources/project";
import query from "./resources/query";
import Record from "./resources/record";
import Role from "./resources/role";
import Signature from "./resources/signature";
import Video from "./resources/video";
import Webhook from "./resources/webhook";

const VERSION = require("../package.json").version;

export default class Client {
  baseUrl: string;
  version: string;

  api: Fetcher;
  noTokenApi: Fetcher;

  _audio?: Audio;
  _auditLogs?: AuditLog;
  _authorizations?: Authorization;
  _changesets?: Changeset;
  _choiceLists?: ChoiceList;
  _classificationSets?: ClassificationSet;
  _forms?: Form;
  _layers?: Layer;
  _memberships?: Membership;
  _photos?: Photo;
  _projects?: Project;
  _query?: Function;
  _records?: Record;
  _roles?: Role;
  _signatures?: Signature;
  _videos?: Video;
  _webhooks?: Webhook;

  constructor(token: string, opts: FetchOptions) {
    const _opts: FetchOptions = opts || {};

    this.baseUrl = _opts.baseUrl || BASE_URL;
    this.version = VERSION;

    const options: FetchOptions = {
      baseUrl: this.baseUrl,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-Agent": _opts.userAgent || `fulcrum-js version ${VERSION}`,
      },
    };

    const tokenOptions = Object.assign({}, options);
    (tokenOptions.headers as any)["X-ApiToken"] = token;
    const noTokenOptions = Object.assign({}, options);

    this.api = new Fetcher(tokenOptions);
    this.noTokenApi = new Fetcher(noTokenOptions);
  }

  urlFromPath(path: string, base: string) {
    return (base ?? this.baseUrl) + "/" + path;
  }

  url(path: string, base: string) {
    return this.urlFromPath(path, base);
  }

  get forms() {
    if (!this._forms) {
      this._forms = new Form(this);
    }
    return this._forms;
  }

  get records() {
    if (!this._records) {
      this._records = new Record(this);
    }
    return this._records;
  }

  get changesets() {
    if (!this._changesets) {
      this._changesets = new Changeset(this);
    }
    return this._changesets;
  }

  get choiceLists() {
    if (!this._choiceLists) {
      this._choiceLists = new ChoiceList(this);
    }
    return this._choiceLists;
  }

  get classificationSets() {
    if (!this._classificationSets) {
      this._classificationSets = new ClassificationSet(this);
    }
    return this._classificationSets;
  }

  get authorizations() {
    if (!this._authorizations) {
      this._authorizations = new Authorization(this);
    }
    return this._authorizations;
  }

  get memberships() {
    if (!this._memberships) {
      this._memberships = new Membership(this);
    }
    return this._memberships;
  }

  get projects() {
    if (!this._projects) {
      this._projects = new Project(this);
    }
    return this._projects;
  }

  get layers() {
    if (!this._layers) {
      this._layers = new Layer(this);
    }
    return this._layers;
  }

  get photos() {
    if (!this._photos) {
      this._photos = new Photo(this);
    }
    return this._photos;
  }

  get videos() {
    if (!this._videos) {
      this._videos = new Video(this);
    }

    return this._videos;
  }

  get audio() {
    if (!this._audio) {
      this._audio = new Audio(this);
    }

    return this._audio;
  }

  get signatures() {
    if (!this._signatures) {
      this._signatures = new Signature(this);
    }

    return this._signatures;
  }

  get roles() {
    if (!this._roles) {
      this._roles = new Role(this);
    }

    return this._roles;
  }

  get webhooks() {
    if (!this._webhooks) {
      this._webhooks = new Webhook(this);
    }

    return this._webhooks;
  }

  get query() {
    if (!this._query) {
      this._query = query(this);
    }

    return this._query;
  }

  get auditLogs() {
    if (!this._auditLogs) {
      this._auditLogs = new AuditLog(this);
    }

    return this._auditLogs;
  }

  registerAuthenticationErrorHandler(func: Function) {
    this.api.registerAuthenticationErrorHandler(func);
  }
}
