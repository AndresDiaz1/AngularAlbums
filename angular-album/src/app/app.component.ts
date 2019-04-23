import { Component, OnInit } from '@angular/core';
import { RetrieverService } from  './services/retriever.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private  retriever:  RetrieverService) { 
  }
  title = 'app';

  ngOnInit() {
    this.retriever.getAlbums();
  }

}



