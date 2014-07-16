var deletable, findable, searchable;

searchable = require('./searchable');

findable = require('./findable');

deletable = require('./deletable');

module.exports = {
  searchable: searchable,
  findable: findable,
  deletable: deletable
};
