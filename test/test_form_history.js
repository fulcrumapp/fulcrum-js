import assert from 'assert';
import nock from 'nock';
import path from 'path';

import { Page } from '../';
import client from './client';

describe('Form History', () => {
  describe('#history()', () => {
    it('should return form history.', async () => {
      nock('https://api.fulcrumapp.com')
        .get('/api/v2/forms/58ae9115-0430-459e-a1b7-7ac46011e0ce/history')
        .replyWithFile(201,
                       path.join(__dirname, 'objects/form_history.json'),
                       {'Content-Type': 'application/json'});

      const formHistory = await client.forms.history(
        '58ae9115-0430-459e-a1b7-7ac46011e0ce');

      assert(formHistory instanceof Page, 'formHistory is not a Page.');
      assert.equal(formHistory.objects[0].version, 1);
      assert.equal(formHistory.objects[1].version, 2);
    });
  });
});
