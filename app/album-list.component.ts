import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';
import { ArtistPipe } from './artist.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'], // we use this array below in directive
  outputs: ['onAlbumSelect'], //output to create custom event emitter
  pipes: [ArtistPipe],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
    <option *ngFor="#album of albumList" value="{{ album.artist }}">{{ album.artist }}</option>
  </select>
  <div *ngFor="#album of albumList | artist:filterArtist">
    <h3>{{ album.name }} : {{ album.artist }} \${{ album.price }}</h3>
    <h4>{{ album.genre }}</h4>
  </div>
  `
})

export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  public filterArtist: string = "all";
  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }
  albumClicked(clickedAlbum: Album): void {
    console.log(clickedAlbum, 'child');
    this.selectedAlbum = clickedAlbum;
    this.onAlbumSelect.emit(clickedAlbum);
  }
  onChange(filterOption) {
    this.filterArtist = filterOption;
  }
}
