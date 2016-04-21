var assert = require('assert');
var fs = require('fs');
var nock = require('nock');

var client = require('./client');

describe('signatures', function(){

  describe('#find()', function(){
    it('should return a signature.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/signatures/9855e3f2-85a5-4b9f-9e62-0b1bbcfef091')
                   .replyWithFile(200, __dirname + '/objects/signature.json');
      client.signatures.find('9855e3f2-85a5-4b9f-9e62-0b1bbcfef091', function(error, signature) {
        assert.ifError(error);
        assert.equal(signature.signature.content_type, 'image/png');
        done();
      });
    });
  });

  describe('#search()', function(){
    it('should return signatures.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/signatures')
                   .replyWithFile(200, __dirname + '/objects/signatures.json');
      client.signatures.search({}, function(error, signatures) {
        assert.ifError(error);
        assert(signatures.signatures instanceof Array, 'signatures is not an array.');
        done();
      });
    });
  });

});
