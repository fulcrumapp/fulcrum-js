mixins = require './mixins'
Base = require './base'

class Record extends Base
  resource: 'records'
  @include mixins.findable
  @include mixins.searchable
  @include mixins.deletable

  process_object: (object, cb) ->
    try
      obj = object[@singular_resource()]
      feature = @object_to_feature obj
    catch e
      cb e
      return
    cb null, feature

  object_to_feature: (object) ->
    feature =
      type: 'Feature'
      properties: {
        fulcrum_system_properties: object
        form_values: object.form_values
      }
      geometry: {
        type: 'Point'
        coordinates: [object.longitude, object.latitude]
      }
    delete feature.properties.fulcrum_system_properties.latitude
    delete feature.properties.fulcrum_system_properties.longitude
    delete feature.properties.fulcrum_system_properties.form_values
    feature

  process_objects: (objects, cb) ->
    try
      feature_collection =
        type: 'FeatureCollection'
        features: []
      objs = objects[@resource]
      for obj in objs
        feature = @object_to_feature obj
        feature_collection.features.push feature
    catch e
      cb e
      return
    cb null, feature_collection

module.exports = Record
