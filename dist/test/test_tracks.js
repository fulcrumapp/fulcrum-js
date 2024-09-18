var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import assert from 'assert';
import nock from 'nock';
import path from 'path';
import client from './client';
describe('Tracks', () => {
    describe('video', () => {
        it('should return a JSON track.', () => __awaiter(void 0, void 0, void 0, function* () {
            nock('https://api.fulcrumapp.com')
                .get('/api/v2/videos/ccf931bd-4e0f-4562-8c00-3a57f8a62589/track.json')
                .replyWithFile(200, path.join(import.meta.dirname, 'objects/video_track.json'), { 'Content-Type': 'application/json' });
            const track = yield client.videos.track('ccf931bd-4e0f-4562-8c00-3a57f8a62589');
            assert.equal(track[0].track[0][0], 1508959069103);
        }));
        it('should return a GeoJSON track.', () => __awaiter(void 0, void 0, void 0, function* () {
            nock('https://api.fulcrumapp.com')
                .get('/api/v2/videos/ccf931bd-4e0f-4562-8c00-3a57f8a62589/track.geojson')
                .replyWithFile(200, path.join(import.meta.dirname, 'objects/video_track.geojson'), { 'Content-Type': 'application/json' });
            const geojson = yield client.videos.track('ccf931bd-4e0f-4562-8c00-3a57f8a62589', 'geojson');
            assert.equal(geojson.type, 'FeatureCollection');
            assert.equal(geojson.features[0].properties.id, 'ccf931bd-4e0f-4562-8c00-3a57f8a62589');
        }));
    });
    describe('audio', () => {
        it('should return a GPX track.', () => __awaiter(void 0, void 0, void 0, function* () {
            nock('https://api.fulcrumapp.com')
                .get('/api/v2/audio/ddcb934e-54d5-4476-acf5-750e32f4863f/track.gpx')
                .replyWithFile(200, path.join(import.meta.dirname, 'objects/audio_track.gpx'), { 'Content-Type': 'application/gpx+xml' });
            const gpx = yield client.audio.track('ddcb934e-54d5-4476-acf5-750e32f4863f', 'gpx');
            assert(gpx.includes('<name>ddcb934e-54d5-4476-acf5-750e32f4863f</name>'));
        }));
        it('should return a KML track.', () => __awaiter(void 0, void 0, void 0, function* () {
            nock('https://api.fulcrumapp.com')
                .get('/api/v2/audio/ddcb934e-54d5-4476-acf5-750e32f4863f/track.kml')
                .replyWithFile(200, path.join(import.meta.dirname, 'objects/audio_track.kml'), { 'Content-Type': 'application/vnd.google-earth.kml+xml' });
            const kml = yield client.audio.track('ddcb934e-54d5-4476-acf5-750e32f4863f', 'kml');
            assert(kml.includes('<Data name="Date"><value>2015-04-28T16:02:44Z</value></Data>'));
        }));
    });
});
//# sourceMappingURL=test_tracks.js.map