var assert = require('assert');
var fs = require('fs');
var nock = require('nock');

var client = require('./client');

describe('memberships', function(){

  describe('#search()', function(){
    it('should return memberships.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/memberships')
                   .replyWithFile(200, __dirname + '/objects/memberships.json');
      client.memberships.search({}, function(error, memberships) {
        assert.ifError(error);
        assert(memberships.memberships instanceof Array, 'memberships is not an array.');
        done();
      });
    });
  });

});
