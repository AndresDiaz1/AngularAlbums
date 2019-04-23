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
    this.httpClient.get('https://jsonplaceholder.typicode.com/photos').subscribe(res => {
       let photoAlbums = [];
       res = res.sort((a, b) => a.albumId - b.albumId);
       photoAlbums = res.filter(album => album.albumId <= 3);
       photoAlbums=photoAlbums.filter(album => album.id <= 2);
       this.albumList = photoAlbums;
       console.log('los albumes', photoAlbums)
     })
  }

}



