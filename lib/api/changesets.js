var Base, Changesets, async, mixins,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

async = require('async');

mixins = require('./mixins/');

Base = require('./base');

Changesets = (function(_super) {
  __extends(Changesets, _super);

  function Changesets() {
    return Changesets.__super__.constructor.apply(this, arguments);
  }

  Changesets.prototype.resource = 'changesets';

  Changesets.include(mixins.creatable);

  Changesets.include(mixins.findable);

  Changesets.include(mixins.updatable);

  Changesets.include(mixins.searchable);

  Changesets.prototype.close = function(id, cb) {
    var do_process_http_errors, do_put, tasks;
    do_put = (function(_this) {
      return function(callback) {
        return _this.request('put', _this.url(id) + '/close', null, function(error, response, body) {
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
            return callback(null);
          }
        });
      };
    })(this);
    tasks = [do_put, do_process_http_errors];
    return async.waterfall(tasks, cb);
  };

  return Changesets;

})(Base);

module.exports = Changesets;
