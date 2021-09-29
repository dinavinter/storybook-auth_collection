import { newE2EPage } from '@stencil/core/testing';

describe('subscription-machine', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<subscription-machine></subscription-machine>');

    const element = await page.find('subscription-machine');
    expect(element).toHaveClass('hydrated');
  });
});
