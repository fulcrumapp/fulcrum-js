import assert from 'assert';
import Fetcher from '../dist/fetcher';

import client from './client';

describe('Client', () => {
  describe('.api instanceof', () => {
    it('#api should be an instance of Frisbee', () => {
      assert.ok(client.api instanceof Fetcher);
    });
  });
});
