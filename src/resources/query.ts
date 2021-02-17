import Client from "../client";

const query = (client: Client) => {
  return (sql: string, format: string = "json") => {
    const options = {
      body: {
        q: sql,
        format,
      },
    };

    return client.api.post("query", options);
  };
};

export default query;
