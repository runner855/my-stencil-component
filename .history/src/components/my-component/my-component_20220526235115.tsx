
import { Component, h, State } from '@stencil/core';
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @State() name: string;
  count: any;

  componentWillLoad() {
    fetch('https://swapi.dev/api/people')
      .then((response: Response) => response.json())
      .then(response => {
        console.log('hello')

        this.name = response['count'];
      });
  }






  render() {
    return [
      <ul>
        <li>{this.name}</li>
      </ul>
    ]

  }






}

