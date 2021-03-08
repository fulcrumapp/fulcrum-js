export default interface FileOptions {
    contentType?: string;
    filename?: string;
    filepath?: string;
    header?: string | Headers;
    knownLength?: number;
}
