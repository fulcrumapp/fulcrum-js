import assert from 'assert';
import nock from 'nock';
import path from 'path';

import { Page } from '../';

const client = require('./client');

describe('Audit Log Methods', () => {
  describe('#find()', () => {
    it('should return an audit log.', async () => {
      nock('https://api.fulcrumapp.com')
        .get('/api/v2/audit_logs/512342b0-2bce-4e31-9d4a-8f29e929f7ac')
        .replyWithFile(200,
                       path.join(__dirname, 'objects/audit_log.json'),
                       {'Content-Type': 'application/json'});

      const auditLog = await client.audit_logs.find('512342b0-2bce-4e31-9d4a-8f29e929f7ac');
      assert.equal(auditLog.id,
                   '512342b0-2bce-4e31-9d4a-8f29e929f7ac',
                   'auditLog.id is incorrect.');
      assert.equal(auditLog.name, 'Hurst Estate', 'auditLog.name is incorrect.');
    });
  });

  describe('#all()', () => {
    it('should return a Page of audit logs.', async () => {
      nock('https://api.fulcrumapp.com')
        .get('/api/v2/forms?per_page=1000')
        .replyWithFile(200,
                       path.join(__dirname, 'objects/audit_logs.json'),
                       {'Content-Type': 'application/json'});

      const auditLogs = await client.audit_logs.all(null);

      assert(auditLogs instanceof Page, 'auditLogs is not a Page.');
      assert.equal(auditLogs.objects.length, 2);
      assert.equal(auditLogs.currentPage, 1);
      assert.equal(auditLogs.totalPages, 1);
      assert.equal(auditLogs.totalCount, 2);
      assert.equal(auditLogs.perPage, 1000);
    });
  });
});
