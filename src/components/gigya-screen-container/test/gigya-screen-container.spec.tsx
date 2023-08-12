import { newSpecPage } from '@stencil/core/testing';
import { GigyaScreenContainer } from '../gigya-screen-container';

describe('gigya-screen-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GigyaScreenContainer],
      html: `<gigya-screen-container></gigya-screen-container>`,
    });
    expect(page.root).toEqualHtml(`
      <gigya-screen-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gigya-screen-container>
    `);
  });
});
