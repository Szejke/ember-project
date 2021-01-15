import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model(params) {
    const response = await this.store.findAll('post');
    console.log(response);
    return await this.store.findAll('post');
  }
}
