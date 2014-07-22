async = require 'async'

mixins = require './mixins/'
Base = require './base'

class Records extends Base
  resource: 'records'
  @include mixins.findable
  @include mixins.searchable
  @include mixins.deletable
  @include mixins.creatable
  @include mixins.updatable

  # A special method for a special endpoint
  history: (id, cb) ->
    do_get = (callback) =>
      @request 'get', @url(id) + '/history', null, (error, response, body) =>
        if error
          callback error
        else
          callback null, response, body
    do_process_http_errors = (response, body, callback) =>
      @process_http_errors response, (error) ->
        if error
          callback error
        else
          callback null, body
    tasks = [do_get, do_process_http_errors]
    async.waterfall tasks, cb

module.exports = Records
