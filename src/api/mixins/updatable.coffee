async = require('async')

updatable =
  update: (id, data, cb) ->
    do_put = (callback) =>
      @put id, data, (error, response, body) =>
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
    do_process_object = (body, callback) =>
      @process_object body, (error, object) ->
        if error
          callback error
        else
          callback null, object
    tasks = [do_put, do_process_http_errors, do_process_object]
    async.waterfall tasks, cb

module.exports = updatable
