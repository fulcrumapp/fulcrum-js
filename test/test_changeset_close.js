import assert from 'assert';
import nock from 'nock';
import path from 'path';

import client from './client';

describe('Changeset Methods', () => {
  describe('#close()', () => {
    it('should close a changeset.', async () => {
      nock('https://api.fulcrumapp.com')
        .put('/api/v2/changesets/e56594c5-22e3-4d15-8dd6-f0fc02280ec7/close')
        .replyWithFile(201,
                       path.join(import.meta.dirname, 'objects/changeset.json'),
                       {'Content-Type': 'application/json'});

      const changeset = await client.changesets.close(
        'e56594c5-22e3-4d15-8dd6-f0fc02280ec7');

      assert.equal(changeset.id,
                   'e56594c5-22e3-4d15-8dd6-f0fc02280ec7',
                   'changeset.id is incorrect.');
    });
  });
});
