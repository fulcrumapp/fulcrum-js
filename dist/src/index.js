var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import base64 from 'base-64';
import Fetcher from './fetcher';
import Client from './client';
import Page from './page';
export { Client };
export { Page };
const api = new Fetcher({
    baseURI: 'https://api.fulcrumapp.com/api/v2'
});
function generateAuthOptions(email, password) {
    const encoded = base64.encode(`${email}:${password}`);
    return {
        headers: {
            'Authorization': `Basic ${encoded}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
}
export function getUser(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = generateAuthOptions(email, password);
        const body = yield api.get('/users', options);
        const { user } = body;
        user.contexts = user.contexts.map((context) => {
            // To avoid confusion remove the old API tokens. These will
            // be deprecated eventually, and authorizations have been
            // the way to create tokens for a while now.
            delete context.api_token;
            return context;
        });
        return user;
    });
}
export function createAuthorization(email, password, organizationId, note, timeout, userId) {
    return __awaiter(this, void 0, void 0, function* () {
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
        const body = yield api.post('/authorizations', options);
        return body.authorization;
    });
}
//# sourceMappingURL=index.js.map