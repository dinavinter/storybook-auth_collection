import { newSpecPage } from '@stencil/core/testing';
import { CmpMachine } from '../cmp-machine';

describe('cmp-machine', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CmpMachine],
      html: `<cmp-machine></cmp-machine>`,
    });
    expect(page.root).toEqualHtml(`
      <cmp-machine>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cmp-machine>
    `);
  });
});
