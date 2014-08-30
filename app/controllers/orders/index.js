import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    create: function() {
      this.transitionToRouteAnimated('orders.new', {
        main: 'slideLeft'
      });
    },
  }
});
