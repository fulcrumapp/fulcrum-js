resources =
  records             : require './api/records'
  changesets          : require './api/changesets'
  forms               : require './api/forms'
  projects            : require './api/projects'
  webhooks            : require './api/webhooks'
  choice_lists        : require './api/choice_lists'
  classification_sets : require './api/classification_sets'
  photos              : require './api/photos'

class Fulcrum
  constructor: (options)->
    @api_key = options.api_key
    @url     = options.url || 'https://api.fulcrumapp.com/api/v2/'

    for name, klass of resources
      @[name] = new klass(@)

module.exports = Fulcrum
