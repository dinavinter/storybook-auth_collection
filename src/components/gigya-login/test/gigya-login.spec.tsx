import { newSpecPage } from '@stencil/core/testing';
import { GigyaLogin } from '../gigya-login';

describe('gigya-login', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GigyaLogin],
      html: `<gigya-login></gigya-login>`,
    });
    expect(page.root).toEqualHtml(`
      <gigya-login>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gigya-login>
    `);
  });
});
