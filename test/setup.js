// Disable native fetch and use isomorphic-fetch for tests
// This ensures nock can properly intercept HTTP requests
if (global.fetch) {
  delete global.fetch;
}

// Import isomorphic-fetch to provide fetch implementation
require('isomorphic-fetch');
