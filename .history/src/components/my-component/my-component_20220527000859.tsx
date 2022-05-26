
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
    fetch('https://swapi.dev/api/people/1')
      .then((response: Response) => response.json())
      .then(response => {
        console.log(response.results[0].title)

        this.results = response.results[0].title;
      });
  }






  render() {
    return [
      <ul>
        <li><p>{this.results}</p></li>
      </ul>
    ]

  }






}

