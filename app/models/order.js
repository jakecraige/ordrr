import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  description: attr(),
  receiver: attr(),
  ready: attr('boolean', { defaultValue: false })
});
