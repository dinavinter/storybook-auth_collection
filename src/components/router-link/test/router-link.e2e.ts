import { newE2EPage } from '@stencil/core/testing';

describe('router-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<router-link></router-link>');

    const element = await page.find('router-link');
    expect(element).toHaveClass('hydrated');
  });
});
