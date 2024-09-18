import List from '../actions/list';
import Find from '../actions/find';
import Create from '../actions/create';
import Update from '../actions/update';
import Delete from '../actions/delete';
import Resource from './base';
export default class ChoiceList extends Resource {
    get resourceName() {
        return 'choice_list';
    }
    get resourcesName() {
        return 'choice_lists';
    }
}
List.includeInto(ChoiceList);
Find.includeInto(ChoiceList);
Create.includeInto(ChoiceList);
Update.includeInto(ChoiceList);
Delete.includeInto(ChoiceList);
//# sourceMappingURL=choice-list.js.map