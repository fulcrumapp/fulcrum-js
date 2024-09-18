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
describe('Form History', () => {
    describe('#history()', () => {
        it('should return form history.', () => __awaiter(void 0, void 0, void 0, function* () {
            nock('https://api.fulcrumapp.com')
                .get('/api/v2/forms/58ae9115-0430-459e-a1b7-7ac46011e0ce/history')
                .replyWithFile(201, path.join(import.meta.dirname, 'objects/form_history.json'), { 'Content-Type': 'application/json' });
            const formHistory = yield client.forms.history('58ae9115-0430-459e-a1b7-7ac46011e0ce');
            assert(formHistory instanceof Page, 'formHistory is not a Page.');
            assert.equal(formHistory.objects[0].version, 1);
            assert.equal(formHistory.objects[1].version, 2);
        }));
        it('should return a single form history.', () => __awaiter(void 0, void 0, void 0, function* () {
            nock('https://api.fulcrumapp.com')
                .get('/api/v2/forms/58ae9115-0430-459e-a1b7-7ac46011e0ce/history?version=1')
                .replyWithFile(201, path.join(import.meta.dirname, 'objects/form_history_single_version.json'), { 'Content-Type': 'application/json' });
            const formHistory = yield client.forms.history('58ae9115-0430-459e-a1b7-7ac46011e0ce', 1);
            assert.equal(formHistory.objects[0].version, 1);
            assert.equal(formHistory.objects.length, 1);
        }));
    });
});
//# sourceMappingURL=test_form_history.js.map