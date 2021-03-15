import Mixin from "mixmatch";
import Base from "../resources/base";
export default class Find extends Mixin {
    find(id: string): Promise<any>;
}
export default interface Find extends Mixin, Base {
}
