var Base, Forms, mixins,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

mixins = require('./mixins/');

Base = require('./base');

Forms = (function(_super) {
  __extends(Forms, _super);

  function Forms() {
    return Forms.__super__.constructor.apply(this, arguments);
  }

  Forms.prototype.resource = 'forms';

  Forms.include(mixins.findable);

  Forms.include(mixins.searchable);

  Forms.include(mixins.deletable);

  Forms.include(mixins.creatable);

  Forms.include(mixins.updatable);

  return Forms;

})(Base);

module.exports = Forms;
