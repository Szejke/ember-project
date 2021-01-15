import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | molecules/search-user/search-user', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Molecules::SearchUser::SearchUser />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Molecules::SearchUser::SearchUser>
        template block text
      </Molecules::SearchUser::SearchUser>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
