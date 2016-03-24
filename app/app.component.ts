import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Music Store</h1>
    <div *ngFor="#album of albums">
      <h3>{{ album.name }} : {{ album.artist }} \${{ album.price }}</h3>
      <h4>{{ album.genre }}</h4>
    </div>
  </div>
  `
})

export class AppComponent {
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album("Houses of the Holy", "Led Zepplin", 1, "Rock"),
      new Album("The Big Roar", "Joy Formidable", 10, "Indie"),
      new Album("Built on Glass", "Chet Faker", 10, "Australian")
    ]
  }
}
