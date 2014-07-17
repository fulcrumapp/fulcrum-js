resources =
  records    : require './api/records'
  changesets : require './api/changesets'
  forms      : require './api/forms'
  projects   : require './api/projects'
  webhooks   : require './api/webhooks'

class Fulcrum
  constructor: (options)->
    {@api_token} = options
    for name, klass of resources
      @[name] = new klass(@)

module.exports = Fulcrum
