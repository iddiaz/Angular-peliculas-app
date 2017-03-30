import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cartelera: any[];
  peliculas: any[] = [];
  urlImg300 = `https://image.tmdb.org/t/p/w300/`;



  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {

    this.peliculasService.getCartelera().subscribe( data => {
      // console.log('cartelera', data);
      this.cartelera = data.results;
    });

    this.peliculasService.getPopulares().subscribe( data => {
      console.log(data.results);
      this.peliculas = data.results;
    });


  }

}
