import assert from 'assert';
import Fetcher from '../dist/fetcher';

import client from './client';

describe('Client', () => {
  describe('.api instanceof', () => {
    it('#api should be an instance of Fetcher.', () => {
      assert.ok(client.api instanceof Fetcher);
    });
  });

  describe('forms', () => {
    it('should have all properties', () => {
      assert('forms' in client);
      assert('find' in client.forms);
      assert('all' in client.forms);
      assert('create' in client.forms);
      assert('update' in client.forms);
      assert('delete' in client.forms);
    });
  });

  describe('records', () => {
    it('should have all properties', () => {
      assert('records' in client);
      assert('find' in client.records);
      assert('all' in client.records);
      assert('create' in client.records);
      assert('update' in client.records);
      assert('delete' in client.records);
      assert('history' in client.records);
    });
  });

  describe('changesets', () => {
    it('should have all properties', () => {
      assert('changesets' in client);
      assert('find' in client.changesets);
      assert('all' in client.changesets);
      assert('create' in client.changesets);
      assert('update' in client.changesets);
      assert('close' in client.changesets);
    });
  });

  describe('choiceLists', () => {
    it('should have all properties', () => {
      assert('choiceLists' in client);
      assert('find' in client.choiceLists);
      assert('all' in client.choiceLists);
      assert('create' in client.choiceLists);
      assert('update' in client.choiceLists);
      assert('delete' in client.choiceLists);
    });
  });

  describe('classificationSets', () => {
    it('should have all properties', () => {
      assert('classificationSets' in client);
      assert('find' in client.classificationSets);
      assert('all' in client.classificationSets);
      assert('create' in client.classificationSets);
      assert('update' in client.classificationSets);
      assert('delete' in client.classificationSets);
    });
  });

  describe('authorizations', () => {
    it('should have all properties', () => {
      assert('authorizations' in client);
      assert('find' in client.authorizations);
      assert('all' in client.authorizations);
      assert('create' in client.authorizations);
      assert('update' in client.authorizations);
      assert('delete' in client.authorizations);
      assert('regenerate' in client.authorizations);
    });
  });

  describe('memberships', () => {
    it('should have all properties', () => {
      assert('memberships' in client);
      assert('find' in client.memberships);
      assert('all' in client.memberships);
      assert('change' in client.memberships);
    });
  });

  describe('projects', () => {
    it('should have all properties', () => {
      assert('projects' in client);
      assert('find' in client.projects);
      assert('all' in client.projects);
      assert('create' in client.projects);
      assert('update' in client.projects);
      assert('delete' in client.projects);
    });
  });

  describe('layers', () => {
    it('should have all properties', () => {
      assert('layers' in client);
      assert('find' in client.layers);
      assert('all' in client.layers);
      assert('create' in client.layers);
      assert('update' in client.layers);
      assert('delete' in client.layers);
    });
  });

  describe('photos', () => {
    it('should have all properties', () => {
      assert('photos' in client);
      assert('find' in client.photos);
      assert('all' in client.photos);
      assert('create' in client.photos);
      assert('media' in client.photos);
    });
  });

  describe('signatures', () => {
    it('should have all properties', () => {
      assert('signatures' in client);
      assert('find' in client.signatures);
      assert('all' in client.signatures);
      assert('create' in client.signatures);
      assert('media' in client.signatures);
    });
  });

  describe('videos', () => {
    it('should have all properties', () => {
      assert('videos' in client);
      assert('find' in client.videos);
      assert('all' in client.videos);
      assert('create' in client.videos);
      assert('media' in client.videos);
      assert('uploadTrack' in client.videos);
      assert('track' in client.videos);
    });
  });

  describe('audio', () => {
    it('should have all properties', () => {
      assert('audio' in client);
      assert('find' in client.audio);
      assert('all' in client.audio);
      assert('create' in client.audio);
      assert('media' in client.audio);
      assert('uploadTrack' in client.audio);
      assert('track' in client.audio);
    });
  });

  describe('roles', () => {
    it('should have all properties', () => {
      assert('roles' in client);
      assert('all' in client.roles);
    });
  });

  describe('webhooks', () => {
    it('should have all properties', () => {
      assert('webhooks' in client);
      assert('find' in client.webhooks);
      assert('all' in client.webhooks);
      assert('create' in client.webhooks);
      assert('update' in client.webhooks);
      assert('delete' in client.webhooks);
    });
  });

  describe('auditLogs', () => {
    it('should have all properties', () => {
      assert('auditLogs' in client);
      assert('find' in client.auditLogs);
      assert('all' in client.auditLogs);
    });
  });

  describe('query', () => {
    it('should have query', () => {
      assert('query' in client);
    });
  });
});
