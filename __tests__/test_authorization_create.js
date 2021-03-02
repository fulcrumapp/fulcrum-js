import * as nock from "nock";
import * as path from "path";

import client from "./client";

describe("Authorization Methods", () => {
  describe("#create()", () => {
    it("should create an authorization.", async () => {
      nock("https://api.fulcrumapp.com")
        .post("/api/v2/authorizations")
        .replyWithFile(201, path.join(__dirname, "objects/authorization.json"), { "Content-Type": "application/json" });

      const authorizationObj = {
        organization_id: "abc123",
        note: "Hello",
        timeout: 60 * 60 * 4,
      };

      const authorization = await client.authorizations.create(authorizationObj, "elf@northpole.com", "password");

      expect(authorization.id).toBe("27c2ab46-91db-4937-a4e8-5adcc0aaf20a", "authorization.id is incorrect.");
      expect(authorization.note).toBe("What up", "authorization.note is incorrect.");
      expect(authorization.timeout).toBe(14400, "authorization.timeout is incorrect.");
    });
  });
});
