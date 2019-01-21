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

  get statement() {
    console.log('Statement from the Audit Log object');
  }
}

List.includeInto(AuditLog);
Find.includeInto(AuditLog);

