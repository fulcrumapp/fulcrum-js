var assert = require('assert');
var fs = require('fs');
var nock = require('nock');

var client = require('./client');

describe('Projects', function(){
  describe('#find()', function(){
    it('should return a project.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/projects/d68c7034-9f5c-4045-b374-d4952ec9d9eb')
                   .replyWithFile(200, __dirname + '/objects/project.json');
      client.projects.find('d68c7034-9f5c-4045-b374-d4952ec9d9eb', function(error, project) {
        assert.ifError(error);
        assert.equal(project.project.id, 'd68c7034-9f5c-4045-b374-d4952ec9d9eb', 'project.id is incorrect.');
        done();
      });
    });
  });

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

  describe('#delete()', function(){
    it('should not return an error if deleted.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .delete('/api/v2/projects/d68c7034-9f5c-4045-b374-d4952ec9d9eb')
                   .reply(204);
      client.projects.delete('d68c7034-9f5c-4045-b374-d4952ec9d9eb', function(error) {
        assert.ifError(error);
        done();
      });
    });

    it('should return an error if no project is found.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .delete('/api/v2/projects/d68c7034-9f5c-4045-b374-d4952ec9d9eb')
                   .reply(404);
      client.projects.delete('d68c7034-9f5c-4045-b374-d4952ec9d9eb', function(error) {
        assert(error, 'error is not an error.');
        done();
      });
    });
  });

  describe('#create()', function(){
    it('should return a project.', function(done){
      var project_to_post = JSON.parse(fs.readFileSync(__dirname + '/objects/project.json'));
      var nocker = nock('https://api.fulcrumapp.com')
                   .post('/api/v2/projects', project_to_post)
                   .replyWithFile(201, __dirname + '/objects/project.json');
      client.projects.create(project_to_post, function(error, project) {
        assert.ifError(error);
        assert.equal(project.project.id, 'd68c7034-9f5c-4045-b374-d4952ec9d9eb', 'project.id is incorrect.');
        done();
      });
    });
  });

  describe('#update()', function(){
    it('should return a project.', function(done){
      var project_to_put = JSON.parse(fs.readFileSync(__dirname + '/objects/project.json'));
      var nocker = nock('https://api.fulcrumapp.com')
                   .put('/api/v2/projects/d68c7034-9f5c-4045-b374-d4952ec9d9eb', project_to_put)
                   .replyWithFile(200, __dirname + '/objects/project.json');
      client.projects.update('d68c7034-9f5c-4045-b374-d4952ec9d9eb', project_to_put, function(error, project) {
        assert.ifError(error);
        assert.equal(project.project.id, 'd68c7034-9f5c-4045-b374-d4952ec9d9eb', 'project.id is incorrect.');
        done();
      });
    });
  });
});
