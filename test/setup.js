// Disable native fetch and use node-fetch for tests
// This ensures nock can properly intercept HTTP requests
if (global.fetch) {
  delete global.fetch;
}

// Use node-fetch v2 which works better with nock
global.fetch = require('node-fetch');
global.Headers = global.fetch.Headers;
global.Request = global.fetch.Request;
global.Response = global.fetch.Response;
