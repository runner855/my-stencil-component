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

  componentWillLoad() {
    let url = 'https://api.github.com/users';
    fetch(url).then(response => {
      response.json().then(json => {
        this.users = json;
        console.log(this.users)
      });
    });
  }

  render() {
    return (
      console.log(HEROES)
      < ul >
        <li>HELLO</li>
        <li>hello</li>
        <li>hello</li>
        <li>hello</li>
      </ul >
    )
  }






}

