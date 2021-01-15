import Component from '@glimmer/component';
import { alias } from '@ember/object/computed';

export default class OrganismsInformationRepoInformationRepoComponent extends Component {
  @alias('args.model') model;

  get idRepo() {
    console.log(this.model);
    return this.model.id;
  }
}
