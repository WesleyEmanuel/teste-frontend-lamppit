import { Component, OnInit } from '@angular/core';
import { RendaFixaService } from './renda-fixa.service';
import { Subscription } from 'rxjs';
import { RendasFixas } from './models/RendasFixas';

@Component({
  selector: 'app-renda-fixa',
  templateUrl: './renda-fixa.component.html',
  styleUrl: './renda-fixa.component.scss'
})
export class RendaFixaComponent implements OnInit{
    rendasFixas!: RendasFixas;

    subscriptions: Subscription[] = [];
  
    constructor(private rendaFixaService: RendaFixaService) { }
  
    ngOnInit() {
      this.getRendasFixas();
    }

    getRendasFixas(){
      const sub = this.rendaFixaService.getRendasFixas().subscribe({
        next: (resp) => {
          if(resp.success){
            this.rendasFixas = resp.data;
          }
        },
        error: (error) => console.log(error)
      });

      this.subscriptions.push(sub);
    }

    ngOnDestroy() {
      this.subscriptions.forEach((sub) => sub.unsubscribe());
    }
}
