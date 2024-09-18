var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import FormData from 'form-data';
import Mixin from '../mixmatch';
import { v4 as uuid } from 'uuid';
export default class Track extends Mixin {
    uploadTrack(file_1) {
        return __awaiter(this, arguments, void 0, function* (file, id = null) {
            const formData = new FormData();
            const accessKey = id || uuid.v4();
            formData.append(`${this.resourceName}[access_key]`, accessKey);
            formData.append(`${this.resourceName}[track]`, file);
            const options = {
                body: formData,
                headers: {
                    'Content-Type': null
                }
            };
            const resp = yield this.client.api.post(this.createAction, options);
            return resp[this.resourceName];
        });
    }
    track(id_1) {
        return __awaiter(this, arguments, void 0, function* (id, format = 'json') {
            const body = yield this.client.api.get(this.trackPath(id, format));
            if (format === 'json') {
                return body.tracks;
            }
            return body;
        });
    }
    trackPath(id, format) {
        return `${this.resourcesName}/${id}/track.${format}`;
    }
}
//# sourceMappingURL=track.js.map