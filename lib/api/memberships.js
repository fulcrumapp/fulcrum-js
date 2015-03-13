var _ = require('lodash');

var mixins = require('./mixins/');
var Base = require('./base');

function Memberships() {
  Base.apply(this, arguments);
}

Memberships.prototype = Object.create(Base.prototype);
Memberships.prototype.constructor = Memberships;

Memberships.prototype.resource = 'memberships';

_.extend(Memberships.prototype, mixins.searchable);

module.exports = Memberships;
