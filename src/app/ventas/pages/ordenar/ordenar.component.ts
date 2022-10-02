import { Component, OnInit } from '@angular/core';
import { Color, Persona } from '../../interfaces/ventas.interface';
import { OrdenarPipe } from '../../pipes/ordenar.pipe';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent {

  texto: string = 'text mostrar ejemplo';
  ejemploAlter: string = "{{ 'text mostrar ejemplo' | altermayus }}";
  ejemploVolt: string = "{{ 'text mostrar ejemplo | voltext }}";
  ejemploCamel: string = "{{ 'text mostrar ejemplo' | camelcase }}";

  displayMayus: boolean = false;
  funUprer: string = `let res = "";
  let uper = true;
  for ( let i = 0;  i < value.length;  i++ ) {
    if ( uper ) {
      res += value[ i ].toUpperCase();
    } else {
      res += value[ i ];
    }
    uper = !uper;
  }
  return res;`;
  showUper(){
    this.displayMayus = true;
  }

  displayVol: boolean = false;
  funVol = `let res = "";
  for ( let i = 0;  i < value.length;  i++ ) {
    res = value[ i ] + res;
  }
  return res;`
  showVol(){
    this.displayVol = true;
  }

  displayCamel: boolean = false;
  funCame = `value = value.toLowerCase()
  let res = "";
  let espacio = false;
  for ( let i = 0;  i < value.length;  i++ ) {
    if( value[ i ] === " "){
      espacio = true;
    } else {
      if( espacio ){
        res += value[ i ].toUpperCase()
        espacio = false;
      } else {
        res += value[ i ]
      }
    }
  }
  return res;`
  showCamel(){
    this.displayCamel = true;
  }

  alterMayusAct: boolean = false;
  volTextAct:boolean = false;
  camelAct:boolean = false;

  personas: Persona[] = [
    {
      id: 1,
      nombre: 'Luis',
      activo: true,
      color: Color.rosa,
    },
    {
      id: 2,
      nombre: 'Fernando',
      activo: true,
      color: Color.azul,
    },
    {
      id: 3,
      nombre: 'Sara',
      activo: false,
      color: Color.rosa,
    },
    {
      id: 4,
      nombre: 'Coral',
      activo: false,
      color: Color.azul,
    },
    {
      id: 5,
      nombre: 'Noelia',
      activo: false,
      color: Color.negro,
    },
    {
      id: 6,
      nombre: 'Belen',
      activo: true,
      color: Color.rojo,
    },
  ]

  probarAlter(){

    this.alterMayusAct = !this.alterMayusAct;

  }

  probarVol(){

    this.volTextAct = !this.volTextAct;

  }

  probarCamel(){

    this.camelAct = !this.camelAct;

  }


  ordernarPor:string = 'id';
  ordenar: boolean = true;

  iconoPorId: boolean = true;

  ordenarPorId(){

    this.ordernarPor = 'id';
    this.ordenar = this.iconoPorId;
    this.iconoPorId = !this.iconoPorId;

  }

  iconoPorNombre: boolean = true;

  ordenarPorNombre(){

    this.ordernarPor = 'nombre';
    this.ordenar = this.iconoPorNombre;
    this.iconoPorNombre = !this.iconoPorNombre;

  }

  iconoPorNumero: boolean = true;

  ordenarPorNumero(){

    this.ordernarPor = 'color';
    this.ordenar = this.iconoPorNumero;
    this.iconoPorNumero = !this.iconoPorNumero;

  }

  iconoPorValor: boolean = true;

  ordenarPorValor(){

    this.ordernarPor = 'valor';
    this.ordenar = this.iconoPorValor;
    this.iconoPorValor = !this.iconoPorValor;

  }

  mayusNombres: boolean = false

  ponerMayusNombres(){

    this.mayusNombres = !this.mayusNombres;

  }

  displayTabla: boolean = false;

  mostrarInfoTabla(){
    this.displayTabla = true;
  }

  codigoTabla: string = `if( ordenarPor === '*valor*' ) {
    if( activo ){

      personas = personas.sort( function ( a, b ) {
        if ( a.valor > b.valor ) {
          return 1;
        }
        if ( a.valor < b.valor ) {
          return -1;
        }
        return 0;
      });
    } else {
      personas = personas.sort(function (a, b) {
        if ( a.valor > b.valor ) {
          return -1;
        }
        if ( a.valor < b.valor ) {
          return 1;
        }
        return 0;
      });
    }
  };

  return personas;`


}
