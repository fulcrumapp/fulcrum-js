import Mixin from "mixmatch";
import Base from "../resources/base";
export default class Create extends Mixin {
    get createAction(): string;
    create(object: any): Promise<any>;
}
export default interface Create extends Mixin, Base {
}
