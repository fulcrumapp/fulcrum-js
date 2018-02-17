import assert from 'assert';
import Frisbee from 'frisbee';

import client from './client';

describe('Client', () => {
  describe('.api instanceof', () => {
    it('#api should be an instance of Frisbee', () => {
      assert.ok(client.api instanceof Frisbee);
    });
  });
});
