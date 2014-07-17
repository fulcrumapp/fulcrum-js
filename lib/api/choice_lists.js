var Base, ChoiceLists, mixins,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

mixins = require('./mixins/');

Base = require('./base');

ChoiceLists = (function(_super) {
  __extends(ChoiceLists, _super);

  function ChoiceLists() {
    return ChoiceLists.__super__.constructor.apply(this, arguments);
  }

  ChoiceLists.prototype.resource = 'choice_lists';

  ChoiceLists.include(mixins.findable);

  ChoiceLists.include(mixins.searchable);

  ChoiceLists.include(mixins.deletable);

  ChoiceLists.include(mixins.creatable);

  ChoiceLists.include(mixins.updatable);

  return ChoiceLists;

})(Base);

module.exports = ChoiceLists;
