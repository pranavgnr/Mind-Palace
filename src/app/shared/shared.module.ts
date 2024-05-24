import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TilesComponent } from './tiles/tiles.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    TilesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    TilesComponent
  ]
})
export class SharedModule { }
