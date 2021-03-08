import Mixin from "mixmatch";
import Base from "../resources/base";
export default abstract class Track extends Mixin {
    abstract get createAction(): string;
    uploadTrack(file: File, id?: null): Promise<any>;
    track(id: string, format?: string): Promise<any>;
    trackPath(id: string, format: string): string;
}
export default interface Track extends Mixin, Base {
}
