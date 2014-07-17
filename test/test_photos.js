var assert = require('assert');
var fs = require('fs');
var nock = require('nock');

var client = require('./client');

describe('photos', function(){

  describe('#find()', function(){
    it('should return a photo.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/photos/da82cce3-1d14-48ca-bf51-8add7458685f')
                   .replyWithFile(200, __dirname + '/objects/photo.json');
      client.photos.find('da82cce3-1d14-48ca-bf51-8add7458685f', function(error, photo) {
        assert.ifError(error);
        assert.equal(photo.photo.exif.model, 'Nexus 5', 'photo.exif.model is incorrect.');
        done();
      });
    });
  });

  describe('#search()', function(){
    it('should return photos.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/photos?form_id=512342b0-2bce-4e31-9d4a-8f29e929f7ac')
                   .replyWithFile(200, __dirname + '/objects/photos.json');
      client.photos.search({form_id: '512342b0-2bce-4e31-9d4a-8f29e929f7ac'}, function(error, photos) {
        assert.ifError(error);
        assert(photos.photos instanceof Array, 'photos is not an array.');
        done();
      });
    });
  });

});
