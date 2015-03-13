var _ = require('lodash');

var mixins = require('./mixins/');
var Base = require('./base');

function Webhooks() {
  Base.apply(this, arguments);
}

Webhooks.prototype = Object.create(Base.prototype);
Webhooks.prototype.constructor = Webhooks;

Webhooks.prototype.resource = 'webhooks';

_.extend(Webhooks.prototype,
  mixins.findable,
  mixins.searchable,
  mixins.deletable,
  mixins.creatable,
  mixins.updatable);

module.exports = Webhooks;