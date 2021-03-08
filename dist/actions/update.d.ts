import Mixin from "mixmatch";
import Base from "../resources/base";
export default class Update extends Mixin {
    update(id: string, object: any): Promise<any>;
}
export default interface Update extends Mixin, Base {
}
