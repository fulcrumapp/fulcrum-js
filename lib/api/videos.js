var _ = require('lodash');

var mixins = require('./mixins/');
var Base = require('./base');

function Videos() {
  Base.apply(this, arguments);
}

Videos.prototype = Object.create(Base.prototype);
Videos.prototype.constructor = Videos;

Videos.prototype.resource = 'videos';

_.extend(Videos.prototype,
  mixins.findable,
  mixins.searchable);

module.exports = Videos;
