import { newSpecPage } from '@stencil/core/testing';
import { AuthMachine } from './auth-machine';

describe('auth-machine', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AuthMachine],
      html: '<auth-machine></auth-machine>',
    });
    expect(root).toEqualHtml(`
      <auth-machine>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </auth-machine>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AuthMachine],
      html: `<auth-machine first="Stencil" last="'Don't call me a framework' JS"></auth-machine>`,
    });
    expect(root).toEqualHtml(`
      <auth-machine first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </auth-machine>
    `);
  });
});
