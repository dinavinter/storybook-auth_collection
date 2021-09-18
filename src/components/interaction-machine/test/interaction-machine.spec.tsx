import { newSpecPage } from '@stencil/core/testing';
import { InteractionMachine } from '../interaction-machine';

describe('interaction-machine', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InteractionMachine],
      html: `<interaction-machine></interaction-machine>`,
    });
    expect(page.root).toEqualHtml(`
      <interaction-machine>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </interaction-machine>
    `);
  });
});
