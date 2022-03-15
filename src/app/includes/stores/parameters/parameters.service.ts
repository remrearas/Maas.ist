import {Injectable} from "@angular/core";
import {ParametersStore} from "./parameters.store";
import {ParametersQuery} from "./parameters.query";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Parameter} from "./parameters.model";

@Injectable()
export class ParametersService {
  constructor(private http: HttpClient,
              private store: ParametersStore,
              private query: ParametersQuery) {}

  resolve(): Observable<Parameter[]> {
    return this.get()
      .pipe(
        tap((data: Parameter[]) => this.set(data))
      );
  }

  get(): Observable<Parameter[]> {
    return this.http.get('assets/parameters.json') as Observable<Parameter[]>;
  }

  set(data: Parameter[]): void {
    this.store.set(data);
  }

  getYears(): string[] {
    return this.store.getValue().ids;
  }

  getYear(year: string) {
    return this.query.selectEntity(year);
  }

}
