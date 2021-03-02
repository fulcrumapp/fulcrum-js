import { Client } from "../dist";

const client = new Client("fake");

describe("client", () => {
  it("should be an instance of Client class", () => {
    expect(client instanceof Client).toBe(true);
  });
});

export default client;
