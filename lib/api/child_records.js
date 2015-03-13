var _ = require('lodash');

var mixins = require('./mixins/');
var Base = require('./base');

function ChildRecords() {
  Base.apply(this, arguments);
}

ChildRecords.prototype = Object.create(Base.prototype);
ChildRecords.prototype.constructor = ChildRecords;

ChildRecords.prototype.resource = 'child_records';

_.extend(ChildRecords.prototype, mixins.searchable);

module.exports = ChildRecords;
