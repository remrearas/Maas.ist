import {Injectable} from "@angular/core";
import {ParametersService} from "../stores/parameters/parameters.service";
import {Parameter} from "../stores/parameters/parameters.model";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Observable} from "rxjs";

@Injectable()
export class ParameterResolver implements Resolve<Parameter[]> {
  constructor(private service: ParametersService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Parameter[]> {
    return this.service.resolve();
  }

}
