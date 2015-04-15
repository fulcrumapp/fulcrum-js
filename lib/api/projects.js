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
_.extend(Projects.prototype, mixins.findable);
_.extend(Projects.prototype, mixins.creatable);
_.extend(Projects.prototype, mixins.updatable);
_.extend(Projects.prototype, mixins.deletable);

module.exports = Projects;
