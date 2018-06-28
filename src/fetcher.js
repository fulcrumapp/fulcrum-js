function getQueryString(params) {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}

function errorMessageForStatus(status) {
  const messages = {
    400: 'Bad Request',
    401: 'Unauthorized',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found'
  };

  return messages[status] || `HTTP ${status}`;
}

export default class Fetcher {
  constructor(options) {
    this.options = options;

    this.headers = options.headers;
  }

  _processOptions(opts) {
    const options = {
      ...opts,
      headers: {
        ...this.headers,
        ...opts.headers
      }
    };

    // remove any nil or blank headers
    // (e.g. to automatically set Content-Type with `FormData` boundary)
    Object.keys(options.headers).forEach(key => {
      if (typeof options.headers[key] === 'undefined' ||
          options.headers[key] === null ||
          options.headers[key] === '') {
        delete options.headers[key];
      }
    });

    delete options.baseURI;

    if (options && options.hasOwnProperty('body') &&
        options.hasOwnProperty('headers') && options.headers['Content-Type'] === 'application/json') {
      options.body = JSON.stringify(options.body);
    }

    return options;
  }

  async _fetch(url, options) {
    const resp = await fetch(url, options);

    if (!resp.ok) {
      const errorMessage = errorMessageForStatus(resp.status) || 'Unknown Error';
      throw new Error(errorMessage);
    }

    const contentType = resp.headers.get('Content-Type');

    if (contentType && contentType.split(';')[0] === 'application/json') {
      return resp.json();
    }

    return resp.text();
  }

  get(path, opts) {
    let url = this.options.baseURI + '/' + path;

    if (opts && opts.hasOwnProperty('qs')) {
      url += '?' + getQueryString(opts.qs);
      delete opts.qs;
    }

    const options = this._processOptions(Object.assign({method: 'GET'}, opts));

    return this._fetch(url, options);
  }

  post(path, opts) {
    const url = this.options.baseURI + '/' + path;

    const options = this._processOptions(Object.assign({method: 'POST'}, opts));

    return this._fetch(url, options);
  }

  put(path, opts) {
    const url = this.options.baseURI + '/' + path;

    const options = this._processOptions(Object.assign({method: 'PUT'}, opts));

    return this._fetch(url, options);
  }

  del(path, opts) {
    const url = this.options.baseURI + '/' + path;

    const options = this._processOptions(Object.assign({method: 'DELETE'}, opts));

    return this._fetch(url, options);
  }
}
