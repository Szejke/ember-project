import EmberRouter from '@ember/routing/router';
import config from 'front/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('not-found', { path: '/*path' });
  this.route('repo', { path: 'repo-card/:id' });
});
