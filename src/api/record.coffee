mixins = require './mixins'
Base = require './base'

class Record extends Base
  resource: 'records'
  @include mixins.findable
  @include mixins.searchable
  @include mixins.deletable

module.exports = Record
