import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RendaFixaRoutingModule } from './renda-fixa-routing.module';
import { RendaFixaComponent } from './renda-fixa.component';
import { BalancoGeralCardsComponent } from './components/balanco-geral-cards/balanco-geral-cards.component';
import { MinhasRendasFixasTableComponent } from './components/minhas-rendas-fixas-table/minhas-rendas-fixas-table.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RendaFixaComponent,
    BalancoGeralCardsComponent,
    MinhasRendasFixasTableComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RendaFixaRoutingModule,
    TableModule
  ]
})
export class RendaFixaModule { }
