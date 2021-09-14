import { newSpecPage } from '@stencil/core/testing';
import { GigyaScreenPopover } from '../gigya-screen-popover';

describe('gigya-screen-popover', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GigyaScreenPopover],
      html: `<gigya-screen-popover></gigya-screen-popover>`,
    });
    expect(page.root).toEqualHtml(`
      <gigya-screen-popover>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gigya-screen-popover>
    `);
  });
});
