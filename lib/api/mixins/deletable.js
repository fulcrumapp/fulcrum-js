var async, deletable;

async = require('async');

deletable = {
  "delete": function(id, cb) {
    var do_delete, do_process_http_errors, tasks;
    do_delete = (function(_this) {
      return function(callback) {
        return _this.del(id, function(error, response, body) {
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
    tasks = [do_delete, do_process_http_errors];
    return async.waterfall(tasks, cb);
  }
};

module.exports = deletable;
