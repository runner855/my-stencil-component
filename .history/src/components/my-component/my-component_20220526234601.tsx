
import { Component, State } from '@stencil/core';
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @State() name: string;

  componentWillLoad() {
    fetch('https://swapi.dev/api/people')
      .then((response: Response) => response.json())
      .then(response => {
        this.name = response['name'];
      });
  }






  render() {
    return (
      <h1>Hello</h1>
    )

  }






}

