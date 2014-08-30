import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('order', {
      description: '',
      receiver: ''
    });
  },
  deactivate: function() {
    if(this.get('controller.model.isNew')) {
      this.get('controller.model').deleteRecord();
    }
  }
});
