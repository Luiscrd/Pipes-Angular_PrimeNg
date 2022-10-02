import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '03-gifsApp';
  nombre: string = 'Luis Carballo';
  value: number = 1000;
  obj = {
    nombre: 'Luis'
  }

  cambiar(){

    console.log(this.nombre);
    console.log(this.value);
    console.log(this.obj);


  }

}
