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
  urlImg500 = `https://image.tmdb.org/t/p/w500/`;
  paramUrl: string;

  constructor( private activatedRoute: ActivatedRoute,
               private peliculasService: PeliculasService,
               private router: Router ) {
   

    this.activatedRoute.params.subscribe( param => {
        this.peliculasService.getPelicula(param['id']).subscribe( data => {
           this.paramUrl = param['id'];
          // console.log( 'Y el parametro es: ', this.paramUrl);
          this.pelicula = data;
          // console.log(this.pelicula);
        });
      
    });
  }

  volver() {
    
    this.activatedRoute.parent.params.subscribe( parametros => {
      console.log(parametros);
    })
  }




}
