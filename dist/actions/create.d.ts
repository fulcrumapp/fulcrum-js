export default class Create extends Mixin {
    get createAction(): any;
    create(object: any): Promise<any>;
}
import Mixin from '../mixmatch';
