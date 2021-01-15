import Service from '@ember/service';

export default class ReopCardService extends Service {
  async getEmployees() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(response);
  }
}
