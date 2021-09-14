import { newE2EPage } from '@stencil/core/testing';

describe('gigya-screen-router', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gigya-screen-router></gigya-screen-router>');

    const element = await page.find('gigya-screen-router');
    expect(element).toHaveClass('hydrated');
  });
});
