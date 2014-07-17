var Base, Projects, mixins,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

mixins = require('./mixins/');

Base = require('./base');

Projects = (function(_super) {
  __extends(Projects, _super);

  function Projects() {
    return Projects.__super__.constructor.apply(this, arguments);
  }

  Projects.prototype.resource = 'projects';

  Projects.include(mixins.searchable);

  return Projects;

})(Base);

module.exports = Projects;
