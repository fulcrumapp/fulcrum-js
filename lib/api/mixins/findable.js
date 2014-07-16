var async, findable;

async = require('async');

findable = {
  find: function(id, cb) {
    var do_get, do_process_http_errors, do_process_object, tasks;
    do_get = (function(_this) {
      return function(callback) {
        return _this.get(id, null, function(error, response, body) {
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
    do_process_object = (function(_this) {
      return function(body, callback) {
        return _this.process_object(body, function(error, object) {
          if (error) {
            return callback(error);
          } else {
            return callback(null, object);
          }
        });
      };
    })(this);
    tasks = [do_get, do_process_http_errors, do_process_object];
    return async.waterfall(tasks, cb);
  }
};

module.exports = findable;
