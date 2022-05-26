import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @Prop() name: string;



  /**
   * The middle name
   */
  @Prop() middlename: string;

  /**
   * The last name
   */
  @Prop() lastname: string;

  private getText(): string {
    return format(this.name, this.middlename, this.lastname);
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}
