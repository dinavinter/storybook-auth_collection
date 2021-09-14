import { newSpecPage } from '@stencil/core/testing';
import { GigyaScreen } from '../gigya-screen';

describe('gigya-screen', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GigyaScreen],
      html: `<gigya-screen></gigya-screen>`,
    });
    expect(page.root).toEqualHtml(`
      <gigya-screen>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gigya-screen>
    `);
  });
});
