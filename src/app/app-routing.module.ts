import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'calculation/form',
    loadChildren: () => import('./pages/calculation/form/form.module').then(m => m.FormModule)
  },
  {
    path: 'calculation/results',
    loadChildren: () => import('./pages/calculation/results/results.module').then(m => m.ResultsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
