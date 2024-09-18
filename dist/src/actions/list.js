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
import Page from '../page';
const DEFAULT_PER_PAGE = 1000;
export default class List extends Mixin {
    get defaultListParams() {
        return { per_page: DEFAULT_PER_PAGE };
    }
    all(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                qs: params || this.defaultListParams
            };
            const body = yield this.client.api.get(this.collectionPath(), options);
            return new Page(body, this.resourcesName);
        });
    }
}
//# sourceMappingURL=list.js.map