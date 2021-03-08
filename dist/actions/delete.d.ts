import Mixin from "mixmatch";
import Base from "../resources/base";
export default class Delete extends Mixin {
    delete(id: string): Promise<any>;
}
export default interface Delete extends Mixin, Base {
}
