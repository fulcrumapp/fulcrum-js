"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const nock_1 = __importDefault(require("nock"));
const path_1 = __importDefault(require("path"));
const client_1 = __importDefault(require("./client"));
describe('Authorization Methods', () => {
    describe('#create()', () => {
        it('should create an authorization.', async () => {
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .post('/api/v2/authorizations')
                .replyWithFile(201, path_1.default.join(import.meta.dirname, 'objects/authorization.json'), { 'Content-Type': 'application/json' });
            const authorizationObj = {
                organization_id: 'abc123',
                note: 'Hello',
                timeout: 60 * 60 * 4
            };
            const authorization = await client_1.default.authorizations.create(authorizationObj, 'elf@northpole.com', 'password');
            assert_1.default.equal(authorization.id, '27c2ab46-91db-4937-a4e8-5adcc0aaf20a', 'authorization.id is incorrect.');
            assert_1.default.equal(authorization.note, 'What up', 'authorization.note is incorrect.');
            assert_1.default.equal(authorization.timeout, 14400, 'authorization.timeout is incorrect.');
        });
    });
});
//# sourceMappingURL=test_authorization_create.js.map