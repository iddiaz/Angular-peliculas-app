import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
 
  pelicula: any = {};
  regresarA: string = '';
  busqueda: string = '';

  constructor( private activatedRoute: ActivatedRoute,
               private peliculasService: PeliculasService,
               private router: Router ) {
   

    this.activatedRoute.params.subscribe( parametros => {
      console.log(parametros);
      this.regresarA = parametros['pag'];

      if( parametros['busqueda']) {
        this.busqueda = parametros['busqueda'];
      }

      this.peliculasService.getPelicula(parametros['id'])
        .subscribe( pelicula =>  this.pelicula = pelicula );
      
    });
  }






}
