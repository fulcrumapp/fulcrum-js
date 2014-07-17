mixins = require './mixins/'
Base = require './base'

class Forms extends Base
  resource: 'forms'
  @include mixins.findable
  @include mixins.searchable
  @include mixins.deletable
  @include mixins.creatable
  @include mixins.updatable

module.exports = Forms
