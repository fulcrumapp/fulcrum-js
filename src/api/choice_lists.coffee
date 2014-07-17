mixins = require './mixins/'
Base = require './base'

class ChoiceLists extends Base
  resource: 'choice_lists'
  @include mixins.findable
  @include mixins.searchable
  @include mixins.deletable
  @include mixins.creatable
  @include mixins.updatable

module.exports = ChoiceLists
