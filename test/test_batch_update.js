import assert from 'assert';
import nock from 'nock';
import path from 'path';
import fs from 'fs';

import client from './client';

describe('Serial Batch Update', () => {
  describe('#serialBatchUpdate()', () => {
    it('should serial batch update multiple records with a changeset.', async () => {
      const recordIds = ['abc-123', 'def-456', 'ghi-789'];
      const formId = 'form-123';

      const attributes = {
        form_id: formId,
        status: 'reviewed',
        project_id: 'project-123'
      };

      const changesetResponse = {
        changeset: {
          id: 'changeset-123',
          form_id: formId,
          metadata: {
            app: 'fulcrum-js',
            operation: 'bulk_update'
          }
        }
      };

      const recordResponse1 = {
        record: {
          id: 'abc-123',
          status: 'reviewed',
          project_id: 'project-123',
          changeset_id: 'changeset-123'
        }
      };

      const recordResponse2 = {
        record: {
          id: 'def-456',
          status: 'reviewed',
          project_id: 'project-123',
          changeset_id: 'changeset-123'
        }
      };

      const recordResponse3 = {
        record: {
          id: 'ghi-789',
          status: 'reviewed',
          project_id: 'project-123',
          changeset_id: 'changeset-123'
        }
      };

      const closeChangesetResponse = {
        changeset: {
          id: 'changeset-123',
          closed_at: '2024-01-15T12:00:00Z'
        }
      };

      // Mock changeset creation
      nock('https://api.fulcrumapp.com')
        .post('/api/v2/changesets')
        .reply(201, changesetResponse);

      // Mock record updates
      nock('https://api.fulcrumapp.com')
        .put('/api/v2/records/abc-123')
        .reply(200, recordResponse1);

      nock('https://api.fulcrumapp.com')
        .put('/api/v2/records/def-456')
        .reply(200, recordResponse2);

      nock('https://api.fulcrumapp.com')
        .put('/api/v2/records/ghi-789')
        .reply(200, recordResponse3);

      // Mock changeset close
      nock('https://api.fulcrumapp.com')
        .put('/api/v2/changesets/changeset-123/close')
        .reply(200, closeChangesetResponse);

      const records = await client.records.serialBatchUpdate(recordIds, attributes);

      assert(Array.isArray(records), 'records should be an array.');
      assert.equal(records.length, 3, 'Should return 3 updated records.');
      assert.equal(records[0].id, 'abc-123', 'First record ID is incorrect.');
      assert.equal(records[0].status, 'reviewed', 'First record status is incorrect.');
      assert.equal(records[1].id, 'def-456', 'Second record ID is incorrect.');
      assert.equal(records[2].id, 'ghi-789', 'Third record ID is incorrect.');
      
      // Verify all records are associated with a changeset
      assert(records[0].changeset_id, 'First record should have a changeset_id.');
      assert(records[1].changeset_id, 'Second record should have a changeset_id.');
      assert(records[2].changeset_id, 'Third record should have a changeset_id.');
      
      // Verify all records are associated with the same changeset
      assert.equal(records[0].changeset_id, records[1].changeset_id, 
        'First and second records should have the same changeset_id.');
      assert.equal(records[1].changeset_id, records[2].changeset_id, 
        'Second and third records should have the same changeset_id.');
      assert.equal(records[0].changeset_id, 'changeset-123', 
        'Records should be associated with changeset-123.');
    });

    it('should serial batch update records with form values.', async () => {
      const recordIds = ['record-1', 'record-2'];
      const formId = 'form-456';

      const attributes = {
        form_id: formId,
        form_values: {
          'field-key-1': 'new value',
          'field-key-2': 100
        }
      };

      const changesetResponse = {
        changeset: {
          id: 'changeset-456',
          form_id: formId
        }
      };

      const recordResponse1 = {
        record: {
          id: 'record-1',
          form_values: {
            'field-key-1': 'new value',
            'field-key-2': 100
          },
          changeset_id: 'changeset-456'
        }
      };

      const recordResponse2 = {
        record: {
          id: 'record-2',
          form_values: {
            'field-key-1': 'new value',
            'field-key-2': 100
          },
          changeset_id: 'changeset-456'
        }
      };

      const closeChangesetResponse = {
        changeset: {
          id: 'changeset-456',
          closed_at: '2024-01-15T12:00:00Z'
        }
      };

      // Mock changeset creation
      nock('https://api.fulcrumapp.com')
        .post('/api/v2/changesets')
        .reply(201, changesetResponse);

      // Mock record updates
      nock('https://api.fulcrumapp.com')
        .put('/api/v2/records/record-1')
        .reply(200, recordResponse1);

      nock('https://api.fulcrumapp.com')
        .put('/api/v2/records/record-2')
        .reply(200, recordResponse2);

      // Mock changeset close
      nock('https://api.fulcrumapp.com')
        .put('/api/v2/changesets/changeset-456/close')
        .reply(200, closeChangesetResponse);

      const records = await client.records.serialBatchUpdate(recordIds, attributes);

      assert(Array.isArray(records), 'records should be an array.');
      assert.equal(records.length, 2, 'Should return 2 updated records.');
      assert.equal(records[0].form_values['field-key-1'], 'new value', 'Field value incorrect.');
      assert.equal(records[0].form_values['field-key-2'], 100, 'Field value incorrect.');
      
      // Verify all records are associated with a changeset
      assert(records[0].changeset_id, 'First record should have a changeset_id.');
      assert(records[1].changeset_id, 'Second record should have a changeset_id.');
      
      // Verify all records are associated with the same changeset
      assert.equal(records[0].changeset_id, records[1].changeset_id, 
        'Both records should have the same changeset_id.');
      assert.equal(records[0].changeset_id, 'changeset-456', 
        'Records should be associated with changeset-456.');
    });
  });
});
