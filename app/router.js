import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('channels', function() {
    this.route('channel', { path: ':slug' }, function() {
      this.route('videos');
    });
  });
});

export default Router;
