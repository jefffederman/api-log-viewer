import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      { description: 'First log event' },
      { description: 'Second log event' },
      { description: 'Third log event' }
    ];
  }
});
