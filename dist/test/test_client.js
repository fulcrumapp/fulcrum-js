"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const fetcher_1 = __importDefault(require("../src/fetcher"));
const client_1 = __importDefault(require("./client"));
describe('Client', () => {
    describe('.api instanceof', () => {
        it('#api should be an instance of Fetcher.', () => {
            assert_1.default.ok(client_1.default.api instanceof fetcher_1.default);
        });
    });
    describe('forms', () => {
        it('should have all properties', () => {
            (0, assert_1.default)('forms' in client_1.default);
            (0, assert_1.default)('find' in client_1.default.forms);
            (0, assert_1.default)('all' in client_1.default.forms);
            (0, assert_1.default)('create' in client_1.default.forms);
            (0, assert_1.default)('update' in client_1.default.forms);
            (0, assert_1.default)('delete' in client_1.default.forms);
            (0, assert_1.default)('history' in client_1.default.forms);
        });
    });
    describe('records', () => {
        it('should have all properties', () => {
            (0, assert_1.default)('records' in client_1.default);
            (0, assert_1.default)('find' in client_1.default.records);
            (0, assert_1.default)('all' in client_1.default.records);
            (0, assert_1.default)('create' in client_1.default.records);
            (0, assert_1.default)('update' in client_1.default.records);
            (0, assert_1.default)('delete' in client_1.default.records);
            (0, assert_1.default)('history' in client_1.default.records);
        });
    });
    describe('changesets', () => {
        it('should have all properties', () => {
            (0, assert_1.default)('changesets' in client_1.default);
            (0, assert_1.default)('find' in client_1.default.changesets);
            (0, assert_1.default)('all' in client_1.default.changesets);
            (0, assert_1.default)('create' in client_1.default.changesets);
            (0, assert_1.default)('update' in client_1.default.changesets);
            (0, assert_1.default)('close' in client_1.default.changesets);
        });
    });
    describe('choiceLists', () => {
        it('should have all properties', () => {
            (0, assert_1.default)('choiceLists' in client_1.default);
            (0, assert_1.default)('find' in client_1.default.choiceLists);
            (0, assert_1.default)('all' in client_1.default.choiceLists);
            (0, assert_1.default)('create' in client_1.default.choiceLists);
            (0, assert_1.default)('update' in client_1.default.choiceLists);
            (0, assert_1.default)('delete' in client_1.default.choiceLists);
        });
    });
    describe('classificationSets', () => {
        it('should have all properties', () => {
            (0, assert_1.default)('classificationSets' in client_1.default);
            (0, assert_1.default)('find' in client_1.default.classificationSets);
            (0, assert_1.default)('all' in client_1.default.classificationSets);
            (0, assert_1.default)('create' in client_1.default.classificationSets);
            (0, assert_1.default)('update' in client_1.default.classificationSets);
            (0, assert_1.default)('delete' in client_1.default.classificationSets);
        });
    });
    describe('authorizations', () => {
        it('should have all properties', () => {
            (0, assert_1.default)('authorizations' in client_1.default);
            (0, assert_1.default)('find' in client_1.default.authorizations);
            (0, assert_1.default)('all' in client_1.default.authorizations);
            (0, assert_1.default)('create' in client_1.default.authorizations);
            (0, assert_1.default)('update' in client_1.default.authorizations);
            (0, assert_1.default)('delete' in client_1.default.authorizations);
            (0, assert_1.default)('regenerate' in client_1.default.authorizations);
        });
    });
    describe('memberships', () => {
        it('should have all properties', () => {
            (0, assert_1.default)('memberships' in client_1.default);
            (0, assert_1.default)('find' in client_1.default.memberships);
            (0, assert_1.default)('all' in client_1.default.memberships);
            (0, assert_1.default)('change' in client_1.default.memberships);
        });
    });
    describe('projects', () => {
        it('should have all properties', () => {
            (0, assert_1.default)('projects' in client_1.default);
            (0, assert_1.default)('find' in client_1.default.projects);
            (0, assert_1.default)('all' in client_1.default.projects);
            (0, assert_1.default)('create' in client_1.default.projects);
            (0, assert_1.default)('update' in client_1.default.projects);
            (0, assert_1.default)('delete' in client_1.default.projects);
        });
    });
    describe('layers', () => {
        it('should have all properties', () => {
            (0, assert_1.default)('layers' in client_1.default);
            (0, assert_1.default)('find' in client_1.default.layers);
            (0, assert_1.default)('all' in client_1.default.layers);
            (0, assert_1.default)('create' in client_1.default.layers);
            (0, assert_1.default)('update' in client_1.default.layers);
            (0, assert_1.default)('delete' in client_1.default.layers);
        });
    });
    describe('photos', () => {
        it('should have all properties', () => {
            (0, assert_1.default)('photos' in client_1.default);
            (0, assert_1.default)('find' in client_1.default.photos);
            (0, assert_1.default)('all' in client_1.default.photos);
            (0, assert_1.default)('create' in client_1.default.photos);
            (0, assert_1.default)('media' in client_1.default.photos);
        });
    });
    describe('signatures', () => {
        it('should have all properties', () => {
            (0, assert_1.default)('signatures' in client_1.default);
            (0, assert_1.default)('find' in client_1.default.signatures);
            (0, assert_1.default)('all' in client_1.default.signatures);
            (0, assert_1.default)('create' in client_1.default.signatures);
            (0, assert_1.default)('media' in client_1.default.signatures);
        });
    });
    describe('videos', () => {
        it('should have all properties', () => {
            (0, assert_1.default)('videos' in client_1.default);
            (0, assert_1.default)('find' in client_1.default.videos);
            (0, assert_1.default)('all' in client_1.default.videos);
            (0, assert_1.default)('create' in client_1.default.videos);
            (0, assert_1.default)('media' in client_1.default.videos);
            (0, assert_1.default)('uploadTrack' in client_1.default.videos);
            (0, assert_1.default)('track' in client_1.default.videos);
        });
    });
    describe('audio', () => {
        it('should have all properties', () => {
            (0, assert_1.default)('audio' in client_1.default);
            (0, assert_1.default)('find' in client_1.default.audio);
            (0, assert_1.default)('all' in client_1.default.audio);
            (0, assert_1.default)('create' in client_1.default.audio);
            (0, assert_1.default)('media' in client_1.default.audio);
            (0, assert_1.default)('uploadTrack' in client_1.default.audio);
            (0, assert_1.default)('track' in client_1.default.audio);
        });
    });
    describe('roles', () => {
        it('should have all properties', () => {
            (0, assert_1.default)('roles' in client_1.default);
            (0, assert_1.default)('all' in client_1.default.roles);
        });
    });
    describe('webhooks', () => {
        it('should have all properties', () => {
            (0, assert_1.default)('webhooks' in client_1.default);
            (0, assert_1.default)('find' in client_1.default.webhooks);
            (0, assert_1.default)('all' in client_1.default.webhooks);
            (0, assert_1.default)('create' in client_1.default.webhooks);
            (0, assert_1.default)('update' in client_1.default.webhooks);
            (0, assert_1.default)('delete' in client_1.default.webhooks);
        });
    });
    describe('auditLogs', () => {
        it('should have all properties', () => {
            (0, assert_1.default)('auditLogs' in client_1.default);
            (0, assert_1.default)('find' in client_1.default.auditLogs);
            (0, assert_1.default)('all' in client_1.default.auditLogs);
        });
    });
    describe('query', () => {
        it('should have query', () => {
            (0, assert_1.default)('query' in client_1.default);
        });
    });
});
//# sourceMappingURL=test_client.js.map