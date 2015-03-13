var _ = require('lodash');

var mixins = require('./mixins/');
var Base = require('./base');

function Forms() {
  Base.apply(this, arguments);
}

Forms.prototype = Object.create(Base.prototype);
Forms.prototype.constructor = Forms;

Forms.prototype.resource = 'forms';

_.extend(Forms.prototype,
  mixins.findable,
  mixins.searchable,
  mixins.deletable,
  mixins.creatable,
  mixins.updatable);

module.exports = Forms;
