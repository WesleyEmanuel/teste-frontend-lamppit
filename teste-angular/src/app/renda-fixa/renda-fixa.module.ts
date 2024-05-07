import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RendaFixaRoutingModule } from './renda-fixa-routing.module';
import { RendaFixaComponent } from './renda-fixa.component';


@NgModule({
  declarations: [
    RendaFixaComponent
  ],
  imports: [
    CommonModule,
    RendaFixaRoutingModule
  ]
})
export class RendaFixaModule { }
