import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { PeliculasService } from './services/peliculas.service';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';

import { PagesModule } from './pages/pages.module';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    PagesModule
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
