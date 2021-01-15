import Component from '@glimmer/component';
import csz from 'csz';

const awatar = csz`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  `;

export default class AtomsAwatarAwatarComponent extends Component {
  awatar = awatar;
}
