var Base, Webhooks, mixins,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

mixins = require('./mixins/');

Base = require('./base');

Webhooks = (function(_super) {
  __extends(Webhooks, _super);

  function Webhooks() {
    return Webhooks.__super__.constructor.apply(this, arguments);
  }

  Webhooks.prototype.resource = 'webhooks';

  Webhooks.include(mixins.findable);

  Webhooks.include(mixins.searchable);

  Webhooks.include(mixins.deletable);

  Webhooks.include(mixins.creatable);

  Webhooks.include(mixins.updatable);

  return Webhooks;

})(Base);

module.exports = Webhooks;
