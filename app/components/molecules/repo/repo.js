import Component from '@glimmer/component';
import csz from 'csz';

const imageArea = csz`
  background: linear-gradient(to left,#75b7c800,#3533ff);
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const repoInfoArea = csz`
  padding: 24px 32px;
  width: 60%;
`;

const repo = csz`
  width: 50%;
  margin: 0 auto 50px;
  display: flex;
  overflow: hidden;
  box-shadow: -20px 10px 30px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  color: #333;
  border-radius: 10px;
  &:hover {
    text-decoration: none;
    color: #333;
    border: 5px solid blue;
  }
`;

const contentRepo = csz`
  height: 240px;
  display: flex;
`;

const styledInformation = csz`
  align-self: center;
`;

export default class MoleculesRepoRepoComponent extends Component {
  imageArea = imageArea;
  repoInfoArea = repoInfoArea;
  repo = repo;
  contentRepo = contentRepo;
  styledInformation = styledInformation;
}
