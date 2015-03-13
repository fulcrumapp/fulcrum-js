var async = require('async');

var updatable = {
  update: function(id, data, cb) {
    var me = this;

    function do_put (callback) {
      me.put(id, data, function (error, response, body) {
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

    var tasks = [do_put, do_process_http_errors];

    return async.waterfall(tasks, cb);
  }
};

module.exports = updatable;
