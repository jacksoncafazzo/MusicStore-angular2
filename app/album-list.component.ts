import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';
import { ArtistPipe } from './artist.pipe';
import { GenrePipe } from './genre.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'], // we use this array below in directive
  outputs: ['onAlbumSelect'], //output to create custom event emitter
  pipes: [ArtistPipe, GenrePipe],
  template: `
  <select (change)="onArtistChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
    <option *ngFor="#artist of artistList" value="{{ artist }}">{{ artist }}</option>
  </select>
  <select (change)="onGenreChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
    <option *ngFor="#album of albumList" value="{{ album.genre }}">{{ album.genre }}</option>
  </select>
  <div *ngFor="#album of albumList | artist:filterArtist | genre:filterGenre">
    <h3>{{ album.name }} : {{ album.artist }} \${{ album.price }}</h3>
    <h4>{{ album.genre }}</h4>
  </div>
  `
})

export class AlbumListComponent {
  public albumList: Album[]; // These are properties.
  public artistList: string[] = [];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  public filterArtist: string = "all";
  public filterGenre: string = "all";
  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }
  ngOnInit() {
    console.log(this.albumList);
    var artistList = this.artistList;
    var albumList = this.albumList;

    this.albumList.forEach(function(album){
      var found = false;
      console.log(artistList);
      for (var i = 0; i < artistList.length && !found; i++){
        if(artistList[i] === album.artist) {
          console.log(artistList[i]);
          console.log(album.artist);
          found = true;
        }
      }
      if (found === false) {
        artistList.push(album.artist);
      }
    });
  }
  albumClicked(clickedAlbum: Album): void {
    this.selectedAlbum = clickedAlbum;
    this.onAlbumSelect.emit(clickedAlbum);
  }
  onArtistChange(filterOption) {
    this.filterArtist = filterOption;
  }
  onGenreChange(filterOption) {
    this.filterGenre = filterOption;
  }
}
