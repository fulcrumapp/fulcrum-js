import assert from 'assert';
import nock from 'nock';
import path from 'path';

import client from './client';
import { Page } from '../src';

describe('Signatures', () => {
  describe('#find()', () => {
    it('should return a signature.', async () => {
      nock('https://api.fulcrumapp.com')
        .get('/api/v2/signatures/9855e3f2-85a5-4b9f-9e62-0b1bbcfef091')
        .replyWithFile(200,
                       path.join(import.meta.dirname, 'objects/signature.json'),
                       {'Content-Type': 'application/json'});
      const signature = await client.signatures.find('9855e3f2-85a5-4b9f-9e62-0b1bbcfef091');
      assert.equal(signature.content_type, 'image/png');
    });
  });

  describe('#all()', () => {
    it('should return signatures.', async () => {
      nock('https://api.fulcrumapp.com')
        .get('/api/v2/signatures?per_page=1000')
        .replyWithFile(200,
                       path.join(import.meta.dirname, 'objects/signatures.json'),
                       {'Content-Type': 'application/json'});
      const signatures = await client.signatures.all(null);
      assert(signatures instanceof Page, 'forms is not a Page.');
      assert.equal(signatures.objects.length, 1);
      assert.equal(signatures.currentPage, 1);
      assert.equal(signatures.totalPages, 1);
      assert.equal(signatures.totalCount, 446);
      assert.equal(signatures.perPage, 1000);
    });
  });
});
