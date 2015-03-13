var _ = require('lodash');

var mixins = require('./mixins/');
var Base = require('./base');

function ClassificationSets() {
  Base.apply(this, arguments);
}

ClassificationSets.prototype = Object.create(Base.prototype);
ClassificationSets.prototype.constructor = ClassificationSets;

ClassificationSets.prototype.resource = 'classification_sets';

_.extend(ClassificationSets.prototype,
  mixins.findable,
  mixins.searchable,
  mixins.deletable,
  mixins.creatable,
  mixins.updatable);

module.exports = ClassificationSets;
