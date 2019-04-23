import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RetrieverService {

  constructor(private httpClient: HttpClient) {

   }

   getAlbums() {
     return this.httpClient.get('https://jsonplaceholder.typicode.com/photos').subscribe(res => {
       console.log('los albumes', res)
     });
   }

}
