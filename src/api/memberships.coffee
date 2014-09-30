mixins = require './mixins/'
Base = require './base'

class Memberships extends Base
  resource: 'memberships'
  @include mixins.searchable

module.exports = Memberships
