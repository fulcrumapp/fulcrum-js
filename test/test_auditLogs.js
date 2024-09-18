import assert from 'assert';
import nock from 'nock';
import path from 'path';

import { Page } from '../src';

import client from './client';

describe('Audit Log Methods', () => {
  describe('#find()', () => {
    it('should return an audit log.', async () => {
      nock('https://api.fulcrumapp.com')
        .get('/api/v2/audit_logs/aaa058ef-d7e5-44df-a3df-8fc53ffab3e0')
        .replyWithFile(200,
                       path.join(import.meta.dirname, 'objects/auditLog.json'),
                       {'Content-Type': 'application/json'});
      const auditLog = await client.auditLogs.find('aaa058ef-d7e5-44df-a3df-8fc53ffab3e0');
      assert.equal(auditLog.id,
                   'aaa058ef-d7e5-44df-a3df-8fc53ffab3e0',
                   'auditLog.id is incorrect.');
      assert.equal(auditLog.actor, 'Maryam Larson', 'auditLog.actor is incorrect.');
    });
  });

  describe('#all()', () => {
    it('should return a Page of audit logs.', async () => {
      nock('https://api.fulcrumapp.com')
        .get('/api/v2/audit_logs?per_page=1000')
        .replyWithFile(200,
                       path.join(import.meta.dirname, 'objects/auditLogs.json'),
                       {'Content-Type': 'application/json'});

      const auditLogs = await client.auditLogs.all(null);

      assert(auditLogs instanceof Page, 'auditLogs is not a Page.');
      assert.equal(auditLogs.objects.length, 2);
      assert.equal(auditLogs.currentPage, 1);
      assert.equal(auditLogs.totalPages, 1);
      assert.equal(auditLogs.totalCount, 2);
      assert.equal(auditLogs.perPage, 20000);
    });
  });
});
