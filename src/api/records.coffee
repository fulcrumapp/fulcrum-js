mixins = require './mixins/'
Base = require './base'

class Records extends Base
  resource: 'records'
  @include mixins.findable
  @include mixins.searchable
  @include mixins.deletable
  @include mixins.creatable
  @include mixins.updatable

module.exports = Records
