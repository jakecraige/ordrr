import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    ready: function(order) {
      order.set('ready', true);
      order.save().then(this.removeObject.bind(this))
    }
  }
});
