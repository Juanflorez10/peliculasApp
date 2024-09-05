import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import { CommonModule, NgFor } from '@angular/common';
import { PosterPipe } from '../../pipes/poster.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-poster-grid',
  standalone: true,
  imports: [NgFor, CommonModule, PosterPipe ],
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrl: './peliculas-poster-grid.component.css'
})
export class PeliculasPosterGridComponent implements OnInit{

  @Input() movies: Movie[] = [];

  constructor( private router:Router ) { }

  ngOnInit(): void {
    // console.log(this.movies);
  }


  onMovieClick( movie: Movie ) {
    // console.log(movie);

    this.router.navigate(['/pelicula', movie.id]);
  }

}
