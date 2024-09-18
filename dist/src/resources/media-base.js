var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { v4 as uuid } from 'uuid';
import FormData from 'form-data';
import List from '../actions/list';
import Find from '../actions/find';
import Create from '../actions/create';
import Resource from './base';
export default class MediaResource extends Resource {
    optionsForUpload(file, attributes) {
        const attrs = attributes || {};
        const formData = new FormData();
        const accessKey = attrs.hasOwnProperty('accessKey') ? attrs.accessKey : uuid.v4();
        formData.append(`${this.resourceName}[access_key]`, accessKey);
        if (attrs.hasOwnProperty('track')) {
            formData.append(`${this.resourceName}[track]`, attrs.track);
        }
        let fileOptions = null;
        // File names from media streams like
        // fs.createReadStream('photo.jpg')
        // are automatically added. When reading from buffers like
        // fs.readFileSync('photo.jpg)
        // the file name can't be inferred so it must be supplied like
        // photos.create(fs.readFileSync('photo.jpg'), {fileName: 'photo.jpg'})
        if (attrs.hasOwnProperty('fileName')) {
            fileOptions = { filename: attrs.fileName };
        }
        formData.append(`${this.resourceName}[file]`, file, fileOptions);
        return {
            body: formData,
            headers: {
                'Content-Type': null
            }
        };
    }
    create(file, attributes) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = this.optionsForUpload(file, attributes);
            const body = yield this.client.api.post(this.createAction, options);
            return body[this.resourceName];
        });
    }
    media(accessKey_1) {
        return __awaiter(this, arguments, void 0, function* (accessKey, version = 'original') {
            const media = yield this.find(accessKey);
            if (!this.versions.includes(version)) {
                throw new Error(`Version must be one of ${this.versions.join(', ')}.`);
            }
            return fetch(media[version])
                .then(resp => resp.body);
        });
    }
}
List.includeInto(MediaResource);
Find.includeInto(MediaResource);
Create.includeInto(MediaResource);
//# sourceMappingURL=media-base.js.map