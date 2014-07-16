async = require 'async'

searchable =
  search: (opts, cb) ->
    do_get = (callback) =>
      @get null, opts, (error, response, body) =>
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
    do_process_objects = (body, callback) =>
      @process_objects body, (error, objects) ->
        if error
          callback error
        else
          callback null, objects
    tasks = [do_get, do_process_http_errors, do_process_objects]
    async.waterfall tasks, cb

module.exports = searchable
