import { Injectable } from '@angular/core';

@Injectable()
export class DataParserService {

  numberOfLastPhotographs: number;
  numberOfRecentAlbums: number;

  constructor() { 
    this.numberOfLastPhotographs = 2;
    this.numberOfRecentAlbums = 3;
  }

  getParsedData(data):any[] {
    let photoAlbums: any[]  = data;
    let albumList:any[] = [];
    photoAlbums = this.orderArray(photoAlbums, 'albumId', 'asc')

    for(let i=0; i<= photoAlbums[photoAlbums.length-1].albumId; i++){
      albumList[i] = photoAlbums.filter(album => album.albumId == i);
      albumList[i] = this.orderArray( albumList[i], 'id', 'desc');
      albumList[i]= albumList[i].slice(0,this.numberOfLastPhotographs)
    }
    albumList = this.orderArray(albumList,'albumId', 'desc')
    albumList = albumList.reverse();
    albumList = albumList.slice(0,this.numberOfRecentAlbums);
    console.log('los albumecdss', albumList)
    return albumList;
  }

  orderArray(arr, property, orientation):any[]{
    if(orientation === "asc"){
      return arr.sort((a, b) => a[property] - b[property]);
    }else {
      return arr.sort((a, b) => b[property] - a[property]);
    }
  }

}
