import Frisbee from 'frisbee';
import Client from './client';
import Page from './page';

export { Client };
export { Page };

const api = new Frisbee({
  baseURI: 'https://api.fulcrumapp.com/api/v2',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export async function getUser(email, password) {
  const resp = await api.auth(email, password).get('/users');

  if (resp.err) {
    throw resp.err;
  }

  const user = resp.body.user;

  user.contexts = user.contexts.map((context) => {
    // To avoid confusion remove the old API tokens. These will
    // be deprecated eventually, and authorizations have been
    // the way to create tokens for a while now.
    delete context.api_token;

    return context;
  });

  return user;
}

export async function createAuthorization(email, password, organizationId, note, timeout) {
  const authorizationObj = {
    authorization: {
      organization_id: organizationId,
      note: note,
      timeout: timeout
    }
  };

  const resp = await api.auth(email, password).post('/authorizations', {
    body: authorizationObj
  });

  if (resp.err) {
    throw resp.err;
  }

  return resp.body.authorization;
}
