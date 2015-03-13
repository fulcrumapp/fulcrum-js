var _ = require('lodash');

var mixins = require('./mixins/');
var Base = require('./base');

function Roles() {
  Base.apply(this, arguments);
}

Roles.prototype = Object.create(Base.prototype);
Roles.prototype.constructor = Roles;

Roles.prototype.resource = 'roles';

_.extend(Roles.prototype, mixins.searchable);

module.exports = Roles;
