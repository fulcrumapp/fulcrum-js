"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const form_data_1 = __importDefault(require("form-data"));
const mixmatch_1 = __importDefault(require("../mixmatch"));
const uuid_1 = require("uuid");
class Track extends mixmatch_1.default {
    async uploadTrack(file, id = null) {
        const formData = new form_data_1.default();
        const accessKey = id || uuid_1.v4.v4();
        formData.append(`${this.resourceName}[access_key]`, accessKey);
        formData.append(`${this.resourceName}[track]`, file);
        const options = {
            body: formData,
            headers: {
                'Content-Type': null
            }
        };
        const resp = await this.client.api.post(this.createAction, options);
        return resp[this.resourceName];
    }
    async track(id, format = 'json') {
        const body = await this.client.api.get(this.trackPath(id, format));
        if (format === 'json') {
            return body.tracks;
        }
        return body;
    }
    trackPath(id, format) {
        return `${this.resourcesName}/${id}/track.${format}`;
    }
}
exports.default = Track;
//# sourceMappingURL=track.js.map