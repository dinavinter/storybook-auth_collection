import { newSpecPage } from '@stencil/core/testing';
import { GigyaConfiguration } from '../gigya-configuration';

describe('gigya-configuration', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GigyaConfiguration],
      html: `<gigya-configuration></gigya-configuration>`,
    });
    expect(page.root).toEqualHtml(`
      <gigya-configuration>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gigya-configuration>
    `);
  });
});
