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
import fs from 'fs';
import { Page } from '../src';
import client from './client';
describe('Common Methods', () => {
    describe('#find()', () => {
        it('should return a form.', () => __awaiter(void 0, void 0, void 0, function* () {
            nock('https://api.fulcrumapp.com')
                .get('/api/v2/forms/512342b0-2bce-4e31-9d4a-8f29e929f7ac')
                .replyWithFile(200, path.join(import.meta.dirname, 'objects/form.json'), { 'Content-Type': 'application/json' });
            const form = yield client.forms.find('512342b0-2bce-4e31-9d4a-8f29e929f7ac');
            assert.equal(form.id, '512342b0-2bce-4e31-9d4a-8f29e929f7ac', 'form.id is incorrect.');
            assert.equal(form.name, 'Hurst Estate', 'form.name is incorrect.');
        }));
    });
    describe('#all()', () => {
        it('should return a Page of forms.', () => __awaiter(void 0, void 0, void 0, function* () {
            nock('https://api.fulcrumapp.com')
                .get('/api/v2/forms?per_page=1000')
                .replyWithFile(200, path.join(import.meta.dirname, 'objects/forms.json'), { 'Content-Type': 'application/json' });
            const forms = yield client.forms.all(null);
            assert(forms instanceof Page, 'forms is not a Page.');
            assert.equal(forms.objects.length, 2);
            assert.equal(forms.currentPage, 1);
            assert.equal(forms.totalPages, 1);
            assert.equal(forms.totalCount, 2);
            assert.equal(forms.perPage, 1000);
        }));
    });
    describe('#create()', () => {
        it('should create a form.', () => __awaiter(void 0, void 0, void 0, function* () {
            const formObj = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, 'objects/form.json')));
            const formToPost = formObj.form;
            nock('https://api.fulcrumapp.com')
                .post('/api/v2/forms', formObj)
                .replyWithFile(201, path.join(import.meta.dirname, 'objects/form.json'), { 'Content-Type': 'application/json' });
            const form = yield client.forms.create(formToPost);
            assert.equal(form.id, '512342b0-2bce-4e31-9d4a-8f29e929f7ac', 'form.id is incorrect.');
            assert.equal(form.name, 'Hurst Estate', 'form.name is incorrect.');
        }));
    });
    describe('#update()', () => {
        it('should update a form.', () => __awaiter(void 0, void 0, void 0, function* () {
            const formObj = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, 'objects/form.json')));
            const formToPost = formObj.form;
            nock('https://api.fulcrumapp.com')
                .put(`/api/v2/forms/${formToPost.id}`, formObj)
                .replyWithFile(201, path.join(import.meta.dirname, 'objects/form.json'), { 'Content-Type': 'application/json' });
            const form = yield client.forms.update(formToPost.id, formToPost);
            assert.equal(form.id, '512342b0-2bce-4e31-9d4a-8f29e929f7ac', 'form.id is incorrect.');
            assert.equal(form.name, 'Hurst Estate', 'form.name is incorrect.');
        }));
    });
    describe('#delete()', () => {
        it('should delete a form.', () => __awaiter(void 0, void 0, void 0, function* () {
            nock('https://api.fulcrumapp.com')
                .delete('/api/v2/forms/abc123')
                .replyWithFile(201, path.join(import.meta.dirname, 'objects/form.json'), { 'Content-Type': 'application/json' });
            const form = yield client.forms.delete('abc123');
            assert.equal(form.id, '512342b0-2bce-4e31-9d4a-8f29e929f7ac', 'form.id is incorrect.');
            assert.equal(form.name, 'Hurst Estate', 'form.name is incorrect.');
        }));
    });
});
//# sourceMappingURL=test_common_methods.js.map