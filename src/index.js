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

export async function getUser(email, password) {
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

export async function createAuthorization(email, password, organizationId, note, timeout, userId) {
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
