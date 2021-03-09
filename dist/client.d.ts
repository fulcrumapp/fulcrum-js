import Fetcher from "./fetcher";
import FetchOptions from "./types/FetchOptions";
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
import Record from "./resources/record";
import Role from "./resources/role";
import Signature from "./resources/signature";
import Video from "./resources/video";
import Webhook from "./resources/webhook";
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
    constructor(token: string, opts?: FetchOptions);
    urlFromPath(path: string, base: string): string;
    url(path: string, base: string): string;
    get forms(): Form;
    get records(): Record;
    get changesets(): Changeset;
    get choiceLists(): ChoiceList;
    get classificationSets(): ClassificationSet;
    get authorizations(): Authorization;
    get memberships(): Membership;
    get projects(): Project;
    get layers(): Layer;
    get photos(): Photo;
    get videos(): Video;
    get audio(): Audio;
    get signatures(): Signature;
    get roles(): Role;
    get webhooks(): Webhook;
    get query(): Function;
    get auditLogs(): AuditLog;
    registerAuthenticationErrorHandler(func: Function): void;
}
