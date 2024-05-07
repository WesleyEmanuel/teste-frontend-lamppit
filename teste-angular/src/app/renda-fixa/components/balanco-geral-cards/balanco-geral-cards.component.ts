import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BalancoGeral } from '../../models/BalancoGeral';

@Component({
  selector: 'app-balanco-geral-cards',
  templateUrl: './balanco-geral-cards.component.html',
  styleUrl: './balanco-geral-cards.component.scss'
})
export class BalancoGeralCardsComponent implements OnInit, OnChanges{
  @Input() balancoGeral!: BalancoGeral;

  cards: any;

  constructor() {
    
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.cards = [
      {
        label: 'SALDO BRUTO',
        value: Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
          this.balancoGeral.equity
        ),
      },
      {
        label: 'Valor Aplicado',
        value: Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
          this.balancoGeral.valueApplied
        )
      },
      {
        label: 'Resultado',
        value: Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
          this.balancoGeral.equityProfit
        )
      },
      {
        label: 'Rentabilidade',
        value: `${this.balancoGeral.percentageProfit.toLocaleString()}%`,
      },
      {
        label: 'CDI',
        value: `${this.balancoGeral.indexerValue.toLocaleString()}%`,
      },
      {
        label: '% sobre CDI',
        value: `${this.balancoGeral.percentageOverIndexer.toLocaleString()}%`,
      }
    ];
  }
}
