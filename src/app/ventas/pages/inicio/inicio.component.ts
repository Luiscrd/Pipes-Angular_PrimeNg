import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public pipes!: any[];

  ngOnInit() {
      this.pipes = [
          { name: 'AsyncPipe', link: 'https://angular.io/api/common/AsyncPipe', descrip: 'Desenvuelve un valor de una primitiva asincrónica.' },
          { name: 'CurrencyPipe', link: 'https://angular.io/api/common/CurrencyPipe', descrip: 'Transforma un número en una cadena de moneda, con formato de acuerdo con las reglas de configuración regional que determinan el tamaño y el separador de grupo, el carácter de punto decimal y otras configuraciones específicas de la configuración regional.' },
          { name: 'DatePipe', link: 'https://angular.io/api/common/DatePipe', descrip: 'Da formato a un valor de fecha según las reglas de configuración regional.' },
          { name: 'DecimalPipe', link: 'https://angular.io/api/common/DecimalPipe', descrip: 'Da formato a un valor según las opciones de dígitos y las reglas de configuración regional. La configuración regional determina el tamaño y el separador de grupo, el carácter de punto decimal y otras configuraciones específicas de la configuración regional.' },
          { name: 'I18nPluralPipe', link: 'https://angular.io/api/common/I18nPluralPipe', descrip: 'Asigna un valor a una cadena que pluraliza el valor según las reglas de configuración regional.' },
          { name: 'I18nSelectPipe', link: 'https://angular.io/api/common/I18nSelectPipe', descrip: 'Selector genérico que muestra la cadena que coincide con el valor actual.' },
          { name: 'JsonPipe', link: 'https://angular.io/api/common/JsonPipe', descrip: 'Convierte un valor en su representación en formato JSON. Útil para la depuración.' },
          { name: 'KeyValuePipe', link: 'https://angular.io/api/common/KeyValuePipe', descrip: 'Transforma Objeto o Mapa en una matriz de pares de valores clave.' },
          { name: 'LowerCasePipe', link: 'https://angular.io/api/common/LowerCasePipe', descrip: 'Transforma el texto en minúsculas.' },
          { name: 'PercentPipe', link: 'https://angular.io/api/common/PercentPipe', descrip: 'Transforma un número en una cadena de porcentaje, con formato de acuerdo con las reglas de configuración regional que determinan el tamaño y el separador de grupo, el carácter de punto decimal y otras configuraciones específicas de la configuración regional.' },
          { name: 'SlicePipe', link: 'https://angular.io/api/common/SlicePipe', descrip: 'Crea una nueva matriz o cadena que contiene un subconjunto (segmento) de los elementos.' },
          { name: 'TitleCasePipe', link: 'https://angular.io/api/common/TitleCasePipe', descrip: 'Transforma el texto en mayúsculas y minúsculas de título. Pone en mayúscula la primera letra de cada palabra y transforma el resto de la palabra en minúsculas. Las palabras están delimitadas por cualquier carácter de espacio en blanco, como un espacio, una pestaña o un carácter de alimentación de línea.' },
          { name: 'UpperCasePipe', link: 'https://angular.io/api/common/UpperCasePipe', descrip: 'Transforma el texto en mayúsculas.' },
      ];
  }

}
