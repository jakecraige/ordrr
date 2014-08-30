import Ember from 'ember';

export default Ember.ArrayController.extend({
  readyOrders: Ember.computed.filterBy('model', 'ready', true),
  pendingOrders: Ember.computed.filterBy('model', 'ready', false),
  actions: {
    create: function() {
      this.transitionToRouteAnimated('orders.new', {
        main: 'slideLeft'
      });
    },
    manage: function() {
      this.transitionToRouteAnimated('orders.manage', {
        main: 'slideLeft'
      });
    },
    pickUp: function(order) {
      order.destroyRecord();
    }
  }
});
