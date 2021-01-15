import Component from '@glimmer/component';
import csz from 'csz';

const awatar = csz`
  height: 150px;
  border-radius: 50%;
  `;

export default class AtomsAwatarAwatarComponent extends Component {
  awatar = awatar;
  textAlt = 'avatar Github';
}
