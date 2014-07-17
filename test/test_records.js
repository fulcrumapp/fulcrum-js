var assert = require('assert');
var fs = require('fs');
var nock = require('nock');

var client = require('./client');

describe('Record', function(){

  describe('#find()', function(){
    it('should return a record.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/records/916474a7-b995-4b36-81db-8eda97f93a73')
                   .replyWithFile(200, __dirname + '/objects/record.json');
      client.record.find('916474a7-b995-4b36-81db-8eda97f93a73', function(error, record) {
        assert.ifError(error);
        assert.equal(record.id, '916474a7-b995-4b36-81db-8eda97f93a73', 'record.id is incorrect.');
        assert.equal(record.longitude, -100, 'geometry.coordinates[0] is incorrect.');
        assert.equal(record.latitude, 40, 'geometry.coordinates[1] is incorrect.');
        done();
      });
    });
  });

  describe('#delete()', function(){
    it('should not return an error if deleted.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .delete('/api/v2/records/916474a7-b995-4b36-81db-8eda97f93a73')
                   .reply(204);
      client.record.delete('916474a7-b995-4b36-81db-8eda97f93a73', function(error) {
        assert.ifError(error);
        done();
      });
    });

    it('should return an error if no record is found.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .delete('/api/v2/records/916474a7-b995-4b36-81db-8eda97f93a73')
                   .reply(404);
      client.record.delete('916474a7-b995-4b36-81db-8eda97f93a73', function(error) {
        assert(error, 'error is not an error.');
        done();
      });
    });
  });

  describe('#search()', function(){
    it('should return records.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/records?form_id=512342b0-2bce-4e31-9d4a-8f29e929f7ac')
                   .replyWithFile(200, __dirname + '/objects/records.json');
      client.record.search({form_id: '512342b0-2bce-4e31-9d4a-8f29e929f7ac'}, function(error, records) {
        assert.ifError(error);
        assert(records instanceof Array, 'records is not an array.');
        done();
      });
    });
  });

  describe('#create()', function(){
    it('should return a record.', function(done){
      var record_to_post = JSON.parse(fs.readFileSync(__dirname + '/objects/record.json'));
      var nocker = nock('https://api.fulcrumapp.com')
                   .post('/api/v2/records', record_to_post)
                   .replyWithFile(201, __dirname + '/objects/record.json');
      client.record.create(record_to_post, function(error, record) {
        assert.ifError(error);
        assert.equal(record.id, '916474a7-b995-4b36-81db-8eda97f93a73', 'record.id is incorrect.');
        done();
      });
    });
  });

  describe('#update()', function(){
    it('should return a record.', function(done){
      var record_to_put = JSON.parse(fs.readFileSync(__dirname + '/objects/record.json'));
      var nocker = nock('https://api.fulcrumapp.com')
                   .put('/api/v2/records/916474a7-b995-4b36-81db-8eda97f93a73', record_to_put)
                   .replyWithFile(200, __dirname + '/objects/record.json');
      client.record.update('916474a7-b995-4b36-81db-8eda97f93a73', record_to_put, function(error, record) {
        assert.ifError(error);
        assert.equal(record.id, '916474a7-b995-4b36-81db-8eda97f93a73', 'record.id is incorrect.');
        done();
      });
    });
  });

});
