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
    if (desiredAlbumState === "Led Zepplin") {
      return input.filter((album) => {
        return album.artist === "Led Zepplin";
      })
    }
    else if (desiredAlbumState === "Joy Formidable") {
      return input.filter((album) => {
        return album.artist === "Joy Formidable";
      })
    }
    else if (desiredAlbumState === "Chet Faker") {
      return input.filter((album) => {
        return album.artist === "Chet Faker";
      })
    }
    else {
      return input;
    }
  }
}
