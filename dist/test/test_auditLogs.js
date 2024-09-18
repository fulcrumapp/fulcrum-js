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
describe('Audit Log Methods', () => {
    describe('#find()', () => {
        it('should return an audit log.', () => __awaiter(void 0, void 0, void 0, function* () {
            nock('https://api.fulcrumapp.com')
                .get('/api/v2/audit_logs/aaa058ef-d7e5-44df-a3df-8fc53ffab3e0')
                .replyWithFile(200, path.join(import.meta.dirname, 'objects/auditLog.json'), { 'Content-Type': 'application/json' });
            const auditLog = yield client.auditLogs.find('aaa058ef-d7e5-44df-a3df-8fc53ffab3e0');
            assert.equal(auditLog.id, 'aaa058ef-d7e5-44df-a3df-8fc53ffab3e0', 'auditLog.id is incorrect.');
            assert.equal(auditLog.actor, 'Maryam Larson', 'auditLog.actor is incorrect.');
        }));
    });
    describe('#all()', () => {
        it('should return a Page of audit logs.', () => __awaiter(void 0, void 0, void 0, function* () {
            nock('https://api.fulcrumapp.com')
                .get('/api/v2/audit_logs?per_page=1000')
                .replyWithFile(200, path.join(import.meta.dirname, 'objects/auditLogs.json'), { 'Content-Type': 'application/json' });
            const auditLogs = yield client.auditLogs.all(null);
            assert(auditLogs instanceof Page, 'auditLogs is not a Page.');
            assert.equal(auditLogs.objects.length, 2);
            assert.equal(auditLogs.currentPage, 1);
            assert.equal(auditLogs.totalPages, 1);
            assert.equal(auditLogs.totalCount, 2);
            assert.equal(auditLogs.perPage, 20000);
        }));
    });
});
//# sourceMappingURL=test_auditLogs.js.map