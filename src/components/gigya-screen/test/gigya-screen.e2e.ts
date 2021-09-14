import { newE2EPage } from '@stencil/core/testing';

describe('gigya-screen', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gigya-screen></gigya-screen>');

    const element = await page.find('gigya-screen');
    expect(element).toHaveClass('hydrated');
  });
});
