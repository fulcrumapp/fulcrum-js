resources =
  record    : require './api/record'
  changeset : require './api/changeset'

class Fulcrum
  constructor: (options)->
    {@api_token} = options
    for name, klass of resources
      @[name] = new klass(@)

module.exports = Fulcrum
