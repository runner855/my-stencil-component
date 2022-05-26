import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';
import { HEROES } from '../../heroes';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @State() users: Array<any>;

  render() {
    return (
      <ul>
        {this.users.map(user =>
          <li><a href={user.html_url}>{user.logi}</a></li>
        )}
      </ul>
    )
  }




}

