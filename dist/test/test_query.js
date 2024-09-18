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
describe('Query', () => {
    describe('#query()', () => {
        it('should return CSV.', () => __awaiter(void 0, void 0, void 0, function* () {
            nock('https://api.fulcrumapp.com')
                .post('/api/v2/query')
                .replyWithFile(200, path.join(import.meta.dirname, 'objects/query.csv'), { 'Content-Type': 'text/plain' });
            const csv = yield client.query('SELECT * FROM Expenses LIMIT 1;', 'csv');
            const partialHeader = '_record_id,_project_id,_assigned_to_id';
            assert(csv.indexOf(partialHeader) > -1);
        }));
        it('should return GeoJSON.', () => __awaiter(void 0, void 0, void 0, function* () {
            nock('https://api.fulcrumapp.com')
                .post('/api/v2/query')
                .replyWithFile(200, path.join(import.meta.dirname, 'objects/query.geojson'), { 'Content-Type': 'application/json' });
            const geojson = yield client.query('SELECT * FROM Expenses LIMIT 1;', 'geojson');
            assert.equal(geojson.features.length, 1);
        }));
    });
});
//# sourceMappingURL=test_query.js.map