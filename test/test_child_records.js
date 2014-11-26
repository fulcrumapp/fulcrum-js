var assert = require('assert');
var fs = require('fs');
var nock = require('nock');

var client = require('./client');

describe('Child Records', function(){

  describe('#search()', function(){
    it('should return child records.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/child_records?form_id=df6f189e-7d50-404f-936a-835952da5073')
                   .replyWithFile(200, __dirname + '/objects/child_records.json');
      client.child_records.search({form_id: 'df6f189e-7d50-404f-936a-835952da5073'}, function(error, records) {
        assert.ifError(error);
        assert(records.records instanceof Array, 'records is not an array.');
        done();
      });
    });
  });

});
