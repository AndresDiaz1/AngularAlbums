import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RetrieverService {

  constructor(private httpClient: HttpClient) {

   }

   getAlbums() {
     return this.httpClient.get('https://jsonplaceholder.typicode.com/photos').subscribe(res => {
       let photoAlbums = [];
       res = res.sort((a, b) => a.albumId - b.albumId);
       photoAlbums = res.filter(album => album.albumId <= 3);
       photoAlbums=photoAlbums.filter(album => album.id <= 2)
       console.log('los albumes', photoAlbums)
     });
   }

}
