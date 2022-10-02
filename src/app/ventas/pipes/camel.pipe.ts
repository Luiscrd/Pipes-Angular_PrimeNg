import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'camelcase' })
export class CamelCasePipe implements PipeTransform {
  transform(value: string, activo:boolean): string {
    console.log(value.length);

    value = value.toLowerCase()
    let res = '';
    let espacio = false;
    for (let i = 0; i < value.length; i++) {
      if(value[i] === ' '){
        espacio = true
      } else {
        if(espacio){
          res += value[i].toUpperCase()
          espacio = false;
        } else {
          res += value[i]
        }
      }
    }
    if(activo){
      return res;
    } else {
      return value;
    }

  }

}
