import MediaResource from "./media-base";

export default class Signature extends MediaResource {
  get defaultContentType() {
    return "image/png";
  }

  get resourceName() {
    return "signature";
  }

  get resourcesName() {
    return "signatures";
  }

  get versions() {
    return ["original", "thumbnail", "large"];
  }

  //default implementation from Create
  get createAction() {
    return this.collectionPath();
  }
}
