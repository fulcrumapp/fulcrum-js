'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var query = function query(client) {
  return function (sql) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';

    var options = {
      body: {
        sql: sql,
        format: format
      }
    };
    client.api.post('query', options);
  };
};

exports.default = query;
module.exports = exports['default'];
//# sourceMappingURL=query.js.map