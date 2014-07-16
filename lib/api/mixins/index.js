var creatable, deletable, findable, searchable;

searchable = require('./searchable');

findable = require('./findable');

deletable = require('./deletable');

creatable = require('./creatable');

module.exports = {
  searchable: searchable,
  findable: findable,
  deletable: deletable,
  creatable: creatable
};
