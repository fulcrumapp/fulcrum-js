"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var query = function (client) {
    return function (sql, format) {
        if (format === void 0) { format = 'json'; }
        var options = {
            body: {
                q: sql,
                format: format
            }
        };
        return client.api.post('query', options);
    };
};
exports.default = query;
//# sourceMappingURL=query.js.map