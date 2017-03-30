import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera: any;
  populares: any;
  popularesNinos: any;
  
  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {

    this.peliculasService.getCartelera().subscribe( data => this.cartelera = data.results );

    this.peliculasService.getPopulares().subscribe( data => this.populares = data.results );

    this.peliculasService.getPopularesNinos().subscribe( data => this.popularesNinos = data.results );

  }

}
