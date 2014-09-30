var assert = require('assert');
var fs = require('fs');
var nock = require('nock');

var client = require('./client');

describe('roles', function(){

  describe('#search()', function(){
    it('should return roles.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/roles')
                   .replyWithFile(200, __dirname + '/objects/roles.json');
      client.roles.search({}, function(error, roles) {
        assert.ifError(error);
        assert(roles.roles instanceof Array, 'roles is not an array.');
        done();
      });
    });
  });

});
