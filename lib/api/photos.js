var _ = require('lodash');

var mixins = require('./mixins/');
var Base = require('./base');

function Photos() {
  Base.apply(this, arguments);
}

Photos.prototype = Object.create(Base.prototype);
Photos.prototype.constructor = Photos;

Photos.prototype.resource = 'photos';

_.extend(Photos.prototype,
  mixins.findable,
  mixins.searchable);

module.exports = Photos;
