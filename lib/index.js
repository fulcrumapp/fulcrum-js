var Fulcrum, resources;

resources = {
  records: require('./api/records'),
  changesets: require('./api/changesets'),
  forms: require('./api/forms')
};

Fulcrum = (function() {
  function Fulcrum(options) {
    var klass, name;
    this.api_token = options.api_token;
    for (name in resources) {
      klass = resources[name];
      this[name] = new klass(this);
    }
  }

  return Fulcrum;

})();

module.exports = Fulcrum;
