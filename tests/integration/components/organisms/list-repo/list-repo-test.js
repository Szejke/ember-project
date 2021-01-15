import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | organisms/list-repo/list-repo', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Organisms::ListRepo::ListRepo />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Organisms::ListRepo::ListRepo>
        template block text
      </Organisms::ListRepo::ListRepo>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
