import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResultsRoutingModule} from "./results-routing.module";
import {ResultsGuard} from "../../../includes/guards/results.guard";
import {ResultsComponent} from "./results.component";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TooltipModule} from "primeng/tooltip";
import {DialogModule} from "primeng/dialog";

@NgModule({
  declarations: [
    ResultsComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    TableModule,
    ButtonModule,
    RippleModule,
    TooltipModule,
    DialogModule
  ],
  providers: [
    ResultsGuard
  ]
})
export class ResultsModule { }
