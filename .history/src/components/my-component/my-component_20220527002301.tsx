
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
    fetch('https://swapi.dev/api/people')
      .then((response: Response) => response.json())
      .then(response => {

        console.log("here", response.results)



        this.name = response.results;

      });
  }






  render() {
    return [
      <ion-list >
        <ion-item>
          <ion-label>{this.name}</ion-label>
        </ion-item>

      </ion-list >
    ]

  }






}

