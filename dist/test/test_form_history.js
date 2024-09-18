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
describe('Form History', () => {
    describe('#history()', () => {
        it('should return form history.', async () => {
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .get('/api/v2/forms/58ae9115-0430-459e-a1b7-7ac46011e0ce/history')
                .replyWithFile(201, path_1.default.join(import.meta.dirname, 'objects/form_history.json'), { 'Content-Type': 'application/json' });
            const formHistory = await client_1.default.forms.history('58ae9115-0430-459e-a1b7-7ac46011e0ce');
            (0, assert_1.default)(formHistory instanceof src_1.Page, 'formHistory is not a Page.');
            assert_1.default.equal(formHistory.objects[0].version, 1);
            assert_1.default.equal(formHistory.objects[1].version, 2);
        });
        it('should return a single form history.', async () => {
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .get('/api/v2/forms/58ae9115-0430-459e-a1b7-7ac46011e0ce/history?version=1')
                .replyWithFile(201, path_1.default.join(import.meta.dirname, 'objects/form_history_single_version.json'), { 'Content-Type': 'application/json' });
            const formHistory = await client_1.default.forms.history('58ae9115-0430-459e-a1b7-7ac46011e0ce', 1);
            assert_1.default.equal(formHistory.objects[0].version, 1);
            assert_1.default.equal(formHistory.objects.length, 1);
        });
    });
});
//# sourceMappingURL=test_form_history.js.map