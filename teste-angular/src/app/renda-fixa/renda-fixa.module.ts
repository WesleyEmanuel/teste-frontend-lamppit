import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RendaFixaRoutingModule } from './renda-fixa-routing.module';
import { RendaFixaComponent } from './renda-fixa.component';
import { BalancoGeralCardsComponent } from './components/balanco-geral-cards/balanco-geral-cards.component';
import { MinhasRendasFixasTableComponent } from './components/minhas-rendas-fixas-table/minhas-rendas-fixas-table.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { GraficosCarteiraComponent } from './components/graficos-carteira/graficos-carteira.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  declarations: [
    RendaFixaComponent,
    BalancoGeralCardsComponent,
    MinhasRendasFixasTableComponent,
    GraficosCarteiraComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RendaFixaRoutingModule,
    TableModule,
    ChartModule,
  ],
})
export class RendaFixaModule {}
