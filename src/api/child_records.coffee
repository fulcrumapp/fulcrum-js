async = require 'async'

mixins = require './mixins/'
Base = require './base'

class ChildRecords extends Base
  resource: 'child_records'
  @include mixins.searchable

module.exports = ChildRecords
