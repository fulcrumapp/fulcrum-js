import Mixin from 'mixmatch';
import Page from '../page';

const DEFAULT_PER_PAGE = 1000;

export default class List extends Mixin {
  get defaultListParams() {
    return { per_page: DEFAULT_PER_PAGE };
  }

  async all(params) {
    const options = {
      qs: params || this.defaultListParams
    };

    const body = await this.client.api.get(this.collectionPath(), options);
    return new Page(body, this.resourcesName);
  }
}
