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
describe('Changeset Methods', () => {
    describe('#close()', () => {
        it('should close a changeset.', () => __awaiter(void 0, void 0, void 0, function* () {
            nock('https://api.fulcrumapp.com')
                .put('/api/v2/changesets/e56594c5-22e3-4d15-8dd6-f0fc02280ec7/close')
                .replyWithFile(201, path.join(import.meta.dirname, 'objects/changeset.json'), { 'Content-Type': 'application/json' });
            const changeset = yield client.changesets.close('e56594c5-22e3-4d15-8dd6-f0fc02280ec7');
            assert.equal(changeset.id, 'e56594c5-22e3-4d15-8dd6-f0fc02280ec7', 'changeset.id is incorrect.');
        }));
    });
});
//# sourceMappingURL=test_changeset_close.js.map