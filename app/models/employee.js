import Model, { attr } from '@ember-data/model';

export default class EmployeeModel extends Model {
  @attr('string') title;
}
