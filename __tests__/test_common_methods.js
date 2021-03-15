import * as nock from "nock";
import * as path from "path";
import * as fs from "fs";

import client from "./client";
import { Page } from "../";

describe("Common Methods", () => {
  describe("#find()", () => {
    it("should return a form.", async () => {
      nock("https://api.fulcrumapp.com")
        .get("/api/v2/forms/512342b0-2bce-4e31-9d4a-8f29e929f7ac")
        .replyWithFile(200, path.join(__dirname, "objects/form.json"), { "Content-Type": "application/json" });

      const form = await client.forms.find("512342b0-2bce-4e31-9d4a-8f29e929f7ac");
      expect(form.id).toBe("512342b0-2bce-4e31-9d4a-8f29e929f7ac", "form.id is incorrect.");
      expect(form.name).toBe("Hurst Estate", "form.name is incorrect.");
    });
  });

  describe("#all()", () => {
    it("should return a Page of forms.", async () => {
      nock("https://api.fulcrumapp.com")
        .get("/api/v2/forms?per_page=1000")
        .replyWithFile(200, path.join(__dirname, "objects/forms.json"), { "Content-Type": "application/json" });

      const forms = await client.forms.all(null);

      expect(forms instanceof Page).toBe(true); //forms is not a Page.
      expect(forms.objects.length).toBe(2);
      expect(forms.currentPage).toBe(1);
      expect(forms.totalPages).toBe(1);
      expect(forms.totalCount).toBe(2);
      expect(forms.perPage).toBe(1000);
    });
  });

  describe("#create()", () => {
    it("should create a form.", async () => {
      const formObj = JSON.parse(fs.readFileSync(path.join(__dirname, "objects/form.json")));

      const formToPost = formObj.form;

      nock("https://api.fulcrumapp.com")
        .post("/api/v2/forms", formObj)
        .replyWithFile(201, path.join(__dirname, "objects/form.json"), { "Content-Type": "application/json" });

      const form = await client.forms.create(formToPost);

      expect(form.id).toBe("512342b0-2bce-4e31-9d4a-8f29e929f7ac", "form.id is incorrect.");
      expect(form.name).toBe("Hurst Estate", "form.name is incorrect.");
    });
  });

  describe("#update()", () => {
    it("should update a form.", async () => {
      const formObj = JSON.parse(fs.readFileSync(path.join(__dirname, "objects/form.json")));

      const formToPost = formObj.form;

      nock("https://api.fulcrumapp.com")
        .put(`/api/v2/forms/${formToPost.id}`, formObj)
        .replyWithFile(201, path.join(__dirname, "objects/form.json"), { "Content-Type": "application/json" });

      const form = await client.forms.update(formToPost.id, formToPost);

      expect(form.id).toBe("512342b0-2bce-4e31-9d4a-8f29e929f7ac", "form.id is incorrect.");
      expect(form.name).toBe("Hurst Estate", "form.name is incorrect.");
    });
  });

  describe("#delete()", () => {
    it("should delete a form.", async () => {
      nock("https://api.fulcrumapp.com")
        .delete("/api/v2/forms/abc123")
        .replyWithFile(201, path.join(__dirname, "objects/form.json"), { "Content-Type": "application/json" });

      const form = await client.forms.delete("abc123");

      expect(form.id).toBe("512342b0-2bce-4e31-9d4a-8f29e929f7ac", "form.id is incorrect.");
      expect(form.name).toBe("Hurst Estate", "form.name is incorrect.");
    });
  });
});
