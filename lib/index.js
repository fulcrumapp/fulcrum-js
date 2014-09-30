var Fulcrum, resources;

resources = {
  records: require('./api/records'),
  changesets: require('./api/changesets'),
  forms: require('./api/forms'),
  projects: require('./api/projects'),
  webhooks: require('./api/webhooks'),
  choice_lists: require('./api/choice_lists'),
  classification_sets: require('./api/classification_sets'),
  photos: require('./api/photos'),
  videos: require('./api/videos'),
  memberships: require('./api/memberships')
};

Fulcrum = (function() {
  function Fulcrum(options) {
    var klass, name;
    this.api_key = options.api_key;
    this.url = options.url || 'https://api.fulcrumapp.com/api/v2/';
    for (name in resources) {
      klass = resources[name];
      this[name] = new klass(this);
    }
  }

  return Fulcrum;

})();

module.exports = Fulcrum;
