## fulcrum-node

[![Build Status](https://api.travis-ci.org/JasonSanford/fulcrum-node.png?branch=master)](https://travis-ci.org/JasonSanford/fulcrum-node)

A JavaScript library for the Fulcrum API.

### Installation

```
npm install --save fulcrum-app
```

### Usage

Create a fulcrum client with your API token.

```javascript
var Fulcrum = require('fulcrum-app');
var fulcrum = new Fulcrum({
  api_token: 'abc123'
});
```

Various methods are available for each of the resources. Check the chart below for details.

#### find

Finds a single resource. Parameters are a resource id and a callback. The callback should accept an error and resource object, representing a form, record, changeset, etc.

```javascript
var formFound = function (error, form) {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  console.log('Found a form!', form);
};
fulcrum.forms.find('916474a7-b995-4b36-81db-8eda97f93a73', formFound);
```

Check the [Fulcrum API Docs](http://fulcrumapp.com/developers/api/) for an example of returned objects.

#### search

Search for resources. Parameters are an options object and a callback. The options object will be converted to query string parameters and properly url encoded. The options will vary depending on the resource, but [pagination parameters](http://fulcrumapp.com/developers/api/#pagination) are always accepted.

The callback should accept an error and an object representing a set of resources as well as pagination information. For example, a set of records will look like:

```json
{
  "current_page": 1,
  "total_pages": 1,
  "total_count": 2,
  "per_page": 20000,
  "records": [
    {
      "status": null,
      "version": 1,
      "id": "c05ee229-5d91-4ac5-b3e4-00c5cc063f3f",
      "form_id": "512342b0-2bce-4e31-9d4a-8f29e929f7ac",
      "form_values": {
        "b799": [
          {
            "photo_id": "e5e4cd83-10cb-462f-91ea-9fee48f15d33"
          }
        ],
        "e659": {
          "choice_values": [
            "Deer Stand"
          ],
          "other_values": []
        }
      },
      "latitude": 35.2116941,
      "longitude": -81.6359073
    },
    {
      "status": null,
      "version": 1,
      "id": "42ec66d0-1c4b-4fef-aeea-ac96130f86a7",
      "form_id": "512342b0-2bce-4e31-9d4a-8f29e929f7ac",
      "form_values": {
        "b799": [
          {
            "photo_id": "71b64b8e-800a-40cd-a8ae-ae31a583171b"
          }
        ],
        "e659": {
          "choice_values": [
            "Deer Stand"
          ],
          "other_values": []
        }
      },
      "latitude": 35.2091085,
      "longitude": -81.636208
    }
  ]
}
```

```javascript
var recordsFound = function (error, records) {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  records.records.forEach(function(record) {
    console.log('Location is: ', record.latitude, record.longitude);
  });
};
fulcrum.records.search({form_id: '916474a7-b995-4b36-81db-8eda97f93a73'}, recordsFound);
```

#### create

Create an object. Parameters are an object and a callback. The object should represent the resource you are creating. Check the [Fulcrum API Docs](http://fulcrumapp.com/developers/api/) for examples of resource objects.

The callback should accept an error and an object representing the created resource.

```javascript
var webhookCreated = function (error, webhook) {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  console.log('I created a webhook and its id is', webhook.webhook.id);
};
var webhook_to_create = {
  "webhook": {
    "name": "My First Webhook",
    "url": "http://foo.com/fulcrum_webhook",
    "active": true
  }
};
fulcrum.webhooks.create(webhook_to_create, webhookCreated);
```

#### update

Update an object. Parameters are an id, an object and a callback.

The id is the unique id for the resource to be updated.

The object should represent the resource you are updating.

The callback should accept an error and an object representing the updated resource.

```javascript
var webhookUpdated = function (error, webhook) {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  console.log("My webhook's new name is", webhook.webhook.name);
};
var webhook_to_update = {
  "webhook": {
    "name": "The Best Webhook",
    "url": "http://foo.com/fulcrum_webhook",
    "active": false
  }
};
fulcrum.webhooks.update('bc53d884-a7a8-4697-9e35-e26192be724e', webhook_to_update, webhookUpdated);
```

#### delete

Delete an object. Parameters are an id and a callback.

The id is the unique id for the resource to be deleted.

The callback should accept an error. If there is no error the resource was deleted.

```javascript
var recordDeleted = function (error) {
  if (error) {
    console.log('There was a problem deleting the record.');
  } else {
    console.log('The record was deleted.');
  }
};
fulcrum.records.delete('916474a7-b995-4b36-81db-8eda97f93a73', recordDeleted);
```

#### Supported Resources and Methods

| Resource            | Methods                              |
|---------------------|--------------------------------------|
| Forms               | find, search, create, update, delete |
| Records             | find, search, create, update, delete |
| Photos              | find, search                         |
| Projects            | search                               |
| Changesets          | find, search, create, update, close  |
| Choice Lists        | find, search, create, update, delete |
| Classification Sets | find, search, create, update, delete |
| Webhooks            | find, search, create, update, delete |

### Development

Install dependencies:

```
cd fulcrum-node
npm install
```

Fulcrum Node is written in CoffeeScript. Use gulp to compile to JavaScript:

```
vim src/index.coffee
gulp compile
```

Or have gulp watch the src directory and compile when changes are made:

```
gulp watch
```

### Tests

Be sure you've compiled to javascript and then:

```
npm test
```
