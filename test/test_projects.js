var assert = require('assert');
var fs = require('fs');
var nock = require('nock');

var client = require('./client');

describe('Projects', function(){

  describe('#search()', function(){
    it('should return projects.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/projects')
                   .replyWithFile(200, __dirname + '/objects/projects.json');
      client.projects.search(null, function(error, projects) {
        assert.ifError(error);
        assert(projects.projects instanceof Array, 'projects is not an array.');
        assert.equal(projects.projects[0].name, 'LKN Phase 1', 'projects[0].name is incorrect.');
        done();
      });
    });
  });

});
