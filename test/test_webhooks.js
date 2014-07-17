var assert = require('assert');
var fs = require('fs');
var nock = require('nock');

var client = require('./client');

describe('webhooks', function(){

  describe('#find()', function(){
    it('should return a webhook.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/webhooks/bc53d884-a7a8-4697-9e35-e26192be724e')
                   .replyWithFile(200, __dirname + '/objects/webhook.json');
      client.webhooks.find('bc53d884-a7a8-4697-9e35-e26192be724e', function(error, webhook) {
        assert.ifError(error);
        assert.equal(webhook.webhook.id, 'bc53d884-a7a8-4697-9e35-e26192be724e', 'webhook.id is incorrect.');
        assert.equal(webhook.webhook.name, 'The webhook', 'webhook.name is incorrect.');
        done();
      });
    });
  });

  describe('#delete()', function(){
    it('should not return an error if deleted.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .delete('/api/v2/webhooks/bc53d884-a7a8-4697-9e35-e26192be724e')
                   .reply(204);
      client.webhooks.delete('bc53d884-a7a8-4697-9e35-e26192be724e', function(error) {
        assert.ifError(error);
        done();
      });
    });

    it('should return an error if no webhook is found.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .delete('/api/v2/webhooks/bc53d884-a7a8-4697-9e35-e26192be724e')
                   .reply(404);
      client.webhooks.delete('bc53d884-a7a8-4697-9e35-e26192be724e', function(error) {
        assert(error, 'error is not an error.');
        done();
      });
    });
  });

  describe('#search()', function(){
    it('should return webhooks.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/webhooks?form_id=512342b0-2bce-4e31-9d4a-8f29e929f7ac')
                   .replyWithFile(200, __dirname + '/objects/webhooks.json');
      client.webhooks.search({form_id: '512342b0-2bce-4e31-9d4a-8f29e929f7ac'}, function(error, webhooks) {
        assert.ifError(error);
        assert(webhooks.webhooks instanceof Array, 'webhooks is not an array.');
        done();
      });
    });
  });

  describe('#create()', function(){
    it('should return a webhook.', function(done){
      var webhook_to_post = JSON.parse(fs.readFileSync(__dirname + '/objects/webhook.json'));
      var nocker = nock('https://api.fulcrumapp.com')
                   .post('/api/v2/webhooks', webhook_to_post)
                   .replyWithFile(201, __dirname + '/objects/webhook.json');
      client.webhooks.create(webhook_to_post, function(error, webhook) {
        assert.ifError(error);
        assert.equal(webhook.webhook.id, 'bc53d884-a7a8-4697-9e35-e26192be724e', 'webhook.id is incorrect.');
        done();
      });
    });
  });

  describe('#update()', function(){
    it('should return a webhook.', function(done){
      var webhook_to_put = JSON.parse(fs.readFileSync(__dirname + '/objects/webhook.json'));
      var nocker = nock('https://api.fulcrumapp.com')
                   .put('/api/v2/webhooks/bc53d884-a7a8-4697-9e35-e26192be724e', webhook_to_put)
                   .replyWithFile(200, __dirname + '/objects/webhook.json');
      client.webhooks.update('bc53d884-a7a8-4697-9e35-e26192be724e', webhook_to_put, function(error, webhook) {
        assert.ifError(error);
        assert.equal(webhook.webhook.id, 'bc53d884-a7a8-4697-9e35-e26192be724e', 'webhook.id is incorrect.');
        done();
      });
    });
  });

});
