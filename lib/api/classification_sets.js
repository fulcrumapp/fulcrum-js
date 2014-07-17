var Base, ClassificationSets, mixins,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

mixins = require('./mixins/');

Base = require('./base');

ClassificationSets = (function(_super) {
  __extends(ClassificationSets, _super);

  function ClassificationSets() {
    return ClassificationSets.__super__.constructor.apply(this, arguments);
  }

  ClassificationSets.prototype.resource = 'classification_sets';

  ClassificationSets.include(mixins.findable);

  ClassificationSets.include(mixins.searchable);

  ClassificationSets.include(mixins.deletable);

  ClassificationSets.include(mixins.creatable);

  ClassificationSets.include(mixins.updatable);

  return ClassificationSets;

})(Base);

module.exports = ClassificationSets;
