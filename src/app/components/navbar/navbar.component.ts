import { Router } from '@angular/router';
import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  texto: string;
  buscarTexto: string;

  constructor(private _ps: PeliculasService, private router: Router ) { }

  ngOnInit() {}

  buscarPelicula( termino: string ) {

    if (termino) {
      this.router.navigate(['/buscar', termino ]);
      this.texto = '';
      
    }


  }
}
