var request = require('request');
var errors = require('./errors');

function Base(client) {
  this.client = client;
  this.base = this.client.url;
}

Base.prototype.url = function(id) {
  var path = id ? this.resource + '/' + id : this.resource;
  return this.base + path;
};

Base.prototype.singular_resource = function() {
  return this.resource.slice(0, this.resource.length - 1);
};

Base.prototype.request = function(method, url, opts, cb) {
  var headers = {
    'X-ApiToken': this.client.api_key,
    'Accept': 'application/json'
  };
  var options = {
    'headers': headers,
    'method': method,
    'url': url,
    'json': true
  };
  if (opts && opts.qs) {
    options.qs = opts.qs;
  }
  if (opts && opts.data) {
    options.json = opts.data;
  }
  request(options, cb);
};

Base.prototype.get = function(id, qs, cb) {
  var options;
  if (qs) {
    options = {
      qs: qs
    };
  } else {
    options = null;
  }
  this.request('get', this.url(id), options, cb);
};

Base.prototype.del = function(id, cb) {
  this.request('delete', this.url(id), null, cb);
};

Base.prototype.post = function(data, cb) {
  var options = {
    data: data
  };
  this.request('post', this.url(), options, cb);
};

Base.prototype.put = function(id, data, cb) {
  var options = {
    data: data
  };
  this.request('put', this.url(id), options, cb);
};

Base.prototype.process_http_errors = function(response, cb) {
  var message;
  var status_code = response.statusCode;
  if ((299 >= status_code && status_code >= 200)) {
    cb(null);
  } else {
    if (status_code in errors) {
      message = errors[status_code];
    } else {
      message = 'Unknown Error';
    }
    cb(new Error(message));
  }
};

module.exports = Base;
