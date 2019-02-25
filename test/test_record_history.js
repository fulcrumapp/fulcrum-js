import assert from 'assert';
import nock from 'nock';
import path from 'path';

import { Page } from '../';
import client from './client';

describe('Record History', () => {
  describe('#history()', () => {
    it('should return form history.', async () => {
      nock('https://api.fulcrumapp.com')
        .get('/api/v2/records/beef678b-fb89-4b15-9ee7-1f8be3e2abe7/history')
        .replyWithFile(201,
                       path.join(__dirname, 'objects/record_history.json'),
                       {'Content-Type': 'application/json'});

      const recordHistory = await client.records.history(
        'beef678b-fb89-4b15-9ee7-1f8be3e2abe7');

      assert(recordHistory instanceof Page, 'recordHistory is not a Page.');
      assert.equal(recordHistory.objects[0].history_change_type, 'c');
      assert.equal(recordHistory.objects[1].history_change_type, 'u');
    });
  });
});
