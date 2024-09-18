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
describe('Audit Log Methods', () => {
    describe('#find()', () => {
        it('should return an audit log.', async () => {
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .get('/api/v2/audit_logs/aaa058ef-d7e5-44df-a3df-8fc53ffab3e0')
                .replyWithFile(200, path_1.default.join(import.meta.dirname, 'objects/auditLog.json'), { 'Content-Type': 'application/json' });
            const auditLog = await client_1.default.auditLogs.find('aaa058ef-d7e5-44df-a3df-8fc53ffab3e0');
            assert_1.default.equal(auditLog.id, 'aaa058ef-d7e5-44df-a3df-8fc53ffab3e0', 'auditLog.id is incorrect.');
            assert_1.default.equal(auditLog.actor, 'Maryam Larson', 'auditLog.actor is incorrect.');
        });
    });
    describe('#all()', () => {
        it('should return a Page of audit logs.', async () => {
            (0, nock_1.default)('https://api.fulcrumapp.com')
                .get('/api/v2/audit_logs?per_page=1000')
                .replyWithFile(200, path_1.default.join(import.meta.dirname, 'objects/auditLogs.json'), { 'Content-Type': 'application/json' });
            const auditLogs = await client_1.default.auditLogs.all(null);
            (0, assert_1.default)(auditLogs instanceof src_1.Page, 'auditLogs is not a Page.');
            assert_1.default.equal(auditLogs.objects.length, 2);
            assert_1.default.equal(auditLogs.currentPage, 1);
            assert_1.default.equal(auditLogs.totalPages, 1);
            assert_1.default.equal(auditLogs.totalCount, 2);
            assert_1.default.equal(auditLogs.perPage, 20000);
        });
    });
});
//# sourceMappingURL=test_auditLogs.js.map