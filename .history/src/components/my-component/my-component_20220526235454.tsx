
import { Component, h, State } from '@stencil/core';
@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @State() name: string;
  count: any;
  results: any;

  componentWillLoad() {
    fetch('https://swapi.dev/api/films')
      .then((response: Response) => response.json())
      .then(response => {
        console.log(response)

        this.results = response;
      });
  }






  render() {
    return [
      <ul>
        <li>{this.results}</li>
      </ul>
    ]

  }






}

