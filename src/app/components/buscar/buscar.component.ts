import { Router, ActivatedRoute } from '@angular/router';
import { PeliculasService } from './../../services/peliculas.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  buscar: string = '';
  peliculas: any;
  
  constructor(private peliculasService: PeliculasService, 
              private router: Router,
              private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe( parametros => {
      console.log(parametros);
       if (parametros['texto']) {
         this.buscar = parametros ['texto'];
          this.buscarPelicula();
       }
    });
  }

  buscarPelicula( ) {
    if (this.buscar.length === 0 ) {
      return;
    }
    this.peliculasService.buscarPelicula( this.buscar ).subscribe();
    
  }



}
