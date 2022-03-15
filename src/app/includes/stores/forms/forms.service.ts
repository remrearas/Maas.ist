import {Injectable} from "@angular/core";
import {FormsStore} from "./forms.store";
import {FormsQuery} from "./forms.query";
import {Observable} from "rxjs";

@Injectable()
export class FormsService {
  constructor(private store: FormsStore, private query: FormsQuery) {}
  getForms$(): Observable<{meta: any, wage: any}> {
    return this.query.select(['meta', 'wage']);
  }
  updateMeta(data: { type: string, year: string } | null) {
    this.update({meta: data});
  }
  updateWage(data: number[] | null) {
    this.update({wage: data})
  }
  update(data: any) {
    this.store.update(data);
  }
}
