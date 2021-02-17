import * as uuid from "uuid";
import * as FormData from "form-data";

import FileOptions from "../types/FileOptions";

import List from "../actions/list";
import Find from "../actions/find";
import Create from "../actions/create";
import Resource from "./base";
import FetchOptions from "../types/FetchOptions";

export default class MediaResource extends Resource {
  //TODO: types
  optionsForUpload(file: File, attributes: any) {
    const attrs = attributes || {};
    const formData = new FormData();

    const accessKey = attrs.hasOwnProperty("accessKey")
      ? attrs.accessKey
      : uuid.v4();

    formData.append(`${this.resourceName}[access_key]`, accessKey);

    if (attrs.hasOwnProperty("track")) {
      formData.append(`${this.resourceName}[track]`, attrs.track);
    }

    // File names from media streams like
    // fs.createReadStream('photo.jpg')
    // are automatically added. When reading from buffers like
    // fs.readFileSync('photo.jpg)
    // the file name can't be inferred so it must be supplied like
    // photos.create(fs.readFileSync('photo.jpg'), {fileName: 'photo.jpg'})
    const fileOptions: FileOptions = attrs.hasOwnProperty("fileName")
      ? { filename: attrs.fileName }
      : {};

    formData.append(`${this.resourceName}[file]`, file, fileOptions);

    return {
      body: formData,
      headers: {
        "Content-Type": null,
      },
    };
  }

  //TODO: types
  async create(file: File, attributes: any) {
    const options: FetchOptions = this.optionsForUpload(file, attributes);

    //TODO: where does this even exist??
    const body = await this.client.api.post(this.createAction, options);

    return body[this.resourceName];
  }

  async media(accessKey: string, version = "original") {
    //TODO: where does this even exist??
    const media = await this.find(accessKey);

    if (!this.versions.includes(version)) {
      throw new Error(`Version must be one of ${this.versions.join(", ")}.`);
    }

    return fetch(media[version]).then((resp) => resp.body);
  }
}

List.includeInto(MediaResource);
Find.includeInto(MediaResource);
Create.includeInto(MediaResource);
