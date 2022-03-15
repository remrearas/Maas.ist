import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormComponent} from "./form.component";
import {FormRoutingModule} from "./form-routing.module";
import {ParameterResolver} from "../../../includes/resolvers/parameter.resolver";
import {ParametersService} from "../../../includes/stores/parameters/parameters.service";
import {ParametersStore} from "../../../includes/stores/parameters/parameters.store";
import {ParametersQuery} from "../../../includes/stores/parameters/parameters.query";
import {FormsService} from "../../../includes/stores/forms/forms.service";
import {FormsQuery} from "../../../includes/stores/forms/forms.query";
import {FormsStore} from "../../../includes/stores/forms/forms.store";
import {MetaFormComponent} from "./components/meta-form/meta-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SelectButtonModule} from "primeng/selectbutton";
import {DropdownModule} from "primeng/dropdown";
import {WageFormComponent} from "./components/wage-form/wage-form.component";
import {InputTextModule} from "primeng/inputtext";
import {CurrencyMaskModule} from "ng2-currency-mask";
import {ButtonModule} from "primeng/button";
import {WageCalculationService} from "../../../includes/services/wage-calculation.service";

@NgModule({
  declarations: [
    FormComponent,
    MetaFormComponent,
    WageFormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    SelectButtonModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
  ],
  providers: [
    ParameterResolver,
    ParametersService,
    ParametersStore,
    ParametersQuery,
    FormsService,
    FormsStore,
    FormsQuery,
    WageCalculationService
  ]
})
export class FormModule { }
