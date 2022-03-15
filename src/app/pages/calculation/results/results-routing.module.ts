import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultsComponent} from "./results.component";
import {ResultsGuard} from "../../../includes/guards/results.guard";

const routes: Routes = [
  {
    path: '',
    component: ResultsComponent,
    canActivate: [ResultsGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule {}
