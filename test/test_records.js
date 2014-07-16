var assert = require('assert');
var nock = require('nock');

var client = require('./client');

describe('Record', function(){

  describe('#find()', function(){
    it('should return a Feature.', function(done){
      var records = nock('https://api.fulcrumapp.com')
                    .get('/api/v2/records/916474a7-b995-4b36-81db-8eda97f93a73')
                    .replyWithFile(200, __dirname + '/objects/record.json');
      client.record.find('916474a7-b995-4b36-81db-8eda97f93a73', function(error, record) {
        assert.ifError(error);
        assert.equal(record.geometry.type, 'Point', 'geometry.type is not "Point".');
        assert.equal(record.geometry.coordinates[0], -80.85151188, 'geometry.coordinates[0] is incorrect.');
        assert.equal(record.geometry.coordinates[1], 35.67139184, 'geometry.coordinates[1] is incorrect.');
        done();
      });
    });
  });

  describe('#delete()', function(){
    it('should not return an error if deleted.', function(done){
      var records = nock('https://api.fulcrumapp.com')
                    .delete('/api/v2/records/916474a7-b995-4b36-81db-8eda97f93a73')
                    .reply(204);
      client.record.delete('916474a7-b995-4b36-81db-8eda97f93a73', function(error) {
        assert.ifError(error);
        done();
      });
    });
  });

  describe('#search()', function(){
    it('should return a FeatureCollection.', function(done){
      var records = nock('https://api.fulcrumapp.com')
                    .get('/api/v2/records?form_id=512342b0-2bce-4e31-9d4a-8f29e929f7ac')
                    .replyWithFile(200, __dirname + '/objects/records.json');
      client.record.search({form_id: '512342b0-2bce-4e31-9d4a-8f29e929f7ac'}, function(error, records) {
        assert.ifError(error);
        assert.equal(records.type, 'FeatureCollection', 'records is not a FeatureCollection.');
        done();
      });
    });
  });

});
