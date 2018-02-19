import Frisbee from 'frisbee';

import Form from './resources/form';
import Record from './resources/record';
import Changeset from './resources/changeset';
import ChoiceList from './resources/choice-list';
import ClassificationSet from './resources/classification-set';
import Authorization from './resources/authorization';
import Membership from './resources/membership';
import Project from './resources/project';
import Layer from './resources/layer';
import Photo from './resources/photo';
import Video from './resources/video';
import Audio from './resources/audio';
import Role from './resources/role';
import Webhook from './resources/webhook';

const VERSION = require('../package.json').version;

const BASE_URL = 'https://api.fulcrumapp.com/api/v2';

export default class Client {
  constructor(token, opts) {
    const _opts = opts || {};

    this.baseUrl = _opts.baseUrl || BASE_URL;

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

    this.api = new Frisbee(tokenOptions);
    this.noTokenApi = new Frisbee(noTokenOptions);
  }

  urlFromPath(path, base) {
    return (base || this.baseUrl) + '/' + path;
  }

  url(path, base) {
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
}
