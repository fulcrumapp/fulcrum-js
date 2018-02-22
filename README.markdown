# fulcrum-js

[![Build Status](https://api.travis-ci.org/fulcrumapp/fulcrum-js.png?branch=master)](https://travis-ci.org/fulcrumapp/fulcrum-js)&nbsp;[![npm Version](https://img.shields.io/npm/v/fulcrum-app.svg)](https://www.npmjs.com/package/fulcrum-app)

A JavaScript library for the Fulcrum API.

## Installation

```
npm install --save fulcrum-app
```

## Version 2 Changes

Version 1 of this library used callbacks for API responses. Version 2 uses [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). Promises offer some advantages over the callback pattern used previously. You can read more about them in the [Promises](#promises) section.

## Usage

There are three main exports from this module: `Client`, `getUser`, and `createAuthorization`.

### Client

API calls are made using a client. Let's assume you already have an API token and you want to make some calls to the API. If you need an API token, see the [getUser](#getuser) and [createAuthorization](#createauthorization) functions.

```javascript
import { Client } from 'fulcrum-app';
// or
// const fulcrum = require('fulcrum-app');
// const Client = fulcrum.Client;

const client = new Client('your-api-token');

client.forms.all({schema: false})
  .then((page) => {
    console.log(`I got you ${page.objects.length} forms.`);
  })
  .catch((error) => {
    console.log('Error getting your forms.', error.message);
  });
```

Various methods are available for each of the resources. Check the chart below for details.

#### Client Resources and Methods

| Resource            | Methods                                    |
|---------------------|--------------------------------------------|
| Forms               | find, all, create, update, delete          |
| Records             | find, all, create, update, delete, history |
| Projects            | find, all, create, update, delete          |
| Changesets          | find, all, create, update, close           |
| Choice Lists        | find, all, create, update, delete          |
| Classification Sets | find, all, create, update, delete          |
| Webhooks            | find, all, create, update, delete          |
| Photos              | find, all                                  |
| Signatures          | find, all                                  |
| Videos              | find, all                                  |
| Audio               | find, all                                  |
| Memberships         | all, change                                |
| Roles               | all                                        |
| Child Records       | all                                        |
| Layers              | find, all, create, update, delete          |

#### find

Finds a single resource. The single parameter is a resource id.

This method returns a Promise containing the resource.

```javascript
client.forms.find('abc-123')
  .then((form) => {
    console.log('success', form);
  })
  .catch((error) => {
    // There was a problem with the request. Is the API token correct?
    console.log(error.message);
  });
```

Check the [Fulcrum API Docs](http://www.fulcrumapp.com/developers/api/) for an example of returned objects.

#### all

Search for resources. The single parameter is an options object. The options object will be converted to query string parameters and properly url encoded. The options will vary depending on the resource, but the pagination options, `page` and `per_page`, are always accepted.

This method returns a Promise containing a page. The page object has 5 properties.

|property|description|
|-|-|
| `objects` | An array of the resources requested |
| `currentPage` | The current page |
| `perPage` | The number of resources returned per page |
| `totalPages` | The total number of pages required to return all resources |
| `totalCount` | The total count of all resources with respect to current query parameters |

```javascript
const options = {
  form_id: '043d36a5-d144-4bca-b6ce-be210476e913',
  page: 1,
  per_page: 2
}

client.records.all(options)
  .then((page) => {
    console.log(
      `Got page ${page.currentPage} of ${page.totalPages} containing ${page.objects.length} of ${page.totalCount} total resources.`
    );
    // Got page 1 of 5 containing 2 of 10 total resources.
  })
  .catch((error) => {
    console.log(error.message);
  });
```

#### create

Create a resource. The single parameter is an object. The object should represent the resource you are creating. Check the [Fulcrum API Docs](http://developer.fulcrumapp.com/api/intro/) for examples of resource objects.

This method returns a Promise containing the created resource.

```javascript
const obj = {
  name: 'My Awesome Webhook',
  url: 'http://foo.com/fulcrum_webhook',
  active: true
};

client.webhooks.create(obj)
  .then((webhook) => {
    console.log('success', webhook);
  })
  .catch((error) => {
    console.log(error.message);
  });
```

#### update

Update an object. Parameters are a resource id and an object. The id is the unique id for the resource to be updated. The object should represent the resource you are updating.

This method returns a promise containing the updated resource.

```javascript
const obj = {
  name: 'My Awesome Webhook',
  url: 'http://foo.com/fulcrum_webhook',
  active: false,
  id: '139c8c99-d4e4-4bf0-a0c5-ed6b6e2e5605'
};

client.webhooks.update(obj.id, obj)
  .then((webhook) => {
    console.log('success', webhook);
  })
  .catch((error) => {
    console.log(error.message);
  });
```

#### delete

Delete a resource. The single parameter is a resource id.

This method returns a promise containing the resource that was deleted.

```javascript
client.forms.delete('6fc7d1dc-62a4-4c81-a857-6b9660f18b55')
  .then((form) => {
    console.log('success', form);
  })
  .catch((error) => {
    console.log(error.message);
  });
```

### getUser

This is a helper function to get user data including organizations you belong to. Use this in conjunction with [createAuthorization](#createauthorization) to create an API token.

```javascript
import { getUser } from 'fulcrum-app';
// or
// const fulcrum = require('fulcrum-app');
// const getUser = fulcrum.getUser;

getUser('name@email.com', 'password')
  .then((user) => {
    console.log(user);
    // user.contexts is an array of the organizations you belong to. Use These
    // ids with createAuthorization to create API tokens.
  })
  .catch((error) => {
    console.log(error.message);
  });
```

### createAuthorization

This is a helper function to create [authorizations](http://developer.fulcrumapp.com/endpoints/authorizations/) (API tokens) associated with a user and organization (a membership).

```javascript
import { createAuthorization } from 'fulcrum-app';
// or
// const fulcrum = require('fulcrum-app');
// const createAuthorization = fulcrum.createAuthorization;

const email = 'name@email.com';
const password = 'password';
const organizationId = 'organization-id-from-getUser';
const note = 'My awesome app version 4.20';
const timeout = 60 * 60 * 24;

createAuthorization(email, password, organizationId, note, timeout)
  .then((authorization) => {
    console.log(authorization);
    // authorization.token is your API token to use with the rest of the API.
  })
  .catch((error) => {
    console.log(error.message);
  });
```

## Promises

Using Promises, we have more options for flow control and handling errors. In some JavaScript environments we can use the [await operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await).

> The await expression causes async function execution to pause until  a Promise is fulfilled, that is resolved or rejected, and to resume execution of the async function after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise.

In other words, they let us write asynchronous code, where we usually have nested callbacks, in a more sequential pattern. Below is an example of how we would have made two sequential API calls with version 1.

```javascript
function getFormAndRecord(callback) {
  client.forms.find('abc-123', (error, form) => {
    if (error) {
      callback(error);
      return
    }

    client.records.find('def-456', (error, record) => {
      if (error) {
        callback(error);
      } else {
        callback(null, [form, record]);
      }
    })
  });
}

getFormAndRecord((error, results) => {
  if (error) {
    return console.log(error);
  }

  return console.log(results);
});
```

And here's an example of using the await keyword to pause execution until the promises (API calls) are resolved.

```javascript
async function getFormAndRecord() {
  try {
    const form = await client.forms.find('abc-123');
    const record = await client.records.find('def-456');
    console.log(form, record);
  } catch (error) {
    console.log(error);
  }
}

getFormAndRecord();
```

If either the `client.forms.find` or `client.records.find` methods fail, they will be picked up in the `catch`, allowing us to log errors from a single place and have a much cleaner way of making multiple API calls.

Below is a real world example where we 1) create a changeset, 2) delete a record associated with that changeset, 3) close the changeset. This is similar to how the mobile apps work where all adds, updates, and deletes are associated with changesets.

```javascript
async function deleteRecord(formId, recordId) {
  try {
    // metadata is an arbitrary object describing the
    // app/environment that the changeset was performed in
    const changesetObj = {
      form_id: formId,
      metadata: {
        app: 'fulcrum-js',
        version: 99.78
      }
    };

    console.log('Creating changeset ...');
    const changeset = await client.changesets.create(changesetObj);

    console.log('Deleting record ...');
    await client.records.delete(recordId, changeset.id);

    console.log('Closing changeset ...');
    await client.changesets.close(changeset.id);

    console.log(`Deleted record ${recordId} in changeset ${changeset.id}.`);
  } catch (error) {
    console.log(error.message);
  }
}

deleteRecord('abc-123', 'def-456');
```

## Development

Install dependencies:

```
cd fulcrum-js
npm install
```

## Tests

```
npm test
```
