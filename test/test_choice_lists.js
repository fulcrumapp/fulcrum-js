var assert = require('assert');
var fs = require('fs');
var nock = require('nock');

var client = require('./client');

describe('choice_lists', function(){

  describe('#find()', function(){
    it('should return a choice_list.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/choice_lists/496087f1-aa28-486c-9a26-0fcf31c4e638')
                   .replyWithFile(200, __dirname + '/objects/choice_list.json');
      client.choice_lists.find('496087f1-aa28-486c-9a26-0fcf31c4e638', function(error, choice_list) {
        assert.ifError(error);
        assert.equal(choice_list.choice_list.id, '496087f1-aa28-486c-9a26-0fcf31c4e638', 'choice_list.id is incorrect.');
        assert.equal(choice_list.choice_list.name, 'Secret Shopper Satisfaction Level', 'choice_list.name is incorrect.');
        done();
      });
    });
  });

  describe('#delete()', function(){
    it('should not return an error if deleted.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .delete('/api/v2/choice_lists/496087f1-aa28-486c-9a26-0fcf31c4e638')
                   .reply(204);
      client.choice_lists.delete('496087f1-aa28-486c-9a26-0fcf31c4e638', function(error) {
        assert.ifError(error);
        done();
      });
    });

    it('should return an error if no choice_list is found.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .delete('/api/v2/choice_lists/496087f1-aa28-486c-9a26-0fcf31c4e638')
                   .reply(404);
      client.choice_lists.delete('496087f1-aa28-486c-9a26-0fcf31c4e638', function(error) {
        assert(error, 'error is not an error.');
        done();
      });
    });
  });

  describe('#search()', function(){
    it('should return choice_lists.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/choice_lists?form_id=512342b0-2bce-4e31-9d4a-8f29e929f7ac')
                   .replyWithFile(200, __dirname + '/objects/choice_lists.json');
      client.choice_lists.search({form_id: '512342b0-2bce-4e31-9d4a-8f29e929f7ac'}, function(error, choice_lists) {
        assert.ifError(error);
        assert(choice_lists.choice_lists instanceof Array, 'choice_lists is not an array.');
        done();
      });
    });
  });

  describe('#create()', function(){
    it('should return a choice_list.', function(done){
      var choice_list_to_post = JSON.parse(fs.readFileSync(__dirname + '/objects/choice_list.json'));
      var nocker = nock('https://api.fulcrumapp.com')
                   .post('/api/v2/choice_lists', choice_list_to_post)
                   .replyWithFile(201, __dirname + '/objects/choice_list.json');
      client.choice_lists.create(choice_list_to_post, function(error, choice_list) {
        assert.ifError(error);
        assert.equal(choice_list.choice_list.id, '496087f1-aa28-486c-9a26-0fcf31c4e638', 'choice_list.id is incorrect.');
        done();
      });
    });
  });

  describe('#update()', function(){
    it('should return a choice_list.', function(done){
      var choice_list_to_put = JSON.parse(fs.readFileSync(__dirname + '/objects/choice_list.json'));
      var nocker = nock('https://api.fulcrumapp.com')
                   .put('/api/v2/choice_lists/496087f1-aa28-486c-9a26-0fcf31c4e638', choice_list_to_put)
                   .replyWithFile(200, __dirname + '/objects/choice_list.json');
      client.choice_lists.update('496087f1-aa28-486c-9a26-0fcf31c4e638', choice_list_to_put, function(error, choice_list) {
        assert.ifError(error);
        assert.equal(choice_list.choice_list.id, '496087f1-aa28-486c-9a26-0fcf31c4e638', 'choice_list.id is incorrect.');
        done();
      });
    });
  });

});
