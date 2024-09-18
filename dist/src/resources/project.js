import List from '../actions/list';
import Find from '../actions/find';
import Create from '../actions/create';
import Update from '../actions/update';
import Delete from '../actions/delete';
import Resource from './base';
export default class Project extends Resource {
    get resourceName() {
        return 'project';
    }
    get resourcesName() {
        return 'projects';
    }
}
List.includeInto(Project);
Find.includeInto(Project);
Create.includeInto(Project);
Update.includeInto(Project);
Delete.includeInto(Project);
//# sourceMappingURL=project.js.map