import DS from 'ember-data';
var attr = DS.attr;
var belongsTo = DS.belongsTo;

export default DS.Model.extend({
  requestUrl: attr('string'),
  requestMethod: attr('string'),
  requestHeaders: attr('string'),
  requestBody: attr('string'),
  responseStatus: attr('number'),
  responseHeaders: attr('string'),
  responseBody: attr('string'),
  page: attr('number'),
  occurredAt: attr('date'),
  event: belongsTo('event')
});