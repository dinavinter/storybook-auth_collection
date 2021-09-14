import { newSpecPage } from '@stencil/core/testing';
import { GigyaScreenRouter } from '../gigya-screen-router';

describe('gigya-screen-router', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GigyaScreenRouter],
      html: `<gigya-screen-router></gigya-screen-router>`,
    });
    expect(page.root).toEqualHtml(`
      <gigya-screen-router>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gigya-screen-router>
    `);
  });
});
