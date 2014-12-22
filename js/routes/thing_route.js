App.ThingRoute = Ember.Route.extend({
  model: function (params) {
    return this.store.find('thing', params.id);
  }
});
