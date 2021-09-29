import { newSpecPage } from '@stencil/core/testing';
import { SubscriptionMachine } from '../subscription-machine';

describe('subscription-machine', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SubscriptionMachine],
      html: `<subscription-machine></subscription-machine>`,
    });
    expect(page.root).toEqualHtml(`
      <subscription-machine>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </subscription-machine>
    `);
  });
});
