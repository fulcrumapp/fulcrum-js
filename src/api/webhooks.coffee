mixins = require './mixins/'
Base = require './base'

class Webhooks extends Base
  resource: 'webhooks'
  @include mixins.findable
  @include mixins.searchable
  @include mixins.deletable
  @include mixins.creatable
  @include mixins.updatable

module.exports = Webhooks
