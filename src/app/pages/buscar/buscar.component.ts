import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';
import { PeliculasPosterGridComponent } from '../../components/peliculas-poster-grid/peliculas-poster-grid.component';


@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [ PeliculasPosterGridComponent ],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent implements OnInit {

  public text: string = "";

  public movies: Movie[] = [];

  constructor( private activaredRoute: ActivatedRoute,
              private peliculasServices: PeliculasService,
   ) { }

  ngOnInit(): void {

    this.activaredRoute.params.subscribe( params => {

      this.text = params ["texto"];

      this.peliculasServices.buscarPeliculas( params ["texto"] ).subscribe( movies => {

        this.movies = movies;
      })
    })

  }

}
