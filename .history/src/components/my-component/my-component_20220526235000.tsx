
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
        this.name = response['count'];
      });
  }
console.log('hello')





  render() {
    return [
      <ul>
        <li>{this.count}</li>
      </ul>
    ]

  }






}

