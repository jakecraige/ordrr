import Ember from 'ember';

var Router = Ember.Router.extend({
  location: OrdrrENV.locationType
});

Router.map(function() {
  this.resource('orders', function() {
    this.route('new');
    this.route('manage');
  });
});

export default Router;
