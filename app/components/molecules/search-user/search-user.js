import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import csz from 'csz';

export default class MoleculesSearchUserSearchUserComponent extends Component {
  @service('service-repo') cart;

  @tracked invalideEmpty = false;
  @tracked form = {
    valueChecFork: false,
    valueInput: '',
  };

  styleContentForm = csz`
  padding: 2rem;
  margin: 0 auto 50px;
  display: flex;
  flex-direction: column ;
  overflow: hidden;
  box-shadow: -20px 10px 30px 0px rgba(0, 0, 0, 0.25);
  color: #333;
  border-radius: 10px;
  &:hover {
    color: #333;
  }
`;

  @action
  checkFork(event) {
    this.form.valueChecFork = event.target.checked;
  }

  @action
  userInput(event) {
    this.form.valueInput = event.target.value;
  }
}
