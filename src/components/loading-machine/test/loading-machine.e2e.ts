import { newE2EPage } from '@stencil/core/testing';

describe('loading-machine', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<loading-machine></loading-machine>');

    const element = await page.find('loading-machine');
    expect(element).toHaveClass('hydrated');
  });
});
