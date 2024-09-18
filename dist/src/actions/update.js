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
export default class Update extends Mixin {
    update(id, object) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                body: this.attributesForObject(object)
            };
            const body = yield this.client.api.put(this.memberPath(id), options);
            return body[this.resourceName];
        });
    }
}
//# sourceMappingURL=update.js.map