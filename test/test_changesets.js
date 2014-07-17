var assert = require('assert');
var fs = require('fs');
var nock = require('nock');

var client = require('./client');

describe('Changeset', function(){

  describe('#find()', function(){
    it('should return a changeset.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/changesets/e56594c5-22e3-4d15-8dd6-f0fc02280ec7')
                   .replyWithFile(200, __dirname + '/objects/changeset.json');
      client.changesets.find('e56594c5-22e3-4d15-8dd6-f0fc02280ec7', function(error, changeset) {
        assert.ifError(error);
        assert.equal(changeset.changeset.id, 'e56594c5-22e3-4d15-8dd6-f0fc02280ec7', 'changeset.id is incorrect.');
        assert.equal(changeset.changeset.metadata.comment, 'My First API created Changeset', 'changeset.metadata.comment is incorrect.');
        done();
      });
    });
  });

  describe('#close()', function(){
    it('should not return an error if closed.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .put('/api/v2/changesets/e56594c5-22e3-4d15-8dd6-f0fc02280ec7/close')
                   .reply(200);
      client.changesets.close('e56594c5-22e3-4d15-8dd6-f0fc02280ec7', function(error) {
        assert.ifError(error);
        done();
      });
    });
  });

  describe('#search()', function(){
    it('should return changesets.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/changesets')
                   .replyWithFile(200, __dirname + '/objects/changesets.json');
      client.changesets.search(null, function(error, changesets) {
        assert.ifError(error);
        assert(changesets.changesets instanceof Array, 'changesets is not an array.');
        done();
      });
    });
  });

  describe('#create()', function(){
    it('should return a changeset.', function(done){
      var changeset_to_post = JSON.parse(fs.readFileSync(__dirname + '/objects/changeset.json'));
      var nocker = nock('https://api.fulcrumapp.com')
                   .post('/api/v2/changesets', changeset_to_post)
                   .replyWithFile(201, __dirname + '/objects/changeset.json');
      client.changesets.create(changeset_to_post, function(error, changeset) {
        assert.ifError(error);
        assert.equal(changeset.changeset.id, 'e56594c5-22e3-4d15-8dd6-f0fc02280ec7', 'changeset.id is incorrect.');
        done();
      });
    });
  });

  describe('#update()', function(){
    it('should return a changeset.', function(done){
      var changeset_to_put = JSON.parse(fs.readFileSync(__dirname + '/objects/changeset.json'));
      var nocker = nock('https://api.fulcrumapp.com')
                   .put('/api/v2/changesets/e56594c5-22e3-4d15-8dd6-f0fc02280ec7', changeset_to_put)
                   .replyWithFile(200, __dirname + '/objects/changeset.json');
      client.changesets.update('e56594c5-22e3-4d15-8dd6-f0fc02280ec7', changeset_to_put, function(error, changeset) {
        assert.ifError(error);
        assert.equal(changeset.changeset.id, 'e56594c5-22e3-4d15-8dd6-f0fc02280ec7', 'changeset.id is incorrect.');
        done();
      });
    });
  });

});
