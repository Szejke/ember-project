import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | atoms/paragraphs/default-text', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Atoms::Paragraphs::DefaultText />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Atoms::Paragraphs::DefaultText>
        template block text
      </Atoms::Paragraphs::DefaultText>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
