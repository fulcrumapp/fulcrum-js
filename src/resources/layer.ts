import List from "../actions/list";
import Find from "../actions/find";
import Create from "../actions/create";
import Update from "../actions/update";
import Delete from "../actions/delete";
import Resource from "./base";

export default class Layer extends Resource {
  get resourceName() {
    return "layer";
  }

  get resourcesName() {
    return "layers";
  }
}

export default interface Layer extends Resource, List, Find, Create, Update, Delete {}

List.includeInto(Layer);
Find.includeInto(Layer);
Create.includeInto(Layer);
Update.includeInto(Layer);
Delete.includeInto(Layer);
