var Base, Memberships, mixins,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

mixins = require('./mixins/');

Base = require('./base');

Memberships = (function(_super) {
  __extends(Memberships, _super);

  function Memberships() {
    return Memberships.__super__.constructor.apply(this, arguments);
  }

  Memberships.prototype.resource = 'memberships';

  Memberships.include(mixins.searchable);

  return Memberships;

})(Base);

module.exports = Memberships;
