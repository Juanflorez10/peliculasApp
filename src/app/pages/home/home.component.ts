import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { SlideshowComponent } from '../../components/slideshow/slideshow.component';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';
import { NgIf } from '@angular/common';
import { PeliculasPosterGridComponent } from '../../components/peliculas-poster-grid/peliculas-poster-grid.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, SlideshowComponent, PeliculasPosterGridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movie[] = []
  public moviesSlideShow: Movie[] = []

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if(pos > max) {

      if(this.peliculasServices.cargando) {
        return;
      }

      // console.log("llamar servicio");
      this.peliculasServices.getCartelera().subscribe( movies => {

        this.movies.push(...movies);

      });
    }


  }

  constructor( private peliculasServices: PeliculasService ) {}

  ngOnInit(): void {

    this.peliculasServices.getCartelera()
        .subscribe( movies => {
            // console.log(resp.results);
            this.movies = movies;
            this.moviesSlideShow = movies;


        });
  }

  ngOnDestroy(): void {

    this.peliculasServices.resetCarteleraPage();
  }

}
