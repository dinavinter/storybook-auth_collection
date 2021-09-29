import { newE2EPage } from '@stencil/core/testing';

describe('cmp-machine', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cmp-machine></cmp-machine>');

    const element = await page.find('cmp-machine');
    expect(element).toHaveClass('hydrated');
  });
});
