import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormComponent} from "./form.component";
import {ParameterResolver} from "../../../includes/resolvers/parameter.resolver";

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
    resolve: {
      parameters: ParameterResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
