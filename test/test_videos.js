var assert = require('assert');
var fs = require('fs');
var nock = require('nock');

var client = require('./client');

describe('videos', function(){

  describe('#find()', function(){
    it('should return a video.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/videos/025d3459-47a9-4207-b1fa-e26a3b6953cb')
                   .replyWithFile(200, __dirname + '/objects/video.json');
      client.videos.find('025d3459-47a9-4207-b1fa-e26a3b6953cb', function(error, video) {
        assert.ifError(error);
        assert.equal(video.video.content_type, 'video/mp4');
        done();
      });
    });
  });

  describe('#search()', function(){
    it('should return videos.', function(done){
      var nocker = nock('https://api.fulcrumapp.com')
                   .get('/api/v2/videos')
                   .replyWithFile(200, __dirname + '/objects/videos.json');
      client.videos.search({}, function(error, videos) {
        assert.ifError(error);
        assert(videos.videos instanceof Array, 'videos is not an array.');
        done();
      });
    });
  });

});
