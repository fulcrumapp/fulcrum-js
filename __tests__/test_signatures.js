import * as nock from "nock";
import * as path from "path";

import client from "./client";
import { Page } from "../";

describe("Signatures", () => {
  describe("#find()", () => {
    it("should return a signature.", async () => {
      nock("https://api.fulcrumapp.com")
        .get("/api/v2/signatures/9855e3f2-85a5-4b9f-9e62-0b1bbcfef091")
        .replyWithFile(200, path.join(__dirname, "objects/signature.json"), { "Content-Type": "application/json" });
      const signature = await client.signatures.find("9855e3f2-85a5-4b9f-9e62-0b1bbcfef091");
      expect(signature.content_type).toBe("image/png");
    });
  });

  describe("#all()", () => {
    it("should return signatures.", async () => {
      nock("https://api.fulcrumapp.com")
        .get("/api/v2/signatures?per_page=1000")
        .replyWithFile(200, path.join(__dirname, "objects/signatures.json"), { "Content-Type": "application/json" });
      const signatures = await client.signatures.all(null);
      expect(signatures instanceof Page).toBe(true); //forms is not a Page.
      expect(signatures.objects.length).toBe(1);
      expect(signatures.currentPage).toBe(1);
      expect(signatures.totalPages).toBe(1);
      expect(signatures.totalCount).toBe(446);
      expect(signatures.perPage).toBe(1000);
    });
  });
});
