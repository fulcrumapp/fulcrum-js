request = require 'request'
errors = require './errors'

moduleKeywords = ['extended', 'included']

class Extendable
  @extend: (obj) ->
    for key, value of obj when key not in moduleKeywords
      @[key] = value

    obj.extended?.apply(@)
    this

  @include: (obj) ->
    for key, value of obj when key not in moduleKeywords
      # Assign properties to the prototype
      @::[key] = value

    obj.included?.apply(@)
    this

class Base extends Extendable
  base: 'https://api.fulcrumapp.com/api/v2/'

  constructor: (@client) ->

  url: (id) ->
    path = if id
      @resource + '/' + id
    else
      @resource

    @base + path

  request: (method, url, cb, data) ->
    headers =
      'X-ApiToken'  : @client.api_token
      'Accept'      : 'application/json'
    options =
      'headers'     : headers
      'method'      : method
      'url'         : url
      'json'        : true

    request options, cb

  get: (id, cb) ->
    @request 'get', @url(id), cb

  del: (id, cb) ->
    @request 'delete', @url(id), cb

  process_http_errors: (response, cb) ->
    status_code = response.statusCode
    console.log 'Status: ', status_code
    if 299 >= status_code >= 200
      cb null
    else
      if status_code of errors
        message = errors[status_code]
      else
        message = 'Unknown Error'
      cb(new Error(message))

module.exports = Base
