import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import csz from 'csz';

export default class MoleculesSearchUserSearchUserComponent extends Component {
  @service('service-repo') cart;
  @tracked valueInput = '';
  @tracked invalideEmpty = false;
  @tracked listRepos;

  styles = csz`
  background-color: ${this.invalideEmpty ? 'red' : 'green'};
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
`;

  @action
  userInput(event) {
    this.valueInput = event.target.value;
    console.log(this.valueInput);
  }

}
