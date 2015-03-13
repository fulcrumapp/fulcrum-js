var async = require('async');

var deletable = {
  "delete": function(id, cb) {
    var me = this;

    function do_delete (callback) {
      me.del(id, function (error, response, body) {
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
          callback(null);
        }
      });
    }

    var tasks = [do_delete, do_process_http_errors];

    async.waterfall(tasks, cb);
  }
};

module.exports = deletable;
