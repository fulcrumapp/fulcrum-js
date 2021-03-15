import List from "../actions/list";
import Find from "../actions/find";
import Create from "../actions/create";
import Update from "../actions/update";
import Delete from "../actions/delete";
import Resource from "./base";

export default class Project extends Resource {
  get resourceName() {
    return "project";
  }

  get resourcesName() {
    return "projects";
  }
}

export default interface Project extends Resource, List, Find, Create, Update, Delete {}

List.includeInto(Project);
Find.includeInto(Project);
Create.includeInto(Project);
Update.includeInto(Project);
Delete.includeInto(Project);
