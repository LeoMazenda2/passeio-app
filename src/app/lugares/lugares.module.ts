import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LugaresRoutingModule } from './lugares-routing.module';
import { LugareComponent } from './lugare/lugare.component';
import { LugarComponent } from './lugar/lugar.component';


@NgModule({
  declarations: [
    LugareComponent,
    LugarComponent
  ],
  imports: [
    CommonModule,
    LugaresRoutingModule
  ]
})
export class LugaresModule { }
