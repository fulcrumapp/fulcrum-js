var _ = require('lodash');

var mixins = require('./mixins/');
var Base = require('./base');

function Signatures () {
  Base.apply(this, arguments);
}

Signatures.prototype = Object.create(Base.prototype);
Signatures.prototype.constructor = Signatures;

Signatures.prototype.resource = 'signatures';

_.extend(Signatures.prototype,
  mixins.findable,
  mixins.searchable);

module.exports = Signatures;
