import { newE2EPage } from '@stencil/core/testing';

describe('gigya-configuration', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gigya-configuration></gigya-configuration>');

    const element = await page.find('gigya-configuration');
    expect(element).toHaveClass('hydrated');
  });
});
