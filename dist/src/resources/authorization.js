var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import base64 from 'base-64';
import List from '../actions/list';
import Find from '../actions/find';
import Update from '../actions/update';
import Delete from '../actions/delete';
import Resource from './base';
export default class Authorization extends Resource {
    get resourceName() {
        return 'authorization';
    }
    get resourcesName() {
        return 'authorizations';
    }
    get createAction() {
        return this.collectionPath();
    }
    create(object, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const encoded = base64.encode(`${email}:${password}`);
            const options = {
                body: this.attributesForObject(object),
                headers: {
                    'Authorization': `Basic ${encoded}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            };
            const body = yield this.client.noTokenApi
                .post(this.createAction, options);
            return body[this.resourceName];
        });
    }
    regenerate(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = yield this.client.api.post(this.memberActionPath(id, 'regenerate'));
            return body[this.resourceName];
        });
    }
}
List.includeInto(Authorization);
Find.includeInto(Authorization);
Update.includeInto(Authorization);
Delete.includeInto(Authorization);
//# sourceMappingURL=authorization.js.map