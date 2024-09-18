"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const nock_1 = __importDefault(require("nock"));
const path_1 = __importDefault(require("path"));
const client_1 = __importDefault(require("./client"));
const src_1 = require("../src");
describe('Signatures', () => {
    describe('#find()', () => {
        it('should return a signature.', async () => {
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .get('/api/v2/signatures/9855e3f2-85a5-4b9f-9e62-0b1bbcfef091')
                .replyWithFile(200, path_1.default.join(import.meta.dirname, 'objects/signature.json'), { 'Content-Type': 'application/json' });
            const signature = await client_1.default.signatures.find('9855e3f2-85a5-4b9f-9e62-0b1bbcfef091');
            assert_1.default.equal(signature.content_type, 'image/png');
        });
    });
    describe('#all()', () => {
        it('should return signatures.', async () => {
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .get('/api/v2/signatures?per_page=1000')
                .replyWithFile(200, path_1.default.join(import.meta.dirname, 'objects/signatures.json'), { 'Content-Type': 'application/json' });
            const signatures = await client_1.default.signatures.all(null);
            (0, assert_1.default)(signatures instanceof src_1.Page, 'forms is not a Page.');
            assert_1.default.equal(signatures.objects.length, 1);
            assert_1.default.equal(signatures.currentPage, 1);
            assert_1.default.equal(signatures.totalPages, 1);
            assert_1.default.equal(signatures.totalCount, 446);
            assert_1.default.equal(signatures.perPage, 1000);
        });
    });
});
//# sourceMappingURL=test_signatures.js.map