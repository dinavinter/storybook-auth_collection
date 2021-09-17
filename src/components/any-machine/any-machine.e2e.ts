import { newE2EPage } from '@stencil/core/testing';

describe('auth-machine', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<auth-machine></auth-machine>');
    const element = await page.find('auth-machine');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<auth-machine></auth-machine>');
    const component = await page.find('auth-machine');
    const element = await page.find('auth-machine >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
