"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const nock_1 = __importDefault(require("nock"));
const path_1 = __importDefault(require("path"));
const src_1 = require("../src");
const client_1 = __importDefault(require("./client"));
describe('Record History', () => {
    describe('#history()', () => {
        it('should return record history.', async () => {
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .get('/api/v2/records/beef678b-fb89-4b15-9ee7-1f8be3e2abe7/history')
                .replyWithFile(201, path_1.default.join(import.meta.dirname, 'objects/record_history.json'), { 'Content-Type': 'application/json' });
            const recordHistory = await client_1.default.records.history('beef678b-fb89-4b15-9ee7-1f8be3e2abe7');
            (0, assert_1.default)(recordHistory instanceof src_1.Page, 'recordHistory is not a Page.');
            assert_1.default.equal(recordHistory.objects[0].history_change_type, 'c');
            assert_1.default.equal(recordHistory.objects[1].history_change_type, 'u');
        });
    });
});
//# sourceMappingURL=test_record_history.js.map