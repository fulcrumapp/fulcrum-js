var Base, Record, mixins,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

mixins = require('./mixins/');

Base = require('./base');

Record = (function(_super) {
  __extends(Record, _super);

  function Record() {
    return Record.__super__.constructor.apply(this, arguments);
  }

  Record.prototype.resource = 'records';

  Record.include(mixins.findable);

  Record.include(mixins.searchable);

  Record.include(mixins.deletable);

  Record.prototype.process_object = function(object, cb) {
    var e, feature, obj;
    try {
      obj = object[this.singular_resource()];
      feature = this.object_to_feature(obj);
    } catch (_error) {
      e = _error;
      cb(e);
      return;
    }
    return cb(null, feature);
  };

  Record.prototype.object_to_feature = function(object) {
    var feature;
    feature = {
      type: 'Feature',
      properties: {
        fulcrum_system_properties: object,
        form_values: object.form_values
      },
      geometry: {
        type: 'Point',
        coordinates: [object.longitude, object.latitude]
      }
    };
    delete feature.properties.fulcrum_system_properties.latitude;
    delete feature.properties.fulcrum_system_properties.longitude;
    delete feature.properties.fulcrum_system_properties.form_values;
    return feature;
  };

  Record.prototype.process_objects = function(objects, cb) {
    var e, feature, feature_collection, obj, objs, _i, _len;
    try {
      feature_collection = {
        type: 'FeatureCollection',
        features: []
      };
      objs = objects[this.resource];
      for (_i = 0, _len = objs.length; _i < _len; _i++) {
        obj = objs[_i];
        feature = this.object_to_feature(obj);
        feature_collection.features.push(feature);
      }
    } catch (_error) {
      e = _error;
      cb(e);
      return;
    }
    return cb(null, feature_collection);
  };

  return Record;

})(Base);

module.exports = Record;
