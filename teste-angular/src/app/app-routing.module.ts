import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'renda-fixa',
    pathMatch: 'full'
  },
  {
    path: 'renda-fixa',
    loadChildren: () => import('./renda-fixa/renda-fixa.module').then(m => m.RendaFixaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
