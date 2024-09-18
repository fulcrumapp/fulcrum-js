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
import { Page } from '../src';
import client from './client';
describe('Record History', () => {
    describe('#history()', () => {
        it('should return record history.', () => __awaiter(void 0, void 0, void 0, function* () {
            nock('https://api.fulcrumapp.com')
                .get('/api/v2/records/beef678b-fb89-4b15-9ee7-1f8be3e2abe7/history')
                .replyWithFile(201, path.join(import.meta.dirname, 'objects/record_history.json'), { 'Content-Type': 'application/json' });
            const recordHistory = yield client.records.history('beef678b-fb89-4b15-9ee7-1f8be3e2abe7');
            assert(recordHistory instanceof Page, 'recordHistory is not a Page.');
            assert.equal(recordHistory.objects[0].history_change_type, 'c');
            assert.equal(recordHistory.objects[1].history_change_type, 'u');
        }));
    });
});
//# sourceMappingURL=test_record_history.js.map