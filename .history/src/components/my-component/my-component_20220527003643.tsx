
import { Component, h, State } from '@stencil/core';
import { map } from 'rxjs/operators';
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
    fetch('https://swapi.dev/api/people')
      .then((response: Response) => response.json())
      .then(response => {

        console.log("here", response.results)



        this.name = response['name'];



      });
  }






  render() {
    return (
      <ul>
        <li>{this.name}</li>
      </ul>

    )

  }






}

