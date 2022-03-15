import {Injectable} from "@angular/core";
import {WageCalculator} from "./wage-calculator";
import {map, Observable} from "rxjs";
import {ParametersService} from "../stores/parameters/parameters.service";
import {Parameter} from "../stores/parameters/parameters.model";
import {CalculationResults} from "../stores/results/results.model";

@Injectable()
export class WageCalculationService {

  constructor(private parametersService: ParametersService) {}

  static gross2net(parameters: Parameter, wage_array: number[]): CalculationResults[] {
    const calculator = new WageCalculator(parameters);
    return wage_array.map(
      (element, index) => calculator.bruttenNeteHesapla(element, index + 1)
    ) as CalculationResults[];
  }

  static net2gross(parameters: Parameter, wage_array: number[]): CalculationResults[] {
    const calculator = new WageCalculator(parameters);
    return wage_array.map(
      (element, index) => calculator.nettenBruteHesapla(element, index + 1)
    ) as CalculationResults[];
  }

  calculate(form_data: {meta: any; wage:number[];}): Observable<CalculationResults[]> {
    const {meta, wage} = form_data;
    return this.parametersService.getYear(meta.year)
      .pipe(
        map(
          (parameter: Parameter): any => {
            if (meta.type === 'gross2net') {
              return WageCalculationService.gross2net(parameter, wage);
            }
            if (meta.type === 'net2gross') {
              return WageCalculationService.net2gross(parameter, wage);
            }
          }
        )
      )
  }
}
