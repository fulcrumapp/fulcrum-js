import * as nock from "nock";
import * as path from "path";

import { Page } from "../";
import client from "./client";

describe("Form History", () => {
  describe("#history()", () => {
    it("should return form history.", async () => {
      nock("https://api.fulcrumapp.com")
        .get("/api/v2/forms/58ae9115-0430-459e-a1b7-7ac46011e0ce/history")
        .replyWithFile(201, path.join(__dirname, "objects/form_history.json"), { "Content-Type": "application/json" });

      const formHistory = await client.forms.history("58ae9115-0430-459e-a1b7-7ac46011e0ce");

      expect(formHistory instanceof Page).toBe(true); //formHistory is not a Page.
      expect(formHistory.objects[0].version).toBe(1);
      expect(formHistory.objects[1].version).toBe(2);
    });

    it("should return a single form history.", async () => {
      nock("https://api.fulcrumapp.com")
        .get("/api/v2/forms/58ae9115-0430-459e-a1b7-7ac46011e0ce/history?version=1")
        .replyWithFile(201, path.join(__dirname, "objects/form_history_single_version.json"), {
          "Content-Type": "application/json",
        });

      const formHistory = await client.forms.history("58ae9115-0430-459e-a1b7-7ac46011e0ce", 1);

      expect(formHistory.objects[0].version).toBe(1);
      expect(formHistory.objects.length).toBe(1);
    });
  });
});
