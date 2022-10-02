import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ],
  imports: [
    PrimeNgModule
  ]
})
export class SharedModule { }
