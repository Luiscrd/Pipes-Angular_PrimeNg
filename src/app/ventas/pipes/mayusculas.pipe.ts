import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'altermayus' })
export class MayusculasPipe implements PipeTransform {
  transform(value: string, activo:boolean): string {

    let res = '';
    let uper = true;
    for (let i = 0; i < value.length; i++) {
      if (uper) {
        res += value[i].toUpperCase();
      } else {
        res += value[i];
      }
      uper = !uper;
    }
    if(activo){
      return res;
    } else {
      return value;
    }

  }

}
