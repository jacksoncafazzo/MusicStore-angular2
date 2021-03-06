import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';
import { AlbumListComponent } from './album-list.component';

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
  <div class="container">
    <h1>Music Store</h1>
    <hr>
    <album-list [albumList]="albums" (onAlbumSelect)="albumWasSelected($event)">
    </album-list>
  </div>
  `
})

export class AppComponent {
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album("Houses of the Holy", "Led Zepplin", 1, "Rock"),
      new Album("The Big Roar", "Joy Formidable", 10, "Indie"),
      new Album("Built on Glass", "Chet Faker", 10, "Australian"),
      new Album("Flume", "Flume", 10, "Australian"),
      new Album("The Song Remains the Same", "Led Zepplin", 1, "Rock"),
      new Album("Chet Faker", "Chet Faker", 7, "Soul")
    ]
  }
  albumWasSelected(clickedAlbum: Album): void {
    console.log(clickedAlbum, 'parent');
  }
}
