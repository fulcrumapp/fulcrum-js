"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = exports.Client = void 0;
exports.getUser = getUser;
exports.createAuthorization = createAuthorization;
const base_64_1 = __importDefault(require("base-64"));
const fetcher_1 = __importDefault(require("./fetcher"));
const client_1 = __importDefault(require("./client"));
exports.Client = client_1.default;
const page_1 = __importDefault(require("./page"));
exports.Page = page_1.default;
const api = new fetcher_1.default({
    baseURI: 'https://api.fulcrumapp.com/api/v2'
});
function generateAuthOptions(email, password) {
    const encoded = base_64_1.default.encode(`${email}:${password}`);
    return {
        headers: {
            'Authorization': `Basic ${encoded}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
}
async function getUser(email, password) {
    const options = generateAuthOptions(email, password);
    const body = await api.get('/users', options);
    const { user } = body;
    user.contexts = user.contexts.map((context) => {
        // To avoid confusion remove the old API tokens. These will
        // be deprecated eventually, and authorizations have been
        // the way to create tokens for a while now.
        delete context.api_token;
        return context;
    });
    return user;
}
async function createAuthorization(email, password, organizationId, note, timeout, userId) {
    const authorizationObj = {
        authorization: {
            organization_id: organizationId,
            user_id: userId,
            note: note,
            timeout: timeout
        }
    };
    const options = generateAuthOptions(email, password);
    options.body = authorizationObj;
    const body = await api.post('/authorizations', options);
    return body.authorization;
}
//# sourceMappingURL=index.js.map