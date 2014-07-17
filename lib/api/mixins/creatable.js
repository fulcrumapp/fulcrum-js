var async, creatable;

async = require('async');

creatable = {
  create: function(data, cb) {
    var do_post, do_process_http_errors, tasks;
    do_post = (function(_this) {
      return function(callback) {
        return _this.post(data, function(error, response, body) {
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
    tasks = [do_post, do_process_http_errors];
    return async.waterfall(tasks, cb);
  }
};

module.exports = creatable;
