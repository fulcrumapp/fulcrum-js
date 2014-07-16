async = require 'async'

findable =
  find: (id, cb) ->
    do_get = (callback) =>
      @get id, null, (error, response, body) =>
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
    tasks = [do_get, do_process_http_errors, do_process_object]
    async.waterfall tasks, cb

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

module.exports =
  findable    : findable
  searchable  : searchable
  deletable   : deletable
