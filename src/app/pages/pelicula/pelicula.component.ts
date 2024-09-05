import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { MovieResponse } from '../../interfaces/movie-response';
import { CommonModule, NgIf } from '@angular/common';
import { PosterPipe } from '../../pipes/poster.pipe';
import { Location } from '@angular/common';
import { Cast } from '../../interfaces/credits-response';
import { CastSlideshowComponent } from '../../components/cast-slideshow/cast-slideshow.component';
import { combineLatest } from 'rxjs';



@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [ NgIf, PosterPipe, CommonModule, CastSlideshowComponent],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent implements OnInit{

  public pelicula!: MovieResponse;
  public cast: Cast [] = [];

  constructor( private activated: ActivatedRoute,
              private peliculaServices: PeliculasService,
              private location: Location,
              private router: Router ) {}


  ngOnInit(): void {

    const {id} = this.activated.snapshot.params;

    combineLatest([
      this.peliculaServices.getPeliculaDetalle(id),
      this.peliculaServices.getCast(id)
    ]).subscribe(([pelicula, cast]) => {

      if (!pelicula) {
        this.router.navigateByUrl('/home');
        return;
      }

      this.pelicula = pelicula;
      this.cast = cast.filter(actor => actor.profile_path !== null);
    });

    // this.peliculaServices.getPeliculaDetalle(id).subscribe( movie => {
      // if ( !movie ) {
      //   this.router.navigateByUrl('/home');
      //   return;
      // }

    //   this.pelicula = movie;
    // });

    // this.peliculaServices.getCast(id).subscribe( cast => {
    //   console.log(cast);
    //   this.cast = cast.filter( actor => actor.profile_path !== null);
    // });

  }

  onRegresar(){
    this.location.back();
  }

}
