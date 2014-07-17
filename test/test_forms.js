var assert = require('assert');
var fs = require('fs');
var nock = require('nock');

var client = require('./client');

describe('Forms', function(){

  describe('#find()', function(){
    it('should return a form.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/forms/512342b0-2bce-4e31-9d4a-8f29e929f7ac')
                   .replyWithFile(200, __dirname + '/objects/form.json');
      client.forms.find('512342b0-2bce-4e31-9d4a-8f29e929f7ac', function(error, form) {
        assert.ifError(error);
        assert.equal(form.form.id, '512342b0-2bce-4e31-9d4a-8f29e929f7ac', 'form.id is incorrect.');
        assert.equal(form.form.name, 'Hurst Estate', 'form.name is incorrect.');
        done();
      });
    });
  });

  describe('#delete()', function(){
    it('should not return an error if deleted.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .delete('/api/v2/forms/512342b0-2bce-4e31-9d4a-8f29e929f7ac')
                   .reply(204);
      client.forms.delete('512342b0-2bce-4e31-9d4a-8f29e929f7ac', function(error) {
        assert.ifError(error);
        done();
      });
    });

    it('should return an error if no form is found.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .delete('/api/v2/forms/512342b0-2bce-4e31-9d4a-8f29e929f7ac')
                   .reply(404);
      client.forms.delete('512342b0-2bce-4e31-9d4a-8f29e929f7ac', function(error) {
        assert(error, 'error is not an error.');
        done();
      });
    });
  });

  describe('#search()', function(){
    it('should return forms.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/forms')
                   .replyWithFile(200, __dirname + '/objects/forms.json');
      client.forms.search(null, function(error, forms) {
        assert.ifError(error);
        assert(forms.forms instanceof Array, 'forms is not an array.');
        done();
      });
    });
  });

  describe('#create()', function(){
    it('should return a form.', function(done){
      var form_to_post = JSON.parse(fs.readFileSync(__dirname + '/objects/form.json'));
      var nocker = nock('https://api.fulcrumapp.com')
                   .post('/api/v2/forms', form_to_post)
                   .replyWithFile(201, __dirname + '/objects/form.json');
      client.forms.create(form_to_post, function(error, form) {
        assert.ifError(error);
        assert.equal(form.form.id, '512342b0-2bce-4e31-9d4a-8f29e929f7ac', 'form.id is incorrect.');
        assert.equal(form.form.name, 'Hurst Estate', 'form.name is incorrect.');
        done();
      });
    });
  });

  describe('#update()', function(){
    it('should return a form.', function(done){
      var form_to_put = JSON.parse(fs.readFileSync(__dirname + '/objects/form.json'));
      var nocker = nock('https://api.fulcrumapp.com')
                   .put('/api/v2/forms/512342b0-2bce-4e31-9d4a-8f29e929f7ac', form_to_put)
                   .replyWithFile(200, __dirname + '/objects/form.json');
      client.forms.update('512342b0-2bce-4e31-9d4a-8f29e929f7ac', form_to_put, function(error, form) {
        assert.ifError(error);
        assert.equal(form.form.id, '512342b0-2bce-4e31-9d4a-8f29e929f7ac', 'form.id is incorrect.');
        done();
      });
    });
  });

});
