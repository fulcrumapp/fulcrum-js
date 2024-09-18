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
import Resource from './base';
import Page from '../page';
export default class Record extends Resource {
    get resourceName() {
        return 'record';
    }
    get resourcesName() {
        return 'records';
    }
    delete(id, changesetID) {
        const options = {};
        if (changesetID != null) {
            options.body = {
                record: {
                    changeset_id: changesetID
                }
            };
        }
        return this.client.api.del(this.memberPath(id), options);
    }
    history(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = yield this.client.api.get(this.memberActionPath(id, 'history'));
            return new Page(body, this.resourcesName);
        });
    }
}
List.includeInto(Record);
Find.includeInto(Record);
Create.includeInto(Record);
Update.includeInto(Record);
//# sourceMappingURL=record.js.map