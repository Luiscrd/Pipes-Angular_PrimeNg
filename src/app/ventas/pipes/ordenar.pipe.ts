import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(personas: Persona[], ordenarPor:string = 'id', activo:boolean = false): Persona[] {

    if(ordenarPor === 'id') {
      if(activo){

        personas = personas.sort(function (a, b) {
          if (a.id > b.id) {
            return 1;
          }
          if (a.id < b.id) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      } else {
        personas = personas.sort(function (a, b) {
          if (a.id > b.id) {
            return -1;
          }
          if (a.id < b.id) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });
      }
    };

    if(ordenarPor === 'nombre') {
      if(activo){

        personas = personas.sort(function (a, b) {
          if (a.nombre > b.nombre) {
            return 1;
          }
          if (a.nombre < b.nombre) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      } else {
        personas = personas.sort(function (a, b) {
          if (a.nombre > b.nombre) {
            return -1;
          }
          if (a.nombre < b.nombre) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });
      }
    };

    if(ordenarPor === 'valor') {
      if(activo){

        personas = personas.sort(function (a, b) {
          if (a.activo > b.activo) {
            return 1;
          }
          if (a.activo < b.activo) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      } else {
        personas = personas.sort(function (a, b) {
          if (a.activo > b.activo) {
            return -1;
          }
          if (a.activo < b.activo) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });
      }
    };

    if(ordenarPor === 'color') {
      if(activo){

        personas = personas.sort(function (a, b) {
          if (a.color > b.color) {
            return 1;
          }
          if (a.color < b.color) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
      } else {
        personas = personas.sort(function (a, b) {
          if (a.color > b.color) {
            return -1;
          }
          if (a.color < b.color) {
            return 1;
          }
          // a must be equal to b
          return 0;
        });
      }
    };

    return personas;
  }

}
