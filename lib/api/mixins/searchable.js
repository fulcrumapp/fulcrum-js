var async, searchable;

async = require('async');

searchable = {
  search: function(opts, cb) {
    var do_get, do_process_http_errors, do_process_objects, tasks;
    do_get = (function(_this) {
      return function(callback) {
        return _this.get(null, opts, function(error, response, body) {
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
    do_process_objects = (function(_this) {
      return function(body, callback) {
        return _this.process_objects(body, function(error, objects) {
          if (error) {
            return callback(error);
          } else {
            return callback(null, objects);
          }
        });
      };
    })(this);
    tasks = [do_get, do_process_http_errors, do_process_objects];
    return async.waterfall(tasks, cb);
  }
};

module.exports = searchable;
