var _ = require('lodash');

var mixins = require('./mixins/');
var Base = require('./base');

function Layers() {
  Base.apply(this, arguments);
}

Layers.prototype = Object.create(Base.prototype);
Layers.prototype.constructor = Layers;

Layers.prototype.resource = 'layers';

_.extend(Layers.prototype,
  mixins.findable,
  mixins.searchable,
  mixins.deletable,
  mixins.creatable,
  mixins.updatable);

module.exports = Layers;
