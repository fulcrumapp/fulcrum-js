import Frisbee from 'frisbee';
import Client from './client';
import Page from './page';

export { Client };
export { Page };

const api = new Frisbee({
  baseURI: 'https://api.fulcrumapp.com/api/v2',
  // baseURI: 'http://localhost:3000/api/v2',
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

  return resp.body.user;
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
