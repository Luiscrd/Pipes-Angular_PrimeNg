import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent {

ventasNetas: number = 3256789.5567;
porcentaje: number = 0.4856;
ejemploNumero: string = '{{ 3256789.5567 | number }}';
ejemploNumeroDecimal: string = "{{ 3256789.5567 | number'1.2-2' }}";
ejemploNumeroMoneda: string = "{{ 3256789.5567 | currency:'€' }}";
ejemploNumeroPorcentaje: string = "{{ 0.4856 | percent }}";
ejemploNumeroPorcentaje2: string = "{{ 0.4856 | percent'2.22' }}";

}
