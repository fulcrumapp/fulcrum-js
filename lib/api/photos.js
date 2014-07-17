var Base, Photos, mixins,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

mixins = require('./mixins/');

Base = require('./base');

Photos = (function(_super) {
  __extends(Photos, _super);

  function Photos() {
    return Photos.__super__.constructor.apply(this, arguments);
  }

  Photos.prototype.resource = 'photos';

  Photos.include(mixins.findable);

  Photos.include(mixins.searchable);

  return Photos;

})(Base);

module.exports = Photos;
