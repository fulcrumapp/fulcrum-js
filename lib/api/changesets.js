var _ = require('lodash');
var async = require('async');

var mixins = require('./mixins/');
var Base = require('./base');

function Changesets() {
  Base.apply(this, arguments);
}

Changesets.prototype = Object.create(Base.prototype);
Changesets.prototype.constructor = Changesets;

Changesets.prototype.resource = 'changesets';

Changesets.prototype.close = function(id, cb) {
  var me = this;

  function do_put (callback) {
    me.request('put', me.url(id) + '/close', null, function (error, response, body) {
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
        callback(null);
      }
    });
  }

  var tasks = [do_put, do_process_http_errors];

  async.waterfall(tasks, cb);
};

_.extend(Changesets.prototype,
  mixins.findable,
  mixins.searchable,
  mixins.creatable,
  mixins.updatable);

module.exports = Changesets;
