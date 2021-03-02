import Fetcher from "../dist/fetcher";
import client from "./client";

describe("Client", () => {
  describe(".api instanceof", () => {
    it("#api should be an instance of Fetcher.", () => {
      expect(client.api instanceof Fetcher).toBe(true);
    });
  });

  describe("forms", () => {
    it("should have all properties", () => {
      expect("forms" in client).toBe(true);
      expect("find" in client.forms).toBe(true);
      expect("all" in client.forms).toBe(true);
      expect("create" in client.forms).toBe(true);
      expect("update" in client.forms).toBe(true);
      expect("delete" in client.forms).toBe(true);
      expect("history" in client.forms).toBe(true);
    });
  });

  describe("records", () => {
    it("should have all properties", () => {
      expect("records" in client).toBe(true);
      expect("find" in client.records).toBe(true);
      expect("all" in client.records).toBe(true);
      expect("create" in client.records).toBe(true);
      expect("update" in client.records).toBe(true);
      expect("delete" in client.records).toBe(true);
      expect("history" in client.records).toBe(true);
    });
  });

  describe("changesets", () => {
    it("should have all properties", () => {
      expect("changesets" in client).toBe(true);
      expect("find" in client.changesets).toBe(true);
      expect("all" in client.changesets).toBe(true);
      expect("create" in client.changesets).toBe(true);
      expect("update" in client.changesets).toBe(true);
      expect("close" in client.changesets).toBe(true);
    });
  });

  describe("choiceLists", () => {
    it("should have all properties", () => {
      expect("choiceLists" in client).toBe(true);
      expect("find" in client.choiceLists).toBe(true);
      expect("all" in client.choiceLists).toBe(true);
      expect("create" in client.choiceLists).toBe(true);
      expect("update" in client.choiceLists).toBe(true);
      expect("delete" in client.choiceLists).toBe(true);
    });
  });

  describe("classificationSets", () => {
    it("should have all properties", () => {
      expect("classificationSets" in client).toBe(true);
      expect("find" in client.classificationSets).toBe(true);
      expect("all" in client.classificationSets).toBe(true);
      expect("create" in client.classificationSets).toBe(true);
      expect("update" in client.classificationSets).toBe(true);
      expect("delete" in client.classificationSets).toBe(true);
    });
  });

  describe("authorizations", () => {
    it("should have all properties", () => {
      expect("authorizations" in client).toBe(true);
      expect("find" in client.authorizations).toBe(true);
      expect("all" in client.authorizations).toBe(true);
      expect("create" in client.authorizations).toBe(true);
      expect("update" in client.authorizations).toBe(true);
      expect("delete" in client.authorizations).toBe(true);
      expect("regenerate" in client.authorizations).toBe(true);
    });
  });

  describe("memberships", () => {
    it("should have all properties", () => {
      expect("memberships" in client).toBe(true);
      expect("find" in client.memberships).toBe(true);
      expect("all" in client.memberships).toBe(true);
      expect("change" in client.memberships).toBe(true);
    });
  });

  describe("projects", () => {
    it("should have all properties", () => {
      expect("projects" in client).toBe(true);
      expect("find" in client.projects).toBe(true);
      expect("all" in client.projects).toBe(true);
      expect("create" in client.projects).toBe(true);
      expect("update" in client.projects).toBe(true);
      expect("delete" in client.projects).toBe(true);
    });
  });

  describe("layers", () => {
    it("should have all properties", () => {
      expect("layers" in client).toBe(true);
      expect("find" in client.layers).toBe(true);
      expect("all" in client.layers).toBe(true);
      expect("create" in client.layers).toBe(true);
      expect("update" in client.layers).toBe(true);
      expect("delete" in client.layers).toBe(true);
    });
  });

  describe("photos", () => {
    it("should have all properties", () => {
      expect("photos" in client).toBe(true);
      expect("find" in client.photos).toBe(true);
      expect("all" in client.photos).toBe(true);
      expect("create" in client.photos).toBe(true);
      expect("media" in client.photos).toBe(true);
    });
  });

  describe("signatures", () => {
    it("should have all properties", () => {
      expect("signatures" in client).toBe(true);
      expect("find" in client.signatures).toBe(true);
      expect("all" in client.signatures).toBe(true);
      expect("create" in client.signatures).toBe(true);
      expect("media" in client.signatures).toBe(true);
    });
  });

  describe("videos", () => {
    it("should have all properties", () => {
      expect("videos" in client).toBe(true);
      expect("find" in client.videos).toBe(true);
      expect("all" in client.videos).toBe(true);
      expect("create" in client.videos).toBe(true);
      expect("media" in client.videos).toBe(true);
      expect("uploadTrack" in client.videos).toBe(true);
      expect("track" in client.videos).toBe(true);
    });
  });

  describe("audio", () => {
    it("should have all properties", () => {
      expect("audio" in client).toBe(true);
      expect("find" in client.audio).toBe(true);
      expect("all" in client.audio).toBe(true);
      expect("create" in client.audio).toBe(true);
      expect("media" in client.audio).toBe(true);
      expect("uploadTrack" in client.audio).toBe(true);
      expect("track" in client.audio).toBe(true);
    });
  });

  describe("roles", () => {
    it("should have all properties", () => {
      expect("roles" in client).toBe(true);
      expect("all" in client.roles).toBe(true);
    });
  });

  describe("webhooks", () => {
    it("should have all properties", () => {
      expect("webhooks" in client).toBe(true);
      expect("find" in client.webhooks).toBe(true);
      expect("all" in client.webhooks).toBe(true);
      expect("create" in client.webhooks).toBe(true);
      expect("update" in client.webhooks).toBe(true);
      expect("delete" in client.webhooks).toBe(true);
    });
  });

  describe("auditLogs", () => {
    it("should have all properties", () => {
      expect("auditLogs" in client).toBe(true);
      expect("find" in client.auditLogs).toBe(true);
      expect("all" in client.auditLogs).toBe(true);
    });
  });

  describe("query", () => {
    it("should have query", () => {
      expect("query" in client).toBe(true);
    });
  });
});
