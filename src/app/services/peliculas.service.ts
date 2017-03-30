import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
// import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class PeliculasService {

   peliculas: any[] = [];
   pelicula: any = {};

  // https://api.themoviedb.org/3/movie/550?api_key=68a7941b617581624fbc0ccf5b2210f9
  private apiKey = '68a7941b617581624fbc0ccf5b2210f9';

  private urlMovieDb = 'https://api.themoviedb.org/3';

  constructor(private jsonp: Jsonp) { }



  // url get populares:  /discover/movie?sort_by=popularity.desc
  // https://api.themoviedb.org/3/movie/550?api_key={api_key}&callback=test
  getCartelera () {

    let desde = new Date();
    let hasta = new Date();
    hasta.setDate( hasta.getDate() + 7);
    
    let desdeStr = `${ desde.getFullYear() }-${ desde.getMonth() + 1}-${desde.getDate() }`;
    let hastaStr = `${ hasta.getFullYear() }-${ hasta.getMonth() + 1}-${hasta.getDate() }`;

    let url = `${this.urlMovieDb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}?&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
      .map( (res: Response) => {
        console.log(res.json());
        return res.json();
      });
  }

  getPopulares() {
    let url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc?&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    // si esto da error es porque la api no hacepta crossdomain y hay que usar jsonp
    // en este caso no da ningun error pero usaremos el otro metodo
    return this.jsonp.get( url )
      .map( ( res: Response ) => {
        return res.json();
      });

  }

  getPopularesNinos() {
    let url = `${this.urlMovieDb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc?&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get( url )
      .map((res: Response) => {
        return res.json();
      });

  }

  

  buscarPelicula( termino: string ) {

    let url = `${this.urlMovieDb}/search/movie?query=${termino}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    
    return this.jsonp.get( url )
      .map( (res: Response ) => {
        this.peliculas = res.json().results;
        console.log(this.peliculas);      
        return res.json().results;
      });

  }

  // https://api.themoviedb.org/3/movie/268?api_key=68a7941b617581624fbc0ccf5b2210f9
  getPelicula( id: string ) {    
    let url = `${this.urlMovieDb}/movie/${id}?api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;   
    
    return this.jsonp.get( url )
      .map( (res: Response ) => {
        return res.json();   
    }); 
  }





}
