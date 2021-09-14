import { newSpecPage } from '@stencil/core/testing';
import { LoadingMachine } from '../loading-machine';

describe('loading-machine', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LoadingMachine],
      html: `<loading-machine></loading-machine>`,
    });
    expect(page.root).toEqualHtml(`
      <loading-machine>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </loading-machine>
    `);
  });
});
