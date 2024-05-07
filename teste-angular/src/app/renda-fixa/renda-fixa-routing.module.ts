import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RendaFixaComponent } from './renda-fixa.component';

const routes: Routes = [
  {
    path: '',
    component: RendaFixaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RendaFixaRoutingModule { }
