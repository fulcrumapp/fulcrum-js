import Mixin from "mixmatch";
import Page from "../page";
import Base from "../resources/base";
interface ListParam {
    [key: string]: string | number;
}
export default class List extends Mixin {
    get defaultListParams(): ListParam;
    all(params?: ListParam): Promise<Page>;
}
export default interface List extends Mixin, Base {
}
export {};
