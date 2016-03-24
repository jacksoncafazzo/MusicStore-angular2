import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'album-display',
  inputs: ['album'],
  template:`
  <div>
  <input *ngIf="album.sold" type="checkbox" checked (click)="toggleSold(false)"/>
  <input *ngIf="!album.sold" type="checkbox" (click)="toggleSold(true)"/>
  </div>
  `
})

export class AlbumComponent {
  public album: Album;
  toggleSold(setState: boolean) {
    this.album.sold = setState;
  }
}
