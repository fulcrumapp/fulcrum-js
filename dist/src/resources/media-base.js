"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const form_data_1 = __importDefault(require("form-data"));
const list_1 = __importDefault(require("../actions/list"));
const find_1 = __importDefault(require("../actions/find"));
const create_1 = __importDefault(require("../actions/create"));
const base_1 = __importDefault(require("./base"));
class MediaResource extends base_1.default {
    optionsForUpload(file, attributes) {
        const attrs = attributes || {};
        const formData = new form_data_1.default();
        const accessKey = attrs.hasOwnProperty('accessKey') ? attrs.accessKey : uuid_1.v4.v4();
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
    async create(file, attributes) {
        const options = this.optionsForUpload(file, attributes);
        const body = await this.client.api.post(this.createAction, options);
        return body[this.resourceName];
    }
    async media(accessKey, version = 'original') {
        const media = await this.find(accessKey);
        if (!this.versions.includes(version)) {
            throw new Error(`Version must be one of ${this.versions.join(', ')}.`);
        }
        return fetch(media[version])
            .then(resp => resp.body);
    }
}
exports.default = MediaResource;
list_1.default.includeInto(MediaResource);
find_1.default.includeInto(MediaResource);
create_1.default.includeInto(MediaResource);
//# sourceMappingURL=media-base.js.map