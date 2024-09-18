"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const nock_1 = __importDefault(require("nock"));
const path_1 = __importDefault(require("path"));
const client_1 = __importDefault(require("./client"));
describe('Tracks', () => {
    describe('video', () => {
        it('should return a JSON track.', async () => {
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .get('/api/v2/videos/ccf931bd-4e0f-4562-8c00-3a57f8a62589/track.json')
                .replyWithFile(200, path_1.default.join(import.meta.dirname, 'objects/video_track.json'), { 'Content-Type': 'application/json' });
            const track = await client_1.default.videos.track('ccf931bd-4e0f-4562-8c00-3a57f8a62589');
            assert_1.default.equal(track[0].track[0][0], 1508959069103);
        });
        it('should return a GeoJSON track.', async () => {
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .get('/api/v2/videos/ccf931bd-4e0f-4562-8c00-3a57f8a62589/track.geojson')
                .replyWithFile(200, path_1.default.join(import.meta.dirname, 'objects/video_track.geojson'), { 'Content-Type': 'application/json' });
            const geojson = await client_1.default.videos.track('ccf931bd-4e0f-4562-8c00-3a57f8a62589', 'geojson');
            assert_1.default.equal(geojson.type, 'FeatureCollection');
            assert_1.default.equal(geojson.features[0].properties.id, 'ccf931bd-4e0f-4562-8c00-3a57f8a62589');
        });
    });
    describe('audio', () => {
        it('should return a GPX track.', async () => {
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .get('/api/v2/audio/ddcb934e-54d5-4476-acf5-750e32f4863f/track.gpx')
                .replyWithFile(200, path_1.default.join(import.meta.dirname, 'objects/audio_track.gpx'), { 'Content-Type': 'application/gpx+xml' });
            const gpx = await client_1.default.audio.track('ddcb934e-54d5-4476-acf5-750e32f4863f', 'gpx');
            (0, assert_1.default)(gpx.includes('<name>ddcb934e-54d5-4476-acf5-750e32f4863f</name>'));
        });
        it('should return a KML track.', async () => {
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .get('/api/v2/audio/ddcb934e-54d5-4476-acf5-750e32f4863f/track.kml')
                .replyWithFile(200, path_1.default.join(import.meta.dirname, 'objects/audio_track.kml'), { 'Content-Type': 'application/vnd.google-earth.kml+xml' });
            const kml = await client_1.default.audio.track('ddcb934e-54d5-4476-acf5-750e32f4863f', 'kml');
            (0, assert_1.default)(kml.includes('<Data name="Date"><value>2015-04-28T16:02:44Z</value></Data>'));
        });
    });
});
//# sourceMappingURL=test_tracks.js.map