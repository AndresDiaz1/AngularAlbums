import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RetrieverService {

  constructor(private httpClient: HttpClient) {

   }

   getAlbums(): Observable<any> {
     return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/photos');
   }

}
