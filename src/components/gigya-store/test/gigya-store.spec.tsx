import { newSpecPage } from '@stencil/core/testing';
import { GigyaStore } from '../gigya-store';

describe('gigya-store', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GigyaStore],
      html: `<gigya-store></gigya-store>`,
    });
    expect(page.root).toEqualHtml(`
      <gigya-store>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gigya-store>
    `);
  });
});
