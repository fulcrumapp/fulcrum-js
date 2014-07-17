var async, searchable;

async = require('async');

searchable = {
  search: function(qs, cb) {
    var do_get, do_process_http_errors, tasks;
    do_get = (function(_this) {
      return function(callback) {
        return _this.get(null, qs, function(error, response, body) {
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
  }
};

module.exports = searchable;
