import Component from '@glimmer/component';
import csz from 'csz';

const avatar = csz`
  height: 150px;
  border-radius: 50%;
  `;

export default class AtomsAwatarAwatarComponent extends Component {
  avatar = avatar;
  textAlt = 'avatar Github';
}
