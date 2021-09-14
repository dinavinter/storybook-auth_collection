import { newE2EPage } from '@stencil/core/testing';

describe('gigya-sdk-store', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gigya-sdk-store></gigya-sdk-store>');

    const element = await page.find('gigya-sdk-store');
    expect(element).toHaveClass('hydrated');
  });
});
