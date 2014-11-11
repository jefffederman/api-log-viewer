import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('events', function() {
    this.route('show', { path: '/:id' }, function() {
      this.route('requests', { path: '/requests' }, function() {
        this.route('show', { path: '/:id' });
      });
    });
  });
});

export default Router;
