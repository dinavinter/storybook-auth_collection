import { newE2EPage } from '@stencil/core/testing';

describe('gigya-store', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gigya-store></gigya-store>');

    const element = await page.find('gigya-store');
    expect(element).toHaveClass('hydrated');
  });
});
