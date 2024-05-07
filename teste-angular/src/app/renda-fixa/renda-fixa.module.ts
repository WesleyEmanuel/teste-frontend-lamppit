import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RendaFixaRoutingModule } from './renda-fixa-routing.module';
import { RendaFixaComponent } from './renda-fixa.component';
import { BalancoGeralCardsComponent } from './components/balanco-geral-cards/balanco-geral-cards.component';


@NgModule({
  declarations: [
    RendaFixaComponent,
    BalancoGeralCardsComponent
  ],
  imports: [
    CommonModule,
    RendaFixaRoutingModule
  ]
})
export class RendaFixaModule { }
