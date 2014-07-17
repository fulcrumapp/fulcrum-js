var Fulcrum, resources;

resources = {
  record: require('./api/record'),
  changeset: require('./api/changeset')
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
