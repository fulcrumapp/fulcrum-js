var Base, ChildRecords, async, mixins,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

async = require('async');

mixins = require('./mixins/');

Base = require('./base');

ChildRecords = (function(_super) {
  __extends(ChildRecords, _super);

  function ChildRecords() {
    return ChildRecords.__super__.constructor.apply(this, arguments);
  }

  ChildRecords.prototype.resource = 'child_records';

  ChildRecords.include(mixins.searchable);

  return ChildRecords;

})(Base);

module.exports = ChildRecords;
