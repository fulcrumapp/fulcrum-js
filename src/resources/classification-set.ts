import List from "../actions/list";
import Find from "../actions/find";
import Create from "../actions/create";
import Update from "../actions/update";
import Delete from "../actions/delete";
import Resource from "./base";

export default class ClassificationSet extends Resource {
  get resourceName() {
    return "classification_set";
  }

  get resourcesName() {
    return "classification_sets";
  }
}

export default interface ClassificationSet extends Resource, List, Find, Create, Update, Delete {}

List.includeInto(ClassificationSet);
Find.includeInto(ClassificationSet);
Create.includeInto(ClassificationSet);
Update.includeInto(ClassificationSet);
Delete.includeInto(ClassificationSet);
