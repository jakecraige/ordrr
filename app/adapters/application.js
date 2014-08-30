import DS from 'ember-data';

var ENV = OrdrrENV;

export default DS.ActiveModelAdapter.extend({
  host: ENV.apiUrl
});
