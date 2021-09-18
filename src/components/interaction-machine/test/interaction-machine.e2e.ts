import { newE2EPage } from '@stencil/core/testing';

describe('interaction-machine', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<interaction-machine></interaction-machine>');

    const element = await page.find('interaction-machine');
    expect(element).toHaveClass('hydrated');
  });
});
