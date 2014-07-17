mixins = require './mixins/'
Base = require './base'

class Projects extends Base
  resource: 'projects'
  @include mixins.searchable

module.exports = Projects
