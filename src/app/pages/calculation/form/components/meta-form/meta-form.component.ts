import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {FormsService} from "../../../../../includes/stores/forms/forms.service";
import {ParametersService} from "../../../../../includes/stores/parameters/parameters.service";

@Component({
  selector: 'meta-form',
  templateUrl: './meta-form.component.html'
})
export class MetaFormComponent implements OnInit, OnDestroy, OnChanges {
  @Input() isDisabled: boolean;

  subscription: Subscription;

  calculation_types: { name: string, value: string }[];
  years: string[];

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private formsService: FormsService,
              private parametersService: ParametersService) {}

  startSubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.form.valueChanges.subscribe((data: any) => {
      if (this.form.valid) {
        this.formsService.updateMeta(data);
      } else {
        this.formsService.updateMeta(null);
      }
    });
  }

  ngOnInit(): void {
    this.calculation_types = [
      {name: 'Brütten Nete', value: 'gross2net'},
      {name: 'Netten Brüte', value: 'net2gross'}
    ];
    this.years = this.parametersService.getYears();
    this.form = this.fb.group({
      type: ['', Validators.required],
      year: ['', Validators.required]
    });
    this.form.patchValue({
      type: this.calculation_types[0].value,
      year: this.years[0],
    });
    this.startSubscription();
    this.formsService.updateMeta(this.form.value);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes['isDisabled']) {
      if(changes['isDisabled']['currentValue'] === true) {
        for(const control in this.form.controls) {
          this.form.controls[control].disable();
        }
      }
    }
  }
}
