var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Mixin from '../mixmatch';
export default class Create extends Mixin {
    get createAction() {
        return this.collectionPath();
    }
    create(object) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                body: this.attributesForObject(object)
            };
            const body = yield this.client.api.post(this.createAction, options);
            return body[this.resourceName];
        });
    }
}
//# sourceMappingURL=create.js.map