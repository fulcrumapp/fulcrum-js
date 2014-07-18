## fulcrum-node

A node.js Fulcrum helper library.

### Installation

```
npm install --save fulcrum-app
```

### Usage

Create a fulcrum client with your API token.

```javascript
var Fulcrum = require('fulcrum-app');
var fulcrum_client = new Fulcrum({
  api_token: 'abc123'
});
```

### Supported Resources

| Resource            | Actions                              |
|---------------------|--------------------------------------|
| Forms               | find, search, create, update, delete |
| Records             | find, search, create, update, delete |
| Photos              | find, search                         |
| Projects            | search                               |
| Changesets          | find, search, create, update         |
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

Be sure you've compiled to javascript and then

```
npm test
```