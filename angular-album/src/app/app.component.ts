import { Component, OnInit } from '@angular/core';
import { RetrieverService } from  './services/retriever.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  albumList: any[];
  numberOfLastPhotographs: number;
  numberOfRecentAlbums: number;

  constructor(private  httpClient:  HttpClient) { 
    this.albumList = [];
    this.numberOfLastPhotographs = 2;
    this.numberOfRecentAlbums = 3;
  }

  ngOnInit() {
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/photos').subscribe(res => {
       let photoAlbums: any[]  = res;
       photoAlbums = this.orderArray(photoAlbums, 'albumId', 'asc')

       for(let i=0; i<= photoAlbums[photoAlbums.length-1].albumId; i++){
        this.albumList[i] = photoAlbums.filter(album => album.albumId == i);
        this.albumList[i] = this.orderArray( this.albumList[i], 'id', 'desc');
        this.albumList[i]= this.albumList[i].slice(0,this.numberOfLastPhotographs)
       }
       this.albumList = this.orderArray(this.albumList,'albumId', 'desc')
       this.albumList = this.albumList.reverse();
       this.albumList = this.albumList.slice(0,this.numberOfRecentAlbums);
       console.log('los albumecdss', this.albumList)
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



