import * as FormData from "form-data";
import Mixin from "mixmatch";
import * as uuid from "uuid";

import Base from "../resources/base";

export default abstract class Track extends Mixin {
  abstract get createAction(): string;

  async uploadTrack(file: File, id = null) {
    const formData = new FormData();
    const accessKey = id || uuid.v4();

    formData.append(`${this.resourceName}[access_key]`, accessKey);
    formData.append(`${this.resourceName}[track]`, file);

    const options = {
      body: formData,
      headers: {
        "Content-Type": null,
      },
    };

    const resp = await this.client.api.post(this.createAction, options);
    return resp[this.resourceName];
  }

  async track(id: string, format: string = "json") {
    const body = await this.client.api.get(this.trackPath(id, format));

    if (format === "json") {
      return body.tracks;
    }

    return body;
  }

  trackPath(id: string, format: string): string {
    return `${this.resourcesName}/${id}/track.${format}`;
  }
}

export default interface Track extends Mixin, Base {}
