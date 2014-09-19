var Base, Videos, mixins,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

mixins = require('./mixins/');

Base = require('./base');

Videos = (function(_super) {
  __extends(Videos, _super);

  function Videos() {
    return Videos.__super__.constructor.apply(this, arguments);
  }

  Videos.prototype.resource = 'videos';

  Videos.include(mixins.findable);

  Videos.include(mixins.searchable);

  return Videos;

})(Base);

module.exports = Videos;
