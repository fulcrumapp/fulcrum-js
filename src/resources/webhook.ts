import List from "../actions/list";
import Find from "../actions/find";
import Create from "../actions/create";
import Update from "../actions/update";
import Delete from "../actions/delete";
import Resource from "./base";

export default class Webhook extends Resource {
  get resourceName() {
    return "webhook";
  }

  get resourcesName() {
    return "webhooks";
  }
}

export default interface Webhook extends Resource, List, Find, Create, Update, Delete {}

List.includeInto(Webhook);
Find.includeInto(Webhook);
Create.includeInto(Webhook);
Update.includeInto(Webhook);
Delete.includeInto(Webhook);
