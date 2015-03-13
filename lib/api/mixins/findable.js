var async = require('async');

var findable = {
  find: function(id, cb) {
    var me = this;

    function do_get (callback) {
      me.get(id, null, function (error, response, body) {
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

    var tasks = [do_get, do_process_http_errors];

    return async.waterfall(tasks, cb);
  }
};

module.exports = findable;
