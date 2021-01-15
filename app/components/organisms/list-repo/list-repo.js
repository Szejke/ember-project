import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class OrganismsListRepoListRepoComponent extends Component {
  @service('service-repo') cart;
  @tracked listRepos;

  @action
  submit(valueForm) {
    console.log(valueForm);
    this.cart.getRepos(valueForm).then((e) => {
      this.listRepos = e;
    });
  }
}
