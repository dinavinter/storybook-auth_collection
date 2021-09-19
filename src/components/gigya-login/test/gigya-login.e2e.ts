import { newE2EPage } from '@stencil/core/testing';

describe('gigya-login', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gigya-login></gigya-login>');

    const element = await page.find('gigya-login');
    expect(element).toHaveClass('hydrated');
  });
});
