mixins = require './mixins/'
Base = require './base'

class Photos extends Base
  resource: 'photos'
  @include mixins.findable
  @include mixins.searchable

module.exports = Photos
