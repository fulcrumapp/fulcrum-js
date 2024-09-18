"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const query = (client) => {
    return (sql, format = 'json') => {
        const options = {
            body: {
                q: sql,
                format
            }
        };
        return client.api.post('query', options);
    };
};
exports.default = query;
//# sourceMappingURL=query.js.map