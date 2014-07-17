async = require 'async'

mixins = require './mixins/'
Base = require './base'

class Changeset extends Base
  resource: 'changesets'
  @include mixins.creatable
  @include mixins.findable
  @include mixins.updatable
  @include mixins.searchable

  # A special method for a special endpoint
  close: (id, cb) ->
    do_put = (callback) =>
      @request 'put', @url(id) + '/close', null, (error, response, body) =>
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
    tasks = [do_put, do_process_http_errors]
    async.waterfall tasks, cb

module.exports = Changeset
