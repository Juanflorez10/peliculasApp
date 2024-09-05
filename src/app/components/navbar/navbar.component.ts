import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ RouterModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  buscarPelicula( texto: string ){

    texto = texto.trim();

    if ( texto.length === 0 ){
      return;
    }

    this.router.navigate (['/buscar', texto]);

  }

}
