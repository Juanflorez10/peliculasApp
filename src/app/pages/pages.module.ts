import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { CastSlideshowComponent } from '../components/cast-slideshow/cast-slideshow.component';





@NgModule({
  declarations: [
    HomeComponent,
    PeliculaComponent,
    BuscarComponent,
    CastSlideshowComponent,

  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    CastSlideshowComponent,

  ],

})
export class PagesModule { }
