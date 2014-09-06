var Base, Extendable, errors, moduleKeywords, request,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

request = require('request');

errors = require('./errors');

moduleKeywords = ['extended', 'included'];

Extendable = (function() {
  function Extendable() {}

  Extendable.extend = function(obj) {
    var key, value, _ref;
    for (key in obj) {
      value = obj[key];
      if (__indexOf.call(moduleKeywords, key) < 0) {
        this[key] = value;
      }
    }
    if ((_ref = obj.extended) != null) {
      _ref.apply(this);
    }
    return this;
  };

  Extendable.include = function(obj) {
    var key, value, _ref;
    for (key in obj) {
      value = obj[key];
      if (__indexOf.call(moduleKeywords, key) < 0) {
        this.prototype[key] = value;
      }
    }
    if ((_ref = obj.included) != null) {
      _ref.apply(this);
    }
    return this;
  };

  return Extendable;

})();

Base = (function(_super) {
  __extends(Base, _super);

  function Base(client) {
    this.client = client;
    this.base = this.client.url;
  }

  Base.prototype.url = function(id) {
    var path;
    path = id ? this.resource + '/' + id : this.resource;
    return this.base + path;
  };

  Base.prototype.singular_resource = function() {
    return this.resource.slice(0, this.resource.length - 1);
  };

  Base.prototype.request = function(method, url, opts, cb) {
    var headers, options;
    headers = {
      'X-ApiToken': this.client.api_key,
      'Accept': 'application/json'
    };
    options = {
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
    return request(options, cb);
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
    return this.request('get', this.url(id), options, cb);
  };

  Base.prototype.del = function(id, cb) {
    return this.request('delete', this.url(id), null, cb);
  };

  Base.prototype.post = function(data, cb) {
    var options;
    options = {
      data: data
    };
    return this.request('post', this.url(), options, cb);
  };

  Base.prototype.put = function(id, data, cb) {
    var options;
    options = {
      data: data
    };
    return this.request('put', this.url(id), options, cb);
  };

  Base.prototype.process_http_errors = function(response, cb) {
    var message, status_code;
    status_code = response.statusCode;
    if ((299 >= status_code && status_code >= 200)) {
      return cb(null);
    } else {
      if (status_code in errors) {
        message = errors[status_code];
      } else {
        message = 'Unknown Error';
      }
      return cb(new Error(message));
    }
  };

  return Base;

})(Extendable);

module.exports = Base;
