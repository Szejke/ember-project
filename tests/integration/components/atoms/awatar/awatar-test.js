import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | atoms/avatar/avatar', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders Avatar', async function (assert) {
    this.set('repoAvatarUrl', 'https://iupac.org/wp-content/uploads/2018/05/default-avatar.png');

    await render(hbs`<Atoms::Avatar::Avatar  @repoAvatarUrl={{this.repoAvatarUrl}} />`);
    assert.equal(this.element.getAttribute('@repoAvatarUrl'));
  });
});
