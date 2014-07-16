async = require('async')

deletable =
  delete: (id, cb) ->
    do_delete = (callback) =>
      @del id, (error, response, body) =>
        if error
          callback error
        else
          callback null, response, body
    do_process_http_errors = (response, body, callback) =>
      @process_http_errors response, (error) ->
        if error
          callback error
        else
          callback null
    tasks = [do_delete, do_process_http_errors]
    async.waterfall tasks, cb

module.exports = deletable
