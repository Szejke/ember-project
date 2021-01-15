import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class OrganismsListRepoListRepoComponent extends Component {
  @service('service-repo') cart;
  @tracked listRepos;

  @action
  submit() {
    this.cart.getRepos('Szejke').then((e) => {
      this.listRepos = e;
    });
    console.log(this.listRepos);
  }
}
