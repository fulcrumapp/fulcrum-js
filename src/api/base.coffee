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

  singular_resource: ->
    @resource.slice(0, @resource.length - 1)

  request: (method, url, opts, cb) ->
    headers =
      'X-ApiToken'  : @client.api_token
      'Accept'      : 'application/json'
    options =
      'headers'     : headers
      'method'      : method
      'url'         : url
      'json'        : true

    options.qs    = opts.qs   if opts and opts.qs
    options.json  = opts.data if opts and opts.data

    request options, cb

  get: (id, qs, cb) ->
    if qs
      options =
        qs: qs
    else
      options = null
    @request 'get', @url(id), options, cb

  del: (id, cb) ->
    @request 'delete', @url(id), null, cb

  post: (data, cb) ->
    options =
      data: data
    @request 'post', @url(), options, cb

  put: (id, data, cb) ->
    options =
      data: data
    @request 'put', @url(id), options, cb

  process_http_errors: (response, cb) ->
    status_code = response.statusCode
    if 299 >= status_code >= 200
      cb null
    else
      if status_code of errors
        message = errors[status_code]
      else
        message = 'Unknown Error'
      cb(new Error(message))

  process_object: (object, cb) ->
    try
      obj = object[@singular_resource()]
    catch e
      cb e
      return
    cb null, obj

  process_objects: (objects, cb) ->
    try
      objs = objects[@resource]
    catch e
      cb e
      return
    cb null, objs

module.exports = Base
