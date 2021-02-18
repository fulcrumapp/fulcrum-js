import Mixin from "mixmatch";
import Page from "../page";
import Base from "../resources/base";
import FetchOptions from "../types/FetchOptions";

import { DEFAULT_PER_PAGE } from "../constants";
import DataContainer from "../types/DataContainer";

export default class List extends Mixin {
  get defaultListParams() {
    return { per_page: DEFAULT_PER_PAGE };
  }

  async all(params: { [key: string]: string }) {
    const options: FetchOptions = {
      qs: params || this.defaultListParams,
    };

    const body: DataContainer<any> = await this.client.api.get(this.collectionPath(), options);
    return new Page(body, this.resourcesName);
  }
}

export default interface List extends Mixin, Base {}
