import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    submit: function() {
      this.get('model').save().then(function() {
        alert('Order placed. Keep an eye on the ready order to see when it\'s ready');
        this.send('back');
      }.bind(this));
    }
  }
});
