import Model, { attr } from '@ember-data/model';

export default class PostModel extends Model {
  @attr userId;
  @attr title;
  @attr body;
}
