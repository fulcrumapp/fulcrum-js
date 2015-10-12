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

  describe('#change_permissions()', function(){
    it('should change permissions.', function(done){
      var permissions = {
        "change":{
          "type":"layer_members",
          "layer_id":"68b2e0e3-ff36-460f-8f88-f8d3e70acbf2",
          "remove":[
            "00dd4fd1-1c09-4204-897e-ca68694f5d34"
          ]
        }
      };
      var nocker = nock('https://api.fulcrumapp.com')
                   .post('/api/v2/memberships/change_permissions')
                   .replyWithFile(200, __dirname + '/objects/memberships.json');
      client.memberships.change_permissions(permissions, function(error, memberships) {
        assert.ifError(error);
        assert(memberships.memberships instanceof Array, 'memberships is not an array.');
        done();
      });
    });
  });
});
