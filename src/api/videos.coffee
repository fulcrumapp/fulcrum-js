mixins = require './mixins/'
Base = require './base'

class Videos extends Base
  resource: 'videos'
  @include mixins.findable
  @include mixins.searchable

module.exports = Videos
