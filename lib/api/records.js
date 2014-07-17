var Base, Records, mixins,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

mixins = require('./mixins/');

Base = require('./base');

Records = (function(_super) {
  __extends(Records, _super);

  function Records() {
    return Records.__super__.constructor.apply(this, arguments);
  }

  Records.prototype.resource = 'records';

  Records.include(mixins.findable);

  Records.include(mixins.searchable);

  Records.include(mixins.deletable);

  Records.include(mixins.creatable);

  Records.include(mixins.updatable);

  return Records;

})(Base);

module.exports = Records;
