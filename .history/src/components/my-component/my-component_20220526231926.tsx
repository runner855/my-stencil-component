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
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>CoinList</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content padding color="primary">


        <ion-list lines="full">
          {this.users.map(user =>
            <ion-item color="secondary">
              <ion-label>{user.login}</ion-label>
            </ion-item>
          )}
        </ion-list>

      </ion-content>
    )
      < ul >
    {
      this.users.map(user =>
        <li><a href={user.html_url}>{user.logi}</a></li>
      )
    }
      </ >
    )
  }




}

