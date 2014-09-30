mixins = require './mixins/'
Base = require './base'

class Roles extends Base
  resource: 'roles'
  @include mixins.searchable

module.exports = Roles
