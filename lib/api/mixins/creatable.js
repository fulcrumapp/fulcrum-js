var async = require('async');

var creatable = {
  create: function(data, cb) {
    var me = this;

    function do_post (callback) {
      me.post(data, function (error, response, body) {
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

    var tasks = [do_post, do_process_http_errors];

    async.waterfall(tasks, cb);
  }
};

module.exports = creatable;
