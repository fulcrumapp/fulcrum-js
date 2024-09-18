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
export default query;
//# sourceMappingURL=query.js.map