import Service from '@ember/service';

const HOST = 'https://api.github.com/';

export default class ServiceRepoService extends Service {
  async getRepoById(identifier) {
    identifier = identifier.split(':');
    const userName = identifier[0];
    const id = identifier[1];
    const response = await fetch(HOST + `users/${userName}/repos`);
    const repos = await response.json();
    const repo = repos.find((e) => e.id == id);
    return repo;
  }

  async getRepos(valueInputs) {
    const { valueChecFork, valueInput } = valueInputs;
    const response = await fetch(HOST + `users/${valueInput}/repos`);
    const repo = await response.json();
    return valueChecFork ? repo : repo.filter((e) => e.fork === false);
  }

  async getBranches(urlBranches) {
    const response = await fetch(urlBranches.split('{')[0]);
    const branches = await response.json();
    return branches;
  }
}
