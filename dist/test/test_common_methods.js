"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const nock_1 = __importDefault(require("nock"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const src_1 = require("../src");
const client_1 = __importDefault(require("./client"));
describe('Common Methods', () => {
    describe('#find()', () => {
        it('should return a form.', async () => {
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .get('/api/v2/forms/512342b0-2bce-4e31-9d4a-8f29e929f7ac')
                .replyWithFile(200, path_1.default.join(import.meta.dirname, 'objects/form.json'), { 'Content-Type': 'application/json' });
            const form = await client_1.default.forms.find('512342b0-2bce-4e31-9d4a-8f29e929f7ac');
            assert_1.default.equal(form.id, '512342b0-2bce-4e31-9d4a-8f29e929f7ac', 'form.id is incorrect.');
            assert_1.default.equal(form.name, 'Hurst Estate', 'form.name is incorrect.');
        });
    });
    describe('#all()', () => {
        it('should return a Page of forms.', async () => {
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .get('/api/v2/forms?per_page=1000')
                .replyWithFile(200, path_1.default.join(import.meta.dirname, 'objects/forms.json'), { 'Content-Type': 'application/json' });
            const forms = await client_1.default.forms.all(null);
            (0, assert_1.default)(forms instanceof src_1.Page, 'forms is not a Page.');
            assert_1.default.equal(forms.objects.length, 2);
            assert_1.default.equal(forms.currentPage, 1);
            assert_1.default.equal(forms.totalPages, 1);
            assert_1.default.equal(forms.totalCount, 2);
            assert_1.default.equal(forms.perPage, 1000);
        });
    });
    describe('#create()', () => {
        it('should create a form.', async () => {
            const formObj = JSON.parse(fs_1.default.readFileSync(path_1.default.join(import.meta.dirname, 'objects/form.json')));
            const formToPost = formObj.form;
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .post('/api/v2/forms', formObj)
                .replyWithFile(201, path_1.default.join(import.meta.dirname, 'objects/form.json'), { 'Content-Type': 'application/json' });
            const form = await client_1.default.forms.create(formToPost);
            assert_1.default.equal(form.id, '512342b0-2bce-4e31-9d4a-8f29e929f7ac', 'form.id is incorrect.');
            assert_1.default.equal(form.name, 'Hurst Estate', 'form.name is incorrect.');
        });
    });
    describe('#update()', () => {
        it('should update a form.', async () => {
            const formObj = JSON.parse(fs_1.default.readFileSync(path_1.default.join(import.meta.dirname, 'objects/form.json')));
            const formToPost = formObj.form;
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .put(`/api/v2/forms/${formToPost.id}`, formObj)
                .replyWithFile(201, path_1.default.join(import.meta.dirname, 'objects/form.json'), { 'Content-Type': 'application/json' });
            const form = await client_1.default.forms.update(formToPost.id, formToPost);
            assert_1.default.equal(form.id, '512342b0-2bce-4e31-9d4a-8f29e929f7ac', 'form.id is incorrect.');
            assert_1.default.equal(form.name, 'Hurst Estate', 'form.name is incorrect.');
        });
    });
    describe('#delete()', () => {
        it('should delete a form.', async () => {
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .delete('/api/v2/forms/abc123')
                .replyWithFile(201, path_1.default.join(import.meta.dirname, 'objects/form.json'), { 'Content-Type': 'application/json' });
            const form = await client_1.default.forms.delete('abc123');
            assert_1.default.equal(form.id, '512342b0-2bce-4e31-9d4a-8f29e929f7ac', 'form.id is incorrect.');
            assert_1.default.equal(form.name, 'Hurst Estate', 'form.name is incorrect.');
        });
    });
});
//# sourceMappingURL=test_common_methods.js.map