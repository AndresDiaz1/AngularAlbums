import { Component, OnInit } from '@angular/core';
import { RetrieverService } from  './services/retriever.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private  httpClient:  HttpClient) { 
  }
  albumList;

  ngOnInit() {
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/photos').subscribe(res => {
       let photoAlbums: any[]  = res;
       const orderedPhotoAlbums: any[] = [];
       photoAlbums = this.orderArray(photoAlbums, 'albumId', 'asc')

       for(let i=0; i<= photoAlbums[photoAlbums.length-1].albumId; i++){
        orderedPhotoAlbums[i] = photoAlbums.filter(album => album.albumId == i);
        orderedPhotoAlbums[i] = this.orderArray( orderedPhotoAlbums[i], 'id', 'desc');
       }
       console.log('los albumes', orderedPhotoAlbums)
     })
  }

  orderArray(arr, property, orientation):any[]{
    if(orientation === "asc"){
      return arr.sort((a, b) => a[property] - b[property]);
    }else {
      return arr.sort((a, b) => b[property] - a[property]);
    }
  }

}



