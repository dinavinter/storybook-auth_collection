import { newSpecPage } from '@stencil/core/testing';
import { RouterLink } from '../router-link';

describe('router-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RouterLink],
      html: `<router-link></router-link>`,
    });
    expect(page.root).toEqualHtml(`
      <router-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </router-link>
    `);
  });
});
