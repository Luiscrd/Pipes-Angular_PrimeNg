import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  fecha: any = new Date();
  texto: string = 'texto mostrar';
  ejemploUpper: string = "{{ 'texto mostrar' | upercase }}";
  ejemploLower: string = "{{ 'TEXTO MOSTRAR' | lowercase }}";
  ejemploTitle: string = "{{ 'texto mostrar' | titlecase }}";
  ejemploDate: string = "{{ 'new Date' | date }}";
  ejemploDateSort: string = "{{ 'new Date' | date'sort' }}";
  ejemploDateSort2: string = "{{ 'new Date' | date'dd / MM / yyyy, hh:mm a' }}";


}
