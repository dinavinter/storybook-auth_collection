import { newSpecPage } from '@stencil/core/testing';
import { XtateViz } from '../xtate-viz';

describe('xtate-viz', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XtateViz],
      html: `<xtate-viz></xtate-viz>`,
    });
    expect(page.root).toEqualHtml(`
      <xtate-viz>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xtate-viz>
    `);
  });
});
