import { Router, ActivatedRoute } from '@angular/router';
import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  texto: string;
  peliculas: any;
  
  urlImg500 = `https://image.tmdb.org/t/p/w500/`;

  constructor(private peliculasService: PeliculasService, 
              private router: Router,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      if (params['termino']) {
         this.peliculasService.buscarPeliculas( params['termino']).subscribe();
      }
    });
  }

  buscarPelicula( text ) {
    this.peliculasService.buscarPeliculas( text ).subscribe();
    this.texto = '';
  }

  verDetalles( id ) {
    this.router.navigate(['/pelicula', id]);
  }


}
