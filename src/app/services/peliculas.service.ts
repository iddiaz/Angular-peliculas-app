import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class PeliculasService {

  // https://api.themoviedb.org/3/movie/550?api_key=68a7941b617581624fbc0ccf5b2210f9
  private apiKey: string = '68a7941b617581624fbc0ccf5b2210f9';

  private urlMovieDb: string = 'https://api.themoviedb.org/3';

  constructor(private http: Http) { }

  // url get populares:  /discover/movie?sort_by=popularity.desc
  // https://api.themoviedb.org/3/movie/550?api_key={api_key}&callback=test
  getPopulares() {
    let url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc?&api_key=${this.apiKey}&language=es`;

    // si esto da error es porque la api no hacepta crossdomain y hay que usar jsonp
    // en este caso no da ningun error pero usaremos el otro metodo
    return this.http.get(url)
      .map((res: Response) => {
        return res.json();
      });
     

  }

}
