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
    <option *ngFor="#genre of genreList" value="{{ genre }}">{{ genre }}</option>
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
  public genreList: string[] = [];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  public filterArtist: string = "all";
  public filterGenre: string = "all";
  constructor() {
    this.onAlbumSelect = new EventEmitter();
  }
  ngOnInit() {
    var artistList = this.artistList;
    var albumList = this.albumList;
    var genreList = this.genreList;
    this.albumList.forEach(function(album){
      var found = false;
      for (var i = 0; i < artistList.length && !found; i++){
        if(artistList[i] === album.artist) {
          found = true;
        }
      }
      if (found === false) {
        artistList.push(album.artist);
      }
    });
    // Load list of genre's on load
    this.albumList.forEach(function(album){
      var found = false;
      for (var i = 0; i < genreList.length && !found; i++){
        if(genreList[i] === album.genre) {
          found = true;
        }
      }
      if (found === false) {
        genreList.push(album.genre);
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
