import Mixin from 'mixmatch';
import Page from '../page';

const DEFAULT_PER_PAGE = 1000;

export default class List extends Mixin {
  get defaultListParams() {
    return { per_page: DEFAULT_PER_PAGE };
  }

  async all(params) {
    const options = {
      body: params || this.defaultListParams
    };

    const resp = await this.client.api.get(this.collectionPath(), options);
    if (resp.err) {
      throw resp.err;
    }

    return new Page(resp.body, this.resourcesName);
  }
}
