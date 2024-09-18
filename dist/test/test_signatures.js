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
import { Page } from '../src';
describe('Signatures', () => {
    describe('#find()', () => {
        it('should return a signature.', () => __awaiter(void 0, void 0, void 0, function* () {
            nock('https://api.fulcrumapp.com')
                .get('/api/v2/signatures/9855e3f2-85a5-4b9f-9e62-0b1bbcfef091')
                .replyWithFile(200, path.join(import.meta.dirname, 'objects/signature.json'), { 'Content-Type': 'application/json' });
            const signature = yield client.signatures.find('9855e3f2-85a5-4b9f-9e62-0b1bbcfef091');
            assert.equal(signature.content_type, 'image/png');
        }));
    });
    describe('#all()', () => {
        it('should return signatures.', () => __awaiter(void 0, void 0, void 0, function* () {
            nock('https://api.fulcrumapp.com')
                .get('/api/v2/signatures?per_page=1000')
                .replyWithFile(200, path.join(import.meta.dirname, 'objects/signatures.json'), { 'Content-Type': 'application/json' });
            const signatures = yield client.signatures.all(null);
            assert(signatures instanceof Page, 'forms is not a Page.');
            assert.equal(signatures.objects.length, 1);
            assert.equal(signatures.currentPage, 1);
            assert.equal(signatures.totalPages, 1);
            assert.equal(signatures.totalCount, 446);
            assert.equal(signatures.perPage, 1000);
        }));
    });
});
//# sourceMappingURL=test_signatures.js.map