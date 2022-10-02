import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'voltext' })
export class VolText implements PipeTransform {
  transform(value: string, activo:boolean): string {

    let res = '';
    for (let i = 0; i < value.length; i++) {
      res = value[i] + res;
    }
    if(activo){
      return res;
    } else {
      return value;
    }

  }

}
