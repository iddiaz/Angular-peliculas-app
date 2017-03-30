import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notexto',
  pure: false
})
export class NotextoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if( value === null ) {
      return 'Esta pelicula no contiene ninguna descripción';
    }

    return value;
  }

}
