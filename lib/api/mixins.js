var deletable, findable, searchable;

findable = {
  find: function(id, cb) {
    return this.get(id, (function(_this) {
      return function(error, response, body) {
        if (error) {
          return cb(error, body);
        } else {
          return _this.process_http_errors(response, function(error) {
            if (error) {
              return cb(error);
            } else {
              return _this.process_object(body, function(error, object) {
                return cb(error, object);
              });
            }
          });
        }
      };
    })(this));
  }
};

searchable = {
  search: function(opts, cb) {
    return console.log("Searchings with " + opts);
  }
};

deletable = {
  "delete": function(id, cb) {
    return this.del(id, (function(_this) {
      return function(error, response, body) {
        if (error) {
          return cb(error);
        } else {
          return _this.process_http_errors(response, function(error) {
            return cb(error);
          });
        }
      };
    })(this));
  }
};

module.exports = {
  findable: findable,
  searchable: searchable,
  deletable: deletable
};
