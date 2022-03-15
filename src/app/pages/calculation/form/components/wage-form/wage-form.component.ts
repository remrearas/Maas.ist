import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import {Subscription} from "rxjs";
import {get_period_name} from "../../../../../includes/helpers/period";
import {FormsService} from "../../../../../includes/stores/forms/forms.service";

@Component({
  selector: 'wage-form',
  templateUrl: './wage-form.component.html'
})
export class WageFormComponent implements OnInit, OnDestroy, OnChanges {
  @Input() isDisabled: boolean;

  subscription: Subscription;

  selected: { name: string, value: string };
  wage_types: { name: string, value: string }[];

  form: FormGroup;
  get_period_name = get_period_name;

  validateNonZero(c: FormControl) {
    return c.value != 0 ? null : {
      validateNonZero: {
        valid: false
      }
    };
  }

  get currentFormArray() {
    return this.form.get('wage_array') as FormArray;
  }

  selectMonthly() {
    this.form = this.fb.group({
      wage: [{value: '', disabled: this.isDisabled}, [Validators.required, this.validateNonZero]]
    });
    this.formsService.updateWage(null);
    this.startSubscription();
  }

  selectHourly() {
    this.form = this.fb.group({
      hourly_wage: [{value: '', disabled: this.isDisabled}, [Validators.required, this.validateNonZero]],
      working_hour: [{value: '', disabled: this.isDisabled}, [Validators.required, this.validateNonZero]]
    });
    this.formsService.updateWage(null);
    this.startSubscription();
  }

  selectMonthlyExtended() {
    this.form = this.fb.group({
      wage_array: this.fb.array([], Validators.required)
    });
    const formArray = this.form.get('wage_array') as FormArray;
    for (let i of [...Array(12).keys()]) {
      formArray.insert(i, new FormControl('', [Validators.required, this.validateNonZero]));
    }
    this.formsService.updateWage(null);
    this.startSubscription();
  }

  selectHourlyExtended() {
    this.form = this.fb.group({
      wage_array: this.fb.array([], Validators.required)
    });
    const formArray = this.form.get('wage_array') as FormArray;
    for (let i of [...Array(12).keys()]) {
      const form_group = this.fb.group({
        wage: ['', [Validators.required, this.validateNonZero]],
        working_hour: ['', [Validators.required, this.validateNonZero]]
      });
      formArray.insert(i, form_group);
    }
    this.formsService.updateWage(null);
    this.startSubscription();
  }

  onChange(e) {
    const wage_type = e.value;
    switch(wage_type.value) {
      case 'monthly':
        this.selectMonthly();
        break;
      case 'hourly':
        this.selectHourly()
        break;
      case 'monthly-extended':
        this.selectMonthlyExtended()
        break;
      case 'hourly-extended':
        this.selectHourlyExtended()
        break;
    }
  }

  formatForms(data: any): any[] {
    let arr = [];
    switch(this.selected.value) {
      case 'monthly':
        for (let i of [...Array(12).keys()]) {
          arr.push(data.wage);
        }
        break;
      case 'hourly':
        for (let i of [...Array(12).keys()]) {
          arr.push(data.hourly_wage * data.working_hour);
        }
        break;
      case 'monthly-extended':
        arr = data.wage_array;
        break;
      case 'hourly-extended':
        for (let i of [...Array(12).keys()]) {
          arr[i] = data.wage_array[i].wage * data.wage_array[i].working_hour;
        }
        break;
    }
    return arr;
  }

  startSubscription() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.form.valueChanges.subscribe((data: any) => {
      if (this.form.valid) {
        this.formsService.updateWage(this.formatForms(data));
      } else {
        this.formsService.updateWage(null);
      }
    });
  }

  constructor(private fb: FormBuilder, private formsService: FormsService) {
    this.onChange = this.onChange.bind(this);
  }

  ngOnInit(): void {
    this.wage_types = [
      {name: 'Aylık Maaş Girişi', value: 'monthly'},
      {name: 'Saatlik Maaş Girişi', value: 'hourly'},
      {name: 'Aylık Detaylı Maaş Girişi', value: 'monthly-extended'},
      {name: 'Saatlik Detaylı Maaş Girişi', value: 'hourly-extended'}
    ];
    this.selected = this.wage_types[0];
    this.selectMonthly();
    this.startSubscription();
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
