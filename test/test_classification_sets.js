var assert = require('assert');
var fs = require('fs');
var nock = require('nock');

var client = require('./client');

describe('classification_sets', function(){

  describe('#find()', function(){
    it('should return a classification_set.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/classification_sets/1e862299-2ad4-4a1f-9cd6-88b34db770e7')
                   .replyWithFile(200, __dirname + '/objects/classification_set.json');
      client.classification_sets.find('1e862299-2ad4-4a1f-9cd6-88b34db770e7', function(error, classification_set) {
        assert.ifError(error);
        assert.equal(classification_set.classification_set.id, '1e862299-2ad4-4a1f-9cd6-88b34db770e7', 'classification_set.id is incorrect.');
        assert.equal(classification_set.classification_set.name, 'Street Food Types', 'classification_set.name is incorrect.');
        done();
      });
    });
  });

  describe('#delete()', function(){
    it('should not return an error if deleted.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .delete('/api/v2/classification_sets/1e862299-2ad4-4a1f-9cd6-88b34db770e7')
                   .reply(204);
      client.classification_sets.delete('1e862299-2ad4-4a1f-9cd6-88b34db770e7', function(error) {
        assert.ifError(error);
        done();
      });
    });

    it('should return an error if no classification_set is found.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .delete('/api/v2/classification_sets/1e862299-2ad4-4a1f-9cd6-88b34db770e7')
                   .reply(404);
      client.classification_sets.delete('1e862299-2ad4-4a1f-9cd6-88b34db770e7', function(error) {
        assert(error, 'error is not an error.');
        done();
      });
    });
  });

  describe('#search()', function(){
    it('should return classification_sets.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/classification_sets?form_id=512342b0-2bce-4e31-9d4a-8f29e929f7ac')
                   .replyWithFile(200, __dirname + '/objects/classification_sets.json');
      client.classification_sets.search({form_id: '512342b0-2bce-4e31-9d4a-8f29e929f7ac'}, function(error, classification_sets) {
        assert.ifError(error);
        assert(classification_sets.classification_sets instanceof Array, 'classification_sets is not an array.');
        done();
      });
    });
  });

  describe('#create()', function(){
    it('should return a classification_set.', function(done){
      var classification_set_to_post = JSON.parse(fs.readFileSync(__dirname + '/objects/classification_set.json'));
      var nocker = nock('https://api.fulcrumapp.com')
                   .post('/api/v2/classification_sets', classification_set_to_post)
                   .replyWithFile(201, __dirname + '/objects/classification_set.json');
      client.classification_sets.create(classification_set_to_post, function(error, classification_set) {
        assert.ifError(error);
        assert.equal(classification_set.classification_set.id, '1e862299-2ad4-4a1f-9cd6-88b34db770e7', 'classification_set.id is incorrect.');
        done();
      });
    });
  });

  describe('#update()', function(){
    it('should return a classification_set.', function(done){
      var classification_set_to_put = JSON.parse(fs.readFileSync(__dirname + '/objects/classification_set.json'));
      var nocker = nock('https://api.fulcrumapp.com')
                   .put('/api/v2/classification_sets/1e862299-2ad4-4a1f-9cd6-88b34db770e7', classification_set_to_put)
                   .replyWithFile(200, __dirname + '/objects/classification_set.json');
      client.classification_sets.update('1e862299-2ad4-4a1f-9cd6-88b34db770e7', classification_set_to_put, function(error, classification_set) {
        assert.ifError(error);
        assert.equal(classification_set.classification_set.id, '1e862299-2ad4-4a1f-9cd6-88b34db770e7', 'classification_set.id is incorrect.');
        done();
      });
    });
  });

});
