var Base, Records, async, mixins,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

async = require('async');

mixins = require('./mixins/');

Base = require('./base');

Records = (function(_super) {
  __extends(Records, _super);

  function Records() {
    return Records.__super__.constructor.apply(this, arguments);
  }

  Records.prototype.resource = 'records';

  Records.include(mixins.findable);

  Records.include(mixins.searchable);

  Records.include(mixins.deletable);

  Records.include(mixins.creatable);

  Records.include(mixins.updatable);

  Records.prototype.history = function(id, cb) {
    var do_get, do_process_http_errors, tasks;
    do_get = (function(_this) {
      return function(callback) {
        return _this.request('get', _this.url(id) + '/history', null, function(error, response, body) {
          if (error) {
            return callback(error);
          } else {
            return callback(null, response, body);
          }
        });
      };
    })(this);
    do_process_http_errors = (function(_this) {
      return function(response, body, callback) {
        return _this.process_http_errors(response, function(error) {
          if (error) {
            return callback(error);
          } else {
            return callback(null, body);
          }
        });
      };
    })(this);
    tasks = [do_get, do_process_http_errors];
    return async.waterfall(tasks, cb);
  };

  return Records;

})(Base);

module.exports = Records;
