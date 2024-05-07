import { Component, Input, OnInit } from '@angular/core';
import { RendasFixas } from '../../models/RendasFixas';

@Component({
  selector: 'app-minhas-rendas-fixas-table',
  templateUrl: './minhas-rendas-fixas-table.component.html',
  styleUrl: './minhas-rendas-fixas-table.component.scss'
})
export class MinhasRendasFixasTableComponent implements OnInit{
  @Input() rendasFixas!: RendasFixas;

  search: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  filteredRendasFixas(filter: string): RendasFixas[] {
    if(filter){
      return this.rendasFixas.snapshotByProduct.filter((rendaFixa: any) => {
        return rendaFixa.fixedIncome.name.toLowerCase().includes(filter.toLowerCase());
      })
    }

    return this.rendasFixas.snapshotByProduct;
  }
}
