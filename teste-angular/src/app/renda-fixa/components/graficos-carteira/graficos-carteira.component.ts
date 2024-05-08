import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficos-carteira',
  templateUrl: './graficos-carteira.component.html',
  styleUrl: './graficos-carteira.component.scss',
})
export class GraficosCarteiraComponent implements OnInit {
  @Input() carteira: any;
  @Input() tiposProduto: any;

  carteiraTiposdata: any;
  carteiraTiposoptions: any;

  carteiraTitulodata: any;
  carteiraTitulooptions: any;

  ngOnInit() {
    this.gerarGraficoCarteiraTipos();
    this.gerarGraficoCarteiraTitulo();
  }

  gerarGraficoCarteiraTipos() {
    let tipos = this.carteira.map(
      (item: any) =>
        this.tiposProduto.find((product: any) => {
          return (
            product.fixedIncome.portfolioProductId == item.portfolioProductId
          );
        }).fixedIncome.bondType
    );
    let noRepTipos = tipos.filter(
      (item: any, index: any) => tipos.indexOf(item) === index
    );

    this.carteiraTiposdata = {
      labels: noRepTipos,
      datasets: [
        {
          data: noRepTipos.map((tipo: any) => {
            return tipos.filter((productTipo: any) => productTipo == tipo)
              .length;
          }),
          backgroundColor: ['#FF8052', '#9E51BA', '#0DD1E3'],
        },
      ],
    };

    this.carteiraTiposoptions = {
      cutout: '60%',
      plugins: {
        legend: {
          position: 'bottom',
          align: 'start',
          labels: {
            color: '#888',
          },
        },
      },
    };
  }

  gerarGraficoCarteiraTitulo() {
    let titulos = this.carteira.map((product: any) => product.productName);
    let noRepTitulos = titulos.filter(
      (item: any, index: any) => titulos.indexOf(item) === index
    );

    this.carteiraTitulodata = {
      labels: noRepTitulos,
      datasets: [
        {
          data: noRepTitulos.map((titulo: any) => {
            return this.carteira.filter(
              (product: any) => product.productName == titulo
            ).length;
          }),
          backgroundColor: ['#FF8052', '#9E51BA', '#0DD1E3'],
        },
      ],
    };

    this.carteiraTitulooptions = {
      cutout: '60%',
      plugins: {
        legend: {
          position: 'bottom',
          align: 'start',
          labels: {
            color: '#888',
          },
        },
      },
    };
  }
}
