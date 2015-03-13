var async = require('async');

var searchable = {
  search: function(qs, cb) {
    var me = this;

    function do_get (callback) {
      me.get(null, qs, function (error, response, body) {
        if (error) {
          return callback(error);
        } else {
          return callback(null, response, body);
        }
      });
    }

    function do_process_http_errors (response, body, callback) {
      me.process_http_errors(response, function (error) {
        if (error) {
          return callback(error);
        } else {
          return callback(null, body);
        }
      });
    }

    var tasks = [do_get, do_process_http_errors];

    return async.waterfall(tasks, cb);
  }
};

module.exports = searchable;
