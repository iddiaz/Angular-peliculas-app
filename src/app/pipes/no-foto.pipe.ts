import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noFoto'
})
export class NoFotoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if ( /null/.test(value) ) {
      return 'assets/img/nofoto.jpg';
    } else if ( /undefined/.test(value) ) {
        return 'assets/img/cargando.gif';
    } else {

     return value;
    }
  }

}
