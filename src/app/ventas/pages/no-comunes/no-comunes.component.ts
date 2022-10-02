import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  nombre: string = 'Luis';
  genero: string = 'masculino';
  nombre2: string = 'Sara';
  genero2: string = 'femenino';
  nombre3: string = 'Coral'
  genero3: string = 'femenino2';
  mapa: string = "invitacionMapa = {'masculino' : 'invitarlo','femenio' : 'invitarla', 'femenino2': 'guapa'}";
  ejemplo1: string = "{{ nombre }} = ' Luis ' - {{ genero }} = ' masculino '";
  ejemplo2: string = "{{ nombre2 }} = ' Sara ' - {{ genero2 }} = ' femenino '";
  ejemplo3: string = "{{ nombre3 }} = ' Coral ' - {{ genero3 }} = ' femenino2 '";
  resEjemplo1: string = "Saludos {{ nombre }} es un placer invitarl{{ genero | i18nSelect:invitacionMapa }} a nuerto evento.";
  resEjemplo2: string = "Saludos {{ nombre2 }} es un placer invitarl{{ genero2 | i18nSelect:invitacionMapa }} a nuerto evento.";
  resEjemplo3: string = "Hola {{ nombre3 }}, estas muy {{ genero3 | i18nSelect:invitacionMapa }} ultimamente.";
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
    'femenino2': 'guapa'
  }

  clientes1: string[] = [];
  clientes2: string[] = ['Luis'];
  clientes3: string[] = ['Luis', 'Fernando'];
  resClientesEjemplo1: string = "Actualmente {{ clientes1.length | i18nPlural:clientesMapa }} esperando para entrar.";
  resClientesEjemplo2: string = "Actualmente {{ clientes3.length | i18nPlural:clientesMapa }} esperando para entrar.";
  resClientesEjemplo3: string = "Actualmente {{ clientes3.length | i18nPlural:clientesMapa }} esperando para entrar.";
  mapaClientes: string = "clientesMapa = {'=0': 'no tenemos clientes', '=1': 'tenemos ?? cliente', 'other': 'tenemos ?? clientes'}";
  clientesEjempo1: string = "clientes1: string[] = []";
  clientesEjempo2: string = "clientes2: string[] = ['Luis']";
  clientesEjempo3: string = "clientes3: string[] = ['Luis', 'Fernando']";
  clientesMapa = {
    '=0': 'no tenemos clientes',
    '=1': 'tenemos # cliente',
    'other': 'tenemos # clientes',
  };

  listaSplice: string[] = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco'];
  listaSpliceEjemplo: string = "listaSplice: string[] = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco'];";
  listaSpiceEjempo1: string = "La lista recortada del primero( 0 ) al segundo ( 2 - no incluido ) es: ' {{ listaSplice | slice:0:2 }} '"
  listaSpiceEjempo2: string = "La lista recortada del segundo( 1 ) al tercero ( 3 - no incluido ) es: ' {{ listaSplice | slice:1:3 }} '"
  listaSpiceEjempo3: string = "La lista recortada del tercero( 3 ) al ultimo ( listaSplice.length+1 ) es: ' {{ listaSplice | slice:3:listaSplice.length+1  }} '"

  objeto = {
    nombre: 'Luis',
    edad: 35,
    trabajo: 'FullStack',
    idioma: 'Español',
    estado: 'soltero',
  }

  objetoString: string = "objeto = { nombre: 'Luis', edad: 35, trabajo: 'FullStack', idioma: 'Español', estado: 'soltero' }";

  objetoEjemplo: string = `<p *ngFor="let elemento of objeto | keyvalue">{{ elemento.key }} : {{ elemento.value }}</p>`


  objetoJson = {
    personas: {
      luis: {
        nombre: 'Luis',
        edad: 35,
        trabajo: 'FullStack'
      },
      fernando: {
        nombre: 'Fernando',
        edad: 37,
        trabajo: 'FullStack'
      }
    }
  }

  objetoJsonString: string = "objetoJson = { personas: { luis: { nombre: 'Luis', edad: 35, trabajo: 'FullStack' }, fernando: { nombre: 'Fernando', edad: 37, trabajo: 'Profesor' } } }";

  ejemploJson: string = "El onjeto con el json-pipe se ve de está manera : <pre>{{ objetoJson | json }}</pre>"

  miObservable = interval(1000);
  miObservableStrig: string = ' miObservable = interval(1000)';
  ejemploOservable = "El resultado de usar este pipe es: {{ miObservable | async }}"

  valorPromesa = new Promise( (resolve, reject) => { setTimeout(() => { resolve( 'Tenemos data de pronesa' )}, 3500)})
  valorPromesaString: string = "valorPromesa = new Promise( (resolve, reject) => { setTimeout(() => { resolve( 'Tenemos data de pronesa' )}, 3500)})"
  ejemplo1promesa: string = `<pre *ngIf="!( valorPromesa | async )" [style]="{ 'text-align' : 'center' }">Resolviendo Promesa</pre>`
  ejemplo2promesa: string = `<pre>{{ valorPromesa | async }}</pre>`
}
