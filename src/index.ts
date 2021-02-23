import * as base64 from "base-64";

import { BASE_URL } from "./constants";
import Fetcher from "./fetcher";
import Client from "./client";
export { Client };
import Page from "./page";
export { Page };

//type exports
import { Choice, ChoiceList, ChoiceListContainer } from "./types/ChoiceList";
export { Choice, ChoiceList, ChoiceListContainer };

import { ClassificationSet, ClassificationSetContainer, ClassificationSetItem } from "./types/ClassificationSet";
export { ClassificationSet, ClassificationSetContainer, ClassificationSetItem };

import DataContainer from "./types/DataContainer";
export { DataContainer };

import FileOptions from "./types/FileOptions";
export { FileOptions };

import { BoundingBox, Element, Form, FormContainer, ShallowForm, StatusField, StatusFieldChoice } from "./types/Form";
export { BoundingBox, Element, Form, FormContainer, ShallowForm, StatusField, StatusFieldChoice };

import { MediaIdKey } from "./types/Media";
export { MediaIdKey };

import { ExifData, Photo, PhotoContainer, PhotoMetadata } from "./types/Photo";
export { ExifData, Photo, PhotoContainer, PhotoMetadata };

import {
  FormValueAddress,
  FormValueField,
  FormValueRecordLink,
  FormValueSignature,
  LocationAttributesField,
  Record,
  RecordChoiceListField,
  RecordContainer,
  RecordMediaField,
  Repeatable,
} from "./types/Record";
export {
  FormValueAddress,
  FormValueField,
  FormValueRecordLink,
  FormValueSignature,
  LocationAttributesField,
  Record,
  RecordChoiceListField,
  RecordContainer,
  RecordMediaField,
  Repeatable,
};

import { FulcrumSearchKeyValuePairHandler } from "./types/Search";
export { FulcrumSearchKeyValuePairHandler };

import User, { UserContext, UserContextRole, UserContextPlan } from "./types/User";
export { User, UserContext, UserContextRole, UserContextPlan };

import { WebHookDataType } from "./types/WebHook";
export { WebHookDataType };

interface AuthOptions {
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
      timeout: number;
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

  const {
    body: { user },
  }: { body: { user: User } } = await api.get("/users", options);

  user.contexts = user.contexts.map(context => {
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
  timeout: number,
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
