import Mixin from "mixmatch";
import Page from "../page";
import Base from "../resources/base";
export default class List extends Mixin {
    get defaultListParams(): {
        per_page: number;
    };
    all(params: {
        [key: string]: string;
    }): Promise<Page>;
}
export default interface List extends Mixin, Base {
}
