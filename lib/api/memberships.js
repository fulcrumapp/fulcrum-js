var _ = require('lodash');
var async = require('async');

var mixins = require('./mixins/');
var Base = require('./base');

function Memberships() {
  Base.apply(this, arguments);
}

Memberships.prototype = Object.create(Base.prototype);
Memberships.prototype.constructor = Memberships;

Memberships.prototype.resource = 'memberships';

Memberships.prototype.change_permissions = function(permissions, cb) {
  var me = this;
  var requestOptions = {data: permissions};

  function doPost (callback) {
    me.request('post', me.url() + '/change_permissions', requestOptions, function (error, response, body) {
      if (error) {
        callback(error);
      } else {
        callback(null, response, body);
      }
    });
  }

  function doProcessHttpErrors (response, body, callback) {
    me.process_http_errors(response, function (error) {
      if (error) {
        callback(error);
      } else {
        callback(null, body);
      }
    });
  }

  var tasks = [doPost, doProcessHttpErrors];

  async.waterfall(tasks, cb);
};

_.extend(Memberships.prototype, mixins.searchable);

module.exports = Memberships;
