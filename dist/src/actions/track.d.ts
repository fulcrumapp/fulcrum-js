export default class Track extends Mixin {
    uploadTrack(file: any, id?: null): Promise<any>;
    track(id: any, format?: string): Promise<any>;
    trackPath(id: any, format: any): string;
}
import Mixin from '../mixmatch';
