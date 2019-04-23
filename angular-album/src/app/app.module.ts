import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AlbumComponent } from './components/album/album.component';
import { RetrieverService } from './services/retriever.service';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [RetrieverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
