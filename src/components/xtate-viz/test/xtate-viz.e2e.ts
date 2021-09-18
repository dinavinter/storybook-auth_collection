import { newE2EPage } from '@stencil/core/testing';

describe('xtate-viz', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xtate-viz></xtate-viz>');

    const element = await page.find('xtate-viz');
    expect(element).toHaveClass('hydrated');
  });
});
