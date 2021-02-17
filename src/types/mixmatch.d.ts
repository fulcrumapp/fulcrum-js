declare module "mixmatch" {
  export default class Mixin {
    static includeInto(constructor: Function): void;
  }
}
