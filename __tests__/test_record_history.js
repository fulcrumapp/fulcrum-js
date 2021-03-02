import * as nock from "nock";
import * as path from "path";

import { Page } from "../";
import client from "./client";

describe("Record History", () => {
  describe("#history()", () => {
    it("should return record history.", async () => {
      nock("https://api.fulcrumapp.com")
        .get("/api/v2/records/beef678b-fb89-4b15-9ee7-1f8be3e2abe7/history")
        .replyWithFile(201, path.join(__dirname, "objects/record_history.json"), {
          "Content-Type": "application/json",
        });

      const recordHistory = await client.records.history("beef678b-fb89-4b15-9ee7-1f8be3e2abe7");

      expect(recordHistory instanceof Page).toBe(true); // recordHistory is not a Page.
      expect(recordHistory.objects[0].history_change_type).toBe("c");
      expect(recordHistory.objects[1].history_change_type).toBe("u");
    });
  });
});
