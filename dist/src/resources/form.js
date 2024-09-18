var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import List from '../actions/list';
import Find from '../actions/find';
import Create from '../actions/create';
import Update from '../actions/update';
import Delete from '../actions/delete';
import Resource from './base';
import Page from '../page';
export default class Form extends Resource {
    get resourceName() {
        return 'form';
    }
    get resourcesName() {
        return 'forms';
    }
    history(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, version = null) {
            let options = null;
            if (version != null) {
                options = { qs: { version: version } };
            }
            const body = yield this.client.api.get(this.memberActionPath(id, 'history'), options);
            return new Page(body, this.resourcesName);
        });
    }
}
List.includeInto(Form);
Find.includeInto(Form);
Create.includeInto(Form);
Update.includeInto(Form);
Delete.includeInto(Form);
//# sourceMappingURL=form.js.map