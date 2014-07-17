mixins = require './mixins/'
Base = require './base'

class ClassificationSets extends Base
  resource: 'classification_sets'
  @include mixins.findable
  @include mixins.searchable
  @include mixins.deletable
  @include mixins.creatable
  @include mixins.updatable

module.exports = ClassificationSets
