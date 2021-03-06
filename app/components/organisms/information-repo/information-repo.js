import Component from '@glimmer/component';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import csz from 'csz';

const styleBrancheInformation = csz`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: -20px 10px 30px 0px rgba(0, 0, 0, 0.25);
  color: #333;
`;

const styleBrancheName = csz`
 font-weight: bold; 
`;

export default class OrganismsInformationRepoInformationRepoComponent extends Component {
  styleBrancheInformation = styleBrancheInformation;
  styleBrancheName = styleBrancheName;
  @alias('args.model') model;
  @service('service-repo') service;
  @tracked repo;
  @tracked branches;

  constructor(...args) {
    super(...args);
    this.getRepo();
  }

  getRepoFromService() {
    return this.service.getRepoById(this.model.id);
  }

  getBranchesFromService(branchesUrl) {
    return this.service.getBranches(branchesUrl);
  }

  async getRepo() {
    this.repo = await this.getRepoFromService();
    this.branches = await this.getBranchesFromService(this.repo.branches_url);
    console.log(this.repo);
  }
}
