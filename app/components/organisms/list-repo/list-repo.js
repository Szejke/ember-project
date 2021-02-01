import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class OrganismsListRepoListRepoComponent extends Component {
  @service('service-repo') serviceRepo;
  @tracked listRepos;
  @tracked validateEmpty;

  @action
  submit(valueForm) {
    const { valueInput } = valueForm;
    this.validateEmpty = valueInput === '' ? true : false;
    if (!this.validateEmpty) {
      this.serviceRepo.getRepos(valueForm).then((e) => {
        this.listRepos = e;
      });
    }
  }
}
