import * as nock from "nock";
import * as path from "path";
import client from "./client";
import { Page } from "../dist";

describe("Audit Log Methods", () => {
  describe("#find()", () => {
    it("should return an audit log.", async () => {
      nock("https://api.fulcrumapp.com")
        .get("/api/v2/audit_logs/aaa058ef-d7e5-44df-a3df-8fc53ffab3e0")
        .replyWithFile(200, path.join(__dirname, "objects/auditLog.json"), { "Content-Type": "application/json" });
      console.log(client._auditLogs);
      const auditLog = await client.auditLogs.find("aaa058ef-d7e5-44df-a3df-8fc53ffab3e0");

      expect(auditLog.id).toBe("aaa058ef-d7e5-44df-a3df-8fc53ffab3e0", "auditLog.id is incorrect.");
      expect(auditLog.actor).toBe("Maryam Larson", "auditLog.actor is incorrect.");
    });
  });

  describe("#all()", () => {
    it("should return a Page of audit logs.", async () => {
      nock("https://api.fulcrumapp.com")
        .get("/api/v2/audit_logs?per_page=1000")
        .replyWithFile(200, path.join(__dirname, "objects/auditLogs.json"), { "Content-Type": "application/json" });

      const auditLogs = await client.auditLogs.all(null);

      expect(auditLogs instanceof Page).toBe(true); //auditLogs is not a Page.
      expect(auditLogs.objects.length).toBe(2);
      expect(auditLogs.currentPage).toBe(1);
      expect(auditLogs.totalPages).toBe(1);
      expect(auditLogs.totalCount).toBe(2);
      expect(auditLogs.perPage).toBe(20000);
    });
  });
});
