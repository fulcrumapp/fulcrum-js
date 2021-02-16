import * as base64 from "base-64";

import Fetcher from "./fetcher";
import Client from "./client";
import Page from "./page";

import { BASE_URL } from "./constants";

export { Client };
export { Page };

export interface AuthOptions {
  headers: {
    Authorization: string;
    Accept: string;
    "Content-Type": string;
  };
  body?: {
    authorization: {
      organization_id: string;
      user_id: string;
      note: string;
      //TODO: types
      timeout: any;
    };
  };
}

const api = new Fetcher({
  baseUrl: BASE_URL,
  headers: {},
});

function generateAuthOptions(email: string, password: string): AuthOptions {
  const encoded = base64.encode(`${email}:${password}`);

  return {
    headers: {
      Authorization: `Basic ${encoded}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
}

export async function getUser(email: string, password: string) {
  const options = generateAuthOptions(email, password);

  const body = await api.get("/users", options);

  const { user } = body;

  //TODO: types
  user.contexts = user.contexts.map((context: any) => {
    // To avoid confusion remove the old API tokens. These will
    // be deprecated eventually, and authorizations have been
    // the way to create tokens for a while now.
    delete context.api_token;

    return context;
  });

  return user;
}

export async function createAuthorization(
  email: string,
  password: string,
  organizationId: string,
  note: string,
  //TODO: types
  timeout: any,
  userId: string
) {
  const authorizationObj = {
    authorization: {
      organization_id: organizationId,
      user_id: userId,
      note: note,
      timeout: timeout,
    },
  };

  const options = generateAuthOptions(email, password);

  options.body = authorizationObj;

  const body = await api.post("/authorizations", options);

  return body.authorization;
}
