var Base, Roles, mixins,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

mixins = require('./mixins/');

Base = require('./base');

Roles = (function(_super) {
  __extends(Roles, _super);

  function Roles() {
    return Roles.__super__.constructor.apply(this, arguments);
  }

  Roles.prototype.resource = 'roles';

  Roles.include(mixins.searchable);

  return Roles;

})(Base);

module.exports = Roles;
