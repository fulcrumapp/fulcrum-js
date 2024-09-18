"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const nock_1 = __importDefault(require("nock"));
const path_1 = __importDefault(require("path"));
const client_1 = __importDefault(require("./client"));
describe('Changeset Methods', () => {
    describe('#close()', () => {
        it('should close a changeset.', async () => {
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .put('/api/v2/changesets/e56594c5-22e3-4d15-8dd6-f0fc02280ec7/close')
                .replyWithFile(201, path_1.default.join(import.meta.dirname, 'objects/changeset.json'), { 'Content-Type': 'application/json' });
            const changeset = await client_1.default.changesets.close('e56594c5-22e3-4d15-8dd6-f0fc02280ec7');
            assert_1.default.equal(changeset.id, 'e56594c5-22e3-4d15-8dd6-f0fc02280ec7', 'changeset.id is incorrect.');
        });
    });
});
//# sourceMappingURL=test_changeset_close.js.map