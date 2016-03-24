import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';

@Pipe({
  name: "artist",
  pure: false
})
export class ArtistPipe implements PipeTransform {
  transform(input: Album[], args) {
    var desiredAlbumState = args[0];
    console.log(args[0]);
    if (desiredAlbumState !== "all") {
      return input.filter((album) => {
        return album.artist === args[0];
      })
    }
    else {
      return input;
    }
  }
}
