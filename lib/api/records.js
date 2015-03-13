var _ = require('lodash');
var async = require('async');

var mixins = require('./mixins/');
var Base = require('./base');

function Records() {
  Base.apply(this, arguments);
}

Records.prototype = Object.create(Base.prototype);
Records.prototype.constructor = Records;

Records.prototype.resource = 'records';

Records.prototype.history = function(id, cb) {
  var me = this;

  function do_get (callback) {
    me.request('get', me.url(id) + '/history', null, function (error, response, body) {
      if (error) {
        callback(error);
      } else {
        callback(null, response, body);
      }
    });
  }

  function do_process_http_errors (response, body, callback) {
    me.process_http_errors(response, function (error) {
      if (error) {
        callback(error);
      } else {
        callback(null, body);
      }
    });
  }

  var tasks = [do_get, do_process_http_errors];

  async.waterfall(tasks, cb);
};

_.extend(Records.prototype,
  mixins.findable,
  mixins.searchable,
  mixins.deletable,
  mixins.creatable,
  mixins.updatable);

module.exports = Records;
