var async, updatable;

async = require('async');

updatable = {
  update: function(id, data, cb) {
    var do_process_http_errors, do_process_object, do_put, tasks;
    do_put = (function(_this) {
      return function(callback) {
        return _this.put(id, data, function(error, response, body) {
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
    tasks = [do_put, do_process_http_errors, do_process_object];
    return async.waterfall(tasks, cb);
  }
};

module.exports = updatable;
