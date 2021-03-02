import * as nock from "nock";
import * as path from "path";

import client from "./client";

describe("Query", () => {
  describe("#query()", () => {
    it("should return CSV.", async () => {
      nock("https://api.fulcrumapp.com")
        .post("/api/v2/query")
        .replyWithFile(200, path.join(__dirname, "objects/query.csv"), { "Content-Type": "text/plain" });

      const csv = await client.query("SELECT * FROM Expenses LIMIT 1;", "csv");
      const partialHeader = "_record_id,_project_id,_assigned_to_id";
      expect(csv.indexOf(partialHeader) > -1).toBe(true);
    });

    it("should return GeoJSON.", async () => {
      nock("https://api.fulcrumapp.com")
        .post("/api/v2/query")
        .replyWithFile(200, path.join(__dirname, "objects/query.geojson"), { "Content-Type": "application/json" });

      const geojson = await client.query("SELECT * FROM Expenses LIMIT 1;", "geojson");
      expect(geojson.features.length).toBe(1);
    });
  });
});
