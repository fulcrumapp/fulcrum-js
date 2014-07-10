var Base, Record, mixins,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

mixins = require('./mixins');

Base = require('./base');

Record = (function(_super) {
  __extends(Record, _super);

  function Record() {
    return Record.__super__.constructor.apply(this, arguments);
  }

  Record.prototype.resource = 'records';

  Record.include(mixins.findable);

  Record.include(mixins.searchable);

  Record.include(mixins.deletable);

  return Record;

})(Base);

module.exports = Record;
