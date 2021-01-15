import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class ServiceRepoService extends Service {
  async getRepos(userName) {
    const response = await fetch('http://localhost:8080/github');
    const post = await response.json();
    console.log(post);
    return post;
  }

  async getBranch(urlBranches) {
    const response = await fetch(urlbranches);
    const post = await response.json();
    console.log(post);
    return post;
  }
}
