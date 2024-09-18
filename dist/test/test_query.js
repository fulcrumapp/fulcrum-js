"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const nock_1 = __importDefault(require("nock"));
const path_1 = __importDefault(require("path"));
const client_1 = __importDefault(require("./client"));
describe('Query', () => {
    describe('#query()', () => {
        it('should return CSV.', async () => {
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .post('/api/v2/query')
                .replyWithFile(200, path_1.default.join(import.meta.dirname, 'objects/query.csv'), { 'Content-Type': 'text/plain' });
            const csv = await client_1.default.query('SELECT * FROM Expenses LIMIT 1;', 'csv');
            const partialHeader = '_record_id,_project_id,_assigned_to_id';
            (0, assert_1.default)(csv.indexOf(partialHeader) > -1);
        });
        it('should return GeoJSON.', async () => {
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .post('/api/v2/query')
                .replyWithFile(200, path_1.default.join(import.meta.dirname, 'objects/query.geojson'), { 'Content-Type': 'application/json' });
            const geojson = await client_1.default.query('SELECT * FROM Expenses LIMIT 1;', 'geojson');
            assert_1.default.equal(geojson.features.length, 1);
        });
    });
});
//# sourceMappingURL=test_query.js.map