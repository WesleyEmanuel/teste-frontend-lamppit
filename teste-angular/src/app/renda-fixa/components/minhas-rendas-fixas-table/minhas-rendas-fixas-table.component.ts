import { Component, Input, OnInit } from '@angular/core';
import { RendasFixas } from '../../models/RendasFixas';

@Component({
  selector: 'app-minhas-rendas-fixas-table',
  templateUrl: './minhas-rendas-fixas-table.component.html',
  styleUrl: './minhas-rendas-fixas-table.component.scss',
})
export class MinhasRendasFixasTableComponent implements OnInit {
  @Input() rendasFixas!: RendasFixas;

  search: string = '';

  listOrder: '1' | '2' | '3' = '1';

  filterAndOrderRendasFixas: any;

  constructor() {}

  ngOnInit(): void {
    this.filterAndOrderRendasFixas = this.rendasFixas.snapshotByProduct;
  }

  filteredRendasFixas() {
    if (this.search) {
      this.filterAndOrderRendasFixas =
        this.rendasFixas.snapshotByProduct.filter((rendaFixa: any) => {
          return rendaFixa.fixedIncome.name
            .toLowerCase()
            .includes(this.search.toLowerCase());
        });
    } else {
      this.filterAndOrderRendasFixas = this.rendasFixas.snapshotByProduct;
    }

    switch (this.listOrder) {
      case '2':
        this.filterAndOrderRendasFixas.sort((a: any, b: any) => {
          if (a.fixedIncome.name < b.fixedIncome.name) {
            return -1;
          }
          if (a.fixedIncome.name > b.fixedIncome.name) {
            return 1;
          }
          return 0;
        });

        break;

      case '3':
        this.filterAndOrderRendasFixas.sort((a: any, b: any) => {
          let dateA = a.due.date.split('/').reverse().join('-');

          let dateB = b.due.date.split('/').reverse().join('-');

          if (dateA < dateB) {
            return -1;
          }
          if (dateA > dateB) {
            return 1;
          }
          return 0;
        });

        break;

      default:
        break;
    }
  }
}
