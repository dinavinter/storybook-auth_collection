import { newE2EPage } from '@stencil/core/testing';

describe('gigya-screen-popover', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gigya-screen-popover></gigya-screen-popover>');

    const element = await page.find('gigya-screen-popover');
    expect(element).toHaveClass('hydrated');
  });
});
