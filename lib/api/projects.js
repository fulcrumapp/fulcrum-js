var _ = require('lodash');

var mixins = require('./mixins/');
var Base = require('./base');

function Projects() {
  Base.apply(this, arguments);
}

Projects.prototype = Object.create(Base.prototype);
Projects.prototype.constructor = Projects;

Projects.prototype.resource = 'projects';

_.extend(Projects.prototype, mixins.searchable);

module.exports = Projects;
