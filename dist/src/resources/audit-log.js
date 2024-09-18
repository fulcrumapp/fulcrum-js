import List from '../actions/list';
import Find from '../actions/find';
import Resource from './base';
export default class AuditLog extends Resource {
    get resourceName() {
        return 'audit_log';
    }
    get resourcesName() {
        return 'audit_logs';
    }
}
List.includeInto(AuditLog);
Find.includeInto(AuditLog);
//# sourceMappingURL=audit-log.js.map