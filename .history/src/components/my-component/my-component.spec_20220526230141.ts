import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './my-component';

describe('my-component', () => {
  xit('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<my-component></my-component>',
    });
    expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-component>
    `);
  });

  xit('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<my-component name="Dario" lastname="Milani"></my-component>`,
    });
    expect(root).toEqualHtml(`
      <my-component name="Dario" lastname="Milani">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Dario Milani
        </mock:shadow-root>
      </my-component>
    `);
  });
});
