var _ = require('lodash');

var mixins = require('./mixins/');
var Base = require('./base');

function ChoiceLists() {
  Base.apply(this, arguments);
}

ChoiceLists.prototype = Object.create(Base.prototype);
ChoiceLists.prototype.constructor = ChoiceLists;

ChoiceLists.prototype.resource = 'choice_lists';

_.extend(ChoiceLists.prototype,
  mixins.findable,
  mixins.searchable,
  mixins.deletable,
  mixins.creatable,
  mixins.updatable);

module.exports = ChoiceLists;
