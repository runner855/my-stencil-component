import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';
import { HEROES } from '../../heroes';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  let response = await fetch('https://swapi.dev/api/people');
let json = await response.json();

@State() users: Array<any>;



render() {
  return (
    <h1>Hello</h1>
  )

}






}

