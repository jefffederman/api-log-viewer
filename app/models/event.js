import DS from 'ember-data';

var attr = DS.attr;
var hasMany = DS.hasMany;

export default DS.Model.extend({
  description: attr('string'),
  type: attr('string'),
  userEmail: attr('string'),
  occurredAt: attr('date'),
  requests: hasMany('request', {async: true})
});