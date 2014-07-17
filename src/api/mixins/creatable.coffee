async = require('async')

creatable =
  create: (data, cb) ->
    do_post = (callback) =>
      @post data, (error, response, body) =>
        if error
          callback error
        else
          callback null, response, body
    do_process_http_errors = (response, body, callback) =>
      @process_http_errors response, (error) =>
        if error
          callback error
        else
          callback null, body
    tasks = [do_post, do_process_http_errors]
    async.waterfall tasks, cb

module.exports = creatable
