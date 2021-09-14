import { newSpecPage } from '@stencil/core/testing';
import { GigyaSdkStore } from '../gigya-sdk-store';

describe('gigya-sdk-store', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GigyaSdkStore],
      html: `<gigya-sdk-store></gigya-sdk-store>`,
    });
    expect(page.root).toEqualHtml(`
      <gigya-sdk-store>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gigya-sdk-store>
    `);
  });
});
