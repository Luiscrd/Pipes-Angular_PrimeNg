import { NgModule } from '@angular/core';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './pages/inicio/inicio.component';
import {TableModule} from 'primeng/table';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VolText } from './pipes/voltear.pipe';
import { CamelCasePipe } from './pipes/camel.pipe';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ActivoPipe } from './pipes/activo.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { MayusTablaPipe } from './pipes/mayusTabla.pipe';


@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    InicioComponent,
    MayusculasPipe,
    VolText,
    CamelCasePipe,
    ActivoPipe,
    OrdenarPipe,
    MayusTablaPipe
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,

  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    ToolbarModule,
    SplitButtonModule
  ],
})
export class VentasModule { }
