import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormsService} from "../../../includes/stores/forms/forms.service";
import {Subscription} from "rxjs";
import {WageCalculationService} from "../../../includes/services/wage-calculation.service";
import {ResultsService} from "../../../includes/stores/results/results.service";
import {v4 as uuidv4} from 'uuid';
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnDestroy {
  calculationSubscription: Subscription;
  storeSubscription: Subscription;
  isDisabledForms: boolean = false;
  isDisabledButton: boolean = false;
  isLoading: boolean = false;

  currentForm: any;

  constructor(private formsService: FormsService,
              private resultsService: ResultsService,
              private wageCalculationService: WageCalculationService,
              private router: Router) { }

  sendForm() {
    this.isLoading = true;
    this.isDisabledForms = true;
    this.calculationSubscription = this.wageCalculationService.calculate(this.currentForm)
      .subscribe(results => {
        const _id = uuidv4();
        this.resultsService.add({
          _id: _id,
          form_data: this.currentForm,
          calculation_results: results
        });
        this.resultsService.setActive(_id);
        this.router.navigate(['calculation/results'])
          .then(() => {
            this.isLoading = false;
            this.isDisabledForms = false;
          });
      });
  }

  ngOnInit(): void {
    this.storeSubscription = this.formsService.getForms$()
      .subscribe(
        forms => {
          this.isDisabledButton = !(forms.meta && forms.wage);
          this.currentForm = {
            meta: forms.meta,
            wage: forms.wage
          };
        }
      )
  }

  ngOnDestroy() {
    if(this.storeSubscription) {
      this.storeSubscription.unsubscribe();
    }
    if(this.calculationSubscription) {
      this.calculationSubscription.unsubscribe();
    }
    this.formsService.reset();
  }
}
