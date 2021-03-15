import List from "../actions/list";
import Find from "../actions/find";
import Resource from "./base";

export default class AuditLog extends Resource {
  get resourceName() {
    return "audit_log";
  }

  get resourcesName() {
    return "audit_logs";
  }
}

export default interface AuditLog extends Resource, List, Find {}

List.includeInto(AuditLog);
Find.includeInto(AuditLog);
