import { newE2EPage } from '@stencil/core/testing';

describe('gigya-screen-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gigya-screen-container></gigya-screen-container>');

    const element = await page.find('gigya-screen-container');
    expect(element).toHaveClass('hydrated');
  });
});
