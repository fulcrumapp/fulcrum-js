import Client from "../client";
declare const query: (client: Client) => (sql: string, format?: string) => Promise<any>;
export default query;
